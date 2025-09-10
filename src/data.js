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
            { id: "FistsOfFury", dependsOn: [], position: [335, 689] },
            { id: "BlowsOfTheSnake", dependsOn: ["FistsOfFury"], position: [197, 544] },
            { id: "Brawler", dependsOn: ["FistsOfFury"], position: [483, 544] },
            { id: "IronHands", dependsOn: ["Brawler"], position: [381, 544] },
          ]
        },
        {
          id: 'twoHanded',
          name: 'Two-Handed',
          skills: [
            { id: "BrutishFighter", dependsOn: [], position: [636, 375] },
            { id: "MightyBlows", dependsOn: ["BrutishFighter"], position: [556, 304] },
            { id: "PerpetualSwings", dependsOn: ["MightyBlows"], position: [428, 304] },
            { id: "FuryWithoutFatigue", dependsOn: ["BrutishFighter"], position: [723, 304] },
            { id: "EnduringStrikes", dependsOn: ["FuryWithoutFatigue"], position: [842, 304] },
            { id: "GiantsGrace", dependsOn: ["FuryWithoutFatigue"], position: [786, 224] },
            { id: "UnstoppableForce", dependsOn: ["BrutishFighter"], position: [636, 303] },
            { id: "CrushingBlow", dependsOn: ["UnstoppableForce"], position: [520, 181] },
            { id: "UnstoppableImpact", dependsOn: ["UnstoppableForce"], position: [636, 222] },
            { id: "DominatingPresence", dependsOn: ["UnstoppableImpact"], position: [715, 138] },
            { id: "CullingTheHerd", dependsOn: ["UnstoppableImpact"], position: [636, 69] },
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
