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
            { id: "FistsOfFury", name: "Fists of Fury", dependsOn: [], position: { x: 335, y: 689 } },
            { id: "BlowsOfTheSnake", name: "Blows of the Snake", dependsOn: ["FistsOfFury"], position: { x: 197, y: 544 } },
            { id: "Brawler", name: "Brawler", dependsOn: ["FistsOfFury"], position: { x: 483, y: 544 } },
            { id: "IronHands", name: "Iron Hands", dependsOn: ["Brawler"], position: { x: 381, y: 544 } },
          ]
        },
        {
          id: 'twoHanded',
          name: 'Two Handed',
          skills: [
            { id: "BrutishFighter", name: "Brutish Fighter", dependsOn: [], position: { x: 636, y: 375 } },
            { id: "MightyBlows", name: "Mighty Blows", dependsOn: ["BrutishFighter"], position: { x: 556, y: 304 } },
            { id: "PerpetualSwings", name: "Perpetual Swings", dependsOn: ["MightyBlows"], position: { x: 428, y: 304 } },
            { id: "FuryWithoutFatigue", name: "Fury Without Fatigue", dependsOn: ["BrutishFighter"], position: { x: 723, y: 304 } },
            { id: "EnduringStrikes", name: "Enduring Strikes", dependsOn: ["FuryWithoutFatigue"], position: { x: 842, y: 304 } },
            { id: "GiantsGrace", name: "Giant's Grace", dependsOn: ["FuryWithoutFatigue"], position: { x: 786, y: 224 } },
            { id: "UnstoppableForce", name: "Unstoppable Force", dependsOn: ["BrutishFighter"], position: { x: 636, y: 303 } },
            { id: "CrushingBlow", name: "Crushing Blow", dependsOn: ["UnstoppableForce"], position: { x: 520, y: 181 } },
            { id: "UnstoppableImpact", name: "Unstoppable Impact", dependsOn: ["UnstoppableForce"], position: { x: 636, y: 222 } },
            { id: "DominatingPresence", name: "Dominating Presence", dependsOn: ["UnstoppableImpact"], position: { x: 715, y: 138 } },
            { id: "CullingTheHerd", name: "Culling the Herd", dependsOn: ["UnstoppableImpact"], position: { x: 636, y: 69 } },
          ]
        }
      ]
    },
    {
      id: "endurance",
      name: "Endurance",
      skillTrees: []
    }
  ],

  getSection(id) {
    return this.sections.find(section => section.id === id);
  }
};
