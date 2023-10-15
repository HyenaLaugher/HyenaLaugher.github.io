export const listOfModules = [
  {
    id: 0,
    name: "Comms Module",
    qualities: {
      techLevel: 1,
      slotValue: 1,
      salvageValue: 1,

      turn: "Free Action",
      range: "Long Range",
      recommended: true,
    },
    shortdescription:
      "Mech-Installed UI with Comms, allowing communication and mission info to be passed between Squad Mechs.",
    fulldescription:
      "This Opus Institute-developed array of telecommunications wires and receivers allows communication with anything with the Communicator Trait in Range. This allows for both voice and text communications via your Mech’s HUD. You may also use your Comms Module to send and receive images and data, such as data you gather when using a Scanner.If the Mech does not have a Comms Module or equivalent with the Communicator Trait you cannot talk to your Allies from their Mech whilst out in the field",
  },
  {
    id: 1,
    name: "Eggs Mayhem",
    qualities: {
      techLevel: 1,
      slotValue: 1,
      salvageValue: 3,

      turn: "Free Action",
      range: "Medium Range",
      recommended: false,
    },
    shortdescription:
      "Hacking Program that allows the pilot to read data from Mechs, Databases or Computer Systems.",
    fulldescription:
      "This hacking program developed by Stefanus Industries allows you to tap into a Mech, database, or computer system to gather information about it. This can only be used to read data and not to write or manipulate it.When activated, choose a target Mech, database, or computer system within Range.",
    energyCost: 2,
    diceRoll: [
      {
        roll: 20,
        result:
          "You masterfully hack into the system and can ask 5 questions to the Mediator about it. The answers they give must be true.",
      },
      {
        roll: 11,
        result:
          "You successfully hack in and can ask 3 questions to the Mediator about it. The answers they give must be true.",
      },
      {
        roll: 6,
        result:
          "Your hack produces a mix of confused data. You are able to ask the Mediator 2 questions about it. One of the answers they give must be true, but the other contains false information as decided by the Mediator.",
      },
      {
        roll: 2,
        result:
          "The hacking attempt fails. The Mediator may choose an appropriate Setback.",
      },
      {
        roll: 1,
        result:
          "The hack fails and the target is alerted to your hacking attempt. They can retaliate as appropriate.",
      },
    ],
  },
  {
    id: 2,
    name: "Equipment Locker",
    qualities: {
      techLevel: 1,
      slotValue: 1,
      salvageValue: 1,

      turn: "Passive",
      additionalPilotEquipment: 10,
    },
    shortdescription:
      "Locker Installed onto mech to allow additional equipment to be taken into the field.",
    fulldescription:
      "This Module is installed directly into your Mech's Cockpit and allows storage of up to 10 pieces of Pilot Equipment within it, allowing easy access when in the field.",
  },
  {
    id: 3,
    name: "Firewall",
    qualities: {
      techLevel: 1,
      slotValue: 1,
      salvageValue: 2,

      turn: "Reaction",
      range: "Medium Range",
      hacking: "Hacking",
      recommended: false,
    },
    shortdescription: "Protect yourself or Allies with defensive subrotuines.",
    fulldescription:
      "This Firewall, made open source by the Opus Institute, is designed to block hacking attempts.If you or an Ally in Range are the target of any System, Module, or Ability with the Hacking Trait you may attempt to block the hack with your Firewall as a Reaction.ROLL THE DIE:20: You successfully block the hack and you and your Allies cannot be affected by anything with the Hacking Trait for the next 10 minutes.11 - 19: You successfully block the hack and entirely nullify all of its effects. 6 - 10: The Mediator offers you a Tough Choice in relation to the hack. This could be partially nullifying its effects, an additional EP cost, or damage to your Module.2 - 5: You fail to block the hack, and it has full effect.1: You fail to block the hack, and your Firewall is breached, it becomes damaged and cannot be used until repaired to the Intact Condition",
    energyCost: 2,
    diceRoll: [
      {
        roll: 20,
        result:
          "You successfully block the hack and you and your Allies cannot be affected by anything with the Hacking Trait for the next 10 minutes",
      },
      {
        roll: 11,
        result:
          "You successfully block the hack and entirely nullify all of its effects.",
      },
      {
        roll: 6,
        result:
          "The Mediator offers you a Tough Choice in relation to the hack. This could be partially nullifying its effects, an additional EP cost, or damage to your Module.",
      },
      {
        roll: 2,
        result: "You fail to block the hack, and it has full effect.",
      },
      {
        roll: 1,
        result:
          "You fail to block the hack, and your Firewall is breached, it becomes damaged and cannot be used until repaired to the Intact Condition.",
      },
    ],
  },
  {
    id: 4,
    name: "Personal Recreation Device",
    qualities: {
      techLevel: 1,
      slotValue: 1,
      salvageValue: 1,

      turn: "Short Action",
    },
    shortdescription:
      "Personal effects engineered into the design of the Mech, creating a comfortable environment for the Pilot.",
    fulldescription:
      "Your Mech is installed with a Personal Recreation Device of your choice. This could be an entertainment box, foot massager, or drinks dispenser, because sometimes a salvager just needs a break. When activated, a single Pilot may use the Personal Recreation Device to relax and get themselves into a flow state. The next time they or a Mech they are controlling roll the die, they may re-roll it. They must accept the result of the second roll.*It is against Union Regulation to install a Mech with a Personal Recreation Device designed to do what you’re thinking.",
    energyCost: 1,
  },
  {
    id: 5,
    name: "Reactor Flare",
    qualities: {
      techLevel: 1,
      slotValue: 1,
      salvageValue: 1,

      turn: "Turn Action",
      range: "Long Range",
    },
    shortdescription:
      "Fire a Reactor-fuelled flare at a target location in range to illuminate that neighbourhood.",
    fulldescription:
      "An open source Opus Institute blueprint, this Module is frequently used by emergency or rescue services. The Opus Institute developed it for use in the long winters where their headquarters are located; due to the pitch dark environments and constant threat of snowstorms and avalanches. When activated, this Module fires a reactor-fuelled flare to any point within Range. The flare is clearly visible up to anywhere within Far Range as well as anyone in any adjacent area to you on the Region Map. The flare burns enough to provide illumination nearly equal to that of daylight. The flare lasts for an hour before dissipating.",
    energyCost: 1,
  },
  {
    id: 6,
    name: "Self-Destruct",
    qualities: {
      techLevel: 1,
      slotValue: 1,
      salvageValue: 1,

      turn: "Reaction",
    },
    shortdescription: "The Final Flourish.",
    fulldescription:
      "When activated, your Mech self-destructs, its reactor going into overdrive and causing a localised thermonuclear explosion. Your Mech, as well as all mounted Systems, Modules, and all Cargo, are destroyed. Everything within Close Range of your Mech takes SP damage equal to the Maximum Heat Capacity of your Mech. Everything affected by this may take any Turn Action or Reaction in response to attempt to avoid the damage. You may attempt to escape via any System, Module, or Ability with the Escape Trait. The area where your Mech was located before the Self-Destruct was activated, is now Irradiated",
  },
  {
    id: 7,
    name: "Survey Scanner",
    qualities: {
      techLevel: 1,
      slotValue: 1,
      salvageValue: 3,

      turn: "Short Action",
      range: "Long Range",

      traits: "Scanner",
    },
    shortdescription: "Unfinished",
    fulldescription:
      "When activated, a Survey Scanner allows you to scan a specific point of interest within Range. This can be a single point on the Region Map or a specific feature in the world such as a ruin, unique area of terrain, settlement, or base. If a point is not worth scanning because it holds nothing of interest or you have all of the relevant information on it, the Mediator must tell you before you make your scan.",
  },

  {
    id: 8,
    name: "Weapon Link",
    qualities: {
      techLevel: 1,
      slotValue: 1,
      salvageValue: 3,

      turn: "Turn Action",
      // range: "Long",

      traits: "Scanner",
    },
    shortdescription: "Unfinished",
    fulldescription:
      "A Weapons Link Module allows you to connect any number of identical Weapons Systems together. These must be the same Weapons System. For example: you may link two Green Lasers or three 30mm Autocannons. Once you link weapons, this is permanent and they cannot be fired separately via any means until this Module is uninstalled. You make an attack with all weapons linked together with this Module against a single target in Range of your choice. Make and resolve each attack separately. You gain 1 Heat for each linked weapon you attack with and must make a Heat Check after the attacks have been resolved",
  },
  {
    id: 9,
    name: "Zoom Optics",
    qualities: {
      techLevel: 1,
      slotValue: 1,
      salvageValue: 2,

      turn: "Free Action",
      // range: "Long",

      traits: "Optics",
    },
    shortdescription: "Unfinished",
    fulldescription:
      "When activated, this optical array extends the Range of any single Ranged Weapons System mounted on your Mech by one band, to a maximum of Long Range. For example, from Medium Range to Long Range or Close Range to Medium Range.It further allows you to zoom in and see one Range Band further than you currently are. For example, if you are in Medium Range, you can see a target as though it was in Close Range and pick out finer details about it.This effect lasts for 1 hour. ",
  },
  {
    id: 10,
    name: "Barometric Sensor",
    qualities: {
      techLevel: 2,
      slotValue: 1,
      salvageValue: 1,

      turn: "Passive",
      // range: "Long",

      traits: "Scanner",
    },
    shortdescription: "Unfinished",
    fulldescription:
      "Developed by Kombu Tech to detect atmospheric conditions in the vast algae farms of The Great Cape, this Module can quite literally predict the weather.This device constantly measures and analyses air pressure, wind speed, temperature, and humidity. When entering an area you are able to get an up to date report on the weather of that area and any potential hazardous environmental conditions. In addition, the Module alerts you when a shift in weather patterns is occurring, giving you advance warning of severe weather such as radiation storms, acid rain, hail, hurricanes, and tornadoes. You also learn all potential negative effects of the current and predicted weather conditions, including mechanical effects.",
  },
  {
    id: 11,
    name: "Damage Assessor",
    qualities: {
      techLevel: 2,
      slotValue: 1,
      salvageValue: 1,

      turn: "Turn Action",
      range: "Medium",

      traits: "Scanner",
    },
    shortdescription: "Unfinished",
    fulldescription:
      "Used by Osiris insurance teams as a means to assess damage and reduce liability following a series of catastrophic industrial accidents and worker deaths in the last attempt to build a space elevator.When activated, you scan a Mech or Vehicle in Range to get a full report on it. You learn its Chassis, Systems and Modules, its current and Max Structure Points, Heat, and Energy, and the Condition (Intact, Damaged, Destroyed) of its Chassis, Systems, and Modules",
  },
  {
    id: 12,
    name: "Deep Survey Scanner",
    qualities: {
      techLevel: 2,
      slotValue: 1,
      salvageValue: 2,

      turn: "Short Action",
      range: "Long",

      traits: "Scanner",
    },
    shortdescription: "Unfinished",
    fulldescription:
      "A scanner designed by Thatcher Steel to analyse underground areas prior to mining excavations. When activated, you scan a point within Range to detect the presence of any underground structures, cave networks, ruins, or bases. This can be a specific terrain feature or location such as a mountain range, military complex, settlement, or area in the landscape. If a point is not worth scanning because it holds nothing of interest, the Mediator must tell you before you make your scan. The scan returns a basic datamap of the underground area, including its size as well as the first three main sections as well as any passageways between those sections. The Mediator will draw you a rudimentary map noting any major features such as bridges, columns, or crevasses, and lets you know if the area can fit Mechs or Pilots",
  },
  {
    id: 13,
    name: "Energy Cell",
    qualities: {
      techLevel: 2,
      slotValue: 1,
      salvageValue: 1,

      turn: "Rection",
      // range: "Long",

      // traits: "Scanner",
    },
    shortdescription: "Unfinished",
    fulldescription:
      "For when you need that extra boost of energy on a long haul. This nuclear powered conduit can be drained of energy to provide your Mech’s reactor with a temporary boost. When activated, your Mech regains 3 EP and the Energy Cell Module is destroyed.",
  },
  {
    id: 14,
    name: "Evasion Protocols",
    qualities: {
      techLevel: 2,
      slotValue: 1,
      salvageValue: 1,

      turn: "Rection",
      // range: "Long",

      traits: "Hot(2)",
    }, // "Reaction",
    shortdescription: "Unfinished",
    fulldescription:
      "This Module enables a Mech to make a series of rapid movements in an attempt to avoid damage from an attack or hazard. The infamous ‘Devils Run’ Pilot training route in the Arid Steppes contains a gauntlet of hazards that the Evasion Protocols Module has proved crucial in avoiding. If an attack hits your Mech, you may activate the Evasion Protocols as a Reaction to force the attacker to re-roll the attack and choose the lower result.",
  },
  {
    id: 15,
    name: "Hull Magnetiser",
    qualities: {
      techLevel: 2,
      slotValue: 1,
      salvageValue: 2,

      turn: "Turn Action",
      // range: "Long",

      // traits: "Scanner",
    },
    shortdescription: "Unfinished",
    fulldescription:
      "A byproduct of Drontek anti-grav technology, the Hull Magnetiser has become much loved by salvagers who want to slap some extra scrap on their Chassis. When activated, the hull of your Mech becomes temporarily magnetised, drawing metallic objects towards it and allowing all manner of scrap and salvage to be easily carried. This increases your Mech’s Cargo Capacity by its System Slot Value. For example, if you are in a Mule Mech with a System Slot Value of 15 you would increase your Cargo Capacity by 15. This effect lasts for 1 hour and can be deactivated any time as a Free Action.The Union unofficially encourages creative and unorthodox uses of the Hull Magnetiser",
  },
  {
    id: 16,
    name: "IR Night Vision Optics",
    qualities: {
      techLevel: 2,
      slotValue: 1,
      salvageValue: 2,

      turn: "Free Action",
      range: "Far",

      traits: "Optics",
    },
    shortdescription: "Unfinished",
    fulldescription:
      "Developed by the old nations in the Great War and later patented by AMS Systems for use in mining operations, this infrared optical device allows you to see in darkness even on a moonless night.When activated, this specialised, green tinted optical array allows you to see in darkness from your Mech up to Far Range. This effect lasts for 1 hour",
  },
  {
    id: 17,
    name: "M315 Motion Scanner",
    qualities: {
      techLevel: 2,
      slotValue: 1,
      salvageValue: 2,

      turn: "Turn Action",
      range: "Medium",

      traits: "Scanner",
    },
    shortdescription: "Unfinished",
    fulldescription:
      "Developed by Sakura Futures to aid in target acquisition, after a classified incident at a mining colony. This scanner is able to detect movement within an area via a high-powered ultrasound scanner.When activated, you scan a point within the area map or a specific area of interest such as a ruined building, bunker, or dense area of foliage for any signs of movement. You detect if anything is moving in the area, the number of separate things that are moving, and whether they are People or Mech-sized. ",
  },
  {
    id: 18,
    name: "Metal Detector",
    qualities: {
      techLevel: 2,
      slotValue: 1,
      salvageValue: 2,

      turn: "Reaction",
      // range: "Long",

      traits: "Heat Spike | Hot(2)",
    },
    shortdescription: "Unfinished",
    fulldescription:
      "A favourite of salvage teams across the globe, this Mech-mountable scanner lets you know when any Scrap is nearby. Auto-ScanPassiveThis automated function passively alerts you when you move into an area that can be salvaged. In addition, whenever you move from one area of the map to an location you have not yet visited, roll the die, on the result of a 20 you gain once piece of scrap of the Tech Level of the area as decided by the Mediator. By default this is the Tech Level of your Union Crawler. 2EP Active ScanShort Action // Range: Medium // ScannerIn addition, when activated for its EP cost, this Module scans an area within Range. This reveals any Scrap, Systems, Chassis, or Modules, or Area Salvage points in the location as well as any buried or hidden metallic threats such as mines or Mechs waiting in ambush.",
  },

  {
    id: 12,
    name: "ECM Transmitter",
    qualities: {
      techLevel: 3,
      slotValue: 1,
      salvageValue: 1,

      turn: "Turn Action",
      // range: "Long",

      traits: "Scanner",
    }, // "Reaction",
    shortdescription: "Unfinished",
    fulldescription: "",
  },
];
