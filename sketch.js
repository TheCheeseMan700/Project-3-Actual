var programOn = false;
var territoryPicked = false;
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var registerMode = false;
var territoryCounter = 0;
var townCounter1 = 0;
var townCounter2 = 0;
var townCounter3 = 0;
var townCounter4 = 0;
var townCounter5 = 0;
var townCounter6 = 0;
var raceCounter = 0;
var ageCounter1 = 0;
var ageCounter2 = 0;
var ageCounter3 = 0;
var ageCounter4 = 0;
var ageCounter5 = 0;
var ageCounter6 = 0;
var classCounter = 0;
var occupationCounter = 0;
var strengthCounter = 6;
var dexterityCounter = 6;
var constitutionCounter = 6;
var intelligenceCounter = 6;
var wisdomCounter = 6;
var charismaCounter = 6;

var sexCounter = 0;

var worldTerritories = ["Elderreach", "Deadlands", "Aurelia", "Keyadrys", "Ulreynian Empire", "Adraxis"];
var territoryImages = ['img2'];

/*var regions = ["Plains", "Moutains", "Islands", "Coast", "Wastes", "Hills", "Riverside"];*/

/*var elderreachRegions = ["Coast", "Hills", "Mountains", "Forests"];
var deadlandsRegions = ["Wastes", "Mountains"];
var aureliaRegions = ["Coast", "Islands", "Mountains", "Coral Depths", "Forests"];
var keyadrysRegions = ["Coast", "River Valley", "Mountains", "Plains", "Hills", "Forests"];
var ulreynianRegions = ["Coast", "Plains", "River Valley", "Hills", "Mountains", "Marsh", "Forests", "Islands"];
var adraxisRegions = ["Coast", "Islands", "River Valley", "Plains", "Hills"];*/

var races = ["Orc", "Dragonborn", "Half-Orc", "Human", "Halfling", "Tabaxi", "Aasimar", "Tiefling", "Half-Elf", "Dwarf", "Gnome", "Elf", "Drow", "Warforged"];

var classes = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard", "Artificer", "Blood Hunter"]

/*Human - 110        Orc - 80             Below Average Life Span
  Elf - 850          Dragonborn - 80
  Half-Orc - 80      Half-Orc - 80
  Drow - 850         Human - 115          Average Life Span
  Dwarf - 350        Halfling - 115
  Tabaxi - 115       Tabaxi - 115
  Orc - 85           Aasimar - 150        Above Average Life Span
  Halfling - 110     Tiefling - 150
  Half-Elf - 150     Half-Elf - 150
  Gnome - 350        Dwarf - 350          Long Life Span
  Aasimar - 150      Gnome - 350
  Warforged - 1234   Elf - 850            Elven Life Span
  Dragonborn - 85    Drow - 850
  Tielfing - 150     Warforged - 1234     Nigh Immortal*/

var shortLifeSpan = [];
var lowerMediumLifeSpan = [];
var mediumLifeSpan = [];
var longLifeSpan = [];
var elvenLifeSpan = [];
var agelessLifeSpan = [];

var sex = ["Male", "Female"];

var townsElderreach = ["None", "Dragons Run", "The Pit", "Not Listed"];
var townsDeadlands = ["None"];
var townsAurelia = ["None", "Axiom", "Nuled", "Rhial", "Caris", "Khel", "Yorennerg", "Rhous", "Not Listed"];
var townsKeyadrys = ["None", "Caldragith", "Enis", "Ai Oron", "Balai Ogor", "Caldrinn", "Khovshaat", "Chand", "Gob", "Tonkhil", "Not Listed"];
var townsUlreynian = ["None", "Valengard", "Zyban", "Coryn", "Zel Orvec", "Oggton", "Vylworn", "Zel Ulzak", "Zel Norec", "Ibor", "Drunulon", "Not Listed"];
var townsAdraxis = ["None", "Midir", "Bordin", "Zordgoz", "Ornen", "Sirt", "Verin", "Edre", "Tavs", "Not Listed"];
var townsHolder = [townsElderreach, townsDeadlands, townsAurelia, townsKeyadrys, townsUlreynian, townsAdraxis];

var occupations = ["Scavenger", "Hunter", "Civilian", "Provisions Merchant", "Blacksmith", "Armorer", "Potions Merchant", "Soldier", "Noble", "Tavern Worker", "Enchanter", "General Merchant", "Tailor", "Adventurer"];

var occupationDescriptions = [
  "A wanderer who travels city or wilderness, searching and finding all they need to survive",
  "A predator who ventures into the untamed wilderness, tracking their prey in order to provide and survive",
  "An average person living on the continent of Razyath, who simply goes about the day as they choose",
  "A vendor of all things travel and provisions related, selling adventurers food and supply",
  "A master of metal and the forge, crafting fine weaponry to sell, for the defense of them and others",
  "A craftsmen having mastered the art of protection, fashioning armor to protect courageous and cowardly",
  "A dealer of the arcane, crafting brew and ointments to aid adventurers and hinder enemies",
  "A person of duty and honor, serving their master in protecting the innocent and bound to keep peace in the realm",
  "A high class civilian, generally holding an abundance of wealth or power with little more then their name",
  "A backbone of adventurers lives, working to keep the ale flowing, food cooking, and music playing",
  "A magical inventor or enhancer, using their knowledge of the arcane to give now power into mundane items",
  "A one stop shop for every general item you could need in life, having a little bit of everything",
  "A weaver of find fabrics, creating attire less for defense and more for looking good when out and about",
  "The defenders of justice and heroes of the realm, taking on jobs others cannot in order to protect everyone"
];

var stats = ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"];

/*var dwarfLastNames = ["Wildpass", "Hardbreaker", "Everfury", "Lasthold", "Broadbottom", "Grotgonog", "Strerart", "Murihr", "Gledavek", "Grollahahk", "Stormhandle", "Hardboots", "Ironguard", "Stormdelver", "Halfrest", "Dalloharr", "Brenkehon", "Bahog", "Guzzihr", "Cotgerk", "Stoutbleeder", "Stormroar", "Goldenboots", "Bloodmight", "Smugfury", "Bardegarr", "Lenkur", "Bodak", "Gubrorr", "Druthgeln", "Coldstrike", "Strongguard", "Madgrip", "Blackheart", "Loudbane", "Denhag", "Glenkuln", "Grellagen", "Molderr", "Thrallekack"];*/

/*var elfLastNames = ["Dewbreath", "Silverspark", "Featherwhisper", "Starsense", "Ravensense", "Cornasso", "Yona", "Ceyrodran", "Thurin", "Femihi", "Greencrown", "Mistcloud", "Ravenwatcher", "Boldcloud", "Amberwatcher", "Tontendrint", "Ciamer", "Nusodrave", "Teviish", "Queylthenthrisal", "Flowershine", "Cedargrove", "Wildflight", "Stonesense", "Ravenwalker", "Navehenn", "Sussolphilo", "Kesirnethroth", "Sathros", "Gevuath", "Duskshard", "Elderrest", "Dawnwhisper", "Lunarguard", "Poplarrest", "Hordovondrent", "Meliphathra", "Huminn", "Tathath", "Yarnorriath"];*/

var names = ["Zad", "Jug", "Rhug", "Duk", "Garlun", "Magok", "Gojug", "Zuvag", "Shagak", "Umokk", "Zag", "Dol", "Ghall", "Dhokk", "Datan", "Zarzog", "Nuvrak", "Shodrug", "Rhuggall", "Bhurtukk", "Haul", "Reev", "Bhun", "Gul", "Rouvnee", "Bhagnu", "Dhadkoul", "Ghownil", "Kullaon", "Gautez", "Dhez", "Shuk", "Ghieng", "Dun", "Bhimvuan", "Guvgev", "Omel", "Kyevdol", "Ghonsem", "Bhyeva", "Thogron", "Garkam", "Morkyl", "Grilgus", "Galmin", "Kharrigg", "Gralmin", "Bennam", "Ebmek", "Gremrim", "Thulbek", "Daerkom", "Daermyr", "Krumthran", "Tharmir", "Thythrun", "Graldrus", "Thulgram", "Baerkahm", "Bromdek", "Barnan", "Gemlen", "Brenglia", "Tishryn", "Nisra", "Gwynselle", "Ingnis", "Dimgiel", "Myrglian", "Einwyn", "Katros", "Branmera", "Bylthel", "Torleil", "Lesvia", "Nalnis", "Gwinbera", "Belbera", "Nasswaen", "Bonnura", "Mekran", "Tegreel", "Cravrim", "Norrin", "Aremen", "Cryrdal", "Croran", "Nultor", "Neildin", "Ivir", "Erral", "Zyidin", "Ukal", "Panar", "Arnan", "Agar", "Penwal", "Brugier", "Miwikl", "Zawitir", "Ildie", "Misi", "Roldri", "Indrer", "Nilde", "Rhosra", "Lonvemi", "Irkima", "Naniasoel", "Wislimil", "Hava", "Hisre", "Inria", "Virseah", "Dolli", "Vonrom", "Eovenau", "Iommara", "Pherseze", "Ninvorin", "Bilal", "Cortez", "Edmon", "Chapman", "Waldemar", "Tre", "Kilby", "Didier", "Robbie", "Leeroy", "Ulric", "Geoff", "Allen", "Jullien", "Toni", "Dayne", "Ignace", "Emory", "Wyn", "Malcolm", "Ilja", "Weimer", "Brayton", "Elias", "Trenton", "L'Angley", "Sevrin", "North", "Ryle", "Wells", "Forrest", "Alvin", "Derik", "Matteo", "Geronimo", "Jamil", "Antonius", "Magnus", "Matthew", "Quint", "Ned", "Samy", "Michele", "Sherwin", "Yosef", "Aubin", "Antonius", "Ewart", "William", "Tim", "Ally", "Daisy", "Nastasia", "Luisa", "Ilse", "Ayla", "Shirl", "Agathe", "Faith", "Enrica", "Liliana", "Dore", "Lacyann", "Jaylynn", "Kelly", "Renata", "Filicia", "Nann", "Ashton", "Emelyne", "Nele", "Loren", "Lina", "Britney", "Alcott", "Faustine", "Marissa", "Clarimond", "Lisetta", "Kimball", "Gemma", "Elda", "Ornella", "Kelsie", "Beverley", "Alarise", "Hilaire", "Bobbi", "Della", "Alexandrea", "Laila", "Melodie", "Charee", "Philippe", "Carrie", "Searlait", "Villette", "Jenni", "Fiona", "Annie", "Norzeiros", "Genhice", "Aero", "Ralocan", "Genmyar", "Sarlen", "Balhice", "Wranran", "Norro", "Sylwarin", "limyar", "Sarro", "Kelqen", "Omapeiros", "Olodithas", "Aedan", "Yintumal", "Umesalor", "Petven", "Zinxidor", "Faemoira", "Holabella", "Valralei", "Ravajyre", "Ravagwyn", "Araxisys", "Adna", "Presbella", "nathyra", "Valnala", "Xillana", "Ylladove", "Shagella", "Eilsatra", "Oristina", "Loragella", "Miavyre", "Ulahana", "Reycaryn", "Yeslee"];

function setup() {
  
  for(i = 5; i <= 80; i++) {
    shortLifeSpan[i-5] = i;
  }
  for(i = 5; i <= 115; i++) {
    lowerMediumLifeSpan[i-5] = i;
  }
  for(i = 5; i <= 150; i++) {
    mediumLifeSpan[i-5] = i;
  }
  for(i = 5; i <= 350; i++) {
    longLifeSpan[i-5] = i;
  }
  for(i = 5; i <= 850; i++) {
    elvenLifeSpan[i-5] = i;
  }
  for(i = 5; i <= 1234; i++) {
    agelessLifeSpan[i-5] = i;
  }
  
  let canvas = createCanvas(1190, 740);
  canvas.parent('sketch-holder');
  textAlign(CENTER);
  textFont('Handjet', 20);
  text('begin', width*0.5, height*0.5);
  
  let button = createImg('RazyathButton1.png');
  //button.size(100, 100);
  button.parent('button-holder');
  button.mousePressed(baseSheet);
  
  let button5 = createImg('RazyathButton2.png');
  button5.parent('button-holder-2');
  button5.mousePressed(powerOff);

  let button8 = createImg('RegisterNewIDButton.png');
  button8.parent('button-holder-2');
  button8.mousePressed(registerID);

  let button9 = createImg('HideShowUIButton.png');
  button9.parent('button-holder-2');

  let button10 = createImg('ExitRegisterModeButton.png');
  button10.parent('button-holder-2');
  button10.mousePressed(exitRegister);
  
  let button7 = createImg('SaveCurrentIDButton.png');
  button7.parent('button-holder-2');
  button7.mousePressed(saveID);
  
  let button2 = createImg('RazyathFindIDButton.png');
  button2.size(100, 110);
  button2.parent('button-holder');
  button2.mousePressed(findID);

  let button3 = createImg('RazyathNextTerritoryButton.png');
  button3.size(100, 110);
  button3.parent('button-holder');
  button3.mousePressed(nextTerritory);

  let button6 = createImg('RazyathTerritoryButton.png');
  button6.size(100, 110);
  button6.parent('button-holder');
  button6.mousePressed(getTerritory);

  let button4 = createImg('RazyathPreviousTerritoryButton.png');
  button4.size(100, 110);
  button4.parent('button-holder');
  button4.mousePressed(previousTerritory);
  
  background(40);
  rectMode(CENTER);
}

function draw() {
}

function baseSheet() {
  image(img, 0, 0);
  image(img8, 40, 80);
  programOn = true;
}

function powerOff() {
  background(40);
  programOn = false;
  territoryPicked = false;
  registerMode = false;
}

function getTerritory() {
  if(programOn) {
    if(!registerMode) {
      image(img, 0, 0);
      image(img8, 40, 80);
      territoryR = int(random(worldTerritories.length));
      fill(209, 218, 201);
      textAlign(CENTER);
      textFont('Handjet', 60);
      text(worldTerritories[territoryR], width*0.18, height*0.695);
  
      //getRegion(territoryR);
  
      counter1 = territoryR;
  
      if (territoryR == 0) {
        image(img2, 40, 80);
      } else if (territoryR == 1) {
        image(img3, 40, 80);
      } else if (territoryR == 2) {
        image(img4, 40, 80);
      } else if (territoryR == 3) {
        image(img5, 40, 80);
      } else if (territoryR == 4) {
        image(img6, 40, 80);
      } else if (territoryR == 5) {
        image(img7, 40, 80);
      } else {
        image(img8, 40, 80);
      }
    
      territoryPicked = true;
    }
  }
}

function nextTerritory() {
  if (programOn) {
    if(!registerMode) {
      if(counter1 >= 5) {
        counter1 = 0;
      } else {
        counter1 = counter1 + 1;
      }
      image(img, 0, 0);
      image(img8, 40, 80);
      fill(209, 218, 201);
      textAlign(CENTER);
      textFont('Handjet', 60);
      text(worldTerritories[counter1], width*0.18, height*0.695);
      if (counter1 == 0) {
        image(img2, 40, 80);
      } else if (counter1 == 1) {
        image(img3, 40, 80);
      } else if (counter1 == 2) {
        image(img4, 40, 80);
      } else if (counter1 == 3) {
        image(img5, 40, 80);
      } else if (counter1 == 4) {
        image(img6, 40, 80);
      } else if (counter1 == 5) {
        image(img7, 40, 80);
      } else {
       image(img8, 40, 80);
      }
      territoryPicked = true;
    }
  }
}

function previousTerritory() {
  if (programOn) {
    if(!registerMode) {
      if(counter1 <= 0) {
        counter1 = 5;
      } else {
        counter1 = counter1 - 1;
      }
      image(img, 0, 0);
      image(img8, 40, 80);
      fill(209, 218, 201);
      textAlign(CENTER);
      textFont('Handjet', 60);
      text(worldTerritories[counter1], width*0.18, height*0.695);
  
      //getRegion(counter1);
  
      if (counter1 == 0) {
        image(img2, 40, 80);
      } else if (counter1 == 1) {
        image(img3, 40, 80);
      } else if (counter1 == 2) {
        image(img4, 40, 80);
      } else if (counter1 == 3) {
        image(img5, 40, 80);
      } else if (counter1 == 4) {
        image(img6, 40, 80);
      } else if (counter1 == 5) {
        image(img7, 40, 80);
      } else {
        image(img8, 40, 80);
      }
      territoryPicked = true;
    }
  }
}

/*function getRegion(territoryR) {
  if (territoryR == 0) {
    regionR = int(random(elderreachRegions.length));
    text(elderreachRegions[regionR], width*0.18, height*0.91);
  } else if (territoryR == 1) {
    regionR = int(random(deadlandsRegions.length));
    text(deadlandsRegions[regionR], width*0.18, height*0.91);
  } else if (territoryR == 2) {
    regionR = int(random(aureliaRegions.length));
    text(aureliaRegions[regionR], width*0.18, height*0.91);
  } else if (territoryR == 3) {
    regionR = int(random(keyadrysRegions.length));
    text(keyadrysRegions[regionR], width*0.18, height*0.91);
  } else if (territoryR == 4) {
    regionR = int(random(ulreynianRegions.length));
    text(ulreynianRegions[regionR], width*0.18, height*0.91);
  } else if (territoryR == 5) {
    regionR = int(random(adraxisRegions.length));
    text(adraxisRegions[regionR], width*0.18, height*0.91);
  }
  counter2 = regionR;
}*/

function getCurrent() {
  image(img, 0, 0);
  fill(209, 218, 201);
  textAlign(CENTER);
  textFont('Handjet', 60);
  text(worldTerritories[counter1], width*0.18, height*0.695);
  /*if (counter1 == 0) {
    text(elderreachRegions[counter2], width*0.18, height*0.91);
  } else if (counter1 == 1) {
    text(deadlandsRegions[counter2], width*0.18, height*0.91);
  } else if (counter1 == 2) {
    text(aureliaRegions[counter2], width*0.18, height*0.91);
  } else if (counter1 == 3) {
    text(keyadrysRegions[counter2], width*0.18, height*0.91);
  } else if (counter1 == 4) {
    text(ulreynianRegions[counter2], width*0.18, height*0.91);
  } else if (counter1 == 5) {
    text(adraxisRegions[counter2], width*0.18, height*0.91);
  }*/
  
  if (counter1 == 0) {
    image(img2, 40, 80);
  } else if (counter1 == 1) {
    image(img3, 40, 80);
  } else if (counter1 == 2) {
    image(img4, 40, 80);
  } else if (counter1 == 3) {
    image(img5, 40, 80);
  } else if (counter1 == 4) {
    image(img6, 40, 80);
  } else if (counter1 == 5) {
    image(img7, 40, 80);
  } else {
    image(img8, 40, 80);
  }
}

function findID() {
  if (programOn) {
    if(!registerMode) {
      if (territoryPicked) {
        getCurrent();
    
        getStats();
  
        getOccupation();
  
        getTown();
    
        getBiology();
  
        getName();

        getClass();
      }
    }
  }
}

function getBiology() {
  racesR = int(random(races.length));
  fill(209, 218, 201);
  textAlign(CENTER);
  textFont('Handjet', 60);
  text(races[racesR], width*0.5, height*0.4);
  counter3 = racesR;
  
  if ((racesR == 0) || (racesR == 1) || (racesR == 2)) {
    ageR = int(random(shortLifeSpan.length));
    text(shortLifeSpan[ageR], width*0.421, height*0.61);
  } else if ((racesR == 3) || (racesR == 4) || (racesR == 5)) {
    ageR = int(random(lowerMediumLifeSpan.length));
    text(lowerMediumLifeSpan[ageR], width*0.421, height*0.61);
  } else if ((racesR == 6) || (racesR == 7) || (racesR == 8)) {
    ageR = int(random(mediumLifeSpan.length));
    text(mediumLifeSpan[ageR], width*0.421, height*0.61);
  } else if ((racesR == 9) || (racesR == 10)) {
    ageR = int(random(longLifeSpan.length));
    text(longLifeSpan[ageR], width*0.421, height*0.61);
  } else if ((racesR == 11) || (racesR == 12)) {
    ageR = int(random(elvenLifeSpan.length));
    text(elvenLifeSpan[ageR], width*0.421, height*0.61);
  } else if (racesR == 13) {
    ageR = int(random(agelessLifeSpan.length));
    text(agelessLifeSpan[ageR], width*0.421, height*0.61);
  }
  
  sexR = int(random(sex.length));
  text(sex[sexR], width*0.581, height*0.61);
  counter4 = sexR;
  
}

function getName() {
  
  nameR = int(random(names.length));
  text(names[nameR], width*0.5, height*0.18);
  
}

function getTown() {
  fill(209, 218, 201);
  textAlign(CENTER);
  textFont('Handjet', 50);
  
  if (counter1 == 0) {
    townR = int(random(townsElderreach.length));
    text(townsElderreach[townR], width*0.18, height*0.91);
  } else if (counter1 == 1) {
    townR = int(random(townsDeadlands.length));
    text(townsDeadlands[townR], width*0.18, height*0.91);
  } else if (counter1 == 2) {
    townR = int(random(townsAurelia.length));
    text(townsAurelia[townR], width*0.18, height*0.91);
  } else if (counter1 == 3) {
    townR = int(random(townsKeyadrys.length));
    text(townsKeyadrys[townR], width*0.18, height*0.91);
  } else if (counter1 == 4) {
    townR = int(random(townsUlreynian.length));
    text(townsUlreynian[townR], width*0.18, height*0.91);
  } else if (counter1 == 5) {
    townR = int(random(townsAdraxis.length));
    text(townsAdraxis[townR], width*0.18, height*0.91);
  }
}

function getClass() {
  fill(209, 218, 201);
  textAlign(CENTER);
  textFont('Handjet', 50);

  classesR = int(random(classes.length));
  text(classes[classesR], width*0.8205, height*0.18);
}

function getOccupation() {
  occupationR = int(random(occupations.length));
  fill(209, 218, 201);
  textAlign(CENTER);
  textFont('Handjet', 50);
  text(occupations[occupationR], width*0.8205, height*0.4);
  let description = occupationDescriptions[occupationR];
  textSize(30);
  text(description, width*0.8205, height*0.44, 349);
}

function getStats() {
  textSize(60);
  statsR = int(random(stats.length));
  text(stats[statsR], width*0.404, height*0.88);
  statsR = int(random(stats.length));
  text(stats[statsR], width*0.507, height*0.88);
  statsR = int(random(stats.length));
  text(stats[statsR], width*0.61, height*0.88);
  statsR = int(random(stats.length));
  text(stats[statsR], width*0.713, height*0.88);
  statsR = int(random(stats.length));
  text(stats[statsR], width*0.816, height*0.88);
  statsR = int(random(stats.length));
  text(stats[statsR], width*0.919, height*0.88);
}

function saveID() {
  if(programOn) {
    saveCanvas('Razyathian-Character-ID');
  }
}

function registerID() {
  if(programOn) {
    image(img17, 0, 0);
    image(img8, 40, 80);
    registerMode = true;
  }
}

function exitRegister() {
  if(programOn) {
    baseSheet();
    registerMode = false;
  }
}

function mouseClicked() {
  if(registerMode) {
    //Territory
    if((mouseX >= 50) && (mouseY >= 426) && (mouseX <= 74) && (mouseY <= 466)) {
      nextTerritoryRegister();
    }
    if((mouseX >= 357) && (mouseY >= 426) && (mouseX <= 381) && (mouseY <= 466)) {
      previousTerritoryRegister();
    }
    //Town
    if((mouseX >= 50) && (mouseY >= 583) && (mouseX <= 74) && (mouseY <= 623)) {
      nextTown();
    }
    if((mouseX >= 357) && (mouseY >= 583) && (mouseX <= 381) && (mouseY <= 623)) {
      previousTown();
    }
    //Race
    if((mouseX >= 429) && (mouseY >= 206) && (mouseX <= 453) && (mouseY <= 246)) {
      nextRace();
    }
    if((mouseX >= 737) && (mouseY >= 206) && (mouseX <= 761) && (mouseY <= 246)) {
      previousRace();
    }
    //Age
    if((mouseX >= 429) && (mouseY >= 364) && (mouseX <= 453) && (mouseY <= 404)) {
      nextAge();
    }
    if((mouseX >= 550) && (mouseY >= 364) && (mouseX <= 574) && (mouseY <= 404)) {
      previousAge();
    }
    //Sex
    if((mouseX >= 620) && (mouseY >= 364) && (mouseX <= 644) && (mouseY <= 404)) {
      characterSex();
    }
    if((mouseX >= 739) && (mouseY >= 364) && (mouseX <= 763) && (mouseY <= 404)) {
      characterSex();
    }
    //class
    if((mouseX >= 809) && (mouseY >= 48) && (mouseX <= 833) && (mouseY <= 88)) {
      nextClass();
    }
    if((mouseX >= 1120) && (mouseY >= 48) && (mouseX <= 1144) && (mouseY <= 88)) {
      previousClass();
    }
    //Occupation
    if((mouseX >= 809) && (mouseY >= 206) && (mouseX <= 833) && (mouseY <= 246)) {
      nextOccupation();
    }
    if((mouseX >= 1120) && (mouseY >= 206) && (mouseX <= 1144) && (mouseY <= 246)) {
      previousOccupation();
    }

    //Strength
    if((mouseX >= 426) && (mouseY >= 603) && (mouseX <= 441) && (mouseY <= 643)) {
      if(strengthCounter >= 17) {
        strengthCounter = 7;
      } else {
        strengthCounter = strengthCounter + 1;
      }
      noStroke();
      fill(79, 85, 78);
      rect(479,641,74,76);
      fill(209, 218, 201);
      textAlign(CENTER);
      textFont('Handjet', 60);
      text(strengthCounter, width*0.404, height*0.88);
    }  
    if((mouseX >= 516) && (mouseY >= 603) && (mouseX <= 531) && (mouseY <= 643)) {
      if(strengthCounter <= 7) {
        strengthCounter = 17;
      } else {
        strengthCounter = strengthCounter - 1;
      }
      noStroke();
      fill(79, 85, 78);
      rect(479,641,74,76);
      fill(209, 218, 201);
      textAlign(CENTER);
      textFont('Handjet', 60);
      text(strengthCounter, width*0.404, height*0.88);
    }
    //Dexterity
    if((mouseX >= 549) && (mouseY >= 603) && (mouseX <= 561) && (mouseY <= 643)) {
      if(dexterityCounter >= 17) {
        dexterityCounter = 7;
      } else {
        dexterityCounter = dexterityCounter + 1;
      }
      noStroke();
      fill(79, 85, 78);
      rect(602,641,74,76);
      fill(209, 218, 201);
      textAlign(CENTER);
      textFont('Handjet', 60);
      text(dexterityCounter, width*0.507, height*0.88);
    }  
    if((mouseX >= 639) && (mouseY >= 603) && (mouseX <= 654) && (mouseY <= 643)) {
      if(dexterityCounter <= 7) {
        dexterityCounter = 17;
      } else {
        dexterityCounter = dexterityCounter - 1;
      }
      noStroke();
      fill(79, 85, 78);
      rect(602,641,74,76);
      fill(209, 218, 201);
      textAlign(CENTER);
      textFont('Handjet', 60);
      text(dexterityCounter, width*0.507, height*0.88);
    }
    //Constitution
    if((mouseX >= 672) && (mouseY >= 603) && (mouseX <= 687) && (mouseY <= 643)) {
      if(constitutionCounter >= 17) {
        constitutionCounter = 7;
      } else {
        constitutionCounter = constitutionCounter + 1;
      }
      noStroke();
      fill(79, 85, 78);
      rect(725,641,74,76);
      fill(209, 218, 201);
      textAlign(CENTER);
      textFont('Handjet', 60);
      text(constitutionCounter, width*0.61, height*0.88);
    }  
    if((mouseX >= 762) && (mouseY >= 603) && (mouseX <= 777) && (mouseY <= 643)) {
      if(constitutionCounter <= 7) {
        constitutionCounter = 17;
      } else {
        constitutionCounter = constitutionCounter - 1;
      }
      noStroke();
      fill(79, 85, 78);
      rect(725,641,74,76);
      fill(209, 218, 201);
      textAlign(CENTER);
      textFont('Handjet', 60);
      text(constitutionCounter, width*0.61, height*0.88);
    }
    //Intelligence
    if((mouseX >= 795) && (mouseY >= 603) && (mouseX <= 810) && (mouseY <= 643)) {
      if(intelligenceCounter >= 17) {
        intelligenceCounter = 7;
      } else {
        intelligenceCounter = intelligenceCounter + 1;
      }
      noStroke();
      fill(79, 85, 78);
      rect(848,641,74,76);
      fill(209, 218, 201);
      textAlign(CENTER);
      textFont('Handjet', 60);
      text(intelligenceCounter, width*0.713, height*0.88);
    }  
    if((mouseX >= 885) && (mouseY >= 603) && (mouseX <= 900) && (mouseY <= 643)) {
      if(intelligenceCounter <= 7) {
        intelligenceCounter = 17;
      } else {
        intelligenceCounter = intelligenceCounter - 1;
      }
      noStroke();
      fill(79, 85, 78);
      rect(848,641,74,76);
      fill(209, 218, 201);
      textAlign(CENTER);
      textFont('Handjet', 60);
      text(intelligenceCounter, width*0.713, height*0.88);
    }
    //Wisdom
    if((mouseX >= 918) && (mouseY >= 603) && (mouseX <= 933) && (mouseY <= 643)) {
      if(wisdomCounter >= 17) {
        wisdomCounter = 7;
      } else {
        wisdomCounter = wisdomCounter + 1;
      }
      noStroke();
      fill(79, 85, 78);
      rect(971,641,74,76);
      fill(209, 218, 201);
      textAlign(CENTER);
      textFont('Handjet', 60);
      text(wisdomCounter, width*0.816, height*0.88);
    }  
    if((mouseX >= 1008) && (mouseY >= 603) && (mouseX <= 1023) && (mouseY <= 643)) {
      if(wisdomCounter <= 7) {
        wisdomCounter = 17;
      } else {
        wisdomCounter = wisdomCounter - 1;
      }
      noStroke();
      fill(79, 85, 78);
      rect(971,641,74,76);
      fill(209, 218, 201);
      textAlign(CENTER);
      textFont('Handjet', 60);
      text(wisdomCounter, width*0.816, height*0.88);
    }
    //Charisma
    if((mouseX >= 1041) && (mouseY >= 603) && (mouseX <= 1056) && (mouseY <= 643)) {
      if(charismaCounter >= 17) {
        charismaCounter = 7;
      } else {
        charismaCounter = charismaCounter + 1;
      }
      noStroke();
      fill(79, 85, 78);
      rect(1094,641,74,76);
      fill(209, 218, 201);
      textAlign(CENTER);
      textFont('Handjet', 60);
      text(charismaCounter, width*0.919, height*0.88);
    }  
    if((mouseX >= 1131) && (mouseY >= 603) && (mouseX <= 1146) && (mouseY <= 643)) {
      if(charismaCounter <= 7) {
        charismaCounter = 17;
      } else {
        charismaCounter = charismaCounter - 1;
      }
      noStroke();
      fill(79, 85, 78);
      rect(1094,641,74,76);
      fill(209, 218, 201);
      textAlign(CENTER);
      textFont('Handjet', 60);
      text(charismaCounter, width*0.919, height*0.88);
    }
  }
}

function nextTerritoryRegister() {
  if(territoryCounter >= 5) {
    territoryCounter = 0;
  } else {
    territoryCounter = territoryCounter + 1;
  }
  noStroke();
  fill(79, 85, 78);
  rect(215,505,349,76);
  noStroke();
  fill(79, 85, 78);
  rect(215,661,349,76);
  fill(209, 218, 201);
  textAlign(CENTER);
  textFont('Handjet', 60);
  text(worldTerritories[territoryCounter], width*0.18, height*0.695);
  if (territoryCounter == 0) {
    image(img2, 40, 80);
  } else if (territoryCounter == 1) {
    image(img3, 40, 80);
  } else if (territoryCounter == 2) {
    image(img4, 40, 80);
  } else if (territoryCounter == 3) {
    image(img5, 40, 80);
  } else if (territoryCounter == 4) {
    image(img6, 40, 80);
  } else if (territoryCounter == 5) {
    image(img7, 40, 80);
  } else {
    image(img8, 40, 80);
  }
}

function previousTerritoryRegister() {
      if(territoryCounter <= 0) {
        territoryCounter = 5;
      } else {
        territoryCounter = territoryCounter - 1;
      }
      noStroke();
      fill(79, 85, 78);
      rect(215,505,349,76);
      noStroke();
      fill(79, 85, 78);
      rect(215,661,349,76);
      fill(209, 218, 201);
      textAlign(CENTER);
      textFont('Handjet', 60);
      text(worldTerritories[territoryCounter], width*0.18, height*0.695);
      if (territoryCounter == 0) {
        image(img2, 40, 80);
      } else if (territoryCounter == 1) {
        image(img3, 40, 80);
      } else if (territoryCounter == 2) {
        image(img4, 40, 80);
      } else if (territoryCounter == 3) {
        image(img5, 40, 80);
      } else if (territoryCounter == 4) {
        image(img6, 40, 80);
      } else if (territoryCounter == 5) {
        image(img7, 40, 80);
      } else {
        image(img8, 40, 80);
      }
}

function nextTown() {
  noStroke();
  fill(79, 85, 78);
  rect(215,661,349,76);
  fill(209, 218, 201);
  textAlign(CENTER);
  textFont('Handjet', 50);
  
  if (territoryCounter == 0) {
    if(townCounter1 >= 3) {
      townCounter1 = 0;
    } else {
      townCounter1 = townCounter1 + 1;
    }
    text(townsElderreach[townCounter1], width*0.18, height*0.91);
  } else if (territoryCounter == 1) {
    text(townsDeadlands[0], width*0.18, height*0.91);
  } else if (territoryCounter == 2) {
    if(townCounter3 >= 8) {
      townCounter3 = 0;
    } else {
      townCounter3 = townCounter3 + 1;
    }
    text(townsAurelia[townCounter3], width*0.18, height*0.91);
  } else if (territoryCounter == 3) {
    if(townCounter4 >= 10) {
      townCounte4r = 0;
    } else {
      townCounter4 = townCounter4 + 1;
    }
    text(townsKeyadrys[townCounter4], width*0.18, height*0.91);
  } else if (territoryCounter == 4) {
    if(townCounter5 >= 11) {
      townCounter5 = 0;
    } else {
      townCounter5 = townCounter5 + 1;
    }
    text(townsUlreynian[townCounter5], width*0.18, height*0.91);
  } else if (territoryCounter == 5) {
    if(townCounter6 >= 9) {
      townCounter6 = 0;
    } else {
      townCounter6 = townCounter6 + 1;
    }
    text(townsAdraxis[townCounter6], width*0.18, height*0.91);
  }
}

function previousTown() {
  noStroke();
  fill(79, 85, 78);
  rect(215,661,349,76);
  fill(209, 218, 201);
  textAlign(CENTER);
  textFont('Handjet', 50);
  
  if (territoryCounter == 0) {
    if(townCounter1 <= 0) {
      townCounter1 = 3;
    } else {
      townCounter1 = townCounter1 - 1;
    }
    text(townsElderreach[townCounter1], width*0.18, height*0.91);
  } else if (territoryCounter == 1) {
    text(townsDeadlands[0], width*0.18, height*0.91);
  } else if (territoryCounter == 2) {
    if(townCounter3 <= 0) {
      townCounter3 = 8;
    } else {
      townCounter3 = townCounter3 - 1;
    }
    text(townsAurelia[townCounter3], width*0.18, height*0.91);
  } else if (territoryCounter == 3) {
    if(townCounter4 <= 0) {
      townCounte4r = 10;
    } else {
      townCounter4 = townCounter4 - 1;
    }
    text(townsKeyadrys[townCounter4], width*0.18, height*0.91);
  } else if (territoryCounter == 4) {
    if(townCounter5 <= 0) {
      townCounter5 = 11;
    } else {
      townCounter5 = townCounter5 - 1;
    }
    text(townsUlreynian[townCounter5], width*0.18, height*0.91);
  } else if (territoryCounter == 5) {
    if(townCounter6 <= 0) {
      townCounter6 = 9;
    } else {
      townCounter6 = townCounter6 - 1;
    }
    text(townsAdraxis[townCounter6], width*0.18, height*0.91);
  }
}

function nextRace() {
  if(raceCounter >= 13) {
    raceCounter = 0;
  } else {
    raceCounter = raceCounter + 1;
  }
  noStroke();
  fill(79, 85, 78);
  rect(596,285,349,76);
  noStroke();
  fill(79, 85, 78);
  rect(501,443,160,76);
  fill(209, 218, 201);
  textAlign(CENTER);
  textFont('Handjet', 60);
  text(races[raceCounter], width*0.5, height*0.4);
}

function previousRace() {
  if(raceCounter <= 0) {
    raceCounter = 13;
  } else {
    raceCounter = raceCounter - 1;
  }
  noStroke();
  fill(79, 85, 78);
  rect(596,285,349,76);
  noStroke();
  fill(79, 85, 78);
  rect(501,443,160,76);
  fill(209, 218, 201);
  textAlign(CENTER);
  textFont('Handjet', 60);
  text(races[raceCounter], width*0.5, height*0.4);
}

function nextAge() {
  noStroke();
  fill(79, 85, 78);
  rect(501,443,160,76);
  fill(209, 218, 201);
  textAlign(CENTER);
  textFont('Handjet', 60);
  if ((raceCounter == 0) || (raceCounter == 1) || (raceCounter == 2)) {
    if(ageCounter1 >= 75) {
      ageCounter1 = 0;
    } else {
      ageCounter1 = ageCounter1 + 1;
    }
    text(shortLifeSpan[ageCounter1], width*0.421, height*0.61);
  } else if ((raceCounter == 3) || (raceCounter == 4) || (raceCounter == 5)) {
    if(ageCounter2 >= 110) {
      ageCounter2 = 0;
    } else {
      ageCounter2 = ageCounter2 + 1;
    }
    text(lowerMediumLifeSpan[ageCounter2], width*0.421, height*0.61);
  } else if ((raceCounter == 6) || (raceCounter == 7) || (raceCounter == 8)) {
    if(ageCounter3 >= 145) {
      ageCounter3 = 0;
    } else {
      ageCounter3 = ageCounter3 + 1;
     }
    text(mediumLifeSpan[ageCounter3], width*0.421, height*0.61);
  } else if ((raceCounter == 9) || (raceCounter == 10)) {
    if(ageCounter4 >= 345) {
      ageCounter4 = 0;
    } else {
      ageCounter4 = ageCounter1 + 4;
    }
    text(longLifeSpan[ageCounter4], width*0.421, height*0.61);
  } else if ((raceCounter == 11) || (raceCounter == 12)) {
    if(ageCounter5 >= 845) {
      ageCounter5 = 0;
    } else {
      ageCounter5 = ageCounter5 + 1;
    }
    text(elvenLifeSpan[ageCounter5], width*0.421, height*0.61);
   } else if (raceCounter == 13) {
    if(ageCounter6 >= 1229) {
      ageCounter6 = 0;
    } else {
      ageCounter6 = ageCounter6 + 1;
    }
    text(agelessLifeSpan[ageCounter6], width*0.421, height*0.61);
  }
}

function previousAge() {
  noStroke();
  fill(79, 85, 78);
  rect(501,443,160,76);
  fill(209, 218, 201);
  textAlign(CENTER);
  textFont('Handjet', 60);
  if ((raceCounter == 0) || (raceCounter == 1) || (raceCounter == 2)) {
    if(ageCounter1 <= 0) {
      ageCounter1 = 75;
    } else {
      ageCounter1 = ageCounter1 - 1;
    }
    text(shortLifeSpan[ageCounter1], width*0.421, height*0.61);
  } else if ((raceCounter == 3) || (raceCounter == 4) || (raceCounter == 5)) {
    if(ageCounter2 <= 0) {
      ageCounter2 = 110;
    } else {
      ageCounter2 = ageCounter2 - 1;
    }
    text(lowerMediumLifeSpan[ageCounter2], width*0.421, height*0.61);
  } else if ((raceCounter == 6) || (raceCounter == 7) || (raceCounter == 8)) {
    if(ageCounter3 <= 0) {
      ageCounter3 = 145;
    } else {
      ageCounter3 = ageCounter3 - 1;
    }
    text(mediumLifeSpan[ageCounter3], width*0.421, height*0.61);
  } else if ((raceCounter == 9) || (raceCounter == 10)) {
    if(ageCounter4 <= 0) {
      ageCounter4 = 345;
    } else {
      ageCounter4 = ageCounter1 - 4;
    }
    text(longLifeSpan[ageCounter4], width*0.421, height*0.61);
  } else if ((raceCounter == 11) || (raceCounter == 12)) {
    if(ageCounter5 <= 0) {
      ageCounter5 = 845;
    } else {
      ageCounter5 = ageCounter5 - 1;
    }
    text(elvenLifeSpan[ageCounter5], width*0.421, height*0.61);
  } else if (raceCounter == 13) {
    if(ageCounter6 <= 0) {
      ageCounter6 = 1229;
    } else {
      ageCounter6 = ageCounter6 - 1;
    }
    text(agelessLifeSpan[ageCounter6], width*0.421, height*0.61);
  }
}
//75, 110, 145, 345, 845, 1229

function characterSex() {
  if(sexCounter >= 1) {
    sexCounter = 0;
  } else {
    sexCounter = sexCounter + 1;
  }
  noStroke();
  fill(79, 85, 78);
  rect(691,443,160,76);
  fill(209, 218, 201);
  textAlign(CENTER);
  textFont('Handjet', 60);
  text(sex[sexCounter], width*0.581, height*0.61);
}
// 3,0,8,10,11,9

function nextClass() {
  if(classCounter >= 13) {
    classCounter = 0;
  } else {
    classCounter = classCounter + 1;
  }
  noStroke();
  fill(79, 85, 78);
  rect(977,126,348,76);
  fill(209, 218, 201);
  textAlign(CENTER);
  textFont('Handjet', 60);
  text(classes[classCounter], width*0.8205, height*0.18);
}

function previousClass() {
  if(classCounter <= 0) {
    classCounter = 13;
  } else {
    classCounter = classCounter - 1;
  }
  noStroke();
  fill(79, 85, 78);
  rect(977,126,348,76);
  fill(209, 218, 201);
  textAlign(CENTER);
  textFont('Handjet', 60);
  text(classes[classCounter], width*0.8205, height*0.18);
}

function nextOccupation() {
  if(occupationCounter >= 13) {
    occupationCounter = 0;
  } else {
    occupationCounter = occupationCounter + 1;
  }
  noStroke();
  fill(79, 85, 78);
  rect(977,364,348,234);
  fill(209, 218, 201);
  textAlign(CENTER);
  textFont('Handjet', 50);
  text(occupations[occupationCounter], width*0.8205, height*0.4);
  let description = occupationDescriptions[occupationCounter];
  textSize(30);
  text(description, width*0.8205, height*0.44, 349);
}

function previousOccupation() {
  if(occupationCounter <= 0) {
    occupationCounter = 13;
  } else {
    occupationCounter = occupationCounter - 1;
  }
  noStroke();
  fill(79, 85, 78);
  rect(977,364,348,234);
  fill(209, 218, 201);
  textAlign(CENTER);
  textFont('Handjet', 50);
  text(occupations[occupationCounter], width*0.8205, height*0.4);
  let description = occupationDescriptions[occupationCounter];
  textSize(30);
  text(description, width*0.8205, height*0.44, 349);
}

function preload() {
  img = loadImage('Project2CodeScreenNew.png');
  img2 = loadImage('RazyathElderreach2.png');
  img3 = loadImage('RazyathDeadlands.png');
  img4 = loadImage('RazyathAurelia.png');
  img5 = loadImage('RazyathKeyadrys.png');
  img6 = loadImage('RazyathUlreynia.png');
  img7 = loadImage('RazyathAdraxis.png');
  img8 = loadImage('RazyathBlank.png');
  img9 = loadImage('RazyathButton1.png');
  img10 = loadImage('RazyathFindIDButton.png');
  img11 = loadImage('RazyathTerritoryButton.png');
  img12 = loadImage('RazyathNextTerritoryButton.png');
  img13 = loadImage('RazyathPreviousTerritoryButton.png');
  img14 = loadImage('RazyathButton2.png');
  img15 = loadImage('SaveCurrentIDButton.png');
  img16 = loadImage('RegisterNewIDButton.png');
  img17 = loadImage('CodeScreenWithSelectorButtons3.png');
  img18 = loadImage('HideShowUIButton.png');
  img19 = loadImage('ExitRegisterModeButton.png');
}