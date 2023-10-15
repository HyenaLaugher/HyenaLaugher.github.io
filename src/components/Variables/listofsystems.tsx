export const listOfSystems = [
  {
    id: 0,
    name: ".50 Cal Machine Gun",
    qualities: {
      techLevel: 1,
      slotValue: 2,
      salvageValue: 2,

      turn: "Turn Action",
      range: "Close Range",
      recommended: true,

      damage: "2SP",
      damageType: "Ballistic", //Melee

      //Traits
      traits: "Jamming | Pinning",
    },
    shortdescription: "Short Range - Slow-Firing Maching Gun",
    fulldescription:
      "This simple ballistic weapon of the Opus Institute design fires solid, high calibre rounds that can puncture a Mech hull and shred through infantry. It has been a mainstay of battlefields for as long as anyone remembers and remains ubiquitous today.",
  },
  {
    id: 1,
    name: "Armour Plating",
    qualities: {
      techLevel: 1,
      slotValue: 2,
      salvageValue: 1,

      turn: "Passive",
      // range: "",
    },
    shortdescription:
      "Extra Thick Armour to weather the onslaught \n Condition in Description",
    fulldescription:
      "Slapping some extra layers of scrap on your Mech can make you feel more comfortable about piloting a nuclear reactor-powered death machine. The first time that your Mech is hit by an attack, or takes damage, prevent the damage and all effects of the attack. Your Armour Plating System is then destroyed.",
  },
  {
    id: 2,
    name: "Cargo Pod",
    qualities: {
      techLevel: 1,
      slotValue: 1,
      salvageValue: 1,

      turn: "Passive",
    },
    shortdescription: "Increase Cargo Capacity by 1",
    fulldescription:
      "This small cargo pod allows you to squeeze that extra bit of storage space out of your Mech.A Cargo Pod increases the Cargo Capacity of a Mech by 1. ",
  },
  {
    id: 3,
    name: "Chainsaw Arm",
    qualities: {
      techLevel: 1,
      slotValue: 3,
      salvageValue: 3,

      turn: "Turn Action",
      range: "Close Range",

      damage: "2SP",
      damageType: "Melee",

      //Traits
      traits: "Salvaging",
    },
    shortdescription: "Useful for cutting things apart, in and out of combat.",
    fulldescription:
      "Originally developed as a tool for lumberjack Mechs by Hodgson & Vasquez, an Evantis subsidiary, this saw arm has remained in use for its salvaging capabilities, utility, and stopping power even as the forests have been cut down across the world.",
  },
  {
    id: 4,
    name: "Escape Hatch",
    qualities: {
      techLevel: 1,
      slotValue: 1,
      salvageValue: 1,

      turn: "Free Action",
      // range: "Long",
      recommended: true,

      //Traits
      traits: "Escape",
    },
    shortdescription: "Get out of a bad situation.",
    fulldescription:
      "An Escape Hatch is a sealed hatch that can be opened and escaped through in the event a Mech suffers critical damage or the Pilot needs to make a swift exit. When activated, by pulling a lever, a bolted charge blows the Escape Hatch from the Mech Chassis, allowing for the Pilot to crawl through to safety.",
    diceRoll: [
      { roll: 20, result: "You escape safely from your Mech in Medium Range." },
      { roll: 11, result: "You escape safely from your Mech in Close Range." },
      {
        roll: 6,
        result:
          "You escape in Close Range, but are injured in the process. Roll on the Critical Injury Table.",
      },
      {
        roll: 2,
        result:
          "The Escape Hatch fails to trigger and is damaged in the process, it must be repaired to Intact Condition to be used again.",
      },
      {
        roll: 1,
        result:
          "The Escape Hatch severely malfunctions trapping you in your Mech and injuring you. You must roll on the Critical Injury Table, and the Escape Hatch is destroyed.",
      },
    ],
  },
  {
    id: 5,
    name: "Flood Lights",
    qualities: {
      techLevel: 1,
      slotValue: 1,
      salvageValue: 1,

      turn: "Free Action",
      range: "Medium",
    },
    shortdescription: "Light up an area.",
    fulldescription:
      "Floodlights, light up a wide area up to Medium Range from a Mech as a Free Action. This allows you to see more clearly in dark or foggy conditions. The Floodlights can be adjusted for tight or wide beam illumination",
  },
  {
    id: 6,
    name: "FM-3 Flamethrower",
    qualities: {
      techLevel: 1,
      slotValue: 3,
      salvageValue: 3,

      turn: "Turn Action",
      range: "Close",

      damage: "2SP",
      damageType: "Anti-Organic",

      traits: "Overheat",
    },
    shortdescription: "Set the world on fire.",
    fulldescription:
      "Developed by the Opus Institute for use in forestry and demolition operations, or at least that is what they tell themselves. The FM-3 shoots a superheated stream of fire at a target. Most Mechs are armoured enough that this only licks them, but it can mess up internals enough to stop them firing anything hot back at you. Flesh bubbles and screams.",
  },
  {
    id: 7,
    name: "High Pressure Hose",
    qualities: {
      techLevel: 1,
      slotValue: 2,
      salvageValue: 2,

      turn: "Turn Action",
      range: "Close",

      // damage: "2SP",
      // damageType: "Anti-Organic",

      traits: "Pinning",
    },
    shortdescription: "Set the world on fire.",
    fulldescription:
      "The Opus Institute originally designed the High Pressure Hose and was the first to make the blueprints freely available for use by fire fighting Mechs following the chaos of Impact Day. Sakura Futures would deploy them in unorthodox fashion as a riot control measure against waves of food protestors. You fire a stream of highly pressurised water at any target or location in Range. This can douse fire and make ground boggy and wet. A Mech doused in water reduces its Heat by 1. A Creature hit by the hose cannot move on its next turn. This does not affect Meld or Bio-Titans. ",
  },
  {
    id: 7,
    name: "High Pressure Hose",
    qualities: {
      techLevel: 1,
      slotValue: 2,
      salvageValue: 2,

      turn: "Turn Action",
      range: "Close",

      // damage: "2SP",
      // damageType: "Anti-Organic",

      traits: "Pinning",
    },
    shortdescription: "Set the world on fire.",
    fulldescription:
      "The Opus Institute originally designed the High Pressure Hose and was the first to make the blueprints freely available for use by fire fighting Mechs following the chaos of Impact Day. Sakura Futures would deploy them in unorthodox fashion as a riot control measure against waves of food protestors. You fire a stream of highly pressurised water at any target or location in Range. This can douse fire and make ground boggy and wet. A Mech doused in water reduces its Heat by 1. A Creature hit by the hose cannot move on its next turn. This does not affect Meld or Bio-Titans. ",
  },
  {
    id: 8,
    name: "Hydraulic Crusher",
    qualities: {
      techLevel: 1,
      slotValue: 4,
      salvageValue: 4,

      turn: "Turn Action",
      range: "Close",

      damage: "3SP",
      damageType: "Melee",

      traits: "Rigging | Salvaging | Unwieldy",
    },
    shortdescription: "Set the world on fire.",
    fulldescription:
      "This hydraulic crushing system can be used to scour an area of salvage or as an impromptu weapon. Sometimes both.When you Area Salvage with this System you gain a single additional Scrap of the Tech Level of the area in addition to what you roll on the Area Salvaging Table",
  },
  {
    id: 9,
    name: "Locomotion System",
    qualities: {
      techLevel: 1,
      slotValue: 2,
      salvageValue: 2,

      turn: "Passive",
      // range: "Close",

      // damage: "3SP",
      // damageType: "Melee",

      // traits: "Rigging | Salvaging | Unwieldy",
    },
    shortdescription: "Set the world on fire.",
    fulldescription:
      "A sturdy and dependable Locomotion System allowing a Mech to traverse most standard terrain types and adaptable to fit on most Chassis. Locomotion Systems vary widely from bipedal to quadrupedal, and beyond. Some esoteric designs are known to have as many as eight legs!A Locomotion System allows a Mech to move normally. If a Mech does not have a Locomotion System or it is damaged or destroyed the Mech cannot move. ",
  },
  {
    id: 10,
    name: "Loudspeakers",
    qualities: {
      techLevel: 1,
      slotValue: 1,
      salvageValue: 1,

      turn: "Free Action",
      range: "Medium",
    },
    shortdescription: "Set the world on fire.",
    fulldescription:
      "These externally mounted speakers can be clearly heard by anything up to Medium Range from you. They can be used to communicate externally with those outside of your Mech or play some beats from your cassette deck. The Immortan Raiders made effective use of Loudspeakers as a crude shock and awe tool during their devastating raids in the Ferrous Wars. ",
  },
  {
    id: 11,
    name: "Mechapult",
    qualities: {
      techLevel: 1,
      slotValue: 5,
      salvageValue: 3,

      turn: "Turn Action",
      range: "Long",

      // damage: "3SP",
      // damageType: "Melee",

      // traits: "Rigging | Salvaging | Unwieldy",
    },
    shortdescription: "Set the world on fire.",
    fulldescription:
      "The Mechapult is an invention that could only have been thought of by salvagers. Scrap has many uses in the wastelands from trade, from crafting to repair and most obviously launching at high velocity towards whoever looked at you the wrong way.A Mechapult must be loaded with one piece of Scrap to fire. The effect is randomly determined and differs based on the Tech Level of Scrap you choose. Choose a target in Range to fire the Mechapult at. Instead of making an attack roll, roll the die on the table below to determine the effect. You may Push this roll as normal. The Scrap is always destroyed irrespective of the result",
  },
  {
    id: 12,
    name: "Mini Mortar",
    qualities: {
      techLevel: 1,
      slotValue: 5,
      salvageValue: 5,

      turn: "Turn Action",
      range: "Medium",

      damage: "5SP",
      damageType: "Explosive",

      traits: "Uses(5)",
    },
    shortdescription: "Set the world on fire.",
    fulldescription:
      "The Herrsch Pattern Miniaturised Mortar lobs an explosive, high velocity round against a target, flaying everything around it with superheated shrapnel. ",
  },
  {
    id: 13,
    name: "Mining Rig",
    qualities: {
      techLevel: 1,
      slotValue: 5,
      salvageValue: 5,

      turn: "Turn Action",
      range: "Close",

      damage: "4SP",
      damageType: "Melee",

      traits: "Salvaging | Unwieldy",
    },
    shortdescription: "Set the world on fire.",
    fulldescription:
      "An industrial excavator designed for mining and salvaging operations. Allows drilling, excavating, and salvaging of rock and other dense material. These were used extensively in the Ferrous Range by Thatcher Steel miners and their carcasses still litter the rocky outcrops.",
  },
  {
    id: 14,
    name: "Red Laser",
    qualities: {
      techLevel: 1,
      slotValue: 3,
      salvageValue: 3,

      turn: "Turn Action",
      range: "Close",

      damage: "3SP",
      damageType: "Energy",

      traits: "Hot(1)",
    },
    shortdescription: "Set the world on fire.",
    fulldescription:
      "Red lasers strike a target with a small, focussed beam of heat. Their blueprint has been made widely available by the Opus Institute and are commonly used by corpos as much as they are by salvagers and wastelanders",
  },
  {
    id: 15,
    name: "Rigging Arm",
    qualities: {
      techLevel: 1,
      slotValue: 2,
      salvageValue: 2,

      turn: "Turn Action",
      range: "Close",

      traits: "Rigging",
    },
    shortdescription: "Set the world on fire.",
    fulldescription:
      "This standard rigging arm designed for industrial use allows a Mech to pick up and manipulate objects. To avoid embarrassment in the field it is worth reminding Pilots that many Mechs are not fitted with arms or hands as standard and therefore incapable of picking items up. If your Mech lacks arms and you do not mount a Rigging Arm or equivalent, your Mech cannot pick things up. ",
  },
  {
    id: 15,
    name: "Riveting Gun",
    qualities: {
      techLevel: 1,
      slotValue: 3,
      salvageValue: 4,

      turn: "Turn Action",
      range: "Close",

      traits: "Rigging",
    },
    shortdescription: "Set the world on fire.",
    fulldescription:
      "This mech-mountable riveting gun can be used to make field repairs to the most basic of Mechs, Systems, and Modules.2EP PatchRange: Close // Turn ActionYou restore up to 4 Structure Points to any Mech in Range that has at least 1 SP. 2EP System RepairRange: Close // Short Action You repair a damaged Tech 1 System or Module in Range to Intact Condition. It is now usable. 4EP Chassis RepairRange: Close // Long Action You repair a damaged Tech 1 Mech Chassis or Vehicle in Range to Intact Condition. It is now usable with 1 SP.",
  },
  {
    id: 16,
    name: "Sand Blaster",
    qualities: {
      techLevel: 1,
      slotValue: 3,
      salvageValue: 2,

      turn: "Turn Action",
      range: "Close",

      damage: "1SP",

      traits: "Rigging",
    },
    shortdescription: "Set the world on fire.",
    fulldescription:
      "A COMPRESSOR AND NOZZLE WHICH PROPELS AN ABRASIVE MATERIAL LIKE SAND TO SLOWLY ERODE, CLEAN, OR SHAPE A SURFACE. ANY TARGET HIT CANNOT USE ANY SYSTEM OR MODULE WITH THE TARGETER TRAIT FOR 1 TURN",
  },
  {
    id: 16,
    name: "Transport Hold",
    qualities: {
      techLevel: 1,
      slotValue: 2,
      salvageValue: 2,

      turn: "Passive",
      // range: "Close",

      // damage: "1SP",

      // traits: "Rigging",
    },
    shortdescription: "Set the world on fire.",
    fulldescription:
      "A simple hold designed to store salvage on a Mech. Not the most flashy option, but nothing beats the feeling of having a hold full of Scrap to bring home to the Crawler. A Transport Hold increases the Cargo Capacity of a Mech by 4.",
  },
  {
    id: 17,
    name: "30mm Autocannon",
    qualities: {
      techLevel: 2,
      slotValue: 5,
      salvageValue: 3,

      turn: "Turn Action",
      range: "Medium",

      damage: "4SP",
      damageType: "Ballistic",

      traits: "Jamming",
    },
    shortdescription: "Set the world on fire.",
    fulldescription:
      "This automatic ballistic weapon fires high calibre slugs at a target.Evantis are one of the main manufacturers of heavy duty ballistic weapons, and you can expect to find their designs on their standard mil-tech loadouts.",
  },
  {
    id: 18,
    name: "Armoured Shield Autocannon",
    qualities: {
      techLevel: 2,
      slotValue: 5,
      salvageValue: 3,

      turn: "Rection",
      // range: "Medium",

      // damage: "4SP",
      // damageType: "Ballistic",

      traits: "Shield | Wield",
    },
    shortdescription: "Set the world on fire.",
    fulldescription:
      "This metallic shield is designed to protect the wielder from melee attacks, handy when a Bio-Titan is chomping down on you. When your Mech or a target in Close Range is hit by a Melee Attack you may use your Armoured Shield to block the attack as a Reaction. ROLL THE DIE:20: The attack misses and deals no damage and you put your opponent off guard. You may make an attack against the target as a Reaction.11 - 19: The Armoured Shield blocks the blow, the attack deals no damage. 6 - 10: The Armoured Shield deflects the attack, it misses and deals no damage, but your Armoured Shield is destroyed.2 - 5: The attack breaks through your Armoured Shield, it hits as normal, and your Armoured Shield is damaged. 1: The attack smashes through your Armoured Shield. The attack hits as normal and your Armoured Shield is destroyed",
  },

  {
    id: 8,
    name: "Hydraulic Crusher",
    qualities: {
      techLevel: 1,
      slotValue: 4,
      salvageValue: 4,

      turn: "Turn Action",
      range: "Close",

      damage: "3SP",
      damageType: "Melee",

      traits: "Rigging | Salvaging | Unwieldy",
    },
    shortdescription: "Set the world on fire.",
    fulldescription: "",
  },
];
