// $game(r a p)color(1-17)_number(1-403)
/*
Each achievement is color-coded based on the requirements for unlocking their respective secrets:
Tan: Random/Miscellaneous unlocks
Tan with blood stain: Mom's Heart/It Lives! on Hard unlocks
Olive-Green: character unlocks
Dark Red: Mom's Heart/Womb ending unlocks
Grey: Isaac unlocks
Black: Satan unlocks
Dark Blue: ??? unlocks
Purple: The Lamb unlocks
Pale Green: Boss Rush unlocks
Pale Blue: Hush unlocks
Orange: Greed Mode unlocks
Orange with blood stain: Greedier mode unlocks
White: Delirium unlocks
Red: Mega Satan unlocks/accomplishments
Dark Yellow: All Hard Mode marks unlocks
Bright Yellow: Greed Donation Machine unlocks
Bluish Purple: Challenge unlocks
Despite being a Boss Rush unlock for Lazarus, Missing No. Missing No.'s achievement color is bluish purple, a color normally used for challenge-related unlocks.
*/
/*I did it smart this time - instead of writing the html shit by hand for each entry like i did with the previous version i made this in javascript to auto-creating a table with the info all put together into html for me, i just need to c+v links and write in the names and unlock requirements for the achievements
Basically I made it so I don't have to think about the html format, just need to do the menial labour of inputting data
Lemme show you by putting in one that's it :)
Yes I spent an hour or so just going down the achievement list on the wiki and right clicking, copying link, pasting into a txt file, and repeating until i got all wiki links for rebirth achievements, used stuff like find & replace feature to format it into an array (table-like variable) also made an if statement so if it doesn't have a link to the wiki associated with the achievement it doesn't bother wasting memory/file size to have an empty link object*/

class ach {
  constructor(num, tle, dsc, img, lnk) {
    this.name = tle;
    this.image = img;
    this.link = lnk;
    this.unlock = dsc;
    this.number = num;
  }
}
function tblInit() {
  var achievements = [];
  var links = [
    "https://bindingofisaacrebirth.fandom.com/wiki/Magdalene",
    "https://bindingofisaacrebirth.fandom.com/wiki/Cain",
    "https://bindingofisaacrebirth.fandom.com/wiki/Judas",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Womb",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Harbingers",
    "https://bindingofisaacrebirth.fandom.com/wiki/Cube_of_Meat",
    "https://bindingofisaacrebirth.fandom.com/wiki/Book_of_Revelations",
    "https://bindingofisaacrebirth.fandom.com/wiki/Transcendence",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Nail",
    "https://bindingofisaacrebirth.fandom.com/wiki/A_Quarter",
    "https://bindingofisaacrebirth.fandom.com/wiki/Dr._Fetus",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Small_Rock",
    "https://bindingofisaacrebirth.fandom.com/wiki/Monstro%27s_Tooth",
    "https://bindingofisaacrebirth.fandom.com/wiki/Little_Chubby",
    "https://bindingofisaacrebirth.fandom.com/wiki/Loki%27s_Horns",
    "https://bindingofisaacrebirth.fandom.com/wiki/Steven",
    "https://bindingofisaacrebirth.fandom.com/wiki/C.H.A.D.",
    "https://bindingofisaacrebirth.fandom.com/wiki/Gish",
    "https://bindingofisaacrebirth.fandom.com/wiki/Super_Bandage",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Relic",
    "https://bindingofisaacrebirth.fandom.com/wiki/Sack_of_Pennies",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Book_of_Sin",
    "https://bindingofisaacrebirth.fandom.com/wiki/Little_Gish",
    "https://bindingofisaacrebirth.fandom.com/wiki/Little_Steven",
    "https://bindingofisaacrebirth.fandom.com/wiki/Little_C.H.A.D.",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Gamekid",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Halo",
    "https://bindingofisaacrebirth.fandom.com/wiki/Mr._Mega",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_D6",
    "https://bindingofisaacrebirth.fandom.com/wiki/Scissors",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Parasite",
    "https://bindingofisaacrebirth.fandom.com/wiki/%3F%3F%3F_(Character)",
    "pass",
    "https://bindingofisaacrebirth.fandom.com/wiki/It_Lives",
    "https://bindingofisaacrebirth.fandom.com/wiki/Mom%27s_Contacts",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Necronomicon",
    "pass",
    "pass",
    "pass",
    "pass",
    "pass",
    "https://bindingofisaacrebirth.fandom.com/wiki/Eve",
    "https://bindingofisaacrebirth.fandom.com/wiki/Mom%27s_Knife",
    "https://bindingofisaacrebirth.fandom.com/wiki/Razor_Blade",
    "https://bindingofisaacrebirth.fandom.com/wiki/Guardian_Angel",
    "https://bindingofisaacrebirth.fandom.com/wiki/Bomb_Bag",
    "https://bindingofisaacrebirth.fandom.com/wiki/Demon_Baby",
    "https://bindingofisaacrebirth.fandom.com/wiki/Forget_Me_Now",
    "https://bindingofisaacrebirth.fandom.com/wiki/D20",
    "https://bindingofisaacrebirth.fandom.com/wiki/Celtic_Cross",
    "https://bindingofisaacrebirth.fandom.com/wiki/Abel",
    "https://bindingofisaacrebirth.fandom.com/wiki/Curved_Horn",
    "https://bindingofisaacrebirth.fandom.com/wiki/Sacrificial_Dagger",
    "https://bindingofisaacrebirth.fandom.com/wiki/Bloody_Lust",
    "https://bindingofisaacrebirth.fandom.com/wiki/Bloody_Penny",
    "https://bindingofisaacrebirth.fandom.com/wiki/Blood_Rights",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Polaroid",
    "https://bindingofisaacrebirth.fandom.com/wiki/Dad%27s_Key",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Candle",
    "https://bindingofisaacrebirth.fandom.com/wiki/Burnt_Penny",
    "https://bindingofisaacrebirth.fandom.com/wiki/Lucky_Toe",
    "https://bindingofisaacrebirth.fandom.com/wiki/Epic_Fetus",
    "https://bindingofisaacrebirth.fandom.com/wiki/SMB_Super_Fan",
    "https://bindingofisaacrebirth.fandom.com/wiki/Counterfeit_Penny",
    "https://bindingofisaacrebirth.fandom.com/wiki/Guppy%27s_Hair_Ball",
    "https://bindingofisaacrebirth.fandom.com/wiki/Conquest",
    "https://bindingofisaacrebirth.fandom.com/wiki/Samson",
    "https://bindingofisaacrebirth.fandom.com/wiki/Triachnid",
    "pass",
    "https://bindingofisaacrebirth.fandom.com/wiki/Isaac%27s_Head",
    "https://bindingofisaacrebirth.fandom.com/wiki/Maggy%27s_Faith",
    "https://bindingofisaacrebirth.fandom.com/wiki/Judas%27_Tongue",
    "https://bindingofisaacrebirth.fandom.com/wiki/%3F%3F%3F%27s_Soul",
    "https://bindingofisaacrebirth.fandom.com/wiki/Samson%27s_Lock",
    "https://bindingofisaacrebirth.fandom.com/wiki/Cain%27s_Eye",
    "https://bindingofisaacrebirth.fandom.com/wiki/Eve%27s_Bird_Foot",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Left_Hand",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Negative",
    "https://bindingofisaacrebirth.fandom.com/wiki/Azazel",
    "https://bindingofisaacrebirth.fandom.com/wiki/Lazarus",
    "https://bindingofisaacrebirth.fandom.com/wiki/Eden",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Lost",
    "pass",
    "pass",
    "https://bindingofisaacrebirth.fandom.com/wiki/Lucky_Rock",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Cellar",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Catacombs",
    "https://bindingofisaacrebirth.fandom.com/wiki/Necropolis",
    "https://bindingofisaacrebirth.fandom.com/wiki/Runes",
    "https://bindingofisaacrebirth.fandom.com/wiki/Runes",
    "https://bindingofisaacrebirth.fandom.com/wiki/Runes",
    "https://bindingofisaacrebirth.fandom.com/wiki/Runes",
    "https://bindingofisaacrebirth.fandom.com/wiki/Runes",
    "https://bindingofisaacrebirth.fandom.com/wiki/Runes",
    "https://bindingofisaacrebirth.fandom.com/wiki/Runes",
    "https://bindingofisaacrebirth.fandom.com/wiki/Runes",
    "https://bindingofisaacrebirth.fandom.com/wiki/Chaos_Card",
    "https://bindingofisaacrebirth.fandom.com/wiki/Credit_Card",
    "https://bindingofisaacrebirth.fandom.com/wiki/Rules_Card",
    "https://bindingofisaacrebirth.fandom.com/wiki/A_Card_Against_Humanity",
    "https://bindingofisaacrebirth.fandom.com/wiki/Swallowed_Penny",
    "https://bindingofisaacrebirth.fandom.com/wiki/Robo-Baby_2.0",
    "https://bindingofisaacrebirth.fandom.com/wiki/Death%27s_Touch",
    "https://bindingofisaacrebirth.fandom.com/wiki/Tech.5",
    "https://bindingofisaacrebirth.fandom.com/wiki/Missing_No.",
    "https://bindingofisaacrebirth.fandom.com/wiki/Isaac%27s_Tears",
    "https://bindingofisaacrebirth.fandom.com/wiki/Guillotine",
    "https://bindingofisaacrebirth.fandom.com/wiki/Judas%27_Shadow",
    "https://bindingofisaacrebirth.fandom.com/wiki/Maggy%27s_Bow",
    "https://bindingofisaacrebirth.fandom.com/wiki/Cain%27s_Other_Eye",
    "https://bindingofisaacrebirth.fandom.com/wiki/Black_Lipstick",
    "https://bindingofisaacrebirth.fandom.com/wiki/Eve%27s_Mascara",
    "https://bindingofisaacrebirth.fandom.com/wiki/Fate",
    "https://bindingofisaacrebirth.fandom.com/wiki/%3F%3F%3F%27s_Only_Friend",
    "https://bindingofisaacrebirth.fandom.com/wiki/Samson%27s_Chains",
    "https://bindingofisaacrebirth.fandom.com/wiki/Lazarus%27_Rags",
    "https://bindingofisaacrebirth.fandom.com/wiki/Broken_Ankh",
    "https://bindingofisaacrebirth.fandom.com/wiki/Store_Credit",
    "https://bindingofisaacrebirth.fandom.com/wiki/Pandora%27s_Box",
    "https://bindingofisaacrebirth.fandom.com/wiki/Suicide_King",
    "https://bindingofisaacrebirth.fandom.com/wiki/Blank_Card",
    "https://bindingofisaacrebirth.fandom.com/wiki/Book_of_Secrets",
    "https://bindingofisaacrebirth.fandom.com/wiki/Mysterious_Paper",
    "https://bindingofisaacrebirth.fandom.com/wiki/Mystery_Sack",
    "https://bindingofisaacrebirth.fandom.com/wiki/Undefined",
    "https://bindingofisaacrebirth.fandom.com/wiki/Satanic_Bible",
    "https://bindingofisaacrebirth.fandom.com/wiki/Daemon%27s_Tail",
    "https://bindingofisaacrebirth.fandom.com/wiki/Abaddon",
    "https://bindingofisaacrebirth.fandom.com/wiki/Isaac%27s_Heart",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Mind",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Body",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Soul",
    "https://bindingofisaacrebirth.fandom.com/wiki/D100",
    "https://bindingofisaacrebirth.fandom.com/wiki/Blue_Map",
    "https://bindingofisaacrebirth.fandom.com/wiki/There%27s_Options",
    "https://bindingofisaacrebirth.fandom.com/wiki/Black_Candle",
    "https://bindingofisaacrebirth.fandom.com/wiki/Red_Candle",
    "https://bindingofisaacrebirth.fandom.com/wiki/Stop_Watch",
    "https://bindingofisaacrebirth.fandom.com/wiki/Wire_Coat_Hanger",
    "https://bindingofisaacrebirth.fandom.com/wiki/Ipecac",
    "https://bindingofisaacrebirth.fandom.com/wiki/Experimental_Treatment",
    "https://bindingofisaacrebirth.fandom.com/wiki/Krampus",
    "https://bindingofisaacrebirth.fandom.com/wiki/Head_of_Krampus",
    "https://bindingofisaacrebirth.fandom.com/wiki/Cube_of_Meat#Methods_to_create_a_Super_Meat_Boy",
    "https://bindingofisaacrebirth.fandom.com/wiki/Butter_Bean",
    "https://bindingofisaacrebirth.fandom.com/wiki/Little_Baggy",
    "https://bindingofisaacrebirth.fandom.com/wiki/Blood_Bag",
    "https://bindingofisaacrebirth.fandom.com/wiki/D4",
    "https://bindingofisaacrebirth.fandom.com/wiki/Missing_Poster",
    "https://bindingofisaacrebirth.fandom.com/wiki/Rubber_Cement",
    "https://bindingofisaacrebirth.fandom.com/wiki/Donation_machine",
    "https://bindingofisaacrebirth.fandom.com/wiki/Donation_machine",
    "https://bindingofisaacrebirth.fandom.com/wiki/Donation_machine",
    "https://bindingofisaacrebirth.fandom.com/wiki/Donation_machine",
    "https://bindingofisaacrebirth.fandom.com/wiki/Angel",
    "https://bindingofisaacrebirth.fandom.com/wiki/Godhead",
    "https://bindingofisaacrebirth.fandom.com/wiki/Darkness_Falls",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Tank",
    "https://bindingofisaacrebirth.fandom.com/wiki/Solar_System",
    "https://bindingofisaacrebirth.fandom.com/wiki/Suicide_King_(Challenge)",
    "https://bindingofisaacrebirth.fandom.com/wiki/Cat_Got_Your_Tongue",
    "https://bindingofisaacrebirth.fandom.com/wiki/Demo_Man",
    "https://bindingofisaacrebirth.fandom.com/wiki/Cursed!",
    "https://bindingofisaacrebirth.fandom.com/wiki/Glass_Cannon_(Challenge)",
    "https://bindingofisaacrebirth.fandom.com/wiki/The_Family_Man",
    "https://bindingofisaacrebirth.fandom.com/wiki/Purist",
    "https://bindingofisaacrebirth.fandom.com/wiki/Babies",
    "https://bindingofisaacrebirth.fandom.com/wiki/Babies",
    "https://bindingofisaacrebirth.fandom.com/wiki/Babies",
    "https://bindingofisaacrebirth.fandom.com/wiki/Babies",
    "https://bindingofisaacrebirth.fandom.com/wiki/Babies",
    "https://bindingofisaacrebirth.fandom.com/wiki/Babies",
    "https://bindingofisaacrebirth.fandom.com/wiki/Babies",
    "https://bindingofisaacrebirth.fandom.com/wiki/Babies",
    "https://bindingofisaacrebirth.fandom.com/wiki/Babies",
    "https://bindingofisaacrebirth.fandom.com/wiki/Babies",
    "https://bindingofisaacrebirth.fandom.com/wiki/Babies",
    "https://bindingofisaacrebirth.fandom.com/wiki/Beelzebub"
  ];
  var png = [
    "gfx/3chr/magdalene.png",
    "gfx/3chr/cain.png",
    "gfx/3chr/judas.png",
    "gfx/4heart/the womb.png",
    "gfx/1misc/the harbingers.png",
    "gfx/1misc/a cube of meat.png",
    "gfx/1misc/the book of revelations.png"
  ];
  var label = [
    "Magdalene",
    "Cain",
    "Judas",
    "The Womb",
    "The Harbingers",
    "A Cube of Meat",
    "The Book of Revelations"
  ];
  var lock = [
    "Have 7 or more Red Heart containers at one time",
    "Hold 55 coins at one time",
    "Defeat Satan",
    "Defeat Mom",
    "Defeat Mom",
    "Defeat Mom",
    "Defeat a Harbinger"
  ];
  for (i = 0; i < label.length; i++) {
    var ah = {};
    var zn = "$ach" + i;
    ah[zn] = new ach(i+1, label[i], lock[i], png[i], links[i])
    achievements.push(ah[zn]);
  }
  var x;
  for (x of achievements) {
    achLoop(x);
  }
}
function achLoop(y) {
  let tbl = document.getElementById("isaac");
  let row = tbl.insertRow(-1);
  let cellA = row.insertCell(0);
  let cellB = row.insertCell(1);
  let cellC = row.insertCell(2);
  if (y.link != "pass") {
    cellA.innerHTML = "<a href='"+y.link+"' title='"+y.name+"' id='"+y.number+"'><img src='"+y.image+"' alt='"+y.name+"' decoding='async' height='64' width='64'></a>";
  } else {
    cellA.innerHTML = "<img src='"+y.image+"' alt='"+y.name+"' title='"+y.name+"' decoding='async' height='64' width='64'>"
  }
  cellB.innerHTML = y.unlock;
  cellC.innerHTML = y.number;
}
tblInit();
