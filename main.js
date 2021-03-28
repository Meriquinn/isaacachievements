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
  var $r1_1 = new ach(1, "Magdalene", "Have 7 or more Red Heart containers at one time.", "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ef/Achievement_Magdalene_icon.png", "https://bindingofisaacrebirth.fandom.com/wiki/Magdalene");
  var $r1_2 = new ach(2, "Cain", "Hold 55 coins at one time.", "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/22/Achievement_Cain_icon.png", "https://bindingofisaacrebirth.fandom.com/wiki/Cain");
  var x;
  var achievements = [$r1_1, $r1_2];
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
  cellA.innerHTML = "<a href='"+y.link+"' title='"+y.name+"' id='"+y.number+"'></a>";
  let nmbr = document.getElementById(y.number);
  nmbr.innerHTML = "<img src='"+y.image+"' alt='"+y.name+"' decoding='async' height='64' width='64'>";
  cellB.innerHTML = y.unlock;
  cellC.innerHTML = y.number;
}
tblInit();
