// export const modules = [
//   {
//     id: 1,
//     name: "Comms Module",
//     qualities:
//       "Free Action // Range: Long // Communicator // Recommended Module",
//     description:
//       "This Opus Institute-developed array of telecommunications wires and receivers allows communication with anything with the Communicator Trait in Range. This allows for both voice and text communications via your Mech’s HUD. You may also use your Comms Module to send and receive images and data, such as data you gather when using a Scanner.If the Mech does not have a Comms Module or equivalent with the Communicator Trait you cannot talk to your Allies from their Mech whilst out in the field",
//   },
//   {
//     id: 2,
//     name: "Personal Recreation Device",
//     qualities: "Short Action",
//     description:
//       "Your Mech is installed with a Personal Recreation Device of your choice. This could be an entertainment box, foot massager, or drinks dispenser, because sometimes a salvager just needs a break. When activated, a single Pilot may use the Personal Recreation Device to relax and get themselves into a flow state. The next time they or a Mech they are controlling roll the die, they may re-roll it. They must accept the result of the second roll.*It is against Union Regulation to install a Mech with a Personal Recreation Device designed to do what you’re thinking.",
//   },
// ];

export const systems = [
  {
    id: 0,
    name: "Chainsaw Arm",
    qualities: "Range: Close // Damage: 2 SP // Melee // Salvaging",
    description:
      "Originally developed as a tool for lumberjack Mechs by Hodgson & Vasquez, an Evantis subsidiary, this saw arm has remained in use for its salvaging capabilities, utility, and stopping power even as  forests have been cut down across the world.",
  },
  {
    id: 1,
    name: "Escape Hatch",
    qualities: "Reaction // Escape // Recommended System",
    description:
      "An Escape Hatch is a sealed hatch that can be opened and escaped through in the event a Mech suffers critical damage or the Pilot needs to make a swift exit. When activated, by pulling a lever, a bolted charge blows the Escape Hatch from the Mech Chassis, allowing for the Pilot to crawl through to safety. ROLL THE DIE:20: You escape safely from your Mech in Medium Range.11 - 19: You escape safely from your Mech in Close Range.6 - 10: You escape in Close Range, but are injured in the process. Roll on the Critical Injury Table.2 - 5: The Escape Hatch fails to trigger and is damaged in the process, it must be repaired to Intact Condition to be used again.1: The Escape Hatch severely malfunctions trapping you in your Mech and injuring you. You must roll on the Critical Injury Table, and the Escape Hatch is destroyed",
  },
  {
    id: 2,
    name: "Locomotion System",
    qualities: "Passive // Recommended System",
    description:
      "A sturdy and dependable Locomotion System allowing a Mech to traverse most standard terrain types and adaptable to fit on most Chassis. Locomotion Systems vary widely from bipedal to quadrupedal, and beyond. Some esoteric designs are known to have as many as eight legs!A Locomotion System allows a Mech to move normally. If a Mech does not have a Locomotion System or it is damaged or destroyed the Mech cannot move",
  },
  {
    id: 3,
    name: "Riveting Gun",
    qualities: "Adaptable Behaviour",
    description:
      "This mech-mountable riveting gun can be used to make field repairs to the most basic of Mechs, Systems, and Modules.2EP PatchRange: Close // Turn ActionYou restore up to 4 Structure Points to any Mech in Range that has at least 1 SP. 2EP System RepairRange: Close // Short Action You repair a damaged Tech 1 System or Module in Range to Intact Condition. It is now usable. 4EP Chassis RepairRange: Close // Long Action You repair a damaged Tech 1 Mech Chassis or Vehicle in Range to Intact Condition. It is now usable with 1 SP.",
  },
  {
    id: 4,
    name: "Rigging Arm",
    qualities: "Range: Close // Rigging",
    description:
      "This standard rigging arm designed for industrial use allows a Mech to pick up and manipulate objects. To avoid embarrassment in the field it is worth reminding Pilots that many Mechs are not fitted with arms or hands as standard and therefore incapable of picking items up. If your Mech lacks arms and you do not mount a Rigging Arm or equivalent, your Mech cannot pick things up. ",
  },
];
