export default {
  sections: [
    {
      id: 'strength',
      name: 'Strength',
      skillTrees: [
        {
          id: 'unarmed',
          name: 'Unarmed',
          skills: [
            { id: "fistsOfFury", name: "Fists of Fury", dependsOn: [], position: { x: 335, y: 689 } },
            { id: "blowsOfTheSnake", name: "Blows of the Snake", dependsOn: ["fistsOfFury"], position: { x: 197, y: 544 } },
            { id: "brawler", name: "Brawler", dependsOn: ["fistsOfFury"], position: { x: 483, y: 544 } },
            { id: "ironHands", name: "Iron Hands", dependsOn: ["brawler"], position: { x: 381, y: 544 } },
          ]
        },
        {
          id: 'twoHanded',
          name: 'Two Handed',
          skills: [
            { id: "brutishFighter", name: "Brutish Fighter", dependsOn: [], position: { x: 636, y: 375 } },
            { id: "mightyBlows", name: "Mighty Blows", dependsOn: ["brutishFighter"], position: { x: 556, y: 304 } },
            { id: "perpetualSwings", name: "Perpetual Swings", dependsOn: ["mightyBlows"], position: { x: 428, y: 304 } },
            { id: "furyWithoutFatigue", name: "Fury Without Fatigue", dependsOn: ["brutishFighter"], position: { x: 723, y: 304 } },
            { id: "enduringStrikes", name: "Enduring Strikes", dependsOn: ["furyWithoutFatigue"], position: { x: 842, y: 304 } },
            { id: "giantsGrace", name: "Giant's Grace", dependsOn: ["furyWithoutFatigue"], position: { x: 786, y: 224 } },
            { id: "unstoppableForce", name: "Unstoppable Force", dependsOn: ["brutishFighter"], position: { x: 636, y: 303 } },
            { id: "crushingBlow", name: "Crushing Blow", dependsOn: ["unstoppableForce"], position: { x: 520, y: 181 } },
            { id: "unstoppableImpact", name: "Unstoppable Impact", dependsOn: ["unstoppableForce"], position: { x: 636, y: 222 } },
            { id: "dominatingPresence", name: "Dominating Presence", dependsOn: ["unstoppableImpact"], position: { x: 715, y: 138 } },
            { id: "cullingTheHerd", name: "Culling the Herd", dependsOn: ["unstoppableImpact"], position: { x: 636, y: 69 } },
          ]
        },
        {
          id: "oneHanded",
          name: "One Handed",
          skills: [
            { id: "agileFighter", name: "Agile Fighter", dependsOn: [], position: { x: 1240, y: 362 } },
            { id: "unendingAssault", name: "Unending Assault", dependsOn: ["agileFighter"], position: { x: 1155, y: 280 } },
            { id: "strikesOfLuck", name: "Strikes of Luck", dependsOn: ["unendingAssault"], position: { x: 1039, y: 280 } },
            { id: "duelist", name: "Duelist", dependsOn: ["unendingAssault"], position: { x: 1156, y: 180 } },
            { id: "ambidextrous", name: "Ambidextrous", dependsOn: ["agileFighter"], position: { x: 1240, y: 280 } },
            { id: "adaptiveCombat", name: "Adaptive Combat", dependsOn: ["ambidextrous"], position: { x: 1320, y: 205 } },
            { id: "symmetricCombat", name: "Symmetric Combat", dependsOn: ["ambidextrous"], position: { x: 1240, y: 138 } },
            { id: "crossguardBlock", name: "CrossguardBlock", dependsOn: ["symmetricCombat"], position: { x: 1175, y: 71 } },
            { id: "powerfulBlows", name: "Powerful Blows", dependsOn: ["agileFighter"], position: { x: 1320, y: 281 } },
            { id: "debilitatingBlows", name: "Debilitating BLows", dependsOn: ["powerfulBlows"], position: { x: 1437, y: 280 } },
            { id: "unstoppableMomentum", name: "Unstoppable Momentum", dependsOn: ["powerfulBlows"], position: { x: 1423, y: 180 } },
            { id: "invigoratingDance", name: "Invigorating Dance", dependsOn: ["unstoppableMomentum"], position: { x: 1371, y: 128 } },
          ]
        },
        {
          id: "general",
          name: "General",
          skills: [
            { id: "godlyPhysique", name: "Godly Physique", dependsOn: [], position: { x: 1550, y: 664 } },
            { id: "weaponsOfGreatHeft", name: "Weapons of Great Heft", dependsOn: ["godlyPhysique"], position: { x: 1397, y: 500 } },
            { id: "executioner", name: "Executioner", dependsOn: ["godlyPhysique"], position: { x: 1550, y: 544 } },
            { id: "lastStand", name: "Last Stand", dependsOn: ["godlyPhysique"], position: { x: 1724, y: 500 } },
            { id: "recklessFrenzy", name: "Reckless Frenzy", dependsOn: ["lastStand"], position: { x: 1626, y: 500 } },
            { id: "deadlyFury", name: "Deadly Fury", dependsOn: ["recklessFrenzy"], position: { x: 1626, y: 417 } },
          ]
        }
      ]
    },
    {
      id: "endurance",
      name: "Endurance",
      skillTrees: []
    },
    {
      id: "dexterity",
      name: "Dexterity",
      skillTrees: []
    },
    {
      id: "spirituality",
      name: "Spirituality",
      skillTrees: []
    },
    {
      id: "perception",
      name: "Perception",
      skillTrees: []
    },
    {
      id: "practicality",
      name: "Practicality",
      skillTrees: []
    }
  ],

  getSection(id) {
    return this.sections.find(section => section.id === id);
  }
};
