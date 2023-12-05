var programOn = false;
var territoryPicked = false;
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;

var worldTerritories = ["Elderreach", "Deadlands", "Aurelia", "Keyadrys", "Ulreynian Empire", "Adraxis"];
var territoryImages = ['img2'];

/*var regions = ["Plains", "Moutains", "Islands", "Coast", "Wastes", "Hills", "Riverside"];*/

var elderreachRegions = ["Coast", "Hills", "Mountains", "Forests"];

var deadlandsRegions = ["Wastes", "Mountains"];

var aureliaRegions = ["Coast", "Islands", "Mountains", "Coral Depths", "Forests"];

var keyadrysRegions = ["Coast", "River Valley", "Mountains", "Plains", "Hills", "Forests"];

var ulreynianRegions = ["Coast", "Plains", "River Valley", "Hills", "Mountains", "Marsh", "Forests", "Islands"];

var adraxisRegions = ["Coast", "Islands", "River Valley", "Plains", "Hills"];

var races = ["Orc", "Dragonborn", "Half-Orc", "Human", "Halfling", "Tabaxi", "Aasimar", "Tiefling", "Half-Elf", "Dwarf", "Gnome", "Elf", "Drow", "Warforged"];

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
  
  let button3 = createImg('RazyathNextTerritoryButton.png');
  button3.size(100, 110);
  button3.parent('button-holder-2');
  button3.mousePressed(nextTerritory);
  
  let button6 = createImg('RazyathTerritoryButton.png');
  button6.size(100, 110);
  button6.parent('button-holder-2');
  button6.mousePressed(getTerritory);
  
  let button4 = createImg('RazyathPreviousTerritoryButton.png');
  button4.size(100, 110);
  button4.parent('button-holder-2');
  button4.mousePressed(previousTerritory);
  
  let button5 = createImg('RazyathButton2.png');
  button5.parent('button-holder');
  button5.mousePressed(powerOff);
  
  let button2 = createImg('RazyathFindIDButton.png');
  button2.size(100, 110);
  button2.parent('button-holder');
  button2.mousePressed(findID);
  
  
  
  
  
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
}

function getTerritory() {
  if(programOn) {
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

function nextTerritory() {
  if (programOn) {
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

function previousTerritory() {
  if (programOn) {
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

function getRegion(territoryR) {
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
}

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
    if (territoryPicked) {
      getCurrent();
  
      getStats();
  
      getOccupation();
  
      getTown();
    
      getBiology();
  
      getName();
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

function preload() {
  img = loadImage('Project2CodeScreen.jpg');
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
}