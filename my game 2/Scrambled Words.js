const userGuess = document.getElementById("user-guess");
const submitBtn = document.getElementById("submit");
const usersWord = document.getElementById("scrambled-word");
const info = document.getElementById("info");
const levelOutput = document.getElementById("level");
const scoreOutput = document.getElementById("score");
const attemptsOutput = document.getElementById("attempts");
const gameContainer = document.getElementById("game-container");
const guessContainer = document.getElementById("guess-container");
const rules = document.getElementById("rules");
const playBtn = document.getElementById("play-btn");
const resetBtn = document.getElementById("reset-btn");

let level = 1;
let score = 0;
let word;
let attempts = 0;
let correct = 0;

const lvlOneWords = [
  "aim",
  "ace",
  "bed",
  "bee",
  "buy",
  "can",
  "cow",
  "cod",
  "cur",
  "did",
  "duo",
  "die",
  "dry",
  "dug",
  "elf",
  "egg",
  "elk",
  "fat",
  "fix",
  "fin",
  "few",
  "gym",
  "guy",
  "goo",
  "hen",
  "hag",
  "hic",
  "hut",
  "ill",
  "ice",
  "imp",
  "ink",
  "ivy",
  "jet",
  "job",
  "jaw",
  "jab",
  "keg",
  "kid",
  "lip",
  "leg",
  "lad",
  "let",
  "led",
  "law",
  "lid",
  "mut",
  "mat",
  "mud",
  "mid",
  "nit",
  "nog",
  "now",
  "oil",
  "owl",
  "oar",
  "off",
  "oat",
  "one",
  "pry",
  "pal",
  "peg",
  "pea",
  "pen",
  "pus",
  "rad",
  "rem",
  "rig",
  "rob",
  "saw",
  "sob",
  "sec",
  "shy",
  "sex",
  "sly",
  "tan",
  "the",
  "tic",
  "try",
  "cop",
  "uke",
  "ugh",
  "ups",
  "vat",
  "van",
  "vet",
  "woo",
  "wow",
  "wry",
  "wok",
  "yah",
  "yak",
  "yay",
  "you",
  "yep",
  "zit",
  "zap",
  "zig",
  "zag",
  "zip"
];

const lvlTwoWords = [
  "able",
  "aced",
  "acid",
  "ally",
  "also",
  "arcs",
  "area",
  "arch",
  "aunt",
  "axis",
  "baby",
  "back",
  "ball",
  "babe",
  "bass",
  "bell",
  "bets",
  "bind",
  "bios",
  "book",
  "cabs",
  "case",
  "chef",
  "curl",
  "chat",
  "chap",
  "chin",
  "chum",
  "chop",
  "coal",
  "dabs",
  "dame",
  "damp",
  "dart",
  "dash",
  "dark",
  "deck",
  "deep",
  "diva",
  "dice",
  "easy",
  "ends",
  "epic",
  "etch",
  "evil",
  "expo",
  "exam",
  "face",
  "fact",
  "fail",
  "fair",
  "fall",
  "farm",
  "fave",
  "fart",
  "gain",
  "gays",
  "gets",
  "germ",
  "glad",
  "hams",
  "hats",
  "haze",
  "help",
  "head",
  "hers",
  "hike",
  "jabs",
  "junk",
  "jury",
  "kept",
  "keys",
  "kilt",
  "kiss",
  "lads",
  "lamp",
  "lean",
  "less",
  "mark",
  "mile",
  "mine",
  "name",
  "nuns",
  "obit",
  "obey",
  "pack",
  "pane",
  "palm",
  "pals",
  "raid",
  "reek",
  "rift",
  "repo",
  "sees",
  "seem",
  "self",
  "slip",
  "thin",
  "tied",
  "toes",
  "tofu",
  "tree",
  "ugly",
  "unto",
  "used",
  "vans",
  "visa",
  "wack",
  "wade",
  "wait",
  "wasp",
  "yams",
  "yarn",
  "yoyo",
  "zest",
  "zero",
  "zinc",
  "zips",
  "zone",
  "zonk"
];

const lvlThreeWords = [
  "abide",
  "about",
  "abort",
  "above",
  "adapt",
  "array",
  "aglow",
  "aisle",
  "angry",
  "ansty",
  "basic",
  "beers",
  "brisk",
  "bends",
  "berry",
  "below",
  "birdy",
  "blush",
  "bluff",
  "bolts",
  "cable",
  "champ",
  "chalk",
  "clams",
  "coded",
  "comet",
  "crack",
  "cycle",
  "daddy",
  "dance",
  "darts",
  "dated",
  "denim",
  "digit",
  "dingy",
  "dolly",
  "douse",
  "dryer",
  "duvet",
  "earth",
  "eased",
  "elope",
  "epoxy",
  "event",
  "exact",
  "equal",
  "fable",
  "fades",
  "false",
  "fever",
  "fiber",
  "fifty",
  "flaw",
  "flank",
  "froze",
  "fruit",
  "gamma",
  "gangs",
  "gawks",
  "gecko",
  "goofy",
  "goner",
  "guild",
  "hairy",
  "harem",
  "hedge",
  "hello",
  "helms",
  "honor",
  "image",
  "imply",
  "itchy",
  "issue",
  "ionic",
  "jacks",
  "japan",
  "jewel",
  "juice",
  "junky",
  "keeps",
  "kooky",
  "laced",
  "laces",
  "lamps",
  "laser",
  "leaky",
  "lynch",
  "mages",
  "mafia",
  "miles",
  "meats",
  "might",
  "mixer",
  "moths",
  "movie",
  "mushy",
  "named",
  "naval",
  "nears",
  "neigh",
  "newer",
  "nexus",
  "noise",
  "nooks",
  "north",
  "nutty",
  "ogres",
  "olive",
  "olive",
  "opens",
  "oxide",
  "owner",
  "paced",
  "palms",
  "pends",
  "pesky",
  "peppy",
  "petty",
  "phone",
  "phase",
  "porky",
  "pound",
  "pride",
  "print",
  "purse",
  "quack",
  "queen",
  "quart",
  "query",
  "quiet",
  "rafts",
  "rated",
  "react",
  "ready",
  "realm",
  "riced",
  "rides",
  "rigid",
  "rumor",
  "sadly",
  "safes",
  "saggy",
  "sails",
  "saint",
  "salsa",
  "sauce",
  "scone",
  "seeds",
  "scums",
  "sense",
  "shark",
  "sheds",
  "shout",
  "shove",
  "sides",
  "sixth",
  "skeet",
  "skill",
  "snots",
  "solid",
  "sound",
  "south",
  "spoil",
  "stall",
  "stole",
  "store",
  "sulks",
  "swamp",
  "sword",
  "syncs",
  "tempt",
  "texts",
  "texas",
  "today",
  "tonic",
  "topaz",
  "tried",
  "truth",
  "twigs",
  "typos",
  "udder",
  "unify",
  "using",
  "usual",
  "valid",
  "vapor",
  "venue",
  "vowel",
  "waked",
  "waist",
  "waxed",
  "whips",
  "whole",
  "wordy",
  "wreck",
  "yager",
  "yacht",
  "xenon",
  "yield",
  "yikes",
  "zincs",
  "zesty",
  "zones",
  "zincs",
  "zooms",
  "zeros",
  "yummy",
  "youth",
  "yogas",
  "yodle"
];

const lvlFourWords = [
  "aboard",
  "abduct",
  "active",
  "acutes",
  "adored",
  "aglets",
  "alaska",
  "alibis",
  "anonym",
  "arches",
  "awhile",
  "awoken",
  "babble",
  "badges",
  "bagels",
  "badman",
  "barbie",
  "bedbug",
  "before",
  "bigots",
  "boiler",
  "bomber",
  "brooms",
  "bureau",
  "burrow",
  "bylaws",
  "cabins",
  "cactus",
  "caddie",
  "caesar",
  "carpet",
  "carved",
  "center",
  "chasms",
  "chewed",
  "chorus",
  "circus",
  "clanky",
  "cocked",
  "condom",
  "corpse",
  "cosmic",
  "credit",
  "crimes",
  "cuffed",
  "cussed",
  "dammit",
  "darker",
  "debits",
  "decent",
  "debris",
  "defuze",
  "detest",
  "dimmer",
  "dissed",
  "donate",
  "dramas",
  "drifts",
  "earths",
  "echoes",
  "elicit",
  "eleven",
  "envoys",
  "enzyms",
  "estate",
  "faceup",
  "fables",
  "failed",
  "factor",
  "falcon",
  "famine",
  "fandom",
  "fecial",
  "feline",
  "fences",
  "fester",
  "finger",
  "fishes",
  "floppy",
  "frauds",
  "frosty",
  "gallon",
  "gambit",
  "garden",
  "gawker",
  "genres",
  "ghostly",
  "gifted",
  "glossy",
  "goodie",
  "grayed",
  "guilts",
  "hacker",
  "halves",
  "handle",
  "harems",
  "harden",
  "helmet",
  "homely",
  "humour",
  "hunted",
  "iconic",
  "iguana",
  "images",
  "impact",
  "invade",
  "ironic",
  "issued",
  "italic",
  "jacked",
  "jester",
  "jigsaw",
  "jiggly",
  "jockey",
  "juices",
  "jungle",
  "kayaks",
  "keypad",
  "kibble",
  "knifer",
  "kosher",
  "labour",
  "ladder",
  "ladies",
  "laired",
  "lamped",
  "leachy",
  "licker",
  "liquid",
  "lurker",
  "magics",
  "magots",
  "mallet",
  "mantis",
  "member",
  "mickey",
  "mildly",
  "moolah",
  "mullet",
  "myself",
  "nachos",
  "nerved",
  "nibble",
  "nickle",
  "nimble",
  "nitros",
  "nozzle",
  "nymphs",
  "nylons",
  "oblige",
  "offkey",
  "oddity",
  "online",
  "onside",
  "oodles",
  "orbits",
  "others",
  "owlish",
  "oyster",
  "paints",
  "pantry",
  "parish",
  "pastor",
  "pencil",
  "pepper",
  "phones",
  "picked",
  "plague",
  "prefer",
  "prompt",
  "python",
  "quacks",
  "quaint",
  "quoted",
  "rabbit",
  "racoon",
  "radish",
  "rarely",
  "ravish",
  "record",
  "refuel",
  "reflex",
  "resent",
  "richly",
  "rotate",
  "ruined",
  "sacked",
  "saliva",
  "salted",
  "sample",
  "sauced",
  "savage",
  "scheme",
  "scopes",
  "scruff",
  "search",
  "sensor",
  "shield",
  "shrimp",
  "slaved",
  "sludge",
  "somber",
  "splosh",
  "stench",
  "stocks",
  "stumps",
  "syrups",
  "tablet",
  "tangle",
  "tattoo",
  "tenses",
  "thwart",
  "toasts",
  "tomboy",
  "traced",
  "troves",
  "turban",
  "uglier",
  "unclog",
  "unpack",
  "upkeep",
  "upsets",
  "urchin",
  "utmost",
  "utopia",
  "vacant",
  "vacuum",
  "valued",
  "vector",
  "versal",
  "vexing",
  "virtue",
  "vogued",
  "vowels",
  "vortex",
  "waffle",
  "walrus",
  "weapon",
  "weirdo",
  "wicket",
  "worthy",
  "yanked",
  "yawned",
  "yellow",
  "youths",
  "zapped",
  "zeroes",
  "zested",
  "zoomed",
  "zygote"
];

const lvlFiveWords = [
  "abducts",
  "abolish",
  "account",
  "acronym",
  "adjures",
  "adopted",
  "agitate",
  "aidless",
  "alarmed",
  "alchohol",
  "alfredo",
  "alleged",
  "allergy",
  "allures",
  "amiable",
  "aminity",
  "analyst",
  "another",
  "anxious",
  "apricot",
  "arrived",
  "attacks",
  "autopsy",
  "awkward",
  "babbles",
  "backset",
  "banjoes",
  "bandits",
  "batched",
  "beacons",
  "bedpost",
  "bedsore",
  "belongs",
  "benches",
  "berserk",
  "bicolor",
  "bizarre",
  "blubbed",
  "bombers",
  "borrows",
  "bracers",
  "bricked",
  "brutish",
  "bulgers",
  "burrito",
  "bygones",
  "cabinet",
  "cahoots",
  "cameras",
  "canteen",
  "captive",
  "cartels",
  "cashbox",
  "cattish",
  "censors",
  "chaffer",
  "charter",
  "cheeses",
  "chromic",
  "clamped",
  "clunker",
  "collars",
  "compute",
  "consult",
  "corrupt",
  "creamed",
  "crystal",
  "cyclone",
  "daggers",
  "dangled",
  "daycare",
  "decoyed",
  "deduced",
  "dentist",
  "dilator",
  "discard",
  "dollars",
  "doweled",
  "drudged",
  "dwarves",
  "egoless",
  "elastic",
  "endurer",
  "enforce",
  "epilogs",
  "erupted",
  "evoking",
  "extinct",
  "fanatic",
  "ferrets",
  "fifteen",
  "flashes",
  "flushes",
  "footman",
  "fossils",
  "freedom",
  "frowned",
  "furrows",
  "gassers",
  "genders",
  "glimpse",
  "googled",
  "grayest",
  "grudged",
  "gymnast",
  "hagfish",
  "hammock",
  "hardily",
  "healthy",
  "herself",
  "hoarser",
  "hoisted",
  "horsing",
  "hunches",
  "icefall",
  "idolism",
  "illegal",
  "impeach",
  "implode",
  "indoors",
  "inkpots",
  "invades",
  "issuers",
  "jackets",
  "jaywalk",
  "kettles",
  "labeled",
  "mangled",
  "maximum",
  "nibbled"
];

const lvlSixWords = [
  "absolute",
  "adducted",
  "adhering",
  "analyzer",
  "antihero",
  "approved",
  "atonable",
  "babbling",
  "backpack",
  "balloons",
  "baptised",
  "barstool",
  "battiest",
  "bearskin",
  "beefcake",
  "beholder",
  "benefits",
  "bigfoots",
  "birdcage",
  "blasters",
  "bondsman",
  "breeched",
  "budworms",
  "buzzword",
  "cackling",
  "calciums",
  "callback",
  "capacity",
  "carjacks",
  "cartoons",
  "cementery",
  "censuses",
  "cerebal",
  "checkoff",
  "chewable",
  "chubbier",
  "churning",
  "cinnamon",
  "cloggers",
  "cocktail",
  "cogwheel",
  "collapse",
  "concaved",
  "corniest",
  "cowardly",
  "cropland",
  "cynicism",
  "darkness",
  "deadlift",
  "decorate",
  "defusing",
  "deposits",
  "detecter",
  "diasters",
  "dingdong",
  "discrete",
  "doorknob",
  "dreaming",
  "dyslexia",
  "eclipses",
  "employee",
  "enjoyers",
  "enthrall",
  "epilogue",
  "euphoria",
  "expected",
  "facility",
  "fantasia",
  "fawnlike",
  "feminist",
  "flamingo",
  "flowered",
  "fluorite",
  "folklore",
  "forested",
  "friendly",
  "funerals",
  "fuzziest",
  "galivant",
  "germiest",
  "gryphons",
  "haircuts",
  "hammocks",
  "haunting",
  "helmless",
  "hippiest",
  "hotlinks",
  "hysteric",
  "igniters",
  "implored",
  "insanity",
  "isolated",
  "jackpots",
  "journals",
  "kamikaze",
  "kinglike",
  "laborers",
  "landline",
  "laughter",
  "liftoffs",
  "locknuts",
  "luggages",
  "lynchers",
  "machetes",
  "mafiosos",
  "makeover",
  "markdown",
  "material",
  "mermaids",
  "midwifes",
  "ministers",
  "mislodge",
  "modifies",
  "moreover",
  "mulligan",
  "narrowed",
  "neatness",
  "nitrogen",
  "nuthouse",
  "offtrack",
  "ornament",
  "outcasts",
  "outranks",
  "owlishly",
  "pageboys",
  "pardoned",
  "pensions",
  "physical",
  "poaching",
  "promised",
  "quackier",
  "quibbler",
  "quotable",
  "rebounds",
  "refunded",
  "rustable",
  "sailorly",
  "sanitize",
  "scissors",
  "seagulls",
  "selloffs",
  "shavings",
  "shrimper",
  "slowdown",
  "soaplike",
  "syndrome",
  "tailwind",
  "tamponed",
  "thickish",
  "timeouts",
  "township",
  "triplets",
  "uglifier",
  "unbathed",
  "unearths",
  "unkingly",
  "upstarts",
  "vamooses",
  "vehicles",
  "vestless",
  "vomiting",
  "vouchers",
  "warnings",
  "washbowl",
  "welcomer",
  "woefully",
  "xeroxing",
  "yardwork",
  "yearbook",
  "yummiest",
  "zizzling",
  "zoologic",
  "zucchini",
  "zoneless",
  "zonetime",
  "zigzaggy",
  "zillions",
  "zippiest",
  "zappiest",
  "zippered"
];

const lvlSevenWords = [
  "aardvarks",
  "abridging",
  "aftermath",
  "allowance",
  "animalize",
  "apostates",
  "armorless",
  "autograph",
  "babyproof",
  "bagginess",
  "ballerina",
  "banishing",
  "barbecues",
  "beastings",
  "beefcakes",
  "beworried",
  "blackbird",
  "blueberry",
  "bracketed",
  "bullweeds",
  "cancelers",
  "carbuncle",
  "carousels",
  "charmless",
  "collision",
  "communion",
  "corruptor",
  "currently",
  "deafening",
  "declassed",
  "defuelled",
  "descended",
  "dialoging",
  "dimension",
  "distorter",
  "driveways",
  "dyslexias",
  "embezzled",
  "endpoints",
  "equaliser",
  "eventless",
  "explicits",
  "faintness",
  "fiberless",
  "flounders",
  "foreheads",
  "furiously",
  "gemstones",
  "glowingly",
  "grumbling",
  "handbells",
  "heelpiece",
  "hipiness",
  "hookworms",
  "icemakers",
  "impassion",
  "injectors",
  "invasions",
  "jellifies",
  "junctions",
  "kamikazes",
  "kidnapper",
  "kowtowing",
  "labourers",
  "labyrnith",
  "lathering",
  "leveraged",
  "localized",
  "mailrooms",
  "masterful",
  "mentalist",
  "miniskirt",
  "nailbrush",
  "narcistic",
  "nevermore",
  "noncareer",
  "noxiously",
  "obviously",
  "oppressor",
  "outgazing",
  "outwished",
  "overweigh",
  "paintwork",
  "parallels",
  "pedophile",
  "picketers",
  "playbacks",
  "positives",
  "psychotic",
  "qualified",
  "quotation",
  "radiators",
  "ravishing",
  "recognize",
  "remodeler",
  "sasquatch",
  "scavenger",
  "semifinal",
  "shackling",
  "showiness",
  "skullcaps",
  "stampeded",
  "stomached",
  "suiciding",
  "tantalise",
  "technical",
  "testicles",
  "timesaver",
  "usability",
  "viewpoint"
];

const lvlEightWords = [
  "acetylates",
  "bamboozles",
  "beekeepers",
  "calendared",
  "centipedes",
  "chimpanzee",
  "debilitate",
  "deportment",
  "devolution",
  "eccentrics",
  "encapsules",
  "exaggerate",
  "federalize",
  "flabbiness",
  "frequently",
  "ghoulishly",
  "graciously",
  "handmaiden",
  "hauntingly",
  "hypnotized",
  "immobilize",
  "imperfects",
  "intoxicate",
  "jackknifes",
  "kidnapping",
  "laundering",
  "liquidated",
  "manslayers",
  "meanderers",
  "misbehaves",
  "necromancy",
  "obediences",
  "palindrome",
  "perfecters",
  "puzzlingly",
  "quantities",
  "rearousing",
  "redevelops",
  "reputation",
  "scandalize",
  "seductions",
  "slumberers",
  "temporally",
  "ultraclean",
  "undefeated",
  "vigorously",
  "watermarks",
  "wristbands",
  "yellowtail",
  "zoologists"
];

function reset() {
  level = 1;
  score = 0;
  correct = 0;
  attempts = 0;
  word = "";
  updateBoard();
  info.innerHTML = "";
  userGuess.value = "";
}

function randomWord(lvl) {
  word = lvl[Math.floor(Math.random() * lvl.length + 1) - 1];
  return word;
}

function scrambleWord(word) {
  let letters = word.split("");
  let currentIndex = letters.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = letters[currentIndex];
    letters[currentIndex] = letters[randomIndex];
    letters[randomIndex] = temporaryValue;
  }

  return letters.join(" ");
}
function updateBoard() {
  scoreOutput.innerHTML = score;
  levelOutput.innerHTML = level;
  attemptsOutput.innerHTML = attempts;
}

function checkAnswer(guess) {
  console.log(`Correct: ${correct}`);
  if (correct == 3) {
    level += 1;
    correct = 0;
  }

  if (attempts == 3) {
    guessContainer.classList.toggle("hidden");
    info.innerHTML =
      "<p class='retry'>Sorry. You are out of chances. <button id='retry-button'>Retry</button> </p>";
    reset();
  }

  if (guess === word) {
    info.innerHTML = "<span class='correct'>CORRECT</span>";
    score += 1;
    correct += 1;
    attempts = 0;
    setLevel();
  } else {
    info.innerHTML = "<span class='incorrect'>Bzzzt! That's not right!</span>";
    score -= 1;
    attempts += 1;
  }

  updateBoard();
}

function setLevel() {
  if (level == 1) {
    randomWord(lvlOneWords);
  } else if (level == 2) {
    randomWord(lvlTwoWords);
  } else if (level == 3) {
    randomWord(lvlThreeWords);
  } else if (level == 4) {
    randomWord(lvlFourWords);
  } else if (level == 5) {
    randomWord(lvlFiveWords);
  } else if (level == 6) {
    randomWord(lvlSixWords);
  } else if (level == 7) {
    randomWord(lvlSevenWords);
  } else if (level == 8) {
    randomWord(lvlEightWords);
  } else if (level == 9) {
    info.innerHTML =
      "<span class='win'>You Win! Great job! </br> You can reset or keep playing.</span>";
  }

  console.log(`Word: ${word}`);
  usersWord.innerHTML = scrambleWord(word);
}

playBtn.addEventListener("click", function(e) {
  rules.classList.toggle("hidden");
  gameContainer.classList.remove("hidden");
});

submitBtn.addEventListener("click", function(e) {
  checkAnswer(userGuess.value.toLowerCase());
  userGuess.value = "";
});

window.addEventListener(
  "keypress",
  function(e) {
    if (e.keyCode == 13) {
      checkAnswer(userGuess.value.toLowerCase());
      userGuess.value = "";
    }
  },
  false
);

resetBtn.addEventListener("click", function(e) {
  reset();
  setLevel();
  guessContainer.classList.remove("hidden");
  userGuess.value = "";
});

setLevel();
