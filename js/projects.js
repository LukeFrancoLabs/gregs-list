window.GREGS_PROJECTS = [
  {
    id: "toilet",
    title: "Replace a toilet",
    category: "Plumbing",
    blurb: "Two bolts, a wax ring, and a very real chance of victory.",
    aliases: ["toilet", "commode", "throne", "wax ring", "toilet rocks", "rocking toilet", "flange"],
    beers: 2,
    time: "Half a Saturday",
    permit: "Almost never",
    recommended: "diy",
    forecast: "High, if it flushes before anyone gets home. Catastrophic if the only bathroom is down.",
    answers: {
      default: "This is the closest thing to a guaranteed win in home ownership. A toilet is a chair with a shutoff valve. If the floor is solid and the valve actually closes, you can do this and look like you have a guy.",
      cost: "The toilet itself is usually $150 to $400. Doing it yourself stays in that neighborhood, plus a wax ring and a supply line. Paying a plumber to reset one is often $350 to $750, mostly because they have met a shutoff valve that lies.",
      time: "Half a Saturday if the bolts give up and the flange is solid. A whole Saturday if the bolts are rust fossils and you make a third trip for a socket that has been in your bag the entire time.",
      diy: "Yes, you can swap it yourself when the flange isn't rotten and the shutoff fully closes. Those are the two plot twists. Check both before you start a group text about it.",
      hire: "Hire the reset if the flange is cracked, the floor feels soft, or the valve weeps when you look at it. Also hire it if this is the only bathroom and company lands at six. Heroes do not make guests use a gas station."
    },
    egoTrap: "Cranking the closet bolts until the porcelain taps out. It doesn't creak. It cracks, quietly, and now you own two toilets: one in the box and one in a moral crisis.",
    stopIf: "The subfloor gives, the flange spins or crumbles, or the shutoff will not fully close. That stopped being a toilet job. It is a floor job or a valve job, and those have their own invoices.",
    tools: ["Adjustable wrench", "Sponge and a pan you don't like", "Putty knife", "New wax ring or foam gasket", "Supply line", "Towels, so many towels"],
    moves: [
      "Measure the rough-in before you buy anything: wall to the closet bolts, usually 12 inches, sometimes 10 or 14. The wrong number means a toilet that thinks it's a shelf.",
      "Shut the valve, flush, sponge the rest. If the valve doesn't stop the water, stop the project.",
      "Rock the old one loose. Do not use your back like a crowbar you love.",
      "Set the new wax ring on a clean, sound flange. Lower the toilet straight down. Sitting it down twice is how you get a leak with confidence.",
      "Snug the bolts until the toilet stops rocking. Then stop. Level matters more than torque.",
      "A short bead of caulk across the front keeps mop water out. Leave the back open so a leak can announce itself instead of marinating the subfloor."
    ],
    script: "I need a toilet reset. I'll have the new one on site. Please check the flange, replace the wax ring and bolts, set it so it doesn't rock, reconnect the supply, test it, and haul the old one. I am not remodeling the bathroom.",
    redFlags: [
      "They won't look at the flange and just want to 'set it and see.'",
      "The quote includes a new subfloor without anyone having looked at the subfloor.",
      "Cash only, no haul-away, and a shrug about whether the shutoff works."
    ],
    askPro: [
      "Will you inspect the flange and the subfloor before setting the new toilet?",
      "Is haul-away included, or am I babysitting a used toilet in the garage?",
      "What happens if the shutoff valve fails — is valve replacement a separate trip charge?"
    ],
    soundSmart: "Ask them to confirm the rough-in before anyone buys a second toilet. Twelve-inch is common. Assuming is how you collect porcelain.",
    materials: [160, 420],
    pro: [380, 780],
    segments: [
      { id: "measure", name: "Measure the rough-in and buy the right toilet", detail: "Wall to bolts. Write it down. The store does not accept vibes as a return reason on a used throne.", you: [0, 0], hire: [40, 90], pick: "you" },
      { id: "valve", name: "Deal with a bad shutoff valve", detail: "Test it first. Only pay for this if it won't close or it weeps. A new valve is a small plumber visit, not a character arc.", you: [0, 0], hire: [160, 360], pick: "you" },
      { id: "reset", name: "Pull the old one, wax ring, set the new one", detail: "The actual job. Very doable. The wax ring gets one honest try, not two.", you: [12, 35], hire: [180, 340], pick: "you" },
      { id: "haul", name: "Haul the old toilet", detail: "It will drip a little and weigh more than your optimism. A buddy with a truck is a valid labor strategy.", you: [0, 30], hire: [50, 120], pick: "you" }
    ],
    faqs: [
      { q: "Can I reuse the old wax ring if it looks fine?", a: "No. Wax rings are a one-sit item. It looked fine in the same way leftovers look fine. They are not fine." },
      { q: "It rocks a little. More bolts?", a: "More bolts is how bowls crack. Shim the base with toilet shims, then snug. If the flange is the thing moving, stop and fix the flange." },
      { q: "Do I caulk all the way around?", a: "Front edge, yes, so mop water stays out. Leave the back open. A hidden leak is not a tidy look. It is a future floor." }
    ],
    related: ["faucet", "vanity", "vinyl"]
  },
  {
    id: "faucet",
    title: "Swap a faucet",
    category: "Plumbing",
    blurb: "The job is easy. The cabinet under the sink is a personal attack.",
    aliases: ["faucet", "kitchen faucet", "bath faucet", "tap", "dripping faucet", "leak under the sink", "sink faucet", "cartridge"],
    beers: 2,
    time: "One to three hours, plus the time your shoulder files a complaint",
    permit: "No",
    recommended: "diy",
    forecast: "They will forgive the afternoon if the dripping actually stops.",
    answers: {
      default: "Under-sink work is simple plumbing performed in a space designed by someone who hates you. If the shutoffs work and the faucet isn't welded to the sink with corrosion, this is a you job.",
      cost: "A decent faucet runs about $80 to $350. DIY stays there, plus supply lines if the old ones look crusty. A plumber or handyman is often $200 to $550, and a lot of that quote is the privilege of not lying on your back under a P-trap.",
      time: "An hour if everything loosens. Three if the mounting nuts are fossilized and you have to invent a new personality called Patience.",
      diy: "You can do a straightforward swap. Kill the shutoffs, open the faucet to bleed pressure, swap the unit, new supply lines if they look tired, then test with your head still in the cabinet like a detective.",
      hire: "Hire it when the shutoffs don't exist or don't close, the old faucet is corroded into modern art, or your knees have already voted. Paying someone to be the person under the sink is a legitimate use of money."
    },
    egoTrap: "Forcing a seized nut until the supply line twists and the valve starts a new career as a fountain. Penetrating oil and a basin wrench beat hero torque.",
    stopIf: "There is no working shutoff and you're about to 'just be quick' on a live line. Also stop if the sink deck is cracked. The faucet is not the only patient.",
    tools: ["Basin wrench", "Adjustable wrench", "Flashlight", "Penetrating oil", "Towels and a small bowl", "New supply lines"],
    moves: [
      "Photo the hookups before you take them apart. Future you is not as smart as you think he is.",
      "Shut both valves. Open the faucet. If water keeps coming, the valves are decorative and the project is paused.",
      "The basin wrench is the whole reason this is possible. Use it. Don't spend 40 minutes being brave with the wrong tool.",
      "Clean the deck. Old plumber's putty will make the new faucet sit like a seesaw.",
      "Hand-tighten, then a quarter turn. Firehose tight is how plastic nuts become legends.",
      "Run it, then crawl back under with a flashlight and watch for a minute. Wipe. Watch again. The second look is the job."
    ],
    script: "I need a faucet swap on the kitchen sink. I'll have the new faucet. Please replace the supply lines if they're worn, verify the shutoffs, and leave it drip-free. I don't need new sink or disposal work unless you find an actual problem.",
    redFlags: [
      "They want to replace the whole sink without showing you a crack, a rot spot, or a reason.",
      "No mention of shutoff valves. Those are either the easy part or the whole surprise.",
      "A quote that says 'faucet install' with no brand, no haul-away of the old one, and no test."
    ],
    askPro: [
      "Are the shutoffs workable, or is valve replacement in this price?",
      "Supply lines included?",
      "If the old faucet is seized, is there an extra charge before you start cutting?"
    ],
    soundSmart: "Tell them you want the supply lines replaced if the old ones are original. Those braided lines have a lifespan and a flair for drama.",
    materials: [90, 380],
    pro: [220, 560],
    segments: [
      { id: "buy", name: "Pick the faucet and check the hole count", detail: "One hole, three hole, or a deck plate covering the sins of a previous faucet. Match it or buy a cover. This is the whole shopping puzzle.", you: [0, 0], hire: [0, 0], pick: "you" },
      { id: "valves", name: "Replace shutoffs that don't shut", detail: "If they work, leave them alone and take the win. If they don't, this little chunk is the plumber part.", you: [0, 0], hire: [150, 340], pick: "you" },
      { id: "swap", name: "Disconnect, extract, and set the new faucet", detail: "Mostly patience and a basin wrench. Hire this if the cabinet is a torture chamber or the old nuts are rust-welded.", you: [15, 40], hire: [150, 320], pick: "you" },
      { id: "test", name: "New supply lines and a real leak check", detail: "Run hot and cold. Watch the joints. Then go do something else and come back. Leaks are shy at first.", you: [0, 25], hire: [0, 0], pick: "you" }
    ],
    faqs: [
      { q: "It's a slow drip. Cartridge or whole faucet?", a: "If the faucet is old and ugly, replace the whole thing. A cartridge is the move when the faucet is new-ish and you can still buy the exact cartridge. 'Close enough' cartridges create artisanal drips." },
      { q: "Water is pooling under the sink.", a: "That's not a vibe, that's a joint. Put a dry paper towel under each connection overnight. The wet one is your suspect. If the basin itself is cracked, the faucet swap won't fix it." },
      { q: "Can I do this with just a crescent wrench?", a: "Sometimes. The nuts up against the sink deck are why basin wrenches exist. You can try. You may end up at the store anyway, which is the traditional pilgrimage." }
    ],
    related: ["disposal", "vanity", "toilet"]
  },
  {
    id: "disposal",
    title: "Garbage disposal",
    category: "Plumbing",
    blurb: "A blender that lives in the dark and holds a grudge.",
    aliases: ["disposal", "garbage disposal", "disposer", "humming", "not spinning", "jammed disposal", "sink disposal"],
    beers: 2,
    time: "Two hours if one is already there",
    permit: "Usually no",
    recommended: "split",
    forecast: "Neutral to good. Nobody writes poetry about a disposal until it leaks into the cabinet.",
    answers: {
      default: "Swapping a disposal that already exists is a very dad-shaped job. Adding one that was never there — new switch, new outlet, new drain plumbing — is how a $180 appliance becomes a $700 conversation.",
      cost: "The unit is about $120 to $350. A straight swap is often $250 to $550 installed. A brand-new install with electrical can clear $700 to $1,200 because you stopped buying an appliance and started hiring two trades.",
      time: "A swap is an afternoon. A jam is fifteen minutes if you use the right hex key and not your hand. A new circuit is somebody else's afternoon, on purpose.",
      diy: "If there's already a disposal and a switched outlet under the sink, you can swap it. Breaker off, confirm it's dead, then plumb it. If it's hardwired and the wire situation looks like spaghetti from 1978, hire that part.",
      hire: "Hire the electrical if you need a new outlet or switch. Hire the whole thing if the sink plumbing is a science fair. The disposal itself is not the scary object. The surprise wiring is."
    },
    egoTrap: "Sticking your hand down a jammed disposal because it 'isn't on.' The reset button and the hex key on the bottom exist so you can keep all your fingers for other hobbies.",
    stopIf: "You need a new circuit, the wiring is aluminum or cloth-insulated, or you're about to splice something because the cord 'almost' reaches. Almost is not an electrical method.",
    tools: ["Hex key that came with the unit, or a 1/4-inch allen", "Screwdriver", "Pliers", "Bucket", "Non-contact voltage tester", "Plumber's putty"],
    moves: [
      "Humming but not spinning usually means a jam. Kill the switch, kill the breaker, and use the hex socket on the bottom to turn the motor back and forth. Then hit the reset button. No hands in the hopper. Ever.",
      "For a swap, confirm a switched receptacle already exists. Unplug it. Don't get creative.",
      "Disconnect the drain and the dishwasher hose if there is one. Expect a cup of truly offensive water.",
      "Hang the new unit on the mounting ring until it locks. Connect the discharge downhill. Standing water in the pipe means you created a tiny gross lake.",
      "Restore power and run cold water. Leaks show up at the mounting ring and the discharge, not in your hopes."
    ],
    script: "I have a disposal to swap. The outlet and switch already exist. I need the old unit dropped, the new one mounted, the drain and dishwasher connection redone, and a leak check. If you think the electrical is unsafe, stop and tell me before adding work.",
    redFlags: [
      "They want to add a new disposal circuit without mentioning a permit or what panel you have.",
      "No voltage tester in the conversation at all.",
      "They'll 'wire it hot for a second just to test.' That's not testing. That's a bit."
    ],
    askPro: [
      "Is this a swap onto an existing switched outlet, or new electrical?",
      "Is the dishwasher connection included?",
      "What do you do if the sink flange is corroded and won't seal?"
    ],
    soundSmart: "Say 'existing switched receptacle' if you have one. Those three words tell a good tech this is a swap, not a fishing expedition.",
    materials: [130, 380],
    pro: [280, 650],
    segments: [
      { id: "unjam", name: "Unjam it before you replace it", detail: "Hex key in the bottom, reset button on the side, cold water after. If it sings again, then we talk about a new unit.", you: [0, 15], hire: [80, 150], pick: "you" },
      { id: "power", name: "New outlet or switch, only if you don't already have one", detail: "Leave this on You if a switched outlet is already under the sink. Flip it if you need new wiring. That chunk is an electrician, not a cord draped across the cabinet.", you: [0, 0], hire: [220, 550], pick: "you" },
      { id: "swap", name: "Drop the old unit and hang the new one", detail: "Mounting ring, discharge slope, dishwasher hose. Messy, doable, very satisfying.", you: [10, 30], hire: [150, 300], pick: "you" },
      { id: "leak", name: "Leak check and the nasty bucket", detail: "Run it. Watch the flange. A slow weep into the cabinet will destroy the bottom panel and your interest in cooking.", you: [0, 0], hire: [0, 0], pick: "you" }
    ],
    faqs: [
      { q: "It hums and does nothing.", a: "It's jammed or the overload tripped. Power off, allen key in the bottom socket, work it free, reset button, try again. If the hex spins easy and it still only hums, the motor is done. Replacement time." },
      { q: "Can I wash it down with hot water?", a: "Cold water while it's running. Hot water melts grease just enough to move it further down and re-harden in the pipe, which is a different, worse project." },
      { q: "Is a louder one better?", a: "Louder means more horsepower and less patience. It does not mean you can put chicken bones, coffee grounds, or your regrets in there." }
    ],
    related: ["faucet", "vanity", "light"]
  },
  {
    id: "water-heater",
    title: "Water heater",
    category: "Plumbing",
    blurb: "If it's gas and you're 'pretty handy,' this is where pretty ends.",
    aliases: ["water heater", "hot water heater", "tank", "no hot water", "rusty water", "pilot light", "rumbling water heater", "dying whale", "water heater leak"],
    beers: 5,
    time: "A day for a pro. A story you tell forever if you freelance the gas line.",
    permit: "Often required. Inspection is the point.",
    recommended: "pro",
    forecast: "Excellent if the shower works tonight. The household does not care how educational the install was.",
    answers: {
      default: "You can shop the unit, empty the closet, and mop. If it's gas, you are not the person connecting gas, venting, or the temperature-and-pressure valve. That is how a utility closet becomes a headline. Electric is still a permit, a 240-volt circuit, a full tank, and a bad time to improvise.",
      cost: "The tank itself is often $600 to $2,000 depending on size and whether it's a fancy condensing unit or an honest 40-gallon rectangle. Installed, gas or electric, a normal replacement lands around $1,400 to $3,400. The whale-noise specials cost more if the pan, the flue, or the expansion tank have been freelancing.",
      time: "A prepped, like-for-like swap is a few hours for someone who does them weekly. It's a weekend and a permit for a homeowner who does them never. No hot water does not get more patient because you learned a lot.",
      diy: "Drain it, move boxes, measure the doorway, and buy the right size. That's the DIY portion. The connections — gas, vent, 240-volt, T&P discharge — are the hired portion. Splitting it that way is the whole play.",
      hire: "Hire the install. Seriously. Ask for a permit, a pan where the floor can flood, a proper discharge line, and haul-away. Get two quotes. The cheap one that 'doesn't mess with permits' is not thrifty. It is unfinished."
    },
    egoTrap: "Reusing the old vent connector or a sketchy gas flex because it 'was fine.' It was fine until you touched it. Now you own it.",
    stopIf: "You smell gas, the draft hood is backdrafting, the tank is actively flooding, or anyone suggests bypassing the T&P valve. Shut it down, ventilate, and call a pro or the gas company. Do not troubleshoot a leak with a lighter. This should not need saying, and yet.",
    tools: ["A pro who pulls a permit", "Your truck or theirs for haul-away", "A tape measure", "Patience while the tank drains", "A shop vac for the sad leftover water"],
    moves: [
      "Confirm fuel type, gallon size, and whether it fits the closet and the doorway. Measure both. Tanks get bigger when you're holding them.",
      "Note the age. A serial-number birthday over 10 to 12 years plus rust or rumbling means replacement, not a pep talk.",
      "You can drain it once it's shut down and cooled, if the drain valve works and you have a place for the water that isn't the drywall.",
      "Leave gas, flue, electrical, and the T&P discharge to the person who will also meet the inspector.",
      "Ask about an expansion tank and a drain pan. A lot of 'surprise' quotes are just the things the last install skipped."
    ],
    script: "I need a like-for-like water heater replacement, permit pulled, old unit hauled. I want a drain pan if it's in a living space, a proper T&P discharge, and any vent or expansion-tank issues called out before work starts. I'll have the area cleared. I'm not looking for a tankless upsell unless you price it as a separate option.",
    redFlags: [
      "No permit, offered as a discount.",
      "They'll reuse a corroded flue or a gas connector to save a part.",
      "The T&P valve drips and they offer to cap it. That valve is the safety. Capping it is the opposite.",
      "Tankless gets pitched before anyone looked at your gas line size or venting. That's a different project with a different price."
    ],
    askPro: [
      "Is the permit included, and who meets the inspector?",
      "Pan, expansion tank, new flex connectors, haul-away — in or out?",
      "What in my closet would change the quote? Flue, shutoff, pan drain, electrical disconnect?",
      "What's the warranty on labor, separate from the tank warranty?"
    ],
    soundSmart: "Say 'like-for-like with a permit' first. You'll hear the real scope faster, and you'll dodge the tankless monologue until you actually want it.",
    materials: [650, 2100],
    pro: [1400, 3400],
    segments: [
      { id: "spec", name: "Pick the size, fuel, and whether it fits", detail: "Same gallons unless the household got bigger. Measure the closet, the doorway, and the vent path. This part is yours.", you: [0, 0], hire: [0, 0], pick: "you" },
      { id: "prep", name: "Clear the closet and drain the old tank", detail: "Once it's isolated and cool. A wet vac is your friend. A half-drained tank is a waterbed with no sense of humor.", you: [0, 40], hire: [80, 160], pick: "you" },
      { id: "hookup", name: "Gas, vent, electrical, and T&P discharge", detail: "The part that can hurt people. This switch does not flip.", you: [0, 0], hire: [500, 1400], pick: "hire", lock: "hire", lockReason: "Gas, venting, and water-heater electrical stay locked. Greg likes you with eyebrows." },
      { id: "permit", name: "Permit and inspection", detail: "Boring, cheap compared to redoing it, and the thing that makes the install real.", you: [0, 0], hire: [75, 250], pick: "hire", lock: "hire", lockReason: "If a permit is required where you live, pulling it is part of the hired job, not a cute extra." },
      { id: "haul", name: "Haul the old tank", detail: "It's heavy and it will still have water in it. A friend and a truck can save this chunk. Your back gets a vote.", you: [0, 40], hire: [75, 175], pick: "you" }
    ],
    faqs: [
      { q: "It's rumbling like a dying whale.", a: "That's often sediment boiling at the bottom of an aging tank. A flush sometimes helps a younger unit. On an old rusty one, a flush can loosen the one flake still holding back a leak. If it's past about 10 years and noisy, price a replacement before you power-wash the inside of a retiree." },
      { q: "There's a puddle under it.", a: "Find out if it's the tank or the connections. Connections can be fixed. A wet tank seam means replacement, a pan, and a faster phone call. Don't 'keep an eye on' a tank that's already decided." },
      { q: "Should I go tankless?", a: "Maybe, if you want endless hot water and you're ready for a gas-line or electrical upgrade and yearly descaling. It's a remodel of the hot water system, not a swap. Get it priced separately so it can't hide inside a leak emergency." }
    ],
    related: ["faucet", "vanity", "disposal"]
  },
  {
    id: "fan",
    title: "Hang a ceiling fan",
    category: "Electric",
    blurb: "The fan is easy. The box in the ceiling is the whole plot.",
    aliases: ["ceiling fan", "fan", "wobble", "fan box", "install a fan", "hang a fan"],
    beers: 3,
    time: "Two to four hours once the box is worthy",
    permit: "Sometimes, if you're adding a circuit or a new box",
    recommended: "split",
    forecast: "Very high if it works and doesn't sway. Very permanent if it falls during a dinner.",
    answers: {
      default: "A ceiling fan is a lighting project that gained weight and started spinning. If a fan-rated, braced box is already up there, a careful person can hang the fan. If the box was meant for a lightweight light, you don't have a fan project. You have a 'why is there a hole in the ceiling' project.",
      cost: "The fan is $120 to $400 for something that won't embarrass you. A straight hang on a proper box might be $250 to $500 installed. Adding a braced fan box is often another $200 to $550, and it is the money that keeps the fan on the ceiling.",
      time: "Two hours if the box is fan-rated and the wires match the diagram. Most of a Saturday if you discover the box is clipped to drywall and has been living a lie.",
      diy: "You can do the hang if the box is fan-rated and braced, you kill the right breaker, and a tester says the wires are dead. Follow the fan's diagram. If the colors in the ceiling don't match the picture, stop. Old houses love a plot twist.",
      hire: "Hire an electrician to add or replace the box, anytime the attic situation is hostile, the wiring looks original to a president you only know from portraits, or there's no ground and the fan is metal. Fans fall on people. This is the expensive kind of stubborn."
    },
    egoTrap: "Hanging a 30-pound spinning object from a plastic box and two drywall screws because the bracket 'felt tight.' Tight is not rated.",
    stopIf: "The box isn't marked fan-rated, the wires are aluminum or crumbling, there's scorching, or your tester doesn't clearly say dead. Also stop if you need a new switch leg and you're about to fish wire with a coat hanger and hope.",
    tools: ["Non-contact tester and a second way to confirm dead", "Screwdrivers", "Wire nuts or the fan's connectors", "Stepladder that actually reaches", "The bracket hardware that came with the fan", "A helper, because fans are wide and ladders are not"],
    moves: [
      "Kill the breaker. Test. Flip the switch on and off while testing so a switched leg can't fool you. Test a known live outlet first so you trust the tester.",
      "Read the existing box. Fan-rated boxes say so. A tab bent over a drywall hole is not a rating.",
      "If you have attic access and the skills for a brace bar, that's a project. If you don't, that chunk is the electrician, and then you can still hang the fan.",
      "Assemble the downrod situation on the ground. Do as little fine motor work as possible while standing on a ladder.",
      "Match the diagram that came with this fan, not the diagram from the video with the nicest thumbnail.",
      "Wobble after install is usually balance kits and loose screws, not destiny. Check the bracket first."
    ],
    script: "I need a ceiling fan hung in this bedroom. Please confirm the box is fan-rated and braced. If it isn't, price the box separately before you start. Breaker is labeled, I think, and I would like you to tell me if I'm wrong. I'm supplying the fan.",
    redFlags: [
      "They'll hang it on the existing box without looking at the rating.",
      "No tester, or they use their fingers as a personality.",
      "They add a brace 'from below' with hardware that wouldn't hold a houseplant."
    ],
    askPro: [
      "Is the existing box fan-rated and braced, and will you show me?",
      "If not, what's the box replacement cost before you start?",
      "Does the switch need a change for this fan and light combo?"
    ],
    soundSmart: "The phrase is 'fan-rated braced box.' Say it early. The whole quote depends on it.",
    materials: [130, 450],
    pro: [300, 900],
    segments: [
      { id: "dead", name: "Kill the breaker and prove it's dead", detail: "Tester on a known live outlet first, then the ceiling. If this step feels like a suggestion, hire the whole hang.", you: [0, 25], hire: [0, 0], pick: "you" },
      { id: "box", name: "Replace the box if it isn't fan-rated", detail: "This is the actual safety. A brace bar in an open attic is sometimes a handy person's job. A closed ceiling, old wire, or any doubt is the electrician.", you: [35, 90], hire: [200, 550], pick: "hire" },
      { id: "hang", name: "Hang the fan and land the wires per the diagram", detail: "Doable once the box deserves a fan. Helper recommended. Diagram wins arguments.", you: [0, 20], hire: [150, 350], pick: "you" },
      { id: "balance", name: "Balance it so it doesn't applaud itself", detail: "Tight screws, the little weights, and accepting that a bent blade will never be a quiet blade.", you: [0, 15], hire: [0, 0], pick: "you" }
    ],
    faqs: [
      { q: "The light box is already there. Same thing, right?", a: "A light box holds a light. A fan box holds a fan that also shakes a little on purpose. If it doesn't say fan-rated and it isn't braced to structure, it's the wrong box." },
      { q: "It wobbles.", a: "Tighten the bracket and blade screws first. Then the balance kit. Then look for a warped blade. A wobble on a bad box is not a balance issue. Take it down." },
      { q: "Can I put it on a dimmer?", a: "Only if the fan and the dimmer both say they like each other. A random dimmer makes fans hum, which is the house clearing its throat forever." }
    ],
    related: ["light", "tv", "paint"]
  },
  {
    id: "light",
    title: "Swap a light fixture",
    category: "Electric",
    blurb: "Same wires, breaker off, tester on. Mystery splices mean we sit down.",
    aliases: ["light fixture", "light", "chandelier", "pendant", "sconce", "replace a light", "vanity light", "flush mount"],
    beers: 2,
    time: "An hour for a simple swap",
    permit: "No, for a like-for-like fixture swap",
    recommended: "diy",
    forecast: "Instant credit if the room looks finished. Negative credit if you leave them in the dark before dinner.",
    answers: {
      default: "A like-for-like light swap is fair game: breaker off, wires dead, new fixture wired the way its diagram says, canopy covers the box. The job gets serious when the fixture is heavy, the box is crowded with mystery splices, or the wire looks old enough to have a nickname.",
      cost: "The fixture can be $40 or $600 depending on your taste and your ability to leave a lighting showroom. The swap itself is often $100 to $250 per fixture in labor if nothing is weird. Heavy chandeliers and new boxes cost more because gravity joined the chat.",
      time: "Forty-five minutes when it's two wires and a ground. Half a day when the screw snaps and the box is full of wire nuts that look like a group photo from 1962.",
      diy: "Simple swaps, yes, if you kill the right breaker and confirm dead. Match the new diagram. If you see aluminum, cloth insulation, scorch marks, or more splices than wires, that is the edge of the map.",
      hire: "Hire it for heavy fixtures, no working ground on a metal canopy, crowded boxes, or any wiring you wouldn't want to describe out loud. Also hire it if the switch doesn't seem to control what you think it controls. Switched neutrals are a thing, and they are rude."
    },
    egoTrap: "Twisting wires together because the nut 'seemed extra.' Loose splices get hot. Hot lives inside the ceiling where your smoke detector would like a word.",
    stopIf: "The tester never clearly reads dead, the wires are damaged, the box is cracked, or the new fixture is heavier than the box was built for. A dining table chandelier is not a hallway boob light. Treat it that way.",
    tools: ["Non-contact tester", "Screwdrivers", "Wire stripper", "Wire nuts", "Ladder", "The hardware in the fixture box, not the random screws in the junk drawer"],
    moves: [
      "Turn the light on, kill breakers until it stays off, then test anyway. Label the breaker if it lied.",
      "Photo the old connections before you undo them.",
      "Support the old fixture. The wires are not a hanging plan.",
      "Follow the new fixture's instructions for line, neutral, and ground. If your ceiling doesn't match the drawing, stop and look it up or call.",
      "Tuck wires in without pinching them under the canopy. Snug, not crushed.",
      "Restore power. If it pops, trips, or smells like a decision, switch it back off and don't retry it for fun."
    ],
    script: "I have a replacement fixture to swap onto an existing box. Please confirm the box can hold it, the wiring is sound, and the switch that controls it is the one we think. If the box or the wire needs work, price that before you start.",
    redFlags: [
      "They skip testing and just start un-nutting wires.",
      "A heavy fixture gets hung from the old box with no talk about support.",
      "They want to bury a junction box behind the new canopy with no access. Boxes stay accessible. That's not a style preference."
    ],
    askPro: [
      "Can this box support the weight of the fixture I bought?",
      "Are you seeing a ground, and if not, what's the plan?",
      "Is the switch a standard switch or a dimmer, and does this fixture care?"
    ],
    soundSmart: "Tell them the fixture weight and whether there's a dimmer. Those two facts change the hour.",
    materials: [40, 500],
    pro: [140, 450],
    segments: [
      { id: "kill", name: "Find the real breaker and test", detail: "The breaker you believe in is a theory. The tester is the peer review.", you: [0, 20], hire: [0, 0], pick: "you" },
      { id: "swap", name: "Swap a normal fixture on a sound box", detail: "Like-for-like, diagram in your hand, canopy covers a box you can still access.", you: [0, 15], hire: [100, 250], pick: "you" },
      { id: "heavy", name: "Brace a heavy chandelier or replace a bad box", detail: "Leave this on You at $0 if it's a normal light on a sound box. Flip it for a heavy fixture, a cracked box, or wiring that looks historic.", you: [0, 0], hire: [180, 500], pick: "you" },
      { id: "patch", name: "Paint the canopy scar", detail: "The old fixture always leaves a tan line. A small roller is the cover-up.", you: [10, 30], hire: [0, 0], pick: "you" }
    ],
    faqs: [
      { q: "The new one flickers.", a: "Could be a loose splice, a bad bulb, or a dimmer that doesn't speak LED. Kill the power and check the splices you just made before you blame the bulb. If a dimmer is in the wall, check its compatibility list." },
      { q: "There's no ground wire in the box.", a: "Common in older houses, and the moment a simple swap gets a professional opinion, especially with a metal fixture. Don't fake a ground to the screw and call it entrepreneurship." },
      { q: "Can I put up a ceiling fan later on this box?", a: "Only if that box is fan-rated. Most light swaps do not leave you with a fan box. Different animal. Different brace." }
    ],
    related: ["fan", "paint", "tv"]
  },
  {
    id: "tv",
    title: "Mount a TV",
    category: "Interior",
    blurb: "Find the studs, or your TV becomes a very expensive pendulum.",
    aliases: ["tv mount", "mount a tv", "hang a tv", "tv", "articulating mount", "stud finder", "television"],
    beers: 2,
    time: "One to two hours",
    permit: "No",
    recommended: "diy",
    forecast: "Legendary if it's level and the cables aren't a crime scene. Less legendary if you find a water line with a drill bit.",
    answers: {
      default: "Mounting a TV on a wood-stud wall is a true dad win. The TV hits studs, or it doesn't go up. Drywall anchors are a rumor started by the little bag of screws. Tile, brick, and 'I think the studs are metal' are still doable, they just use different hardware and less swagger.",
      cost: "A solid mount is $30 to $150. DIY stays there. A handyman is often $150 to $350 to hang it, more if you want cables fished inside the wall and there's fire blocking, which there usually is.",
      time: "An hour when the studs cooperate and the TV isn't the size of a canoe. Add an hour the first time your stud finder beeps at a pipe and you have to go stand outside and think.",
      diy: "Yes, on a normal drywall-and-stud wall, with a mount rated for the TV and lag bolts into studs. Use a stud finder, then prove it with a finish nail or a small bit in the area the mount will cover. The finder is a suggestion. The stud is a fact.",
      hire: "Hire the in-wall cable fishing if you care about a clean look and the wall is an exterior wall, a firewall, or a mystery. Hire the whole mount on stone, tile over mystery substrate, or a rental where you can't patch a bad hole. Rental walls are how security deposits become philosophy."
    },
    egoTrap: "Trusting the plastic anchors that came taped to a $25 mount. They are not negotiating with an 65-inch TV. They will leave.",
    stopIf: "You don't know what's in the wall and you're about to bore a big hole at outlet height next to a bathroom. Pipes and wires like that neighborhood. Or the only place the TV fits has no studs where the mount needs them. Move the plan, not the laws of hardware.",
    tools: ["Stud finder", "Level", "Drill and the right bit", "Sockets for the lag bolts", "Painter's tape", "A second human for the actual lift"],
    moves: [
      "Hold the TV box against the wall and decide the height with the people who will watch it, not with a forum from 2014. Seated eye line is the usual target.",
      "Find two studs. Confirm them. Mark the mount holes with tape so you can still see the plan after you blink.",
      "Lag into the studs. If a hole misses, don't just 'use an anchor for that one.' Reposition. All the holding bolts need wood or masonry.",
      "Hang the TV with two people. Hero lifts are how screens meet hearthstones.",
      "Cables can drop in a surface raceway and still look intentional. In-wall is optional cleanliness, not the main quest."
    ],
    script: "I want this TV mounted on that wall, centered on the room, lag-bolted into studs, not anchors. Please check for pipes and wires before you drill. Cables can be a surface raceway unless in-wall is genuinely straightforward. I'm supplying the TV and the mount.",
    redFlags: [
      "They reach for the drywall anchors first.",
      "They'll fish cables through an exterior wall without talking about insulation and vapor barriers.",
      "No level on the truck. You laugh, and then you see their work at a sports bar."
    ],
    askPro: [
      "Will every lag bolt land in a stud or masonry?",
      "How are you checking for pipes and electrical before drilling?",
      "Is cable management surface or in-wall, and what does in-wall cost if the wall is blocked?"
    ],
    soundSmart: "Say 'lag bolts into studs, anchors are a no.' You will sound like someone who has seen the pendulum.",
    materials: [30, 180],
    pro: [160, 400],
    segments: [
      { id: "locate", name: "Find studs and dodge pipes", detail: "Stud finder, then confirm. Look at what's on the other side of the wall. Bathrooms hide supply lines exactly where a mount wants to live.", you: [0, 15], hire: [0, 0], pick: "you" },
      { id: "mount", name: "Lag the bracket and hang the TV", detail: "Two people, one level, no anchors doing the real work.", you: [0, 0], hire: [120, 250], pick: "you" },
      { id: "cables", name: "Hide the cables in the wall", detail: "Left on You, this is a surface raceway that still looks intentional. Flip it to hire the fishing trip, especially past fire blocks.", you: [20, 45], hire: [150, 350], pick: "you" },
      { id: "patch", name: "Patch the exploratory holes", detail: "You will drill at least one wrong hole. That's not failure. That's surveying. Spackle is part of the kit.", you: [5, 15], hire: [0, 0], pick: "you" }
    ],
    faqs: [
      { q: "What if the studs aren't where I need them?", a: "You add a plywood backer between studs, painted the wall color, or you move the TV. You do not split the difference with anchors. A backer board is a very respectable look when you own it on purpose." },
      { q: "Can I mount into plaster?", a: "Plaster over wood lath still needs studs. The plaster is just a more dramatic surface to crack while you find them. Go slow, mark carefully, and don't twist a big bit through it like you're late." },
      { q: "How high is too high?", a: "If you're tilting your head back from the couch to see the center of the screen, it's a sports-bar mount and your neck will file the complaint. Drop it. The mount you bought probably articulates because someone, somewhere, hung one too high." }
    ],
    related: ["drywall", "light", "paint"]
  },
  {
    id: "paint",
    title: "Paint a room",
    category: "Interior",
    blurb: "Anyone can roll paint. Almost nobody wants to hear that prep is the job.",
    aliases: ["paint", "painting", "repaint", "bedroom paint", "sherwin", "eggshell", "accent wall", "interior paint"],
    beers: 2,
    time: "A weekend for one room if you actually prep",
    permit: "No",
    recommended: "diy",
    forecast: "Sky high. Paint is the cheapest way to look like you have a plan.",
    answers: {
      default: "You can paint the room. The color is a victory lap. The job is holes, caulk, sanding, tape, and cutting a straight line while a podcast tries to ruin your focus. Skip prep and the room will look like a group project.",
      cost: "A bedroom is often $60 to $180 in paint and supplies if you already own a ladder. A pro is often $400 to $1,000 for a normal room, more when the ceilings are high, the walls are wounded, or someone wants lacquer on the trim like it's a piano.",
      time: "One focused Saturday for walls in an empty bedroom. A weekend and a half once furniture, closet doors, and a ceiling get involved. Drying time is not optional just because company is coming.",
      diy: "Walls, yes. Ceilings, yes if you like your neck. Stairs and two-story foyers, that's a ladder problem wearing a paint costume. Hire the tall dangerous parts, roll the rest, take the credit anyway.",
      hire: "Hire a full room when the prep is bigger than the paint: water stains, smoke, crumbling drywall, or trim you want sprayed. Also hire it when your time is worth more than the quote, which is allowed, even if the group chat disagrees."
    },
    egoTrap: "One thick coat instead of two honest ones, and no primer on the patches. The patches will telegraph through forever, like the wall remembering where the nail was.",
    stopIf: "You find soft drywall, active water stains, or mold. Paint is not a medication. Fix the leak, dry the wall, then paint. Also stop if the 'quick' plan requires a ladder on a stair landing. That is how painting becomes an ER copay.",
    tools: ["Roller, frame, and a real extension pole", "Angled brush you don't cheap out on", "Tape, plastic, canvas drop cloths", "Spackle, sanding sponge, caulk", "Primer for stains and patches", "A light you can aim along the wall"],
    moves: [
      "Move the room or accept that you'll paint the parts you can reach and call it a phase. Phases are how rooms stay half-done for a fiscal year.",
      "Patch, dry, sand, wipe. Caulk the trim gaps. This is the job. The roller is the parade.",
      "Prime stains and fresh mud. Paint alone will not hide a water mark. It will tint it, which is worse.",
      "Cut in, then roll while the edge is still open if you can. Two thinner coats beat one heroic coat.",
      "Eggshell or satin on walls. Semi-gloss survives trim and bathrooms better. Flat ceilings hide your sins.",
      "Pull tape while the last coat is still a little soft so the line stays a line."
    ],
    script: "I want this room painted, walls and trim, color I'll specify. Please include patching nail holes, caulking trim, and primer on repairs. Ceilings only if we add them now. Furniture moving either included or clearly not. I'm not paying a change order to find out nobody was moving the dresser.",
    redFlags: [
      "No talk of prep, just gallons and a date.",
      "They'll paint over a water stain without primer or without asking where the water came from.",
      "The quote is suspiciously low and the trim is 'extra.' Trim is not a surprise. You can see it from the doorway."
    ],
    askPro: [
      "Are nail holes, caulk, and primer on patches included?",
      "How many coats, and what if the old color is darker?",
      "Who moves and covers the furniture?",
      "Ceilings, doors, and closets: in or out? Say it in the quote."
    ],
    soundSmart: "Ask what sheen they recommend for the room you actually have. It signals you don't want a glossy living room that shows every taco.",
    materials: [70, 220],
    pro: [450, 1100],
    segments: [
      { id: "prep", name: "Patch, sand, caulk, and protect the room", detail: "The unsexy 70 percent. Also the difference between a paint job and a coating.", you: [15, 40], hire: [150, 350], pick: "you" },
      { id: "walls", name: "Cut and roll the walls", detail: "Two coats. Open a window. Don't invent a one-coat product with your feelings.", you: [0, 0], hire: [250, 600], pick: "you" },
      { id: "tall", name: "Ceilings, stairs, and two-story spaces", detail: "Hire the places where a fall is the real cost. Rolling a bedroom ceiling is still fair game if the ladder is boring and stable.", you: [0, 30], hire: [200, 500], pick: "you" },
      { id: "trim", name: "Doors and trim", detail: "Brush work. Worth it. Sand the glossy old stuff or the new paint will slide off like it owes you money.", you: [10, 30], hire: [150, 400], pick: "you" }
    ],
    faqs: [
      { q: "Do I really need two coats?", a: "Yes, unless the old and new colors are cousins and the can truly says one-coat, and even then the second coat is how it looks like an adult did it. Thin coats. Your roller is not a frosting knife." },
      { q: "Can I paint the trim the same day?", a: "You can, if the wall paint has set and you have a steady hand. Tape plus a damp rag for bleeds. Or paint the trim first and cut the walls after. Either order works. Rushing neither does." },
      { q: "The old color is screaming through.", a: "That's a tinted primer situation, not a third angry coat of the finish color. Gray and red old paint will bully a light color all afternoon." }
    ],
    related: ["drywall", "door", "light"]
  },
  {
    id: "drywall",
    title: "Patch drywall",
    category: "Interior",
    blurb: "The hole is honest. The mud is where your patience goes public.",
    aliases: ["drywall", "sheetrock", "hole in the wall", "patch", "spackle", "doorknob hole", "joint compound"],
    beers: 2,
    time: "Several short sessions, because mud has to dry, and it does not care about your schedule",
    permit: "No",
    recommended: "diy",
    forecast: "Good, if you stop sanding before the patch becomes a valley.",
    answers: {
      default: "Small holes are yours. Fist-sized holes are yours. A doorknob-shaped confession is yours if you can wait for coats to dry. The skill isn't courage. It's thin mud, then thinner mud, then walking away.",
      cost: "A patch kit or a small piece of drywall, tape, and mud is $20 to $60. A handyman is often $150 to $400 because they have to come back for coats, which is the actual product you're buying: return trips.",
      time: "Three visits of 20 minutes beats one heroic night. Drying is the schedule. A California patch before dinner can be paint-ready the next day if the hole was modest and you didn't frost it.",
      diy: "Yes. Back the hole with wood or use a patch plug, tape it, skim it, sand it, prime it. Shine a light across the wall and your mistakes will introduce themselves, which is a gift.",
      hire: "Hire the texture match if the wall is knockdown or orange peel and you care, or if the hole is big enough to be called 'a missing panel.' Also hire it when the hole exists because of water. The stain is gossip. The leak is the story."
    },
    egoTrap: "One inch of mud so you 'only do it once.' It will crack, shrink, and sand like a sidewalk. Thin coats. This is lasagna, not concrete.",
    stopIf: "The drywall is soft, moldy, or the hole is a window into a plumbing problem. Patching that is concealing evidence. Find the water first.",
    tools: ["Drywall saw or a jab saw", "Scrap wood or a patch kit", "Mesh or paper tape", "Joint compound, the premixed bucket", "6-inch and 10-inch knives", "Sanding sponge", "Primer"],
    moves: [
      "Square up the hole. Organic holes fight you. Geometry is calmer.",
      "Backing board screwed behind the opening gives the patch something to trust.",
      "Tape the seams. Untaped mud is a future crack with a fresh haircut.",
      "First coat fills. Second coat feathers wider. Third coat is almost a rumor. Sand between, lightly.",
      "Hold a light along the wall. If you can see it, so can everyone else at 6 p.m.",
      "Prime before you paint or the patch will flash like a billboard that says I LIVE HERE NOW."
    ],
    script: "I have drywall damage in this room. I want the holes patched, taped, sanded, and primed so they're paint-ready. If the texture won't match, tell me before you skim the whole wall. If you see water damage, stop and show me.",
    redFlags: [
      "They'll paint it the same visit they mud it.",
      "Water staining gets buried and nobody asks about a leak.",
      "The quote includes 'texture match' with no look at the actual texture. Knockdown is not orange peel. You can tell. So can the wall."
    ],
    askPro: [
      "How many coats, and is primer included?",
      "Can you match the existing texture, or are we skimming a larger area?",
      "Are return trips for drying included in the price?"
    ],
    soundSmart: "Ask if they'll prime the patch. Unprimed mud soaks paint differently and the repair stays visible, which defeats the entire deception.",
    materials: [20, 80],
    pro: [175, 450],
    segments: [
      { id: "cut", name: "Cut a clean hole and screw in a backer", detail: "Make the wound geometric. Screw a scrap behind it. This part is oddly fun.", you: [0, 20], hire: [60, 120], pick: "you" },
      { id: "mud", name: "Tape and feather the mud", detail: "Thin coats, drying time, a light across the wall. The whole craft is here.", you: [0, 25], hire: [120, 280], pick: "you" },
      { id: "texture", name: "Match knockdown or orange peel", detail: "A spray texture can is a gamble. Hiring this is reasonable if the wall is a statement and you are not.", you: [10, 30], hire: [100, 250], pick: "you" },
      { id: "prime", name: "Prime and paint the spot", detail: "Prime first. Then paint corner to corner of that wall if the color won't blend. Touch-up dots are visible to enemies and in-laws.", you: [15, 40], hire: [50, 150], pick: "you" }
    ],
    faqs: [
      { q: "Spackle or real joint compound?", a: "Tiny nail holes can take spackle. Anything with a seam wants joint compound and tape. Spackle on a fist-hole is how you get a divot with confidence." },
      { q: "Can I paint it tonight?", a: "If the mud is actually dry, not just bored. Cold rooms lie. If your finger leaves a mark, the paint will too, forever, under a different sheen." },
      { q: "The patch keeps cracking.", a: "Usually no tape, or the piece behind it is moving. A patch needs backing and tape. More mud on a crack is just a thicker crack." }
    ],
    related: ["paint", "tv", "door"]
  },
  {
    id: "backsplash",
    title: "Tile a backsplash",
    category: "Interior",
    blurb: "The first row decides what kind of person you are for the next six hours.",
    aliases: ["backsplash", "back splash", "subway tile", "kitchen tile", "tile backsplash", "herringbone"],
    beers: 3,
    time: "A weekend, plus grout the next day",
    permit: "No",
    recommended: "split",
    forecast: "Huge if the lines are straight. They will touch the tile. Accept this.",
    answers: {
      default: "A straight subway-tile backsplash on a flat wall is a genuine weekend win. Herringbone, mosaic sheets, or a wall that isn't square is how Saturday becomes a personality. The tile is the easy photo. The outlets and the first row are the job.",
      cost: "Tile and supplies for a normal kitchen run often land around $150 to $500. A pro install is commonly $800 to $2,200 for that same run, because outlets, inside corners, and not getting thinset on the toaster are the craft.",
      time: "One day to set a simple layout if you cut on a wet saw you reserved yesterday, not this morning. Grout waits until the thinset actually cured. Your schedule does not outrank chemistry.",
      diy: "You can do a simple layout. Rent or buy a wet saw, protect the counters like they're innocent, and plan the outlet cuts before you mix anything. If you've never cut a tile, buy ten extra and make the mistakes where nobody will hang them.",
      hire: "Hire an electrician if outlet boxes need to come forward to sit flush with the new tile. Hire the tile if the layout is fancy, the wall waves, or the kitchen is the room you cook in tomorrow. A half-tiled backsplash is a conversation you will have every morning."
    },
    egoTrap: "Starting with a full tile in the most visible spot and discovering the window side ends in a 3/8-inch sliver. Lay it out dry. The sliver should hide in the corner you barely see, not next to the faucet where you repent.",
    stopIf: "The wall is soft, the backsplash is hiding a leak under the window, or you're about to tile over grease you didn't wash. Also stop if the only saw available is a dull score-and-snap and your tile is porcelain. Porcelain laughs at optimism.",
    tools: ["Wet saw or a good score cutter for simple ceramic", "Notched trowel", "Tile spacers and a level", "Sponge you can ruin", "Outlet box extenders, if needed", "Grout, float, and matching caulk for the counter joint"],
    moves: [
      "Degrease the wall. New tile will not stick to last year's stir-fry.",
      "Find the centerline of the visible run and dry-lay the first course, including spacers. Move the layout until the cuts look intentional.",
      "Turn off the outlet breakers. Tile around boxes, or have the boxes extended so the devices land flush. Cover plates should sit on tile, not hover like a dock.",
      "Comb the thinset in one direction. Don't glob. Support each tile. Wipe faces now, not tomorrow when it's armor.",
      "Grout after cure. Caulk the joint where tile meets counter. Grout in that joint cracks because counters move and grout doesn't have a sense of humor.",
      "Wait on the cure times before the range goes back. Sliding a wolf appliance across fresh grout is a genre of regret."
    ],
    script: "I want a tile backsplash on this run, material I'll supply or approve. Please include layout so we don't end on slivers, cuts at outlets and corners, grout, and caulk at the counter. If the outlet boxes need extenders, say so as its own line. I'd like the outlets dead while you work.",
    redFlags: [
      "They'll grout the counter joint instead of caulking it.",
      "No dry layout. They start in a corner and 'see how it goes.'",
      "Outlets get buried under tile edges with the cover plate doing structural work."
    ],
    askPro: [
      "Will you dry-lay the first course so I can see the cuts?",
      "Are outlet extenders needed, and who does that work?",
      "Grout color, spacer size, and caulk at the counter — what's the plan?",
      "How long before we can use the counters and range?"
    ],
    soundSmart: "Ask where the layout starts and where the small cuts will land. A good tile person lights up. A bad one says 'it'll be fine' and starts next to your most visible outlet.",
    materials: [160, 550],
    pro: [900, 2300],
    segments: [
      { id: "protect", name: "Degrease, cover counters, pull the range", detail: "Prep is free victory. Thinset on a cooktop is a permanent decision.", you: [15, 40], hire: [0, 0], pick: "you" },
      { id: "outlets", name: "Extend outlet boxes so devices sit flush", detail: "This is the electrician chunk when boxes have to move forward. Kill the breakers either way.", you: [0, 0], hire: [180, 450], pick: "hire" },
      { id: "tile", name: "Layout, thinset, cut, and set the tile", detail: "The satisfying part, and the part where a wet saw earns its rental.", you: [40, 90], hire: [500, 1400], pick: "you" },
      { id: "grout", name: "Grout, wipe, and caulk the counter", detail: "Next day. Caulk the change of plane. Then everyone may touch it, which they will.", you: [15, 40], hire: [120, 250], pick: "you" }
    ],
    faqs: [
      { q: "Subway or something fancier?", a: "First backsplash: subway, stacked or one-third offset, full pieces in the eye-line. Herringbone is a second-project layout. It produces more cuts than glory if the wall is wavy." },
      { q: "Can I use mastic from a tube?", a: "Premixed adhesive can be fine for a dry backsplash of small ceramic tile. Follow the product. Don't use a premix where a range gets seriously hot unless the bucket says so. When in doubt, modified thinset is the boring correct answer." },
      { q: "The outlets will be recessed behind the tile.", a: "Then the boxes need extenders or the devices need to come forward. Don't just crank the cover plate down until it bends. That's how outlets crack and also how they fail inspection with the person who lives with them, which is you." }
    ],
    related: ["paint", "disposal", "light"]
  },
  {
    id: "vinyl",
    title: "Vinyl plank floors",
    category: "Interior",
    blurb: "Click-together flooring. The room is the easy part. The door jambs are the boss.",
    aliases: ["vinyl plank", "lvp", "lvt", "luxury vinyl", "click floor", "flooring", "laminate floor"],
    beers: 2,
    time: "A weekend for a couple of rooms, if the floor underneath is telling the truth",
    permit: "No",
    recommended: "diy",
    forecast: "Big. New floors make a house feel like you meant to do this.",
    answers: {
      default: "Floating vinyl plank is the IKEA of flooring: click, stagger the seams, leave a gap at the walls, and don't trap it so it can't move. The planks are friendly. Toilet resets, undercut jambs, and a wavy subfloor are the actual opponents.",
      cost: "Material often runs $2 to $5 a square foot for something you'd admit to. A bedroom of DIY might be a few hundred dollars. Pro install is often $3 to $8 a foot on top of material, and it climbs when furniture, stairs, and a toilet get involved.",
      time: "One room: a Saturday. A whole first floor: a long weekend and a lot of baseboard language. Acclimate the boxes in the room first. The instructions are not a poem. They are structural.",
      diy: "Yes, if the subfloor is flat, dry, and firm. You pull baseboards, undercut jambs so the plank can slide under, stagger the end joints, and keep an expansion gap. The click only works when the floor underneath isn't shaped like a Pringle.",
      hire: "Hire the install if the floor is out of flat and needs real leveling, if there are stairs, or if you're doing a whole level and you like your knees. Hire a plumber for the toilet reset if the flange situation already scares you. The floor is a bad day to also learn toilets, unless you enjoy crossover episodes."
    },
    egoTrap: "Tapping the long edge until it 'sort of' clicked. Sort of becomes a seam that opens in August. If it didn't click, it didn't happen. Pull it back and do it again before the row gets long.",
    stopIf: "The subfloor is soft, wet, or mushy. A new floor on a wet subfloor is a sandwich you built for mold. Also stop if the flatness is so far off the plank maker's spec that you're about to fill a valley with folded paper. That's not leveling. That's a wish.",
    tools: ["Pull bar and tapping block", "Spacers", "Jamb undercut saw or an oscillating tool", "Square and a utility knife", "Tape measure", "Knee pads, if you enjoy your future"],
    moves: [
      "Read the acclimation time and the flatness spec on your actual product. They are not all the same.",
      "Pull baseboards. You'll put them back on top of the gap, which hides the gap. Quarter round is the backup plan, not the dream.",
      "Undercut the door jambs so planks slide under. Cutting planks around a jamb profile is how nice floors start looking nervous.",
      "Start straight. A first row that wanders will gift that wander to the entire room.",
      "Stagger end joints. Random is a plan, not a scramble. Avoid little starter pieces.",
      "Toilets come up so the flooring can run under them, then get reset with a new wax ring. Don't cut a perfect toilet-shaped hole and hope. The flange area is not a place for hope."
    ],
    script: "I want vinyl plank in these rooms. Please confirm the subfloor is flat and dry enough for the product. Include baseboard removal and reinstall or new base, undercut jambs, transitions, and a toilet reset if the bathroom is in scope. If leveling is needed, price it before install day.",
    redFlags: [
      "They'll float it over a visibly wavy floor and say the pad will fix it. The pad is not a jackhammer.",
      "No plan for the toilet or the jambs. Those are the job.",
      "They want a huge deposit and a two-hour start with material you haven't approved."
    ],
    askPro: [
      "Does the subfloor meet the flatness spec, and what does leveling cost if it doesn't?",
      "Are jambs, transitions, baseboards, and the toilet included?",
      "Who moves the furniture, and where does it sleep?",
      "What's the warranty if a seam opens because of the install?"
    ],
    soundSmart: "Ask them what the manufacturer wants for flatness, in fractions of an inch. People who do this can answer. People who don't will say 'it's pretty close.'",
    materials: [350, 1400],
    pro: [1200, 3800],
    segments: [
      { id: "demo", name: "Move furniture and pull baseboards", detail: "Label the base if you're reusing it. Future you cannot identify a 7-foot stick by smell.", you: [0, 30], hire: [150, 400], pick: "you" },
      { id: "flat", name: "Level a floor that's lying about being flat", detail: "Leave this off if a straightedge says you're close. Flip it when the dip is real. Leveler is dusty, specific, and worth hiring.", you: [0, 0], hire: [300, 900], pick: "you" },
      { id: "lay", name: "Undercut jambs and click the floor in", detail: "The satisfying chunk. Straight first row. Full clicks. Expansion gap.", you: [20, 60], hire: [600, 1800], pick: "you" },
      { id: "toilet", name: "Pull and reset the toilet", detail: "New wax ring, no rocking. If flange drama already exists, this chunk is a plumber, not a side quest.", you: [20, 50], hire: [180, 350], pick: "you" },
      { id: "trim", name: "Baseboards and transitions back on", detail: "This is the frame on the painting. Nail them into the wall, not through the floating floor, or you pinned the floor in place and defeated the entire idea.", you: [20, 80], hire: [150, 400], pick: "you" }
    ],
    faqs: [
      { q: "Do I need underlayment?", a: "Some planks have it attached. Adding another cushion under those can make the joints flex and fail. Read the box. More squish is not more luxury. It is more movement." },
      { q: "Can it go in a bathroom?", a: "Many vinyl planks can. The subfloor still has to be sound, and the perimeter still needs the right seal at the tub. A bathroom is not a place to freelance a product rated for dry rooms only." },
      { q: "The row stopped clicking halfway across.", a: "Something's off — debris in the joint, a bowed plank, or the floor underneath rising. Don't hammer it into denial. Back up, find the bump, continue. The next five rows will not forgive you." }
    ],
    related: ["toilet", "paint", "door"]
  },
  {
    id: "deck",
    title: "Fix a spongy deck",
    category: "Exterior",
    blurb: "Boards are a costume. Joists are the plot.",
    aliases: ["deck", "spongy", "spongy deck", "trampoline", "deck boards", "soft boards", "railing", "deck stain", "joist"],
    beers: 4,
    time: "A weekend for boards on a solid frame. A real project if the frame is cake.",
    permit: "Often, once you're changing structure or railings",
    recommended: "split",
    forecast: "They will walk on it and bounce on purpose to test you. Build accordingly.",
    answers: {
      default: "Spongy is not a personality. Spongy is wood asking you nicely before it asks your ankles. Boards are the part you can see. Joists, posts, and the ledger where the deck meets the house are the part that decides whether this is a repair or a rebuild.",
      cost: "Replacing boards on a sound frame might be $300 to $1,200 in material for a modest deck. Structural repairs — joists, posts, ledger — often run $1,500 to $6,000 with a pro, and a full rebuild is a different number with a comma you will remember. Get the frame diagnosed before you fall in love with a board color.",
      time: "Board swaps are a Saturday or two. Joist and ledger work is a planned project with inspections, not a Sunday night special before the barbecue.",
      diy: "You can pop bad boards, screw down new ones, and stain the whole thing once the structure is actually solid. You can also probe the frame yourself: a screwdriver should not sink into a joist like it's frosting. Photos of the ledger, the posts, and any soft spots will make a contractor's quote faster and harder to inflate.",
      hire: "Hire the structure. Especially the ledger and flashing at the house, posts, and any railing that is the only thing between a person and a drop. Hire railings when the deck is high enough that a fail becomes a story told by someone else."
    },
    egoTrap: "Covering rotten joists with pretty new boards so the cookout looks normal. That's gift wrap on a trap door. The bounce will still introduce itself, just on a nicer surface.",
    stopIf: "The ledger is pulling away from the house, posts are standing in dirt and mush, or you can push a tool through the frame. Stop boarding. That deck needs a structural human and probably a permit. Also stop if your repair plan is 'more screws.'",
    tools: ["Screwdriver for probing", "Drill/driver", "Pry bar and a cat's paw", "Circular saw", "Safety glasses", "A camera for the crimes you find underneath"],
    moves: [
      "Walk it slowly. Mark every soft board. Then get under it, or at least look under it, before you buy anything pretty.",
      "Probe joists, posts, and the ledger. Solid wood resists. Rot invites the screwdriver in.",
      "If the frame is sound, replace boards with the right screws, gaps, and a picture side that faces up. Mind the manufacturer if it's composite.",
      "If the frame is soft, the next call is a deck contractor or a carpenter, not a lumber cart.",
      "Railings are code, not decor, once the drop can hurt someone. Loose railings get repaired before the party, not taped 'so people know.'",
      "Stain and clean is the victory lap, after the structure tells the truth."
    ],
    script: "I want the deck evaluated before anyone sells me boards. Please inspect the ledger and flashing, joists, posts, and railings, and separate the quote into structural repairs versus new boards. If it needs a permit, say so. I'm willing to demo old boards and stain it myself if the frame is sound or once you've made it sound.",
    redFlags: [
      "They quote new boards without looking underneath.",
      "The ledger is waved off. The ledger is how decks leave houses.",
      "No mention of flashing, posts, or footings, but a big number for 'composite upgrade.'",
      "They'll skip a permit on work you can tell is structural because 'the county's a pain.' The county is less of a pain than a deck failure."
    ],
    askPro: [
      "What's the condition of the ledger, flashing, joists, and posts — in writing, with photos?",
      "Which parts are structural, and which of those can I demo or re-board myself?",
      "Are railings up to current height and strength for this drop?",
      "Is a permit required for the repair you're proposing?"
    ],
    soundSmart: "Ask them to price 'frame' and 'skin' separately. The skin is the boards. Anyone who won't separate them is selling you a costume.",
    materials: [300, 1400],
    pro: [1800, 6500],
    segments: [
      { id: "inspect", name: "Probe the frame and photograph the ledger", detail: "You can do the inspection tour. A screwdriver and a flashlight will tell you if this is a board job or a structural confession.", you: [0, 0], hire: [150, 350], pick: "you" },
      { id: "demo", name: "Pull the bad boards", detail: "Sweaty, satisfying, full of spiders. Watch what you step on once the skin is off.", you: [0, 40], hire: [250, 700], pick: "you" },
      { id: "ledger", name: "Ledger, flashing, posts, and rotten joists", detail: "The house connection and the frame. This one stays with a pro when there's rot, movement, or a real drop.", you: [0, 0], hire: [800, 3500], pick: "hire", lock: "hire", lockReason: "Ledger and structural frame stay hired. A spongy deck is not the place to learn engineering by feel." },
      { id: "boards", name: "Screw down new boards", detail: "Once someone who knows says the frame is real. Gapping, fasteners, and a straight first board. Lumber is already in the materials number.", you: [25, 80], hire: [400, 1200], pick: "you" },
      { id: "rail", name: "Repair or replace the railing", detail: "If a person could fall far enough to get hurt, hire this and ask about code. If it's a ground-level edge, you have more leash.", you: [80, 300], hire: [400, 1600], pick: "hire" },
      { id: "stain", name: "Clean and stain", detail: "The glory lap. Two dry days. Follow the can, not the neighbor who 'uses motor oil.'", you: [40, 150], hire: [300, 800], pick: "you" }
    ],
    faqs: [
      { q: "It's only soft in one spot.", a: "Then find out why that spot. A single soft board over a solid joist is a board. A single soft spot over a mushy joist is a joist. The surface will not tell you. Your screwdriver will." },
      { q: "Can I just sister a joist?", a: "Sometimes that's the repair. It has to bear on something real and be fastened like it means it, and the thing that rotted the first joist has to be done rotting. If you're guessing, this is the hired chunk. Sistering is a technique, not a motto." },
      { q: "Composite or wood?", a: "Wood is cheaper and friendlier to repair. Composite is quieter about maintenance and pickier about gapping, fastening, and a frame that can handle it. Don't skin a tired frame in the expensive stuff. That's a tuxedo on a bad idea." }
    ],
    related: ["fence", "paint", "pressure"]
  },
  {
    id: "fence",
    title: "Fix a fence",
    category: "Exterior",
    blurb: "Pickets are easy. Posts are the fence. Everything else is a costume with nails.",
    aliases: ["fence", "picket", "fence post", "gate", "leaning fence", "dog escaped", "panel fence"],
    beers: 3,
    time: "A Saturday for boards. A weekend for posts, after 811 marks the yard.",
    permit: "Sometimes, for new runs or height. Call 811 before you dig, every time.",
    recommended: "split",
    forecast: "The dog has opinions. The neighbor has more. A plumb gate will silence most of them.",
    answers: {
      default: "If a post wiggles, new pickets will not save you. You'll just have a nicer thing that leans. Boards and a tired gate are a you-shaped weekend. Posts in concrete, property lines, and anything that requires a hole are where a helper with a post-hole setup earns their money.",
      cost: "A few cedar pickets are $5 to $15 each, so a board repair can be under $150. Resetting posts or a gate that actually latches might be $400 to $1,500. A new run of fence is often $25 to $60 a foot installed, and it varies wildly with height, material, and whether your yard is secretly a rock garden.",
      time: "Pickets: an afternoon. Posts: a day plus concrete cure, so the gate doesn't get hung on something that's still deciding where it lives. Call 811 a few days before you dig, not the morning of.",
      diy: "Replace pickets, reset a latch, and even set a post if the hole is straightforward and utilities are marked. A gate is just a rectangle that has to stay a rectangle. Bracing and hinges are the whole magic trick.",
      hire: "Hire a run of new posts, anything on a property line you're not sure about, and gates that have to look perfect next to a neighbor who measures. Also hire it when the quote you got feels like a car payment — get two more, and ask how much is posts versus pickets. You might be looking at a luxury number for a lumber problem."
    },
    egoTrap: "Digging because you 'know where the lines are.' You do not. 811 is free. A gas line introduced to a post-hole digger is the most expensive fence in the county.",
    stopIf: "Utility marks aren't back yet, the hole is filling with water from something that isn't rain, or you're about to put a post on the neighbor's side of a line you only feel in your heart. Also stop if the 'fence' is holding back soil. That's a retaining wall. Different species. Different failure.",
    tools: ["811 ticket, first", "Post level", "Circular saw or handsaw", "Drill", "Gravel for the base of holes", "Concrete if you're setting posts", "Clamps, so the gate stays square while you fasten it"],
    moves: [
      "Call 811 before any digging. Wait until the marks are actually in the yard.",
      "Wiggle every post. Mark the actors versus the scenery.",
      "Replace pickets with the good side facing the right way and a consistent gap. A string line is the difference between a fence and a rhythm section.",
      "Posts get a deep enough hole, gravel at the bottom, and concrete that isn't a volcano mound directing water at the wood. Check local frost depth. Shallow posts lean. It's their whole hobby.",
      "Build the gate as a square, brace it from the hinge side down to the latch side, and hang it with room to swing. Latches are adjustable. Gravity is not.",
      "If this fence is also the property line, talk to the neighbor before the hole, not after the concrete."
    ],
    script: "I want the leaning posts and the gate repaired, not necessarily a whole new fence. Please price post replacement separately from pickets. I'll handle pickets and staining if the posts and gate are solid. Digging waits on 811 marks. If you think the layout crosses a property line, stop and tell me.",
    redFlags: [
      "They'll dig this week and have never heard you say 811.",
      "One price for 'the fence' with no count of posts, no height, no material.",
      "The gate isn't in the quote even though everyone can see the gate. The gate is why you called.",
      "They set posts in dry concrete dumped in a hole with no water, or in a hole the depth of a cereal bowl."
    ],
    askPro: [
      "How many posts are actually failing, and what's the per-post price?",
      "Who calls 811, and will you wait for marks?",
      "Is the gate included, square, and latched?",
      "What are we doing about the property line and the neighbor's side?"
    ],
    soundSmart: "Ask for posts, pickets, and gate as three lines. The quote that felt like a car payment often collapses once the pickets come out of the luxury package.",
    materials: [80, 600],
    pro: [700, 2800],
    segments: [
      { id: "811", name: "Call 811 and wait for marks", detail: "Non-negotiable if anything goes in the ground. It's free and it makes you the responsible one, which is a rare fencing emotion.", you: [0, 0], hire: [0, 0], pick: "you", lock: "you", lockReason: "You still want this done in your name. Confirm the ticket exists before anyone brings a digger." },
      { id: "pickets", name: "Replace broken pickets and rails", detail: "String line, even gaps, screws that won't bleed rust down the face by July. Boards themselves are in the materials number.", you: [15, 45], hire: [200, 700], pick: "you" },
      { id: "posts", name: "Reset or replace posts", detail: "The real fence. Hire it if there are more than a couple, the holes are rocky, or concrete is involved and your back has a union.", you: [30, 120], hire: [350, 1400], pick: "hire" },
      { id: "gate", name: "Rebuild the gate so it latches", detail: "Square, braced, hinged, latch at the right height. A gate that needs a hip-check is not finished.", you: [40, 180], hire: [250, 800], pick: "you" },
      { id: "stain", name: "Stain or seal it", detail: "Once the wood is dry and done being repaired. Same weekend as concrete is how stain gets on a sidewalk.", you: [30, 120], hire: [200, 600], pick: "you" }
    ],
    faqs: [
      { q: "The quote is huge and the fence is just a little tired.", a: "Ask them to split posts, pickets, and gate. You may only need two posts and a Saturday. A lot of fence quotes assume replacement because replacement is easier to estimate than judgment." },
      { q: "Can I set a post in gravel only?", a: "Sometimes, in the right soil, with the right depth and compaction. Concrete is the common answer because it resists wobble. The wrong answer is a shallow hole and a prayer. Frost and dogs will unionize against it." },
      { q: "My neighbor owns the fence. Now what?", a: "Then it's a conversation before it's a project. Patching their fence without asking can become the most expensive free labor of your life. A beer and a plan beats a surprise post on their side." }
    ],
    related: ["deck", "pressure", "door"]
  },
  {
    id: "gutters",
    title: "Gutters",
    category: "Exterior",
    blurb: "This is a ladder talk, not a skill talk.",
    aliases: ["gutter", "gutters", "downspout", "gutter cleaning", "overflow", "gutter guards", "soffit"],
    beers: 2,
    time: "A few hours for a one-story clean. Longer if the ladder plan is 'I'll be careful.'",
    permit: "No",
    recommended: "split",
    forecast: "Quiet gratitude, until a downspout dumps on the basement window. Then it's loud.",
    answers: {
      default: "Cleaning gutters is not complicated. Falling off a ladder is. If the house is one story, the ladder is the right height, and someone is there to keep it honest, you can clean them. Second story, rotten fascia, or a roof pitch that makes you narrate your own documentary: hire the clean and keep your ankles for other hobbies.",
      cost: "A professional clean is often $150 to $400 depending on height and how many trees think they live there. A handyman rehang and pitch correction might be $300 to $900. Replacing a whole run is commonly $8 to $20 a foot installed, more when fascia behind it has turned to oatmeal.",
      time: "Two hours on a ranch house. All day emotionally on a two-story colonial. The scooping is fast. The ladder moves are the schedule.",
      diy: "One story, stable ladder, a helper, gloves, a scoop, and a hose. Bag the sludge. Flush the downspouts until water comes out where water is supposed to come out. If the ladder has to sit on a slope, in a bush, or on a deck railing, that is not DIY. That is a stunt.",
      hire: "Hire second-story work, steep roofs, and anything where the gutter is actually falling off. Also hire it if the fascia behind the gutter is soft. A new gutter screwed into mush is jewelry on a problem. Pay for the wood repair, then the aluminum."
    },
    egoTrap: "Leaning a ladder on the gutter and climbing to the top rung because the corner is 'right there.' The gutter is not a ladder accessory. Neither is the top rung. Most of the serious injuries hiding in home projects live on ladders, not in tool bags.",
    stopIf: "The ladder cannot be set at a stable angle on stable ground, you're working alone on a second story, or the fascia crumbles when you touch it. Get down. The leaves will wait. Gravity will not.",
    tools: ["Ladder that reaches without the top rung", "Stabilizer or a helper acting like one", "Gloves and a scoop or a small trowel", "Hose", "Bucket or tarp", "Safety glasses, because gutter sludge seeks eyes"],
    moves: [
      "Set the ladder on firm ground, correct angle, top well above the gutter line but not used as a step. Have a person whose job is the ladder.",
      "Scoop into a bucket or onto a tarp. Do not rinse a pound of shingle grit into the downspout first. That's how you invent a clog with a hose.",
      "Flush after it's scooped. Water should exit the downspout, not come out a seam like a decorative fountain.",
      "Extensions at the bottom should carry water several feet from the foundation. A downspout that kisses the basement is doing a bit.",
      "If hangers are loose or the gutter holds a pond, the pitch is wrong. Fixing pitch is a small project. Pretending it's fine is a fascia project later.",
      "Guards are optional. They are not a substitute for a spring and fall look, no matter what the brochure promised at the home show."
    ],
    script: "I need the gutters cleaned and flushed, and I want you to tell me if the pitch, hangers, or fascia are failing before you upsell guards. One story I'll consider doing myself next time. If fascia is soft, price the wood separately from new gutter. Downspouts should discharge away from the foundation.",
    redFlags: [
      "A guard package gets quoted before anyone looked at pitch or fascia.",
      "They'll walk a steep roof in sneakers because the gutter is 'quick.'",
      "No plan for where the downspout water actually goes.",
      "The ladder is a cracked special from a different decade. You can refuse anyone's ladder. It's your house and your lawsuit."
    ],
    askPro: [
      "Are you cleaning from a ladder or from the roof?",
      "Will you flush every downspout and show me water exiting?",
      "What's failing: hangers, pitch, seams, or the fascia behind them?",
      "Are guards an option after the system works, or the actual product you're selling?"
    ],
    soundSmart: "Ask where the water goes after it hits the ground. A clean gutter that dumps into the foundation is a very shiny way to buy a sump pump.",
    materials: [25, 180],
    pro: [180, 750],
    segments: [
      { id: "setup", name: "Ladder setup with a second person", detail: "The safety plan is the project. If you can't say the setup out loud and feel good, you hire the clean.", you: [0, 0], hire: [0, 0], pick: "you" },
      { id: "clean", name: "Scoop and flush a one-story run", detail: "Gloves, scoop, then hose. Confirm every downspout actually downs the spout.", you: [0, 30], hire: [150, 350], pick: "you" },
      { id: "high", name: "Second story, or any ladder setup that feels like a stunt", detail: "One clean story can stay on You. The moment the gutter is up where a fall becomes an ambulance, flip this and leave it there.", you: [0, 0], hire: [200, 500], pick: "you" },
      { id: "pitch", name: "Reset hangers and fix the pitch", detail: "Water should run to the downspout, not take a nap in the middle. A small repair if the fascia is solid.", you: [15, 60], hire: [200, 600], pick: "hire" },
      { id: "extend", name: "Downspout extensions away from the house", detail: "Cheap, huge, and you can do it without a ladder. Aim water several feet out, downhill if the yard allows.", you: [20, 80], hire: [75, 200], pick: "you" }
    ],
    faqs: [
      { q: "Are gutter guards worth it?", a: "Sometimes, under pines or maples, if the guard matches the debris. They reduce cleaning. They don't end it, and they don't fix pitch. Buy them after the water runs correctly, not instead." },
      { q: "Water pours over the outside edge.", a: "Usually a clog, a low spot, or a hanger that gave up. Overflow toward the house means the back is lower than the front, which is how fascia rots. That's a fix, not a taller gutter." },
      { q: "How often do I clean them?", a: "At least once a year, and again after the trees do their thing. If a basement exists, look after big storms too. Five quiet minutes with a flashlight beats a Saturday with a shop vac in the basement." }
    ],
    related: ["roof", "pressure", "deck"]
  },
  {
    id: "roof",
    title: "A roof leak",
    category: "Exterior",
    blurb: "Find the stain. Do not find your balance on the shingles.",
    aliases: ["roof", "shingle", "ceiling stain", "drip from the ceiling", "roof leak", "flashing", "pipe boot"],
    beers: 5,
    time: "An hour to protect the room. The roof itself is someone else's shift.",
    permit: "Often, for anything beyond a tiny repair",
    recommended: "pro",
    forecast: "They will remember the bucket phase. End it quickly and you become a legend anyway.",
    answers: {
      default: "You can be the person inside. Move the couch, catch the drip, and look around the attic without stepping through the drywall. You should not become the person on the roof unless that is already your job. Most 'I'll just tar it' afternoons turn into tar in three valleys and a drip that moved six inches to the left out of spite.",
      cost: "A localized repair — a pipe boot, a flashing, a few shingles — often runs $350 to $1,500 if the decking is still solid. If the plywood is soft or the leak has been marinating, the number grows into real roofing. A full replacement is a quote with options, not a Saturday.",
      time: "Containment is today. A roofer might be there this week, weather willing. Drywall repair waits until the roof has been dry long enough to mean it. Painting a wet stain is a magic trick with one outcome.",
      diy: "Inside work: bucket, plastic, move storage, and a careful attic look from the attic floor. Note wet wood, daylight, and the spot above the stain. Photos help a roofer. Walking the roof, pulling shingles, and smearing sealant are how small leaks get roommates.",
      hire: "Hire the roof work. Ask for the cause, not just a patch: boot, flashing, valley, ice dam, or a skylight doing skylight things. Get the repair in writing. If two roofers say the roof is at the end of its life, believe the part where they agree, then compare the replacement quotes without letting panic pick the first truck."
    },
    egoTrap: "Caulking the shingle you can see from the driveway. Water travels. The stain in the ceiling is the exit, not the entrance. The entrance is uphill, usually, and smug about it.",
    stopIf: "You smell mildew strong enough to name, the ceiling is sagging, or you're about to go up a wet roof because the drip is happening right now. Sagging ceilings can fail. Contain from below, and if the bulge is heavy with water, a careful controlled drain from below beats a surprise collapse. If you're not sure you can do that safely, leave the room and call someone who is.",
    tools: ["Buckets and plastic", "A lamp for the attic", "Plywood to stand on in the attic if the joists are the only floor", "Your phone for photos", "A roofer's phone number", "Patience about the ceiling patch"],
    moves: [
      "Move what the water wants. Plastic over the big stuff. A bucket under the active drip.",
      "If a bulge is full of water and might break, contain the room and relieve it from below only if you can do it without getting under a collapsing mess. When in doubt, stay out and call.",
      "From the attic, look for wet sheathing and daylight around vents and chimneys. Walk on joists, not on drywall. Falling through your own ceiling is a bad way to locate the leak.",
      "Photograph everything. A roofer with photos is faster and less mystical.",
      "After the repair, wait through a real rain before you close the ceiling. Drywall is the credits. The roof is the movie."
    ],
    script: "I have an active leak showing up in this room. I need the cause found and repaired, not just tar on the nearest shingle. Please look at flashing, pipe boots, and the area uphill of the stain. If the decking is soft, stop and show me before replacing a bunch of it. I'd like photos of the problem and of the repair.",
    redFlags: [
      "A full replacement quote with no time spent looking for the actual leak.",
      "Tar as a personality. Mastic everywhere, explanation nowhere.",
      "They need the whole payment before anyone sees the roof.",
      "No talk of what happens if the plywood is rotten. That's the fork in the quote. Name it.",
      "They'll 'go up real quick' in the rain. You don't want a lawsuit with your repair."
    ],
    askPro: [
      "What do you think is leaking, and what else will you check uphill of the stain?",
      "Are photos of the cause and the fix included?",
      "What's the price if it's a boot or flashing, and what's the price if the decking is soft?",
      "How will we know it's fixed before I repair the ceiling?"
    ],
    soundSmart: "Say 'uphill of the stain' and 'photos of the cause.' It tells them you know the drip isn't standing directly under the hole.",
    materials: [25, 80],
    pro: [400, 1800],
    segments: [
      { id: "contain", name: "Protect the room and catch the drip", detail: "Buckets, plastic, moved boxes. This is the part you do today, from the floor.", you: [15, 50], hire: [0, 0], pick: "you" },
      { id: "attic", name: "Look from the attic without stepping through the ceiling", detail: "Joists only. Photos of wet wood and daylight. If the attic is sketchy, skip it and hand the roofer the indoor evidence.", you: [0, 0], hire: [100, 200], pick: "you" },
      { id: "roof", name: "Find and fix the leak on the roof", detail: "Boots, flashing, shingles, valleys. Their job. Their shoes. Their insurance.", you: [0, 0], hire: [350, 1600], pick: "hire", lock: "hire", lockReason: "Roof work stays locked to a pro. The view is not worth the intro to gravity." },
      { id: "ceiling", name: "Patch and paint the ceiling after it's actually dry", detail: "Wait through a rain or two. Then it's a drywall job, and that one can be yours.", you: [20, 70], hire: [200, 500], pick: "you" }
    ],
    faqs: [
      { q: "It only leaks in hard rain.", a: "Still a leak. Wind-driven rain often means flashing, a ridge, or a valley, not a random shingle you can see from the lawn. Catch the water, take notes on the weather, and let a roofer look while there's still evidence." },
      { q: "Can I slap roof cement on it?", a: "A tiny, known, temporary seal on a specific lifted shingle is a stopgap some people do. Smearing cement across a leak you haven't found is how you glue the water into a new path. If you can't name the hole, don't frost the roof." },
      { q: "The ceiling stain is brown but dry.", a: "It might be old. It might be shy. Prime with a stain blocker before paint, but only after you're sure the leak is history. Paint on an active problem makes a very informed-looking stain later." }
    ],
    related: ["gutters", "drywall", "paint"]
  },
  {
    id: "door",
    title: "Replace an exterior door",
    category: "Structure",
    blurb: "A prehung door is a rectangle you have to convince a hole to respect.",
    aliases: ["exterior door", "front door", "prehung", "door swap", "entry door", "storm door", "door draft"],
    beers: 3,
    time: "Most of a Saturday for a prehung swap in a square opening",
    permit: "Rarely, unless the opening size changes",
    recommended: "diy",
    forecast: "Immediate. Doors are the handshake of the house. Also the heating bill has thoughts.",
    answers: {
      default: "A prehung exterior door in a sound, square opening is a big-but-fair DIY. The trick isn't muscle. It's plumb, shim, and not discovering rot after the old door is already in the driveway. If the sill is mush or the opening is a parallelogram, the door is the easy part of a carpentry project.",
      cost: "A respectable prehung exterior door is often $300 to $1,200 for the unit. DIY stays near that, plus shims, foam, caulk, and a lockset if it didn't come with one. Installed, $900 to $2,500 is a common band, more if the jamb rot turns into framing.",
      time: "Five to eight hours when the opening is honest. Longer when every shim is a negotiation and the threshold has to meet a porch that settled during a different administration.",
      diy: "You can do this if you've confirmed the rough opening, the sill is solid, and you're willing to shim until a level says the hinge side is actually plumb. Foam the gap like an adult, not like a fire extinguisher. Too much foam will bow the jamb and the door will rub forever, quietly, like it's disappointed.",
      hire: "Hire it when there's rot, brick molding that scares you, a sidelight, or an out-of-square opening. Also hire it if the door is the only way to lock the house tonight. A half-hung exterior door is not a quirky camping story. It's a security story."
    },
    egoTrap: "Screwing the hinge side in before it's plumb because you're tired of holding it. That one impatient screw becomes the angle of the entire door. The shims were the project. The screws are just the signature.",
    stopIf: "The sill or the framing is soft, the opening is wildly out of square, or you'd have to cut structure to make a bigger door fit. Also stop if your plan for the night is a tarp and a promise. Put the old door back or have the new one ready to lock before you start.",
    tools: ["4-foot level", "Shims, a whole bundle", "Drill", "Caulk and low-expansion foam", "Pry bar", "Utility knife", "Someone to hold the other end without coaching you aggressively"],
    moves: [
      "Measure the rough opening, not just the old door slab. Width, height, and thickness. Write down the swing. Ins wing errors are a return-counter classic.",
      "Look at the sill and the jack studs. Probe for rot. If it's soft, the scope changed and that's okay.",
      "Protect the floor and the threshold of your patience. Exterior doors are heavier than they look in the showroom.",
      "Set the hinge side plumb first. Shims behind hinges. Then the top, then the latch side, with an even gap around the slab.",
      "Check that it latches without a hip-check before you foam anything.",
      "Low-expansion foam, caulk the exterior trim, and make sure the threshold meets the porch so water goes outside, which is its job."
    ],
    script: "I want this exterior door replaced with a prehung unit, same size opening. Please inspect the sill and framing for rot before demo and tell me if the scope changes. I need it plumb, foamed, caulked, locking, and weather-tight the same day. I'm not changing the opening size.",
    redFlags: [
      "They'll order a door off the slab size alone, no rough-opening measurement.",
      "Rot gets covered with trim. Trim is not a structural material, no matter how confident the brad nailer is.",
      "The quote doesn't mention the threshold and exterior caulk. That's how you buy a draft with a new paint color.",
      "They need the house open overnight. Hard no."
    ],
    askPro: [
      "Did you measure the rough opening and check the sill for rot?",
      "Is the unit prehung, and who supplies the lockset?",
      "Same-day secure and weather-tight — is that the plan if the opening is rotten?",
      "How are you flashing or caulking the exterior so water stays out?"
    ],
    soundSmart: "Ask whether the hinge side will be shimmed plumb before anything is foamed. People who hang doors will nod. People who set doors will change the subject to the color.",
    materials: [350, 1300],
    pro: [1000, 2600],
    segments: [
      { id: "measure", name: "Measure the opening and inspect for rot", detail: "Rough opening, swing, sill probe. This half hour decides whether you're buying a door or a carpentry project.", you: [0, 0], hire: [80, 150], pick: "you" },
      { id: "demo", name: "Pull the old door and trim", detail: "Careful demo if you're reusing exterior trim. Reckless demo if you're sure it's all getting replaced. Don't wreck the house wrap like it insulted you.", you: [0, 20], hire: [150, 300], pick: "you" },
      { id: "set", name: "Set, shim, and fasten the prehung unit", detail: "Hinge side plumb, even gaps, latch that catches. Hire this if the opening isn't square or the door is a 90-pound design statement.", you: [20, 50], hire: [350, 800], pick: "you" },
      { id: "weather", name: "Foam, flash, caulk, and threshold", detail: "Low-expansion foam only. Exterior caulk. Water goes out. This chunk is small and decides the heating bill.", you: [20, 60], hire: [100, 250], pick: "you" },
      { id: "lock", name: "Lockset and the strike that actually catches", detail: "Deadbolt aligned without carving the jamb into modern art. Test from outside. Then test again because you will doubt yourself at 10 p.m.", you: [30, 120], hire: [80, 180], pick: "you" }
    ],
    faqs: [
      { q: "Prehung or slab?", a: "Prehung unless the existing jamb is genuinely square, solid, and you're replacing only the slab with a match. Most tired exterior doors have tired jambs. The jamb is half the weather seal. Replace both." },
      { q: "There's rot under the sill.", a: "Then the door swap waits on carpentry. Cutting out mush and sistering framing is the project. A new door on a soft sill will sag into a door-shaped draft." },
      { q: "Can I do a double door or a door with glass?", a: "You can, if the opening is the same and the unit is built for it. Weight goes up, tolerance goes down, and a helper stops being optional. If the opening has to grow, you're in framing and header territory. That's hired work." }
    ],
    related: ["paint", "vinyl", "drywall"]
  },
  {
    id: "vanity",
    title: "Swap a bathroom vanity",
    category: "Plumbing",
    blurb: "It's furniture until you connect the water. Then it's a liability with drawers.",
    aliases: ["vanity", "bathroom vanity", "bath vanity", "sink vanity", "powder room vanity"],
    beers: 3,
    time: "A full Saturday",
    permit: "No, unless the plumbing has to move",
    recommended: "split",
    forecast: "High. A new vanity makes a small bathroom look like you hired a show. Keep the plumbing boring and the forecast holds.",
    answers: {
      default: "Setting the cabinet and the top is a dad job: level, screw to studs, don't murder the drywall. The shutoffs, the drain alignment, and the faucet are where religion starts. Put the faucet and drain on the countertop before the top goes against the wall. Future you, on your back inside a 24-inch cabinet, will send present you a fruit basket.",
      cost: "A normal vanity is $200 to $900. A top and faucet can double that if you discover marble and a personality. DIY can stay near the furniture price. A plumber to hook up a vanity you've already set is often $200 to $500. A full install by a contractor is commonly $700 to $1,800 if nothing has to move.",
      time: "A day if the new vanity is the same width and the valves work. Longer if the old one was caulked to the wall like a barnacle and the shutoffs are decorative.",
      diy: "You can demo, set, and level it, and you can do the hookups if the valves shut off and the drain lines up. Same location, same width: good DIY. Moving the drain to center a pretty cabinet: that's a plumber, because drains have rules and slopes and you have one afternoon.",
      hire: "Hire the hookup if the valves are bad, the trap is a science experiment, or the new sink doesn't land on the old drain. Hire the whole thing if the wall behind the old vanity is soft. A new cabinet on wet drywall is a very attractive mushroom farm."
    },
    egoTrap: "Caulking the top down before the supply lines have passed a leak test. You glued the trophy to the wall and the trophy drips. Test first. Caulk after. The silicone will still be there. Your dignity might not.",
    stopIf: "The wall or floor is soft, the shutoff won't close and you're about to 'work live,' or the only way the vanity fits is by notching a stud. Studs are not trim. Also stop if the old drain is galvanized crust and it starts crumbling in your hand. That's the plumber chunk arriving early.",
    tools: ["Level", "Stud finder", "Drill", "Basin wrench", "Pliers", "Bucket", "Caulk", "Shims"],
    moves: [
      "Shut the valves and test them before demo day, not during it.",
      "If the wall behind is stained or soft, let it dry and repair it before the new box hides it for a decade.",
      "Install the faucet, drain, and supply lines on the countertop before that top goes on the cabinet and into the corner. This is the one great trick. Use it.",
      "Level the cabinet. Shim the base. Screw into studs, not into drywall hoping for a vibe.",
      "Reconnect with new supply lines if the old ones are tired. Align the trap without forcing it into a modern dance.",
      "Fill the sink, then let it out, and watch every joint with a flashlight. Then caulk the top to the wall."
    ],
    script: "The new vanity is on site. I need it set level and fastened, faucet and drain connected, new supply lines if required, and a leak test. The location is not changing. If the shutoffs or the drain won't cooperate, call me before you invent new plumbing. Please caulk the top after it passes the leak test.",
    redFlags: [
      "They want to move the plumbing 'a little' without changing the price or mentioning the wall.",
      "No leak test. They caulk and leave.",
      "The vanity gets fastened with drywall anchors because studs were 'inconvenient.' Cabinets full of stone and optimism need studs.",
      "They'll set it on a soft floor and shim it to theater. The floor is the problem. The shim is a costume."
    ],
    askPro: [
      "Are you keeping the drain and supplies in the same place?",
      "What do you do if the shutoffs fail?",
      "Will the cabinet be screwed to studs and checked for level?",
      "Is a leak test included before anyone caulks?"
    ],
    soundSmart: "Tell them the faucet should go on the top before the top goes on the wall, if they aren't already doing that. The good ones smile. You've used the password.",
    materials: [250, 1200],
    pro: [750, 1900],
    segments: [
      { id: "demo", name: "Demo the old vanity and check the wall", detail: "Bucket first. Then look at the drywall you just exposed like it might owe you money. Soft means stop and fix.", you: [0, 30], hire: [100, 250], pick: "you" },
      { id: "valves", name: "Replace shutoffs that don't shut", detail: "Test before demo. If they fail, this is a small plumber visit and the best money in the room.", you: [0, 0], hire: [160, 360], pick: "you" },
      { id: "set", name: "Assemble, level, and screw the new cabinet to studs", detail: "Shims, level, studs. Set the top after the faucet is already on it.", you: [0, 40], hire: [200, 450], pick: "you" },
      { id: "plumb", name: "Connect supplies and the trap, then leak-test", detail: "Same location: very doable. New drain location: hire. Don't caulk until it has held water.", you: [20, 50], hire: [180, 400], pick: "hire" },
      { id: "caulk", name: "Caulk the top and rehang the mirror drama", detail: "A clean bead. Then the mirror, the light, and the argument about where the soap goes.", you: [10, 25], hire: [0, 0], pick: "you" }
    ],
    faqs: [
      { q: "The new vanity is narrower than the old one.", a: "Then you'll see unpainted wall and maybe old screw holes, which is a drywall-and-paint mini project, very doable. The plumbing only cares if the sink no longer lands on the drain. If it doesn't, a plumber moves the drain. You don't just add a longer trap arm like a stretch limo." },
      { q: "Can I reuse the old faucet?", a: "If it's a faucet you actually like and it isn't leaking. New vanities are the traditional moment people discover they hate the old faucet. Test it before you reinstall it. And put it on the top before the top goes against the wall. The trick still applies." },
      { q: "It rocks a little on the floor.", a: "Shim and fasten it so it doesn't rock. If the floor itself is soft or the rock is a rotten spot, don't shim a hole. Bathrooms hide floor damage under vanities the way teenagers hide laundry. Look down." }
    ],
    related: ["faucet", "toilet", "light"]
  },
  {
    id: "pressure",
    title: "Pressure wash the place",
    category: "Exterior",
    blurb: "It will clean concrete and also etch your dignity into the siding if you treat it like a lightsaber.",
    aliases: ["pressure wash", "power wash", "pressure washer", "driveway", "siding wash", "deck wash"],
    beers: 2,
    time: "Half a day with a rental",
    permit: "No",
    recommended: "diy",
    forecast: "Absurdly high for the money, as long as you don't stripe the house.",
    answers: {
      default: "Flatwork is the fun one: driveway, patio, the grime that makes the house look tired. Siding and decks are where people write their names in the surface forever. Distance, the right tip, and a lower pressure than your inner 19-year-old wants. That's the whole skill.",
      cost: "A one-day rental is often $50 to $100, plus gas and maybe a tip or detergent. A pro driveway is often $150 to $400. A whole-house wash is often $250 to $700. If someone quotes a house wash like a roof replacement, they are selling you a truck payment.",
      time: "A driveway and patio is a half day, including the part where you go back over the zebra stripes you made by being inconsistent. House washing is slower on purpose.",
      diy: "Yes for concrete and most patios, with the surface cleaner attachment if you can get one. It prevents the racing stripes. For siding, use a wider tip, stay back, and spray downward so you don't inject water up behind the laps. For a wood deck, you can fuzz the grain and make it look like a golden retriever. When that starts, you're too close or too hot.",
      hire: "Hire a house wash if the house is two stories, if the 'dirt' might be paint you still wanted, or if you don't trust yourself around windows. Hire it when the job needs soft washing — chemicals and low pressure — which is the grown-up way to clean siding and roofs. Do not pressure-wash a roof. Shingles do not enjoy it, and neither does the manufacturer warranty."
    },
    egoTrap: "Getting close enough to watch the grime vanish in a satisfying line. That line is also the etching, the raised wood grain, or the water behind your siding. Satisfying is the warning label.",
    stopIf: "You're about to wash upward under lap siding, aim at a window from six inches, or 'brighten' asphalt shingles. Also stop if electrical outlets, dryer vents, or a loose fixture are in the blast zone. Water plus those is a different manual, and it's a short one.",
    tools: ["Rented washer with a surface cleaner for flatwork", "The wide-angle tip, and the discipline to start there", "Goggles", "Detergent meant for the surface", "Plastic to cover plants and outlets", "A plan for where the water runs"],
    moves: [
      "Cover plants you like and close the windows. This sounds obvious until someone doesn't.",
      "Test the far corner, far away, then move closer only until it cleans. That distance is the distance. Stay there. Your arms will get bored and try to negotiate.",
      "Use a surface cleaner on concrete if stripes would annoy you, which they will, forever, in a way only you can see, which is still forever.",
      "On siding, low pressure, wide tip, spray with the laps, not up into them.",
      "On decks, let the wood tell you. Raised fuzzy grain means stop and sand later or you built a splinter exhibit.",
      "Skip the roof. Gutters can be rinsed from a ladder setup that is already safe, not from the ground with a laser of water aimed at the fascia."
    ],
    script: "I want the driveway and the front walk washed, and I want your opinion on whether the siding should be soft-washed instead of pressure-washed. Please protect plants and avoid forcing water behind the siding or into vents. I'm not looking to strip paint or wash the roof.",
    redFlags: [
      "They pressure-wash roofs as a package deal.",
      "One tip, one distance, every surface. That's how brick loses mortar and cedar looks shaved.",
      "No mention of plants, outlets, or windows.",
      "They promise 'like new paint' on a painted surface. You may be about to buy a repaint."
    ],
    askPro: [
      "Which surfaces are pressure and which are soft-wash?",
      "How are you protecting plants, outlets, and the inside of the walls?",
      "What does the driveway price include if there are oil stains?",
      "Will this strip paint? If the answer is 'we'll see,' that's a no."
    ],
    soundSmart: "Say 'soft wash for the siding, surface cleaner for the driveway.' You've just separated the craft from the blasting.",
    materials: [60, 160],
    pro: [200, 700],
    segments: [
      { id: "prep", name: "Move plants, close windows, cover outlets", detail: "Ten quiet minutes that save you a dead fern and a lively outlet.", you: [0, 15], hire: [0, 0], pick: "you" },
      { id: "flat", name: "Wash the driveway and patio", detail: "Surface cleaner if you can rent one. Overlap your passes. This is the fun chunk and it's yours.", you: [50, 120], hire: [150, 400], pick: "you" },
      { id: "siding", name: "Clean the siding without injecting the wall", detail: "Wide tip, low pressure, downward. Or hire a soft wash and go get lunch.", you: [0, 30], hire: [200, 550], pick: "you" },
      { id: "deck", name: "Wash a wood deck without fuzzing it", detail: "Farther away than you think. If the grain raises, you switched from cleaning to sanding-prep, and now you own that too.", you: [0, 20], hire: [150, 400], pick: "you" }
    ],
    faqs: [
      { q: "Why does my driveway have stripes?", a: "You changed distance or speed mid-pass. A surface cleaner attachment is the cure and the prevention. You can blend stripes with a more even second pass, from the same height, like you mean it." },
      { q: "Can I borrow my neighbor's 4000 PSI monster?", a: "You can, and you should immediately put it on a wider tip and stand farther back than they do. PSI is not a high score. Concrete will take more than cedar, and neither one wants the nozzle at kiss distance." },
      { q: "The house grew mildew back.", a: "Shade and trees will do that. A wash doesn't change the zip code. Soft washing with the right cleaner lasts longer on siding than blasting it into temporary submission." }
    ],
    related: ["deck", "gutters", "fence"]
  }
];
