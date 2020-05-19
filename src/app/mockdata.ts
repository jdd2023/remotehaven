import { CharacterClass } from './characterClass';
import { CharacterAbility } from './ICharacterAbility';
import { CharacterPerk } from './characterPerk';
import { CharacterClassGroup } from './characterClassGroup';
import { ScenarioState } from './IScenarioState';
import { AttackMod } from './IAttackMod';

//States
let disarm = new ScenarioState(1,'Disarm');
let immobilize = new ScenarioState(2, 'Immobilize');
let invisible = new ScenarioState(3, 'Invisible');
let muddle = new ScenarioState(4, 'Muddle');
let poison = new ScenarioState(5, 'Poison');
let strengthen = new ScenarioState(6, 'Strengthen');
let stun = new ScenarioState(7, 'Stun');
let wound = new ScenarioState(8, 'Wound');

export const SCENARIOSTATES: ScenarioState[] = [disarm,immobilize,invisible,muddle,poison,strengthen,stun,wound];

//Attack Modifiers
let zero = new AttackMod(1, 'am-p-01');
let plus1 = new AttackMod(2, 'am-p-07');
let minus1 = new AttackMod(3, 'am-p-12');
let plus2 = new AttackMod(4, 'am-p-18');
let minus2 = new AttackMod(5, 'am-p-17');
let x2 = new AttackMod(6, 'am-p-20');
let miss = new AttackMod(7, 'am-p-19');

//Create and export base deck (6 0's, 5 +1/-1's, 1 +2/-2/2x/Miss)
var singles: AttackMod[] = [plus2, minus2, x2, miss];
var multiples: AttackMod[] = [];
for (let i = 0; i < 6; i++){
    multiples.push(zero);
}
for(let i = 0; i < 5; i++){
    multiples.push(plus1);
    multiples.push(minus1);
}
export const BASEATTACKMODDECK: AttackMod[] = multiples.concat(singles);

//Brute
const BRUTEABILITIES: CharacterAbility[] = [
    {id: 1, name: "Trample", level: 1, image: "trample"},
    {id: 2, name: "Eye for an Eye", level: 1, image: "eye-for-an-eye"},
    {id: 3, name: "Sweeping Blow", level: 1, image: "sweeping-blow"},
    {id: 4, name: "Provoking Roar", level: 1, image: "provoking-roar"},
    {id: 5, name: "Overwhelming Assault", level: 1, image: "overwhelming-assault"},
    {id: 6, name: "Grab and Go", level: 1, image: "grab-and-go"},
    {id: 7, name: "Warding Strength", level: 1, image: "warding-strength"},
    {id: 8, name: "Shield Bash", level: 1, image: "shield-bash"},
    {id: 9, name: "Leaping Cleave", level: 1, image: "leaping-cleave"},
    {id: 10, name: "Spare Dagger", level: 1, image: "spare-dagger"},
    {id: 11, name: "Skewer", level: 1, image: "skewer"},
    {id: 12, name: "Balanced Measure", level: 1, image: "balanced-measure"},
    {id: 13, name: "Wall of Doom", level: 1, image: "wall-of-doom"},
    {id: 14, name: "Fatal Advance", level: 2, image: "fatal-advance"},
    {id: 15, name: "Juggernaut", level: 2, image: "juggernaut"},
    {id: 16, name: "Hook and Chain", level: 3, image: "hook-and-chain"},
    {id: 17, name: "Brute Force", level: 3, image: "brute-force"},
    {id: 18, name: "Unstoppable Charge", level: 4, image: "unstoppable-charge"},
    {id: 19, name: "Devastating Hack", level: 4, image: "devastating-hack"},
    {id: 20, name: "Whirlwind", level: 5, image: "whirlwind"},
    {id: 21, name: "Skirmishing Maneuver", level: 5, image: "skirmishing-maneuver"},
    {id: 22, name: "Quietus", level: 6, image: "quietus"},
    {id: 23, name: "Immovable Phalanx", level: 6, image: "immovable-phalanx"},
    {id: 24, name: "Defensive Tactics", level: 7, image: "defensive-tactics"},
    {id: 25, name: "Crippling Offensive", level: 7, image: "crippling-offensive"},
    {id: 25, name: "Frenzied Onslaught", level: 8, image: "frenzied-onslaught"},
    {id: 25, name: "Selfish Retribution", level: 8, image: "selfish-retribution"},
    {id: 25, name: "King of the Hill", level: 9, image: "king-of-the-hill"},
    {id: 25, name: "Face Your End", level: 9, image: "face-your-end"}
]

//Tinkerer
const TINKERERABILITIES: CharacterAbility[] = [
    {id: 30, name: "Proximity Mine", level: 1, image: "proximity-mine"},
    {id: 31, name: "Harmless Contraption", level: 1, image: "harmless-contraption"},
    {id: 32, name: "Flamethrower", level: 1, image: "flamethrower"},
    {id: 33, name: "Hook Gun", level: 1, image: "hook-gun"},
    {id: 34, name: "Ink Bomb", level: 1, image: "ink-bomb"},
    {id: 35, name: "Net Shooter", level: 1, image: "net-shooter"},
    {id: 36, name: "Stun Shot", level: 1, image: "stun-shot"},
    {id: 37, name: "Reinvigorating Elixir", level: 1, image: "reinvigorating-elixir"},
    {id: 38, name: "Restorative Mist", level: 1, image: "restorative-mist"},
    {id: 39, name: "Energizing Tonic", level: 1, image: "energizing-tonic"},
    {id: 40, name: "Enhancement Field", level: 1, image: "enhancement-field"},
    {id: 41, name: "Toxic Bolt", level: 1, image: "toxic-bolt"},
    {id: 42, name: "Reviving Shock", level: 1, image: "reviving-shock"},
    {id: 43, name: "Volatile Concoction", level: 1, image: "volatile-concoction"},
    {id: 44, name: "Potent Potables", level: 1, image: "potent-potables"},
    {id: 45, name: "Stamina Booster", level: 2, image: "stamina-booster"},
    {id: 46, name: "Disorienting Flash", level: 2, image: "disorienting-flash"},
    {id: 47, name: "Tinkerer's Tools", level: 3, image: "tinkerers-tools"},
    {id: 48, name: "Crank Bow", level: 3, image: "crank-bow"},
    {id: 49, name: "Dangerous Contraption", level: 4, image: "dangerous-contraption"},
    {id: 50, name: "Micro Bots", level: 4, image: "micro-bots"},
    {id: 51, name: "Noxious Vials", level: 5, image: "noxious-vials"},
    {id: 52, name: "Disintegration Beam", level: 5, image: "disintegration-beam"},
    {id: 53, name: "Gas Canister", level: 6, image: "gas-canister"},
    {id: 54, name: "Auto Turret", level: 6, image: "auto-turret"},
    {id: 55, name: "Murderous Contraption", level: 7, image: "murderous-contraption"},
    {id: 56, name: "Curative Aerosal", level: 7, image: "curative-aerosal"},
    {id: 57, name: "Jet Propulsion", level: 8, image: "jet-propulsion"},
    {id: 58, name: "Harsh Stimulants", level: 8, image: "harsh-stimulants"},
    {id: 59, name: "Lethal Injection", level: 9, image: "lethal-injection"},
    {id: 60, name: "Chimeric Formula", level: 9, image: "chimeric-formula"}
]

//Spellweaver
const SPELLWEAVERABILITIES: CharacterAbility[] = [
    {id: 61, name: 'Fire Orbs', level: 1, image: 'fire-orbs'},
    {id: 62, name: 'Impaling Eruption', level: 1, image: 'impaling-eruption'},
    {id: 63, name: 'Reviving Ether', level: 1, image: 'reviving-ether'},
    {id: 64, name: 'Freezing Nova', level: 1, image: 'freezing-nova'},
    {id: 65, name: 'Mana Bolt', level: 1, image: 'mana-bolt'},
    {id: 66, name: 'Frost Armor', level: 1, image: 'frost-armor'},
    {id: 67, name: 'Flame Strike', level: 1, image: 'flame-strike'},
    {id: 68, name: 'Ride the Wind', level: 1, image: 'ride-the-wind'},
    {id: 69, name: 'Crackling Air', level: 1, image: 'crackling-air'},
    {id: 70, name: 'Hardened Spikes', level: 1, image: 'hardened-spikes'},
    {id: 71, name: 'Aid from the Ether', level: 1, image: 'aid-from-the-ether'},
    {id: 72, name: 'Flashing Burst', level: 2, image: 'flashing-burst'},
    {id: 73, name: 'Icy Blast', level: 2, image: 'icy-blast'},
    {id: 74, name: 'Cold Fire', level: 3, image: 'cold-fire'},
    {id: 75, name: 'Elemental Aid', level: 3, image: 'elemental-aid'},
    {id: 76, name: 'Spirit of Doom', level: 4, image: 'spirit-of-doom'},
    {id: 77, name: 'Forked Beam', level: 4, image: 'forked-beam'},
    {id: 78, name: 'Chromatic Explosion', level: 5, image: 'chromatic-explosion'},
    {id: 79, name: 'Engulfed in Flames', level: 5, image: 'engulfed-in-flames'},
    {id: 80, name: 'Living Torch', level: 6, image: 'living-torch'},
    {id: 81, name: 'Frozen Night', level: 6, image: 'frozen-night'},
    {id: 82, name: 'Twin Restoration', level: 7, image: 'twin-restoration'},
    {id: 83, name: 'Stone Fists', level: 7, image: 'stone-fists'},
    {id: 84, name: 'Zephyr Wings', level: 8, image: 'zephyr-wings'},
    {id: 85, name: 'Cold Front', level: 8, image: 'cold-front'},
    {id: 86, name: 'Black Hole', level: 9, image: 'black-hole'},
    {id: 87, name: 'Inferno', level: 9, image: 'inferno'}
]

//Scoundrel
const SCOUNDRELABILITIES: CharacterAbility[] = [
    {id: 88, name: 'Single Out', level: 1, image: 'single-out'},
    {id: 89, name: 'Flanking Strike', level: 1, image: 'flanking-strike'},
    {id: 90, name: 'Smoke Bomb', level: 1, image: 'smoke-bomb'},
    {id: 91, name: 'Backstab', level: 1, image: 'backstab'},
    {id: 92, name: "Thief's Knack", level: 1, image: 'thiefs-knack'},
    {id: 93, name: "Venom Shiv", level: 1, image: 'venom-shiv'},
    {id: 94, name: "Throwing Knives", level: 1, image: 'throwing-knives'},
    {id: 95, name: "Quick Hands", level: 1, image: 'quick-hands'},
    {id: 96, name: "Special Mixture", level: 1, image: 'special-mixture'},
    {id: 97, name: 'Sinister Opportunity', level: 1, image: 'sinister-opportunity'},
    {id: 98, name: "Trickster's Reversal", level: 1, image: 'tricksters-reversal'},
    {id: 99, name: 'Swift Bow', level: 1, image: 'swift-bow'},
    {id: 100, name: 'Open Wound', level: 2, image: 'open-wound'},
    {id: 101, name: 'Flintlock', level: 2, image: 'flintlock'},
    {id: 102, name: 'Hidden Daggers', level: 3, image: 'hidden-daggers'},
    {id: 103, name: "Duelist's Advance", level: 3, image: 'duelists-advance'},
    {id: 104, name: 'Flurry of Blades', level: 4, image: 'flurry-of-blades'},
    {id: 105, name: 'Gruesome Advantage', level: 4, image: 'gruesome-advantage'},
    {id: 106, name: 'Cull the Weak', level: 5, image: 'cull-the-weak'},
    {id: 107, name: 'Visage of the Inevitable', level: 5, image: 'visage-of-the-inevitable'},
    {id: 108, name: 'Crippling Poison', level: 6, image: 'crippling-poison'},
    {id: 109, name: 'Burning Oil', level: 6, image: 'burning-oil'},
    {id: 110, name: 'Stick to the Shadows', level: 7, image: 'stick-to-the-shadows'},
    {id: 111, name: 'Spring the Trap', level: 7, image: 'spring-the-trap'},
    {id: 112, name: 'Stiletto Storm', level: 8, image: 'stiletto-storm'},
    {id: 113, name: "Pain's End", level: 8, image: 'pains-end'},
    {id: 114, name: 'Long Con', level: 9, image: 'long-con'},
    {id: 115, name: 'Watch it Burn', level: 9, image: 'watch-it-burn'}
]

//Cragheart
const CRAGHEARTABILITIES: CharacterAbility[] = [
    {id: 116, name: 'Opposing Strike', level: 1, image: 'opposing-strike'},
    {id: 117, name: 'Crushing Grasp', level: 1, image: 'crushing-grasp'},
    {id: 118, name: 'Avalanche', level: 1, image: 'avalanche'},
    {id: 119, name: 'Rumbling Advance', level: 1, image: 'rumbling-advance'},
    {id: 120, name: 'Massive Boulder', level: 1, image: 'massive-boulder'},
    {id: 121, name: 'Backup Ammunition', level: 1, image: 'backup-ammunition'},
    {id: 122, name: 'Rock Tunnel', level: 1, image: 'rock-tunnel'},
    {id: 123, name: 'Unstable Upheaval', level: 1, image: 'unstable-upheaval'},
    {id: 124, name: 'Crater', level: 1, image: 'crater'},
    {id: 125, name: 'Dirt Tornado', level: 1, image: 'dirt-tornado'},
    {id: 126, name: 'Earthen Clod', level: 1, image: 'earthen-clod'},
    {id: 127, name: 'Heaving Swing', level: 1, image: 'heaving-swing'},
    {id: 128, name: 'Forceful Storm', level: 1, image: 'forceful-storm'},
    {id: 129, name: "Nature's Lift", level: 1, image: 'natures-lift'},
    {id: 130, name: 'Explosive Punch', level: 2, image: 'explosive-punch'},
    {id: 131, name: 'Sentient Growth', level: 2, image: 'sentient-growth'},
    {id: 132, name: 'Clear the Way', level: 3, image: 'clear-the-way'},
    {id: 133, name: 'Blunt Force', level: 3, image: 'blunt-force'},
    {id: 134, name: 'Rock Slide', level: 4, image: 'rock-slide'},
    {id: 135, name: 'Kinetic Assault', level: 4, image: 'kinetic-assault'},
    {id: 136, name: 'Petrify', level: 5, image: 'petrify'},
    {id: 137, name: 'Stone Pummel', level: 5, image: 'stone-pummel'},
    {id: 138, name: 'Dig Pit', level: 6, image: 'dig-pit'},
    {id: 139, name: 'Cataclysm', level: 6, image: 'cataclysm'},
    {id: 140, name: 'Meteor', level: 7, image: 'meteor'},
    {id: 141, name: 'Brutal Momentum', level: 7, image: 'brutal-momentum'},
    {id: 142, name: 'Rocky End', level: 8, image: 'rocky-end'},
    {id: 143, name: 'Lumbering Bash', level: 8, image: 'lumbering-bash'},
    {id: 144, name: 'Blind Destruction', level: 9, image: 'blind-destruction'},
    {id: 145, name: 'Pulverize', level: 9, image: 'pulverize'}
]

//Mindthief
const MINDTHIEFABILITIES: CharacterAbility[] = [
    {id: 146, name: "Submissive Affliction", level: 1, image: "submissive-affliction"},
    {id: 147, name: "Into the Night", level: 1, image: "into-the-night"},
    {id: 148, name: "Fearsome Blade", level: 1, image: "fearsome-blade"},
    {id: 149, name: "Feedback Loop", level: 1, image: "feedback-loop"},
    {id: 150, name: "Gnawing Horde", level: 1, image: "gnawing-horde"},
    {id: 151, name: "The Mind's Weakness", level: 1, image: "the-minds-weakness"},
    {id: 152, name: "Parasitic Influence", level: 1, image: "parasitic-influence"},
    {id: 153, name: "Scurry", level: 1, image: "scurry"},
    {id: 154, name: "Perverse Edge", level: 1, image: "perverse-edge"},
    {id: 155, name: "Empathetic Assault", level: 1, image: "empathetic-assault"},
    {id: 156, name: "Withering Claw", level: 1, image: "withering-claw"},
    {id: 157, name: "Possession", level: 1, image: "possession"},
    {id: 158, name: "Frigid Apparition", level: 1, image: "frigid-apparition"},
    {id: 159, name: "Wretched Creature", level: 2, image: "wretched-creature"},
    {id: 160, name: "Hostile Takeover", level: 2, image: "hostile-takeover"},
    {id: 161, name: "Brain Leech", level: 3, image: "brain-leech"},
    {id: 162, name: "Silent Scream", level: 3, image: "silent-scream"},
    {id: 163, name: "Pilfer", level: 4, image: "pilfer"},
    {id: 164, name: "Cranium Overload", level: 4, image: "cranium-overload"},
    {id: 165, name: "Mass Hysteria", level: 5, image: "mass-hysteria"},
    {id: 166, name: "Frozen Mind", level: 5, image: "frozen-mind"},
    {id: 167, name: "Corrupting Embrace", level: 6, image: "corrupting-embrace"},
    {id: 168, name: "Dark Frenzy", level: 6, image: "dark-frenzy"},
    {id: 169, name: "Vicious Blood", level: 7, image: "vicious-blood"},
    {id: 170, name: "Psychic Projection", level: 7, image: "psychic-projection"},
    {id: 171, name: "Shared Nightmare", level: 8, image: "shared-nightmare"},
    {id: 172, name: "Domination", level: 8, image: "domination"},
    {id: 173, name: "Many as One", level: 9, image: "many-as-one"},
    {id: 174, name: "Phantasmal Killer", level: 9, image: "phantasmal-killer"},

]

//Sunkeeper
const SUNKEEPERABILITIES: CharacterAbility[] = [
    {id: 175, name: "Purifying Aura", level: 1, image: "purifying-aura"},
    {id: 176, name: "Cautious Advance", level: 1, image: "cautious-advance"},
    {id: 177, name: "Brilliant Prayer", level: 1, image: "brilliant-prayer"},
    {id: 178, name: "Empowering Command", level: 1, image: "empowering-command"},
    {id: 179, name: "Protective Blessing", level: 1, image: "protective-blessing"},
    {id: 180, name: "Dazzling Charge", level: 1, image: "dazzling-charge"},
    {id: 181, name: "Tactical Order", level: 1, image: "tactical-order"},
    {id: 182, name: "Holy Strike", level: 1, image: "holy-strike"},
    {id: 183, name: "Hammer Blow", level: 1, image: "hammer-blow"},
    {id: 184, name: "Defensive Stance", level: 1, image: "defensive-stance"},
    {id: 185, name: "Lay on Hands", level: 1, image: "lay-on-hands"},
    {id: 186, name: "Daybreak", level: 1, image: "daybreak"},
    {id: 187, name: "Beacon of Light", level: 1, image: "beacon-of-light"},
    {id: 188, name: "Glorious Bolt", level: 1, image: "glorious-bolt"},
    {id: 189, name: "Practical Plans", level: 2, image: "practical-plans"},
    {id: 190, name: "Unwavering Mandate", level: 2, image: "unwavering-mandate"},
    {id: 191, name: "Burning Flash", level: 3, image: "burning-flash"},
    {id: 192, name: "Mobilizing Axiom", level: 3, image: "mobilizing-axiom"},
    {id: 193, name: "Righteous Strength", level: 4, image: "righteous-strength"},
    {id: 194, name: "Engulfing Radiance", level: 4, image: "engulfing-radiance"},
    {id: 195, name: "Path of Glory", level: 5, image: "path-of-glory"},
    {id: 196, name: "Scales of Justice", level: 5, image: "scales-of-justice"},
    {id: 197, name: "Supportive Chant", level: 6, image: "supportive-chant"},
    {id: 198, name: "Illuminate the Target", level: 6, image: "illuminate-the-target"},
    {id: 199, name: "Weapon of Purity", level: 7, image: "weapon-of-purity"},
    {id: 200, name: "Bright Aegis", level: 7, image: "bright-aegis"},
    {id: 201, name: "Cleansing Force", level: 8, image: "cleansing-force"},
    {id: 202, name: "Inspiring Sanctity", level: 8, image: "inspiring-sanctity"},
    {id: 203, name: "Angelic Ascension", level: 9, image: "angelic-ascension"},
    {id: 204, name: "Divine Intervention", level: 9, image: "divine-intervention"}
]

//Quartermaster
const QUARTERMASTERABILITIES: CharacterAbility[] = [
    {id: 205, name: "Restock", level: 1, image: "restock"},
    {id: 206, name: "Oversized Pack", level: 1, image: "oversized-pack"},
    {id: 207, name: "Sharpening Kit", level: 1, image: "sharpening-kit"},
    {id: 208, name: "Proficiency", level: 1, image: "proficiency"},
    {id: 209, name: "Iron BulWark", level: 1, image: "iron-bulwark"},
    {id: 210, name: "Hastened Step", level: 1, image: "hastened-step"},
    {id: 211, name: "Cleaving Axe", level: 1, image: "cleaving-axe"},
    {id: 212, name: "Impaling Spear", level: 1, image: "impaling-spear"},
    {id: 213, name: "Crippling Bow", level: 1, image: "crippling-bow"},
    {id: 214, name: "Crushing Hammer", level: 1, image: "crushing-hammer"},
    {id: 215, name: "Scroll of Recall", level: 1, image: "scroll-of-recall"},
    {id: 216, name: "Reserved Energy", level: 1, image: "reserved-energy"},
    {id: 217, name: "Reforge", level: 2, image: "reforge"},
    {id: 218, name: "Bladed Boomerang", level: 2, image: "bladed-boomerang"},
    {id: 219, name: "Continual Supply", level: 3, image: "continual-supply"},
    {id: 220, name: "Scroll of Lightning", level: 3, image: "scroll-of-lightning"},
    {id: 221, name: "Side Pouch", level: 4, image: "side-pouch"},
    {id: 222, name: "Giant Club", level: 4, image: "giant-club"},
    {id: 223, name: "Reinforced Steel", level: 5, image: "reinforced-steel"},
    {id: 224, name: "Scroll of Judgement", level: 5, image: "scroll-of-judgement"},
    {id: 225, name: "Catastrophic Bomb", level: 6, image: "catastrophic-bomb"},
    {id: 226, name: "Quiver of Arrows", level: 6, image: "quiver-of-arrows"},
    {id: 227, name: "Scroll of Blizzards", level: 7, image: "scroll-of-blizzards"},
    {id: 228, name: "Refreshment", level: 7, image: "refreshment"},
    {id: 229, name: "Portable Ballista", level: 8, image: "portable-ballista"},
    {id: 230, name: "Fortified Position", level: 8, image: "fortified-position"},
    {id: 231, name: "Scroll of Annihilation", level: 9, image: "scroll-of-annihilation"},
    {id: 232, name: "Bag of Holding", level: 9, image: "bag-of-holding"}
]

//Summoner
const SUMMONERABILITIES: CharacterAbility[] = [
    {id: 233, name: "Forged Ferocity", level: 1, image: "forged-ferocity"},
    {id: 234, name: "Wild Animation", level: 1, image: "wild-animation"},
    {id: 235, name: "Living Night", level: 1, image: "living-night"},
    {id: 236, name: "Unending Dominance", level: 1, image: "unending-dominance"},
    {id: 237, name: "Unwavering Hand", level: 1, image: "unwavering-hand"},
    {id: 238, name: "Mighty Bond", level: 1, image: "mighty-bond"},
    {id: 239, name: "Bonded Night", level: 1, image: "bonded-night"},
    {id: 240, name: "Biting Wind", level: 1, image: "biting-wind"},
    {id: 241, name: "Black Fire", level: 1, image: "black-fire"},
    {id: 242, name: "Leathery Wings", level: 1, image: "leathery-wings"},
    {id: 243, name: "Volatile Flame", level: 1, image: "volatile-flame"},
    {id: 244, name: "Ethereal Vines", level: 1, image: "ethereal-vines"},
    {id: 245, name: "Earthen Steed", level: 2, image: "earthen-steed"},
    {id: 246, name: "Grasping the Void", level: 2, image: "grasping-the-void"},
    {id: 247, name: "Tear the Fabric", level: 3, image: "tear-the-fabric"},
    {id: 248, name: "Oozing Manifestation", level: 3, image: "oozing-manifestation"},
    {id: 249, name: "Living Mountain", level: 4, image: "living-mountain"},
    {id: 250, name: "Divided Mind", level: 4, image: "divided-mind"},
    {id: 251, name: "Strength in Numbers", level: 5, image: "strength-in-numbers"},
    {id: 252, name: "Conjured Aid", level: 5, image: "conjured-aid"},
    {id: 253, name: "Endless Spikes", level: 6, image: "endless-spikes"},
    {id: 254, name: "Inexorable Momentum", level: 6, image: "inexorable-momentum"},
    {id: 255, name: "Negative Energy", level: 7, image: "negative-energy"},
    {id: 256, name: "Staff of Visions", level: 7, image: "staff-of-visions"},
    {id: 257, name: "Intervening Apparitions", level: 8, image: "intervening-apparitions"},
    {id: 258, name: "Otherworldly Rage", level: 8, image: "otherworldly-rage"},
    {id: 259, name: "Interplanar Mastery", level: 9, image: "interplanar-mastery"},
    {id: 260, name: "Horned Majesty", level: 9, image: "horned-majesty"}
]

//Nightshroud
const NIGHTSHROUDABILITIES: CharacterAbility[] = [
    {id: 261, name: "Black Knives", level: 1, image: "black-knives"},
    {id: 262, name: "Cloak of Shade", level: 1, image: "cloak-of-shade"},
    {id: 263, name: "Empowering Void", level: 1, image: "empowering-void"},
    {id: 264, name: "Doomed Breeze", level: 1, image: "doomed-breeze"},
    {id: 265, name: "Enervating Wound", level: 1, image: "enervating-wound"},
    {id: 266, name: "Spirit of the Night", level: 1, image: "spirit-of-the-night"},
    {id: 267, name: "Dancing Shadows", level: 1, image: "dancing-shadows"},
    {id: 268, name: "Silent Force", level: 1, image: "silent-force"},
    {id: 269, name: "Smoke Step", level: 1, image: "smoke-step"},
    {id: 270, name: "Wings of the Night", level: 1, image: "wings-of-the-night"},
    {id: 271, name: "Concealed Dominance", level: 1, image: "concealed-dominance"},
    {id: 272, name: "Dark Cloud", level: 1, image: "dark-cloud"},
    {id: 273, name: "Prepare for the Kill", level: 2, image: "prepare-for-the-kill"},
    {id: 274, name: "Soulfire", level: 2, image: "soulfire"},
    {id: 275, name: "Terror Blade", level: 3, image: "terror-blade"},
    {id: 276, name: "Armor of the Night", level: 3, image: "armor-of-the-night"},
    {id: 277, name: "Nightfall", level: 4, image: "nightfall"},
    {id: 278, name: "Grim Sustenance", level: 4, image: "grim-sustenance"},
    {id: 279, name: "Claws of the Night", level: 5, image: "claws-of-the-night"},
    {id: 280, name: "Black Arrow", level: 5, image: "black-arrow"},
    {id: 281, name: "Unseen Dread", level: 6, image: "unseen-dread"},
    {id: 282, name: "Swallowed by Fear", level: 6, image: "swallowed-by-fear"},
    {id: 283, name: "Eyes of the Night", level: 7, image: "eyes-of-the-night"},
    {id: 284, name: "Quiet Frenzy", level: 7, image: "quiet-frenzy"},
    {id: 285, name: "Gloom Darts", level: 8, image: "gloom-darts"},
    {id: 286, name: "Lurking Ruin", level: 8, image: "lurking-ruin"},
    {id: 287, name: "Angel of Death", level: 9, image: "angel-of-death"},
    {id: 288, name: "Voice of the Night", level: 9, image: "voice-of-the-night"}
]

//Plagueherald
const PLAGUEHERALDABILITIES: CharacterAbility[] = [
    {id: 289, name: "Vile Pestilence", level: 1, image: "vile-pestilence"},
    {id: 290, name: "Grasping Vermin", level: 1, image: "grasping-vermin"},
    {id: 291, name: "Wretched Swarm", level: 1, image: "wretched-swarm"},
    {id: 292, name: "Spread the Plague", level: 1, image: "spread-the-plague"},
    {id: 293, name: "Biting Gnats", level: 1, image: "biting-gnats"},
    {id: 294, name: "Winged Congregation", level: 1, image: "winged-congregation"},
    {id: 295, name: "Creeping Curse", level: 1, image: "creeping-curse"},
    {id: 296, name: "Gathering Doom", level: 1, image: "gathering-doom"},
    {id: 297, name: "Paralyzing Bite", level: 1, image: "paralyzing-bite"},
    {id: 298, name: "Foul Wind", level: 1, image: "foul-wind"},
    {id: 299, name: "Scattered Terror", level: 1, image: "scattered-terror"},
    {id: 300, name: "Epidemic", level: 1, image: "epidemic"},
    {id: 301, name: "Virulent Strain", level: 1, image: "virulent-strain"},
    {id: 302, name: "Blistering Vortex", level: 1, image: "blistering-vortex"},
    {id: 303, name: "Under the Skin", level: 2, image: "under-the-skin"},
    {id: 304, name: "Rot Maggots", level: 2, image: "rot-maggots"},
    {id: 305, name: "Succumb to the Gift", level: 3, image: "succumb-to-the-gift"},
    {id: 306, name: "Fetid Flurry", level: 3, image: "fetid-flurry"},
    {id: 307, name: "Storm of Wings", level: 4, image: "storm-of-wings"},
    {id: 308, name: "Nightmarish Affliction", level: 4, image: "nightmarish-affliction"},
    {id: 309, name: "Accelerated End", level: 5, image: "accelerated-end"},
    {id: 310, name: "Willing Sacrifice", level: 5, image: "willing-sacrifice"},
    {id: 311, name: "Stinging Cloud", level: 6, image: "stinging-cloud"},
    {id: 312, name: "Black Tides", level: 6, image: "black-tides"},
    {id: 313, name: "Airborne Toxin", level: 7, image: "airborne-toxin"},
    {id: 314, name: "Baneful Hex", level: 7, image: "baneful-hex"},
    {id: 315, name: "Spreading Scourge", level: 8, image: "spreading-scourge"},
    {id: 316, name: "Grim Bargain", level: 8, image: "grim-bargain"},
    {id: 317, name: "Mass Extinction", level: 9, image: "mass-extinction"},
    {id: 318, name: "Convert the Flock", level: 9, image: "convert-the-flock"}
]

//Berserker
const BERSERKERABILITIES: CharacterAbility[] = [
    {id: 319, name: "Resolute Stand", level: 1, image: "resolute-stand"},
    {id: 320, name: "Growing Rage", level: 1, image: "growing-rage"},
    {id: 321, name: "Strength in Agony", level: 1, image: "strength-in-agony"},
    {id: 322, name: "Defiance of Death", level: 1, image: "defiance-of-death"},
    {id: 323, name: "From the Brink", level: 1, image: "from-the-brink"},
    {id: 324, name: "Blood Pact", level: 1, image: "blood-pact"},
    {id: 325, name: "Cauterize", level: 1, image: "cauterize"},
    {id: 326, name: "Dazing Wound", level: 1, image: "dazing-wound"},
    {id: 327, name: "Furious Aid", level: 1, image: "furious-aid"},
    {id: 328, name: "Bounce Back", level: 1, image: "bounce-back"},
    {id: 329, name: "Unbridled Power", level: 1, image: "unbridled-power"},
    {id: 330, name: "Glass Hammer", level: 1, image: "glass-hammer"},
    {id: 331, name: "Numb the Pain", level: 1, image: "numb-the-pain"},
    {id: 332, name: "Reckless Offensive", level: 2, image: "reckless-offensive"},
    {id: 333, name: "Break the Chains", level: 2, image: "break-the-chains"},
    {id: 334, name: "Spiked Armor", level: 3, image: "spiked-armor"},
    {id: 335, name: "Fatal Fury", level: 3, image: "fatal-fury"},
    {id: 336, name: "Flurry of Axes", level: 4, image: "flurry-of-axes"},
    {id: 337, name: "Shiny Distraction", level: 4, image: "shiny-distraction"},
    {id: 338, name: "Seeing Red", level: 5, image: "seeing-red"},
    {id: 339, name: "Final Fight", level: 5, image: "final-fight"},
    {id: 340, name: "Devil Horns", level: 6, image: "devil-horns"},
    {id: 341, name: "Unstoppable Destruction", level: 6, image: "unstoppable-destruction"},
    {id: 342, name: "Burning Hatred", level: 7, image: "burning-hatred"},
    {id: 343, name: "Careless Charge", level: 7, image: "careless-charge"},
    {id: 344, name: "Bone Breaker", level: 8, image: "bone-breaker"},
    {id: 345, name: "Vengeful Barrage", level: 8, image: "vengeful-barrage"},
    {id: 346, name: "Immortality", level: 9, image: "immortality"},
    {id: 347, name: "The Maw of Madness", level: 9, image: "the-maw-of-madness"}
]

//Soothsinger
const SOOTHSINGERABILITIES: CharacterAbility[] = [
    {id: 348, name: "Power Ballad", level: 1, image: "power-ballad"},
    {id: 349, name: "Defensive Ditty", level: 1, image: "defensive-ditty"},
    {id: 350, name: "Song of Speed", level: 1, image: "song-of-speed"},
    {id: 351, name: "Tuning the Outcome", level: 1, image: "tuning-the-outcome"},
    {id: 352, name: "Call to Action", level: 1, image: "call-to-action"},
    {id: 353, name: "Warding Dagger", level: 1, image: "warding-dagger"},
    {id: 354, name: "Throw Voice", level: 1, image: "throw-voice"},
    {id: 355, name: "Singing Arrow", level: 1, image: "singing-arrow"},
    {id: 356, name: "Marching Beat", level: 1, image: "marching-beat"},
    {id: 357, name: "Wistful Wounding", level: 1, image: "wistful-wounding"},
    {id: 358, name: "Unending Chant", level: 1, image: "unending-chant"},
    {id: 359, name: "Nimble Knife", level: 1, image: "nimble-knife"},
    {id: 360, name: "Soothing Lullaby", level: 2, image: "soothing-lullaby"},
    {id: 361, name: "Change Tempo", level: 2, image: "change-tempo"},
    {id: 362, name: "Echoing Aria", level: 3, image: "echoing-aria"},
    {id: 363, name: "Crippling Chorus", level: 3, image: "crippling-chorus"},
    {id: 364, name: "Disorienting Dirge", level: 4, image: "disorienting-dirge"},
    {id: 365, name: "Inspiring Anthem", level: 4, image: "inspiring-anthem"},
    {id: 366, name: "Melody and Harmony", level: 5, image: "melody-and-harmony"},
    {id: 367, name: "Mobilizing Measure", level: 5, image: "mobilizing-measure"},
    {id: 368, name: "Pull the Strings", level: 6, image: "pull-the-strings"},
    {id: 369, name: "Provoke Terror", level: 6, image: "provoke-terror"},
    {id: 370, name: "Nightmare Serenade", level: 7, image: "nightmare-serenade"},
    {id: 371, name: "Booming Proclamation", level: 7, image: "booming-proclamation"},
    {id: 372, name: "Tranquil Trill", level: 8, image: "tranquil-trill"},
    {id: 373, name: "Commanding Presence", level: 8, image: "commanding-presence"},
    {id: 374, name: "Captivating Performance", level: 9, image: "captivating-performance"},
    {id: 375, name: "Shadow Puppets", level: 9, image: "shadow-puppets"}
]

//Doomstalker
const DOOMSTALKERABILITIES: CharacterAbility[] = [
    {id: 376, name: "Rain of Arrows", level: 1, image: "rain-of-arrows"},
    {id: 377, name: "Crippling Noose", level: 1, image: "crippling-noose"},
    {id: 378, name: "Felling Swoop", level: 1, image: "felling-swoop"},
    {id: 379, name: "Vital Charge", level: 1, image: "vital-charge"},
    {id: 380, name: "Race to the Grave", level: 1, image: "race-to-the-grave"},
    {id: 381, name: "Multi-Pronged Assault", level: 1, image: "multi-pronged-assault"},
    {id: 382, name: "Detonation", level: 1, image: "detonation"},
    {id: 383, name: "Frightening Curse", level: 1, image: "frightening-curse"},
    {id: 384, name: "Foot Snare", level: 1, image: "foot-snare"},
    {id: 385, name: "Solid Bow", level: 1, image: "solid-bow"},
    {id: 386, name: "A Moment's Peace", level: 1, image: "a-moments-peace"},
    {id: 387, name: "Swift Trickery", level: 1, image: "swift-trickery"},
    {id: 388, name: "Sap Life", level: 1, image: "sap-life"},
    {id: 389, name: "The Hunt Begins", level: 1, image: "the-hunt-begins"},
    {id: 390, name: "Fresh Kill", level: 1, image: "fresh-kill"},
    {id: 391, name: "Expose", level: 2, image: "expose"},
    {id: 392, name: "Relentless Offensive", level: 2, image: "relentless-offensive"},
    {id: 393, name: "Darkened Skies", level: 3, image: "darkened-skies"},
    {id: 394, name: "Press the Attack", level: 3, image: "press-the-attack"},
    {id: 395, name: "Singular Focus", level: 4, image: "singular-focus"},
    {id: 396, name: "Flight of Flame", level: 4, image: "flight-of-flame"},
    {id: 397, name: "Inescapable Fate", level: 5, image: "inescapable-fate"},
    {id: 398, name: "Wild Command", level: 5, image: "wild-command"},
    {id: 399, name: "Nature's Hunger", level: 6, image: "natures-hunger"},
    {id: 400, name: "Camouflage", level: 6, image: "camouflage"},
    {id: 401, name: "Impending End", level: 7, image: "impending-end"},
    {id: 402, name: "Crashing Wave", level: 7, image: "crashing-wave"},
    {id: 403, name: "Rising Momentum", level: 8, image: "rising-momentum"},
    {id: 404, name: "Feral Instincts", level: 8, image: "feral-instincts"},
    {id: 405, name: "Predator and Prey", level: 9, image: "predator-and-prey"},
    {id: 406, name: "Lead to Slaughter", level: 9, image: "lead-to-slaughter"}
]

//Sawbones
const SAWBONESABILITIES: CharacterAbility[] = [
    {id: 407, name: "First Aid", level: 1, image: "first-aid"},
    {id: 408, name: "Hand of the Surgeon", level: 1, image: "hand-of-the-surgeon"},
    {id: 409, name: "Hold Back the Pain", level: 1, image: "hold-back-the-pain"},
    {id: 410, name: "Booster Shot", level: 1, image: "booster-shot"},
    {id: 411, name: "Bloody Saw", level: 1, image: "bloody-saw"},
    {id: 412, name: "Curative Mixture", level: 1, image: "curative-mixture"},
    {id: 413, name: "Syringe", level: 1, image: "syringe"},
    {id: 414, name: "Battlefield Medicine", level: 1, image: "battlefield-medicine"},
    {id: 415, name: "Triage", level: 1, image: "triage"},
    {id: 416, name: "Mobile Response", level: 1, image: "mobile-response"},
    {id: 428, name: "Prevention is Key", level: 1, image: "prevention-is-key"},
    {id: 429, name: "Teamwork", level: 1, image: "teamwork"},
    {id: 430, name: "Vaccine", level: 1, image: "vaccine"},
    {id: 431, name: "Hamstring", level: 2, image: "hamstring"},
    {id: 432, name: "Precaution", level: 2, image: "precaution"},
    {id: 433, name: "Regenerative Tissue", level: 3, image: "regenerative-tissue"},
    {id: 434, name: "Vital Strike", level: 3, image: "vital-strike"},
    {id: 435, name: "Blood Transfusion", level: 4, image: "blood-transfusion"},
    {id: 436, name: "Do No Harm", level: 4, image: "do-no-harm"},
    {id: 437, name: "Research the Cure", level: 5, image: "research-the-cure"},
    {id: 438, name: "Amputate", level: 5, image: "amputate"},
    {id: 439, name: "Euthanize", level: 6, image: "euthanize"},
    {id: 440, name: "Prescription", level: 6, image: "prescription"},
    {id: 441, name: "Master Physician", level: 7, image: "master-physician"},
    {id: 442, name: "Surgeon's Satchel", level: 7, image: "surgeons-satchel"},
    {id: 443, name: "Bedside Manner", level: 8, image: "bedside-manner"},
    {id: 444, name: "Gentleman's Anger", level: 8, image: "gentlemans-anger"},
    {id: 445, name: "Prep for Surgery", level: 9, image: "prep-for-surgery"},
    {id: 446, name: "Grisly Trauma", level: 9, image: "grisly-trauma"}
]

//Elementalist
const ELEMENTALISTABILITIES: CharacterAbility[] = [
    {id: 447, name: "Raw Enhancement", level: 1, image: "raw-enhancement"},
    {id: 448, name: "Pure Augmentation", level: 1, image: "pure-augmentation"},
    {id: 449, name: "Formless Power", level: 1, image: "formless-power"},
    {id: 450, name: "Shaping the Ether", level: 1, image: "shaping-the-ether"},
    {id: 451, name: "Stoking Hail", level: 1, image: "stoking-hail"},
    {id: 452, name: "Tremulant Cyclone", level: 1, image: "tremulant-cyclone"},
    {id: 453, name: "Infernal Vortex", level: 1, image: "infernal-vortex"},
    {id: 454, name: "Lava Eruption", level: 1, image: "lava-eruption"},
    {id: 455, name: "Ice Spikes", level: 1, image: "ice-spikes"},
    {id: 456, name: "Frigid Torrent", level: 1, image: "frigid-torrent"},
    {id: 457, name: "Malleable Evocation", level: 1, image: "malleable-evocation"},
    {id: 458, name: "Brilliant Flash", level: 1, image: "brilliant-flash"},
    {id: 459, name: "Encompassing Shadow", level: 1, image: "encompassing-shadow"},
    {id: 460, name: "Boiling Arc", level: 2, image: "boiling-arc"},
    {id: 461, name: "Crystallizing Blast", level: 2, image: "crystallizing-blast"},
    {id: 462, name: "Burial", level: 3, image: "burial"},
    {id: 463, name: "Chain Lightning", level: 3, image: "chain-lightning"},
    {id: 464, name: "Primal Duality", level: 4, image: "primal-duality"},
    {id: 465, name: "Gravel Vortex", level: 4, image: "gravel-vortex"},
    {id: 466, name: "Obsidian Shards", level: 5, image: "obsidian-shards"},
    {id: 467, name: "Winter's Edge", level: 5, image: "winters-edge"},
    {id: 468, name: "Eye of the Hurricane", level: 6, image: "eye-of-the-hurricane"},
    {id: 469, name: "Simulacrum", level: 6, image: "simulacrum"},
    {id: 470, name: "Vengeance", level: 7, image: "vengeance"},
    {id: 471, name: "Pragmatic Reinforcement", level: 7, image: "pragmatic-reinforcement"},
    {id: 472, name: "Volatile Consumption", level: 8, image: "volatile-consumption"},
    {id: 473, name: "Elemental Aegis", level: 8, image: "elemental-aegis"},
    {id: 474, name: "Ethereal Manifestation", level: 9, image: "ethereal-manifestation"},
    {id: 475, name: "Eternal Equilibrium", level: 9, image: "eternal-equilibrium"}
]

//Beast Tyrant
const BEASTTYRANTABILITIES: CharacterAbility[] = [
    {id: 477, name: "Disorienting Roar", level: 1, image: "disorienting-roar"},
    {id: 478, name: "Spirit Swap", level: 1, image: "spirit-swap"},
    {id: 479, name: "Venomous Ally", level: 1, image: "venomous-ally"},
    {id: 480, name: "Relentless Ally", level: 1, image: "relentless-ally"},
    {id: 481, name: "Concentrated Rage", level: 1, image: "concentrated-rage"},
    {id: 482, name: "Disappearing Wounds", level: 1, image: "disappearing-wounds"},
    {id: 483, name: "Patch Fur", level: 1, image: "patch-fur"},
    {id: 484, name: "Maul", level: 1, image: "maul"},
    {id: 485, name: "Forceful Swipe", level: 1, image: "forceful-swipe"},
    {id: 486, name: "Howling Bolts", level: 1, image: "howling-bolts"},
    {id: 487, name: "Soaring Ally", level: 1, image: "soaring-ally"},
    {id: 488, name: "Focused Aggression", level: 1, image: "focused-aggression"},
    {id: 489, name: "Borrowed Essence", level: 1, image: "borrowed-essence"},
    {id: 490, name: "Energizing Strike", level: 2, image: "energizing-strike"},
    {id: 491, name: "Earthen Spikes", level: 2, image: "earthen-spikes"},
    {id: 492, name: "Vicious Ally", level: 3, image: "vicious-ally"},
    {id: 493, name: "Unstoppable Beast", level: 3, image: "unstoppable-beast"},
    {id: 494, name: "Punch Through", level: 4, image: "punch-through"},
    {id: 495, name: "Ancient Ward", level: 4, image: "ancient-ward"},
    {id: 496, name: "Rampage", level: 5, image: "rampage"},
    {id: 497, name: "Stone Sigil", level: 5, image: "stone-sigil"},
    {id: 498, name: "Primal Blessing", level: 6, image: "primal-blessing"},
    {id: 499, name: "Blood Hunger", level: 6, image: "blood-hunger"},
    {id: 500, name: "Storm Sigil", level: 7, image: "storm-sigil"},
    {id: 501, name: "Tyrannical Force", level: 7, image: "tyrannical-force"},
    {id: 502, name: "Lash Out", level: 8, image: "lash-out"},
    {id: 503, name: "Natural Remedy", level: 8, image: "natural-remedy"},
    {id: 504, name: "Jaws of Death", level: 9, image: "jaws-of-death"},
    {id: 505, name: "Tribal Sigil", level: 9, image: "tribal-sigil"}
]

//Diviner
const DIVINERABILITIES: CharacterAbility[] = [
    {id: 574, name: "Peer into Battle", level: 1, image: "peer-into-battle"},
    {id: 575, name: "Anticipate Intricacies", level: 1, image: "anticipate-intricacies"},
    {id: 576, name: "Protective Aura", level: 1, image: "protective-aura"},
    {id: 577, name: "Clairvoyance", level: 1, image: "clairvoyance"},
    {id: 578, name: "Otherworldly Journey", level: 1, image: "otherworldly-journey"},
    {id: 579, name: "Ray of Light", level: 1, image: "ray-of-light"},
    {id: 580, name: "Dimensional Transfer", level: 1, image: "dimensional-transfer"},
    {id: 581, name: "Void Snare", level: 1, image: "void-snare"},
    {id: 582, name: "Cursed Ground", level: 1, image: "cursed-ground"},
    {id: 583, name: "Bad Omen", level: 1, image: "bad-omen"},
    {id: 584, name: "Inspiration from Beyond", level: 1, image: "inspiration-from-beyond"},
    {id: 585, name: "Duality Shards", level: 1, image: "duality-shards"},
    {id: 589, name: "Revitalizing Fount", level: 2, image: "revitalizing-fount"},
    {id: 590, name: "Gift of the Void", level: 2, image: "gift-of-the-void"},
    {id: 591, name: "Envision the Course", level: 3, image: "envision-the-course"},
    {id: 592, name: "Call of the Nether", level: 3, image: "call-of-the-nether"},
    {id: 593, name: "Preordain the Path", level: 4, image: "preordain-the-path"},
    {id: 594, name: "Cleansing Rite", level: 4, image: "cleansing-rite"},
    {id: 595, name: "Seal Their Fate", level: 5, image: "seal-their-fate"},
    {id: 596, name: "Dimensional Divide", level: 5, image: "dimensional-divide"},
    {id: 597, name: "Enfeebling Hex", level: 6, image: "enfeebling-hex"},
    {id: 598, name: "Careful Attunement", level: 6, image: "careful-attunement"},
    {id: 599, name: "Curative Flux", level: 7, image: "curative-flux"},
    {id: 600, name: "Ethereal Vortex", level: 7, image: "ethereal-vortex"},
    {id: 601, name: "Deep Contemplation", level: 8, image: "deep-contemplation"},
    {id: 602, name: "Anguish and Salvation", level: 8, image: "anguish-and-salvation"},
    {id: 603, name: "Hand of Destiny", level: 9, image: "hand-of-destiny"},
    {id: 604, name: "Planar Fissure", level: 9, image: "planar-fissure"}
]
const CORECHARACTERCLASSES: CharacterClass[] = [
    { id: 13, name: 'Brute', health: '10,12,14,16,18,20,22,24,26', type:'Core', handsize: 10, abilities: BRUTEABILITIES },
    { id: 14, name: 'Cragheart', health: '10,12,14,16,18,20,22,24,26', type:'Core', handsize: 11, abilities: CRAGHEARTABILITIES },
    { id: 17, name: 'Mindthief', health: '6,7,8,9,10,11,12,13,14', type:'Core', handsize: 10, abilities: MINDTHIEFABILITIES },
    { id: 22, name: 'Scoundrel', health: '8,9,11,12,14,15,17,18,20', type:'Core', handsize: 9, abilities: SCOUNDRELABILITIES },
    { id: 24, name: 'Spellweaver', health: '6,7,8,9,10,11,12,13,14', type:'Core', handsize: 8, abilities: SPELLWEAVERABILITIES },
    { id: 27, name: 'Tinkerer', health: '8,9,11,12,14,15,17,18,20', type:'Core', handsize: 12, abilities: TINKERERABILITIES }
]

const ADVANCEDCHARACTERCLASSES: CharacterClass[] = [
    { id: 11, name: 'Beast-Tyrant', health: '6,7,8,9,10,11,12,13,14', type:'Advanced', handsize: 10, abilities: BEASTTYRANTABILITIES},
    { id: 15, name: 'Doomstalker', health: '8,9,11,12,14,15,17,18,20', type:'Advanced', handsize: 12, abilities: DOOMSTALKERABILITIES },
    { id: 16, name: 'Elementalist', health: '6,7,8,9,10,11,12,13,14', type:'Advanced', handsize: 10, abilities: ELEMENTALISTABILITIES },
    { id: 18, name: 'Nightshroud', health: '8,9,11,12,14,15,17,18,20', type:'Advanced', handsize: 9, abilities: NIGHTSHROUDABILITIES },
    { id: 20, name: 'Quartermaster', health: '10,12,14,16,18,20,22,24,26', type:'Advanced', handsize: 9, abilities: QUARTERMASTERABILITIES },
    { id: 21, name: 'Sawbones', health: '8,9,11,12,14,15,17,18,20', type:'Advanced', handsize: 10, abilities: SAWBONESABILITIES },
    { id: 23, name: 'Soothsinger', health: '6,7,8,9,10,11,12,13,14', type:'Advanced', handsize: 9, abilities: SOOTHSINGERABILITIES },
    { id: 25, name: 'Summoner', health: '8,9,11,12,14,15,17,18,20', type:'Advanced', handsize: 9, abilities: SUMMONERABILITIES},
    { id: 26, name: 'Sunkeeper', health: '10,12,14,16,18,20,22,24,26', type:'Advanced', handsize: 11, abilities: SUNKEEPERABILITIES }
]

const FCCHARACTERCLASSES: CharacterClass[] = [
    { id: 28, name: 'Diviner', health: '6,7,8,9,10,11,12,13,14', type:'Forgotten Circles', handsize: 9, abilities: DIVINERABILITIES }
]

const LOCKEDCHARACTERCLASSES: CharacterClass[] = [
    { id: 12, name: 'Berserker', health: '10,12,14,16,18,20,22,24,26', type:'Locked', handsize: 10, abilities: BERSERKERABILITIES },
    { id: 19, name: 'Plagueherald', health: '6,7,8,9,10,11,12,13,14', type:'Locked', handsize: 11, abilities: PLAGUEHERALDABILITIES }
]

export const CHARACTERCLASSGROUPS: CharacterClassGroup[] = [
    {name: 'Core', disabled: false, characterClasses: CORECHARACTERCLASSES },
    {name: 'Advanced', disabled: false, characterClasses: ADVANCEDCHARACTERCLASSES },
    {name: 'Forgotten Circles', disabled: false, characterClasses: FCCHARACTERCLASSES},
    {name: 'Locked', disabled: true, characterClasses: LOCKEDCHARACTERCLASSES}
]