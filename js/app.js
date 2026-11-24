(function () {
  const PROJECTS = window.GREGS_PROJECTS;
  const CHIPS = [
    "The deck feels like a trampoline",
    "Toilet rocks and I'm choosing violence",
    "Can I hang a TV without drilling a pipe",
    "Backsplash this weekend or am I cooked",
    "Water heater sounds like a dying whale",
    "They quoted the fence like it's a car",
    "Disposal hums and refuses to spin",
    "Should I pay someone to hang a ceiling fan"
  ];
  const FILTERS = ["All", "Plumbing", "Electric", "Interior", "Exterior", "Structure"];
  const PATHS = {
    diy: { kicker: "Put in the work and spend your Saturday sweatin.", name: "DIY Guide + Materials Needed" },
    split: { kicker: "You hire a helper. The part that would stall you for two months is theirs.", name: "Split it" },
    pro: { kicker: "They do it all. It stays a weekend. You are not living in the job site.", name: "Call a guy" }
  };
  const STAMPS = { diy: "Send it", split: "Split it", pro: "Call a guy" };

  const state = {
    filter: "All",
    query: "",
    projectId: null,
    leadKey: "default",
    play: "split",
    picks: {},
    plays: {},
    faqs: {},
    bench: loadBench(),
    mode: "home",
    choices: [],
    shrugQuery: "",
    focusHeading: false,
    keepScroll: false
  };

  const homeEl = document.getElementById("home");
  const workEl = document.getElementById("work");
  const boardEl = document.getElementById("board");
  const filtersEl = document.getElementById("filters");
  const chipsEl = document.getElementById("chips");
  const askForm = document.getElementById("ask-form");
  const askInput = document.getElementById("ask-input");
  const suggestEl = document.getElementById("suggest");
  const benchCount = document.getElementById("bench-count");
  const benchDialog = document.getElementById("bench-dialog");
  const benchBody = document.getElementById("bench-body");

  document.getElementById("issue-date").textContent = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  function loadBench() {
    try {
      const raw = JSON.parse(localStorage.getItem("gregs-list-bench") || "[]");
      return Array.isArray(raw) ? raw : [];
    } catch (err) {
      return [];
    }
  }

  function saveBench() {
    try {
      localStorage.setItem("gregs-list-bench", JSON.stringify(state.bench));
    } catch (err) {
      /* private mode can refuse the bench; the page still works */
    }
    benchCount.textContent = String(state.bench.length);
  }

  function projectById(id) {
    return PROJECTS.find((project) => project.id === id);
  }

  function esc(value) {
    return String(value).replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[ch]));
  }

  function includesTerm(query, term) {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(?:^|[^a-z0-9])${escaped}(?:[^a-z0-9]|$)`, "i").test(query);
  }

  function score(project, query) {
    const q = query.toLowerCase().trim();
    if (!q) return 0;
    let total = 0;
    project.aliases.forEach((alias) => {
      const term = alias.toLowerCase();
      if (term.length < 2 || !includesTerm(q, term)) return;
      total += term.includes(" ") ? 8 : Math.max(4, term.length / 2);
    });
    if (includesTerm(q, project.title.toLowerCase())) total += 8;
    return total;
  }

  function rank(query) {
    return PROJECTS
      .map((project) => ({ project, score: score(project, query) }))
      .filter((row) => row.score > 0)
      .sort((a, b) => b.score - a.score);
  }

  function money(amount) {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    });
  }

  function range(pair) {
    if (!pair) return "";
    if (pair[0] === pair[1]) return money(pair[0]);
    return `${money(pair[0])}–${money(pair[1])}`;
  }

  function ensurePicks(project) {
    if (state.picks[project.id]) return;
    state.picks[project.id] = {};
    project.segments.forEach((segment) => {
      state.picks[project.id][segment.id] = segment.lock || segment.pick;
    });
  }

  function whoFor(project, segment, mode) {
    if (segment.lock) return segment.lock;
    if (mode === "diy") return "you";
    const picks = state.picks[project.id] || {};
    return picks[segment.id] || segment.pick;
  }

  function estimate(project, mode) {
    if (mode === "pro") return project.pro.slice();
    const total = project.materials.slice();
    project.segments.forEach((segment) => {
      const who = whoFor(project, segment, mode);
      const add = who === "hire" ? segment.hire : segment.you;
      total[0] += add[0];
      total[1] += add[1];
    });
    return total;
  }

  function tally(project) {
    const counts = { you: 0, hire: 0 };
    project.segments.forEach((segment) => {
      counts[whoFor(project, segment, "split")] += 1;
    });
    return counts;
  }

  function detectPlay(query) {
    const q = query.toLowerCase();
    if (/split|helper|handyman|segment|chunks/.test(q)) return "split";
    if (/hire|contractor|quote|call a (guy|pro)|pay someone|paying someone/.test(q)) return "pro";
    if (/\bdiy\b|myself|do it myself|can i/.test(q)) return "diy";
    return null;
  }

  function detectKey(query) {
    const q = query.toLowerCase();
    if (/how much|cost|price|expensive|\$|ballpark|quoted/.test(q)) return "cost";
    if (/how long|weekend|saturday|how many hours/.test(q)) return "time";
    if (/hire|contractor|pay someone|who do i call|quote/.test(q)) return "hire";
    if (/\bdiy\b|myself|can i/.test(q)) return "diy";
    return "default";
  }

  function splitCopy(project, splitTotal, proTotal) {
    const counts = tally(project);
    const splitMid = (splitTotal[0] + splitTotal[1]) / 2;
    const proMid = (proTotal[0] + proTotal[1]) / 2;
    if (counts.hire === 0) {
      return "Every chunk is yours. This is DIY with a clipboard. Own it.";
    }
    if (counts.you === 0) {
      return "You hired every chunk and kept the group text. At that point you're the general contractor, and the general contractor is tired.";
    }
    const saved = Math.round(proMid - splitMid);
    if (saved < 80) {
      return "This split is basically the same money as handing over the whole job. Do it if you want control. If you want easy, hire the circus and skip being the ringleader.";
    }
    const rounded = saved < 200 ? Math.round(saved / 10) * 10 : Math.round(saved / 50) * 50;
    const chunk = (count) => `${count} chunk${count === 1 ? "" : "s"}`;
    return `You're doing ${chunk(counts.you)} and hiring ${chunk(counts.hire)}. About ${money(rounded)} under a full hire, if you actually buy the materials and the ranges survive contact with your zip code.`;
  }

  function isBigJob(project) {
    return project.beers >= 3 || project.recommended !== "diy";
  }

  function diyBlurb(project) {
    const big = isBigJob(project);
    const slip = big
      ? "This is a bigger job. If it does not go perfectly, that one weekend is a half-finished project for a month or two, and your wife is pissed."
      : "If it does not go perfectly, the Saturday stretches into a half-done project, and your wife is pissed.";
    const locked = project.segments.some((segment) => segment.lock === "hire");
    if (locked) return `You buy the materials and do the rest yourself. ${slip} The parts that can hurt you stay hired.`;
    return `You buy the materials and do all the work yourself. ${slip}`;
  }

  function visibleProjects() {
    const inCategory = PROJECTS.filter((project) => state.filter === "All" || project.category === state.filter);
    const query = state.query.trim();
    if (!query) return inCategory;
    const matched = inCategory.filter((project) => score(project, query) > 0);
    return matched.length ? matched : inCategory;
  }

  function renderFilters() {
    filtersEl.innerHTML = FILTERS.map((name) => (
      `<button class="filter" type="button" data-filter="${esc(name)}" aria-pressed="${state.filter === name}">${esc(name)}</button>`
    )).join("");
  }

  function renderChips() {
    chipsEl.innerHTML = CHIPS.map((chip) => (
      `<button class="chip" type="button" data-chip="${esc(chip)}">${esc(chip)}</button>`
    )).join("");
  }

  function renderBoard() {
    const list = visibleProjects();
    if (!list.length) {
      boardEl.innerHTML = `<div class="empty-board"><strong>Nothing on the board matches that.</strong><p>Hit get the read. Greg will squint at it professionally.</p></div>`;
      return;
    }
    boardEl.innerHTML = list.map((project) => `
      <button class="tag" type="button" data-open="${esc(project.id)}">
        <span class="tag-cat">${esc(project.category)}</span>
        <h3>${esc(project.title)}</h3>
        <p>${esc(project.blurb)}</p>
        <span class="tag-meta">
          <span>${project.beers} beer${project.beers === 1 ? "" : "s"} · ${esc(project.time)}</span>
          <span class="stamp-mini">${esc(STAMPS[project.recommended])}</span>
        </span>
      </button>
    `).join("");
  }

  function renderSuggestion() {
    const query = state.query.trim();
    if (!query) {
      suggestEl.hidden = true;
      suggestEl.innerHTML = "";
      return;
    }
    const ranked = rank(query);
    if (!ranked.length || ranked[0].score < 4) {
      suggestEl.hidden = true;
      suggestEl.innerHTML = "";
      return;
    }
    const top = ranked[0].project;
    suggestEl.hidden = false;
    suggestEl.innerHTML = `Sounds like <button type="button" data-open="${esc(top.id)}">${esc(top.title)}</button>. Hit get the read, or keep going if Greg is wrong.`;
  }

  function pints(count) {
    const glasses = Array.from({ length: 5 }, (_, index) => (
      `<i class="pint${index < count ? " on" : ""}"></i>`
    )).join("");
    return `<span class="pints" aria-hidden="true">${glasses}</span><span class="sr">${count} out of 5 on the beer scale. Five means put the tool down.</span>`;
  }

  function segmentPrice(segment, who) {
    const pair = who === "hire" ? segment.hire : segment.you;
    if (pair[0] === 0 && pair[1] === 0) return who === "hire" ? "On them" : "Your sweat";
    return `+${range(pair)}`;
  }

  function renderSegments(project) {
    const rows = project.segments.map((segment) => {
      const who = whoFor(project, segment, "split");
      const control = segment.lock
        ? `<div class="who is-locked"><span class="locked-pill">${segment.lock === "hire" ? "A guy · welded" : "You · welded"}</span></div>`
        : `<div class="who" role="group" aria-label="Who does ${esc(segment.name)}">
            <button type="button" data-pick="${esc(segment.id)}" data-who="you" aria-pressed="${who === "you"}">You</button>
            <button type="button" data-pick="${esc(segment.id)}" data-who="hire" aria-pressed="${who === "hire"}">A guy</button>
          </div>`;
      const locked = segment.lock ? `<p class="lock-note">${esc(segment.lockReason || "")}</p>` : "";
      return `<article class="seg">
        ${control}
        <div>
          <h3>${esc(segment.name)}</h3>
          <p>${esc(segment.detail)}</p>
          ${locked}
        </div>
        <p class="seg-price">${esc(segmentPrice(segment, who))}</p>
      </article>`;
    }).join("");
    return `${rows}<button class="ghost reset" type="button" data-action="reset-picks">Back to Greg's default</button>`;
  }

  function renderPanel(project) {
    if (state.play === "diy") {
      return `<div class="panel" id="detail">
        <h2>DIY Guide + Materials Needed</h2>
        <p class="path-kicker">Put in the work and spend your Saturday sweatin.</p>
        <p>You buy the materials and do all the work yourself. ${isBigJob(project) ? "This is a bigger job. One snag and the plan is gone." : "Count on something not going to plan."}</p>
        <ul class="tradeoff">
          <li>Sweat on a Saturday</li>
          <li>Half done for 1–2 months if anything goes wrong</li>
          <li>Your wife is pissed</li>
        </ul>
        <p>${esc(project.answers.diy)}</p>
        <h3 class="block-title" style="font-size:1.3rem;margin-top:14px">Materials needed</h3>
        <div class="tools">${project.tools.map((tool) => `<span>${esc(tool)}</span>`).join("")}</div>
        <h3 class="block-title" style="font-size:1.3rem">The guide</h3>
        <ul>${project.moves.map((step) => `<li>${esc(step)}</li>`).join("")}</ul>
      </div>`;
    }
    if (state.play === "pro") {
      return `<div class="panel" id="detail">
        <h2>Call a guy</h2>
        <p class="path-kicker">They do it all.</p>
        <p>${esc(project.answers.hire)}</p>
        <h3 class="block-title" style="font-size:1.3rem;margin-top:14px">Ask this, like you do it for a living</h3>
        <ul>${project.askPro.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
        <p><strong>Sound like you've held a tape measure:</strong> ${esc(project.soundSmart)}</p>
        <h3 class="block-title" style="font-size:1.3rem;margin-top:14px">Red flags</h3>
        <ul>${project.redFlags.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
        ${scriptBlock(project)}
      </div>`;
    }
    const counts = tally(project);
    return `<div class="panel" id="detail">
      <div class="seg-head">
        <h2>Split it</h2>
        <p class="tally">${counts.you} yours · ${counts.hire} hired</p>
      </div>
      <p class="path-kicker">You hire a helper.</p>
      <p>${esc(splitCopy(project, estimate(project, "split"), project.pro))}</p>
      ${renderSegments(project)}
      ${scriptBlock(project)}
    </div>`;
  }

  function scriptBlock(project) {
    return `<div class="script">
      <b class="block-title" style="font-size:1.3rem;color:#f0c14e">Say this part out loud</b>
      <p id="script-text">${esc(project.script)}</p>
      <button class="ghost" type="button" data-action="copy">Copy the script</button>
    </div>`;
  }

  function renderWork(project) {
    ensurePicks(project);
    const diy = estimate(project, "diy");
    const split = estimate(project, "split");
    const pro = estimate(project, "pro");
    const numbers = { diy, split, pro };
    const blurbs = {
      diy: diyBlurb(project),
      split: splitCopy(project, split, pro),
      pro: "They own the outcome, the insurance, and the receipt. You own the questions."
    };
    const pinned = state.bench.some((item) => item.id === project.id);
    const answer = project.answers[state.leadKey] || project.answers.default;
    const cards = ["diy", "split", "pro"].map((id) => `
      <button class="path ${state.play === id ? "is-on" : ""} ${project.recommended === id ? "is-pick" : ""}" type="button" data-play="${id}" aria-pressed="${state.play === id}">
        ${project.recommended === id ? '<span class="ribbon">Greg\'s pick</span>' : ""}
        <strong>${id === "diy" ? "DIY Guide +<br>Materials Needed" : esc(PATHS[id].name)}</strong>
        <span class="path-kicker">${esc(PATHS[id].kicker)}</span>
        <span class="path-price">${range(numbers[id])}</span>
        <span class="path-blurb">${esc(blurbs[id])}</span>
      </button>
    `).join("");
    const faqs = project.faqs.map((faq, index) => {
      const open = Boolean(state.faqs[project.id] && state.faqs[project.id][index]);
      return `<div class="faq">
        <button type="button" data-faq="${index}" aria-expanded="${open}">${esc(faq.q)} <span aria-hidden="true">${open ? "–" : "+"}</span></button>
        ${open ? `<p>${esc(faq.a)}</p>` : ""}
      </div>`;
    }).join("");
    const related = project.related
      .map((id) => projectById(id))
      .filter(Boolean)
      .map((item) => `<button class="chip" type="button" data-open="${esc(item.id)}">${esc(item.title)}</button>`)
      .join("");

    workEl.innerHTML = `<article class="sheet">
      <div class="work-top">
        <button class="ghost" type="button" data-action="home">← The board</button>
        <button class="ghost" type="button" data-action="bench">${pinned ? "Pull off the bench" : "Put it on the bench"}</button>
      </div>
      <p class="kicker-row"><span>${esc(project.category)}</span><span>Work order ${workOrder(project.id)}</span><span>${esc(STAMPS[project.recommended])}</span></p>
      <h1>${esc(project.title)}</h1>
      <p class="deck">${esc(project.blurb)}</p>
      <div class="meter-row">
        <div class="meter"><b>Beer scale</b>${pints(project.beers)}</div>
        <div class="meter"><b>Time</b>${esc(project.time)}</div>
        <div class="meter"><b>Permit</b>${esc(project.permit)}</div>
        <div class="meter"><b>Household forecast</b>${esc(project.forecast)}</div>
      </div>
      <p class="read ${state.mode === "flash" ? "flash" : ""}">${esc(answer)}</p>
      <div class="callouts">
        <aside class="callout ego"><b>The ego trap</b>${esc(project.egoTrap)}</aside>
        <aside class="callout stop"><b>Put the tool down if</b>${esc(project.stopIf)}</aside>
      </div>
      <div class="paths">${cards}</div>
      <p class="price-note">DIY Guide and Split it include materials you'd buy. Call a guy is the whole-job number, their parts and markup included, so don't add your receipt on top. US ballpark. Not a quote. Your uncle's guy will have feelings about it.</p>
      ${renderPanel(project)}
      <h2 class="block-title">Questions Greg already heard</h2>
      ${faqs}
      <h2 class="block-title" style="margin-top:22px">While you're dirty anyway</h2>
      <div class="related">${related}</div>
      <form class="follow" id="follow-form">
        <label class="sr" for="follow-input">Ask Greg something else</label>
        <input id="follow-input" placeholder="Ask a follow-up. Cost, time, or 'should I really?'">
        <button class="go" type="submit">Ask</button>
      </form>
    </article>`;
  }

  function workOrder(id) {
    let number = 0;
    for (const char of id) number = (number * 33 + char.charCodeAt(0)) % 900 + 100;
    return `WO-${number}`;
  }

  function renderChoices() {
    const buttons = state.choices.map(({ project }) => `
      <button class="choice" type="button" data-open="${esc(project.id)}">
        <b>${esc(project.title)}</b>
        <span>${esc(project.blurb)}</span>
      </button>
    `).join("");
    workEl.innerHTML = `<article class="sheet">
      <div class="work-top"><button class="ghost" type="button" data-action="home">← The board</button></div>
      <p class="kicker-row"><span>Too many tools in the drawer</span></p>
      <h1>This could be a couple of jobs.</h1>
      <p class="deck">Greg doesn't want to grab the wrong one and start a second project. Pick the mess that matches.</p>
      <div class="choice-list">${buttons}</div>
    </article>`;
  }

  function renderShrug() {
    const maybe = state.choices.slice(0, 3).map(({ project }) => `
      <button class="choice" type="button" data-open="${esc(project.id)}">
        <b>${esc(project.title)}</b>
        <span>${esc(project.blurb)}</span>
      </button>
    `).join("");
    workEl.innerHTML = `<article class="sheet">
      <div class="work-top"><button class="ghost" type="button" data-action="home">← The board</button></div>
      <p class="kicker-row"><span>Squint mode</span></p>
      <h1>Greg is squinting at this one.</h1>
      <p class="read">"${esc(state.shrugQuery)}" doesn't match a job he has opinions loaded for. The rule still works: break it into chunks. Gas, roofs, structure, electric mysteries, and second-story ladders start in the hire column. Shopping, demo, cleanup, and the easy middle are how you pay less without becoming the story.</p>
      ${maybe ? `<h2 class="block-title">Faint possibilities</h2><div class="choice-list">${maybe}</div>` : ""}
      <form class="follow" id="follow-form">
        <label class="sr" for="follow-input">Try the question a different way</label>
        <input id="follow-input" placeholder="Name the room, the symptom, or the thing in the quote">
        <button class="go" type="submit">Try again</button>
      </form>
    </article>`;
  }

  function renderBenchBody() {
    if (!state.bench.length) {
      benchBody.innerHTML = `<p>The bench is clear. Suspiciously clear. The house is either finished or you're in denial.</p>`;
      return;
    }
    benchBody.innerHTML = state.bench.map((item) => {
      const project = projectById(item.id);
      if (!project) return "";
      return `<div class="bench-item">
        <button class="open" type="button" data-open="${esc(project.id)}">${esc(project.title)}</button>
        <button class="icon-x" type="button" data-drop="${esc(project.id)}" aria-label="Remove ${esc(project.title)}">✕</button>
      </div>`;
    }).join("");
  }

  function render() {
    const y = state.keepScroll ? window.scrollY : 0;
    benchCount.textContent = String(state.bench.length);
    const project = state.projectId ? projectById(state.projectId) : null;
    const showWork = state.mode === "job" || state.mode === "choose" || state.mode === "shrug" || state.mode === "flash";
    homeEl.hidden = showWork;
    workEl.hidden = !showWork;
    if (state.mode === "job" || state.mode === "flash") {
      if (project) renderWork(project);
      document.title = project ? `${project.title} — Greg's List` : "Greg's List";
    } else if (state.mode === "choose") {
      renderChoices();
      document.title = "Which job? — Greg's List";
    } else if (state.mode === "shrug") {
      renderShrug();
      document.title = "Greg is squinting — Greg's List";
    } else {
      workEl.innerHTML = "";
      document.title = "Greg's List — Dad's field manual";
      renderBoard();
    }
    if (state.focusHeading) {
      const heading = workEl.querySelector("h1");
      if (heading) {
        heading.setAttribute("tabindex", "-1");
        heading.focus();
      }
      state.focusHeading = false;
    }
    if (state.keepScroll) window.scrollTo(0, y);
    else if (showWork) window.scrollTo(0, 0);
    state.keepScroll = false;
    if (state.mode === "flash") state.mode = "job";
  }

  function openProject(id, options = {}) {
    const project = projectById(id);
    if (!project) return;
    ensurePicks(project);
    if (options.picks) state.picks[project.id] = Object.assign({}, state.picks[project.id], options.picks);
    state.projectId = id;
    state.leadKey = options.leadKey || "default";
    state.play = options.play || state.plays[id] || project.recommended;
    state.plays[id] = state.play;
    state.mode = "job";
    state.focusHeading = true;
    const method = options.replace ? "replaceState" : "pushState";
    history[method]({ id }, "", `#/${id}`);
    if (benchDialog.open) benchDialog.close();
    render();
  }

  function goHome(replace) {
    state.mode = "home";
    state.projectId = null;
    const method = replace ? "replaceState" : "pushState";
    history[method]({ view: "home" }, "", "#/");
    render();
    askInput.focus();
  }

  function routeQuery(query, fromHome) {
    const cleaned = query.trim();
    if (!cleaned) {
      if (fromHome) {
        askForm.classList.remove("is-shaking");
        void askForm.offsetWidth;
        askForm.classList.add("is-shaking");
      }
      return;
    }
    const ranked = rank(cleaned);
    const current = state.projectId ? projectById(state.projectId) : null;
    const key = detectKey(cleaned);
    const play = detectPlay(cleaned);
    if (/\b(leak|leaking|dripping|puddle)\b/.test(cleaned.toLowerCase()) && (!ranked[0] || ranked[0].score < 4)) {
      state.mode = "choose";
      state.choices = ["faucet", "roof", "water-heater", "toilet"]
        .map((id) => ({ project: projectById(id), score: 5 }))
        .filter((row) => row.project);
      state.focusHeading = true;
      history.pushState({ view: "choose" }, "", "#/which");
      render();
      return;
    }
    const currentScore = current ? score(current, cleaned) : 0;
    const bestOther = ranked.find((row) => !current || row.project.id !== current.id);
    const stayHere = current && state.mode === "job" && (
      (currentScore >= 3 && (!bestOther || currentScore >= bestOther.score - 1))
      || !bestOther
      || bestOther.score < 3
    );
    if (stayHere) {
      state.leadKey = key;
      if (play) {
        state.play = play;
        state.plays[current.id] = play;
      }
      state.mode = "flash";
      state.keepScroll = true;
      state.focusHeading = false;
      render();
      return;
    }
    if (!ranked.length || ranked[0].score < 3) {
      state.mode = "shrug";
      state.shrugQuery = cleaned;
      state.choices = ranked;
      state.focusHeading = true;
      history.pushState({ view: "shrug" }, "", "#/squint");
      render();
      return;
    }
    const close = ranked[1] && ranked[0].score - ranked[1].score < 1.5 && ranked[0].score < 8;
    if (close) {
      state.mode = "choose";
      state.choices = ranked.slice(0, 3);
      state.focusHeading = true;
      history.pushState({ view: "choose" }, "", "#/which");
      render();
      return;
    }
    openProject(ranked[0].project.id, { leadKey: key, play });
  }

  function toggleBench(id) {
    const existing = state.bench.findIndex((item) => item.id === id);
    if (existing >= 0) {
      state.bench.splice(existing, 1);
    } else {
      state.bench.unshift({
        id,
        picks: Object.assign({}, state.picks[id] || {}),
        savedAt: Date.now()
      });
    }
    saveBench();
    state.keepScroll = true;
    render();
  }

  chipsEl.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-chip]");
    if (!chip) return;
    askInput.value = chip.dataset.chip;
    state.query = chip.dataset.chip;
    routeQuery(chip.dataset.chip, true);
  });

  askForm.addEventListener("submit", (event) => {
    event.preventDefault();
    state.query = askInput.value;
    routeQuery(askInput.value, true);
  });

  askInput.addEventListener("input", () => {
    state.query = askInput.value;
    if (state.mode === "home") {
      renderBoard();
      renderSuggestion();
    }
  });

  filtersEl.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    state.filter = button.dataset.filter;
    renderFilters();
    renderBoard();
  });

  boardEl.addEventListener("click", (event) => {
    const opener = event.target.closest("[data-open]");
    if (!opener) return;
    openProject(opener.dataset.open);
  });

  suggestEl.addEventListener("click", (event) => {
    const opener = event.target.closest("[data-open]");
    if (!opener) return;
    openProject(opener.dataset.open);
  });

  workEl.addEventListener("click", (event) => {
    const opener = event.target.closest("[data-open]");
    if (opener) {
      openProject(opener.dataset.open);
      return;
    }
    if (event.target.closest("[data-action='home']")) {
      goHome(false);
      return;
    }
    if (event.target.closest("[data-action='bench']")) {
      toggleBench(state.projectId);
      return;
    }
    const play = event.target.closest("[data-play]");
    if (play) {
      state.play = play.dataset.play;
      if (state.projectId) state.plays[state.projectId] = state.play;
      state.keepScroll = true;
      render();
      return;
    }
    const pick = event.target.closest("[data-pick]");
    if (pick && state.projectId) {
      state.picks[state.projectId][pick.dataset.pick] = pick.dataset.who;
      state.keepScroll = true;
      render();
      return;
    }
    if (event.target.closest("[data-action='reset-picks']") && state.projectId) {
      delete state.picks[state.projectId];
      ensurePicks(projectById(state.projectId));
      state.keepScroll = true;
      render();
      return;
    }
    const faq = event.target.closest("[data-faq]");
    if (faq && state.projectId) {
      const index = faq.dataset.faq;
      state.faqs[state.projectId] = state.faqs[state.projectId] || {};
      state.faqs[state.projectId][index] = !state.faqs[state.projectId][index];
      state.keepScroll = true;
      render();
      return;
    }
    if (event.target.closest("[data-action='copy']")) {
      const text = document.getElementById("script-text");
      const button = event.target.closest("[data-action='copy']");
      const done = () => {
        button.textContent = "Copied. Go be dangerously clear.";
      };
      const writeFallback = () => {
        const area = document.createElement("textarea");
        area.value = text ? text.textContent : "";
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.left = "-9999px";
        document.body.appendChild(area);
        area.select();
        let ok = false;
        try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
        area.remove();
        button.textContent = ok ? "Copied. Go be dangerously clear." : "Highlight the script and copy it.";
      };
      if (navigator.clipboard && window.isSecureContext && text) {
        navigator.clipboard.writeText(text.textContent).then(done).catch(writeFallback);
      } else {
        writeFallback();
      }
    }
  });

  workEl.addEventListener("submit", (event) => {
    const form = event.target.closest("#follow-form");
    if (!form) return;
    event.preventDefault();
    const input = form.querySelector("input");
    routeQuery(input.value, false);
  });

  document.getElementById("brand-link").addEventListener("click", (event) => {
    event.preventDefault();
    goHome(false);
  });

  document.getElementById("open-bench").addEventListener("click", () => {
    renderBenchBody();
    benchDialog.showModal();
  });

  benchBody.addEventListener("click", (event) => {
    const opener = event.target.closest("[data-open]");
    if (opener) {
      const saved = state.bench.find((item) => item.id === opener.dataset.open);
      openProject(opener.dataset.open, { picks: saved && saved.picks });
      return;
    }
    const drop = event.target.closest("[data-drop]");
    if (drop) {
      state.bench = state.bench.filter((item) => item.id !== drop.dataset.drop);
      saveBench();
      renderBenchBody();
      if (state.mode === "job") render();
    }
  });

  window.addEventListener("popstate", () => {
    const id = (location.hash || "").replace(/^#\/?/, "");
    if (id && projectById(id)) {
      state.projectId = id;
      state.mode = "job";
      state.play = state.plays[id] || projectById(id).recommended;
      ensurePicks(projectById(id));
      state.focusHeading = true;
      render();
      return;
    }
    state.mode = "home";
    state.projectId = null;
    render();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement !== askInput && !(document.activeElement && document.activeElement.tagName === "INPUT")) {
      event.preventDefault();
      if (state.mode !== "home") goHome(false);
      askInput.focus();
    }
  });

  renderFilters();
  renderChips();
  saveBench();
  const initial = (location.hash || "").replace(/^#\/?/, "");
  if (initial && projectById(initial)) openProject(initial, { replace: true });
  else {
    history.replaceState({ view: "home" }, "", "#/");
    render();
  }
})();
