export default {
  sections: [
    {
      id: "strength",
      name: "Strength",
      skillTrees: [
        {
          id: "unarmed",
          name: "Unarmed",
          skills: [
            {
              id: "fistsOfFury",
              name: "Fists of Fury",
              ranks: [
                "Unarmed Attacks deal 20% more damage",
                "Unarmed Attacks deal 30% more damage",
                "Unarmed Attacks deal 40% more damage",
              ],
              dependsOn: [],
              position: { x: 335, y: 689 },
            },
            {
              id: "blowsOfTheSnake",
              name: "Blows of the Snake",
              ranks: [
                "Killing with fists increases Attack Speed by 20% for 5s",
                "Killing with fists increases Attack Speed by 40% for 5s",
                "Killing with fists increases Attack Speed by 60% for 5s",
              ],
              dependsOn: ["fistsOfFury"],
              position: { x: 197, y: 544 },
            },
            {
              id: "brawler",
              name: "Brawler",
              ranks: [
                "Consecutive unarmed attacks gain 5% bonus Damage",
                "Consecutive unarmed attacks gain 10% bonus Damage",
              ],
              dependsOn: ["fistsOfFury"],
              position: { x: 483, y: 544 },
            },
            {
              id: "ironHands",
              name: "Iron Hands",
              ranks: [
                "Opponents with more than 80% Max Health take 40% more damage from fists",
                "Opponents with more than 60% Max Health take 40% more damage from fists",
                "Opponents with more than 40% Max Health take 40% more damage from fists",
              ],
              dependsOn: ["brawler"],
              position: { x: 381, y: 544 },
            },
          ],
        },
        {
          id: "twoHanded",
          name: "Two Handed",
          skills: [
            {
              id: "brutishFighter",
              name: "Brutish Fighter",
              ranks: [
                "Attacks with two-handed weapons are stronger by 10%",
                "Attacks with two-handed weapons are stronger by 15%",
                "Attacks with two-handed weapons are stronger by 20%",
              ],
              dependsOn: [],
              position: { x: 636, y: 375 },
            },
            {
              id: "mightyBlows",
              name: "Mighty Blows",
              ranks: [
                "Two-handed weapon hits deplete 5% of the damage dealt from the target's stamina",
                "Two-handed weapon hits deplete 10% of the damage dealt from the target's stamina",
                "Two-handed weapon hits deplete 15% of the damage dealt from the target's stamina",
              ],
              dependsOn: ["brutishFighter"],
              position: { x: 556, y: 304 },
            },
            {
              id: "perpetualSwings",
              name: "Perpetual Swings",
              ranks: [
                "Decreases the Stamina cost for each Consecutive two-handed hit by 4% up to 20%",
                "Decreases the Stamina cost for each Consecutive two-handed hit by 7% up to 35%",
                "Decreases the Stamina cost for each Consecutive two-handed hit by 10% up to 50%",
              ],
              dependsOn: ["mightyBlows"],
              position: { x: 428, y: 304 },
            },
            {
              id: "furyWithoutFatigue",
              name: "Fury Without Fatigue",
              ranks: [
                "Reduce stamina cost of Heavy Attacks with two-handed weapons by 5%",
                "Reduce stamina cost of Heavy Attacks with two-handed weapons by 10%",
                "Reduce stamina cost of Heavy Attacks with two-handed weapons by 15%",
              ],
              dependsOn: ["brutishFighter"],
              position: { x: 723, y: 304 },
            },
            {
              id: "enduringStrikes",
              name: "Enduring Strikes",
              ranks: [
                "Two-handed Attacks have 2% Lifesteal",
                "Two-handed Attacks have 3% Lifesteal",
                "Two-handed Attacks have 4% Lifesteal",
              ],
              dependsOn: ["furyWithoutFatigue"],
              position: { x: 842, y: 304 },
            },
            {
              id: "giantsGrace",
              name: "Giant's Grace",
              ranks: [
                "Increases Attack Speed for each Consecutive two-handed hit by 2% up to 10%",
                "Increases Attack Speed for each Consecutive two-handed hit by 4% up to 20%",
                "Increases Attack Speed for each Consecutive two-handed hit by 6% up to 30%",
              ],
              dependsOn: ["furyWithoutFatigue"],
              position: { x: 786, y: 224 },
            },
            {
              id: "unstoppableForce",
              name: "Unstoppable Force",
              ranks: [
                "Two-handed Heavy Attacks deal 5% bonus damage",
                "Two-handed Heavy Attacks deal 10% bonus damage",
                "Two-handed Heavy Attacks deal 15% bonus damage",
              ],
              dependsOn: ["brutishFighter"],
              position: { x: 636, y: 304 },
            },
            {
              id: "crushingBlow",
              name: "Crushing Blow",
              ranks: [
                "Heavy Attacks with two-handed weapons deal 15% weapon damage in a 4m radius around the enemy hit.",
                "Heavy Attacks with two-handed weapons deal 20% weapon damage in a 4m radius around the enemy hit.",
                "Heavy Attacks with two-handed weapons deal 25% weapon damage in a 4m radius around the enemy hit.",
              ],
              dependsOn: ["unstoppableForce"],
              position: { x: 520, y: 181 },
            },
            {
              id: "unstoppableImpact",
              name: "Unstoppable Impact",
              ranks: [
                "Heavy Attacks with two-handed weapons have a 5% chance to Stun",
                "Heavy Attacks with two-handed weapons have a 10% chance to Stun",
                "Heavy Attacks with two-handed weapons have a 15% chance to Stun",
              ],
              dependsOn: ["unstoppableForce"],
              position: { x: 636, y: 222 },
            },
            {
              id: "dominatingPresence",
              name: "Dominating Presence",
              ranks: [
                "Each enemy within a radius of 5m increases your Physical Damage by 10%",
              ],
              dependsOn: ["unstoppableImpact"],
              position: { x: 715, y: 138 },
            },
            {
              id: "cullingTheHerd",
              name: "Culling the Herd",
              ranks: [
                "Heavy Attacks with two-handed weapons have a 50% chance to deal critical damage if the target is below 30% Health",
                "Heavy Attacks with two-handed weapons have a 50% chance to deal critical damage if the target is below 40% Health",
                "Heavy Attacks with two-handed weapons have a 50% chance to deal critical damage if the target is below 50% Health",
              ],
              dependsOn: ["unstoppableImpact"],
              position: { x: 636, y: 69 },
            },
          ],
        },
        {
          id: "oneHanded",
          name: "One Handed",
          skills: [
            {
              id: "agileFighter",
              name: "Agile Fighter",
              ranks: [
                "Attacks with one-handed weapons are stronger by 10%",
                "Attacks with one-handed weapons are stronger by 15%",
                "Attacks with one-handed weapons are stronger by 20%",
              ],
              dependsOn: [],
              position: { x: 1240, y: 362 },
            },
            {
              id: "unendingAssault",
              name: "Unending Assault",
              ranks: [
                "Increase Damage for each Consecutive one-handed weapon hit by 1% up to 5%",
                "Increase Damage for each Consecutive one-handed weapon hit by 2% up to 10%",
                "Increase Damage for each Consecutive one-handed weapon hit by 3% up to 15%",
              ],
              dependsOn: ["agileFighter"],
              position: { x: 1155, y: 280 },
            },
            {
              id: "strikesOfLuck",
              name: "Strikes of Luck",
              ranks: [
                "Increases Critical Chance for each Consecutive one-handed hit by 1% up to 5%",
                "Increases Critical Chance for each Consecutive one-handed hit by 2% up to 10%",
                "Increases Critical Chance for each Consecutive one-handed hit by 3% up to 15%",
              ],
              dependsOn: ["unendingAssault"],
              position: { x: 1039, y: 280 },
            },
            {
              id: "duelist",
              name: "Duelist",
              ranks: [
                "Having a free off-hand decreases the stamina cost of Parrying by 50%",
              ],
              dependsOn: ["unendingAssault"],
              position: { x: 1156, y: 180 },
            },
            {
              id: "ambidextrous",
              name: "Ambidextrous",
              ranks: [
                "Heavy Attacks while wielding two weapons cost 20% less stamina",
                "Heavy Attacks while wielding two weapons cost 35% less stamina",
              ],
              dependsOn: ["agileFighter"],
              position: { x: 1240, y: 280 },
            },
            {
              id: "adaptiveCombat",
              name: "Adaptive Combat",
              ranks: [
                "Fighting with two weapons of different types increases Physical Damage by 20%",
              ],
              dependsOn: ["ambidextrous"],
              position: { x: 1320, y: 205 },
            },
            {
              id: "symmetricCombat",
              name: "Symmetric Combat",
              ranks: [
                "Fighting with two weapons of the same type increases Attack Speed by 20%",
              ],
              dependsOn: ["ambidextrous"],
              position: { x: 1240, y: 138 },
            },
            {
              id: "crossguardBlock",
              name: "CrossguardBlock",
              ranks: [
                "Blocking while dual-wielding blocks 10% more damage",
                "Blocking while dual-wielding blocks 20% more damage",
              ],
              dependsOn: ["symmetricCombat"],
              position: { x: 1175, y: 71 },
            },
            {
              id: "powerfulBlows",
              name: "Powerful Blows",
              ranks: [
                "Heavy Attacks with one-handed weapons reduce the target's Stamina by 5% of the inflicted damage",
                "Heavy Attacks with one-handed weapons reduce the target's Stamina by 10% of the inflicted damage",
                "Heavy Attacks with one-handed weapons reduce the target's Stamina by 15% of the inflicted damage",
              ],
              dependsOn: ["agileFighter"],
              position: { x: 1320, y: 281 },
            },
            {
              id: "debilitatingBlows",
              name: "Debilitating BLows",
              ranks: [
                "Heavy Attacks with one-handed weapons have a 5% chance to Stun",
                "Heavy Attacks with one-handed weapons have a 10% chance to Stun",
                "Heavy Attacks with one-handed weapons have a 15% chance to Stun",
              ],
              dependsOn: ["powerfulBlows"],
              position: { x: 1437, y: 280 },
            },
            {
              id: "unstoppableMomentum",
              name: "Unstoppable Momentum",
              ranks: [
                "Reduces Stamina cost for each Consecutive one-handed hit by 2% up to 10%",
                "Reduces Stamina cost for each Consecutive one-handed hit by 3% up to 15%",
                "Reduces Stamina cost for each Consecutive one-handed hit by 4% up to 20%",
              ],
              dependsOn: ["powerfulBlows"],
              position: { x: 1423, y: 180 },
            },
            {
              id: "invigoratingDance",
              name: "Invigorating Dance",
              ranks: [
                "Increases chance for each Consecutive one-handed hit to restore full Stamina by 2% up to 10%",
                "Increases chance for each Consecutive one-handed hit to restore full Stamina by 4% up to 20%",
                "Increases chance for each Consecutive one-handed hit to restore full Stamina by 6% up to 30%",
              ],
              dependsOn: ["unstoppableMomentum"],
              position: { x: 1371, y: 128 },
            },
          ],
        },
        {
          id: "general",
          name: "General",
          skills: [
            {
              id: "godlyPhysique",
              name: "Godly Physique",
              ranks: [
                "Increases Melee Damage by 5%",
                "Increases Melee Damage by 10%",
                "Increases Melee Damage by 15%",
                "Increases Melee Damage by 20%",
                "Increases Melee Damage by 25%",
              ],
              dependsOn: [],
              position: { x: 1550, y: 664 },
            },
            {
              id: "weaponsOfGreatHeft",
              name: "Weapons of Great Heft",
              ranks: [
                "Increases Physical Damage by 2% for each point of your weapon's weight",
              ],
              dependsOn: ["godlyPhysique"],
              position: { x: 1397, y: 500 },
            },
            {
              id: "executioner",
              name: "Executioner",
              ranks: [
                "Staggered enemies take 30% increased Damage",
                "Staggered enemies take 60% increased Damage",
              ],
              dependsOn: ["godlyPhysique"],
              position: { x: 1550, y: 544 },
            },
            {
              id: "lastStand",
              name: "Last Stand",
              ranks: ["When below 30% Health, increases Melee Damage by 30%"],
              dependsOn: ["godlyPhysique"],
              position: { x: 1724, y: 500 },
            },
            {
              id: "recklessFrenzy",
              name: "Reckless Frenzy",
              ranks: ["When below 30% Health, gain 30% Attack Speed"],
              dependsOn: ["lastStand"],
              position: { x: 1626, y: 500 },
            },
            {
              id: "deadlyFury",
              name: "Deadly Fury",
              ranks: [
                "Increases your Physical Damage by 1% for every 5% of missing Health",
              ],
              dependsOn: ["recklessFrenzy"],
              position: { x: 1626, y: 417 },
            },
          ],
        },
      ],
    },
    {
      id: "endurance",
      name: "Endurance",
      skillTrees: [
        {
          id: "shields",
          name: "Shields",
          skills: [
            {
              id: "counterweight",
              name: "Counterweight",
              ranks: [
                "Wielding shields increases Melee Damage by 10%",
                "Wielding shields increases Melee Damage by 15%",
                "Wielding shields increases Melee Damage by 20%",
              ],
              dependsOn: [],
              position: { x: 0, y: 0 },
            },
            {
              id: "preparedBlock",
              name: "Prepared Block",
              ranks: [
                "Block drains 10% less Stamina",
                "Block drains 20% less Stamina",
                "Block drains 30% less Stamina",
              ],
              dependsOn: ["counterweight"],
              position: { x: 0, y: 0 },
            },
            {
              id: "deflectingBlock",
              name: "Deflecting Block",
              ranks: [
                "During Block, your shield has a 100% chance to reflect each arrow and throwable",
              ],
              dependsOn: ["preparedBlock"],
              position: { x: 0, y: 0 },
            },
            {
              id: "spellSyphon",
              name: "Spell Syphon",
              ranks: [
                "Blocking spells restores Mana equal to 20% of the blocked Magical Damage",
                "Blocking spells restores Mana equal to 30% of the blocked Magical Damage",
                "Blocking spells restores Mana equal to 40% of the blocked Magical Damage",
              ],
              dependsOn: ["preparedBlock"],
              position: { x: 0, y: 0 },
            },
            {
              id: "disruptingShove",
              name: "Disrupting Shove",
              ranks: [
                "Parrying with a shield has a 10% chance to Slow the attacker 2s",
                "Parrying with a shield has a 15% chance to Slow the attacker 3s",
                "Parrying with a shield has a 20% chance to Slow the attacker 4s",
              ],
              dependsOn: ["preparedBlock"],
              position: { x: 0, y: 0 },
            },
            {
              id: "confidence",
              name: "Confidence",
              ranks: [
                "Reduce damage taken by 5% while a shield is equipped",
                "Reduce damage taken by 10% while a shield is equipped",
                "Reduce damage taken by 15% while a shield is equipped",
              ],
              dependsOn: ["disruptingShove"],
              position: { x: 0, y: 0 },
            },
            {
              id: "shieldbearer",
              name: "Shieldbearer",
              ranks: ["Triple the damage dealt by shields"],
              dependsOn: ["confidence"],
              position: { x: 0, y: 0 },
            },
          ],
        },
      ],
    },
    {
      id: "dexterity",
      name: "Dexterity",
      skillTrees: [
        {
          id: "parry",
          name: "Parry",
          skills: [
            {
              id: "parryKing",
              name: "Parry King",
              ranks: [
                "Your parry window is increased by 0.1 seconds",
                "Your parry window is increased by 0.2 seconds",
                "Your parry window is increased by 0.3 seconds",
              ],
              dependsOn: [],
              position: { x: 0, y: 0 },
            },
            {
              id: "vampiricRiposte",
              name: "Vampiric Riposte",
              ranks: [
                "Parrying increases Lifesteal by 10% for the next attack",
                "Parrying increases Lifesteal by 20% for the next attack",
                "Parrying increases Lifesteal by 30% for the next attack",
              ],
              dependsOn: ["parryKing"],
              position: { x: 0, y: 0 },
            },
            {
              id: "deflectingParry",
              name: "Deflecting Parry",
              ranks: ["You can Parry projectiles to deflect them"],
              dependsOn: ["parryKing"],
              position: { x: 0, y: 0 },
            },
            {
              id: "drainingRiposte",
              name: "Draining Riposte",
              ranks: [
                "Parrying drains 20% more Stamina from enemies",
                "Parrying drains 40% more Stamina from enemies",
                "Parrying drains 60% more Stamina from enemies",
              ],
              dependsOn: ["parryKing"],
              position: { x: 0, y: 0 },
            },
            {
              id: "deadlyRiposte",
              name: "Deadly Riposte",
              ranks: [
                "Parrying increases Critical Chance by 20% for the next attack",
              ],
              dependsOn: ["drainingRiposte"],
              position: { x: 0, y: 0 },
            },
            {
              id: "stunningReflexes",
              name: "Stunning Reflexes",
              ranks: [
                "When you Parry, you have 3% chance to Stun an enemy",
                "When you Parry, you have 6% chance to Stun an enemy",
                "When you Parry, you have 9% chance to Stun an enemy",
              ],
              dependsOn: ["drainingRiposte"],
              position: { x: 0, y: 0 },
            },
          ],
        },
        {
          id: "attackSpeed",
          name: "Attack Speed",
          skills: [
            {
              id: "quickenedStrikes",
              name: "Quickened Strikes",
              ranks: [
                "Increase attack speed by 2%",
                "Increase attack speed by 4%",
                "Increase attack speed by 6%",
                "Increase attack speed by 8%",
              ],
              dependsOn: [],
              position: { x: 0, y: 0 },
            },
            {
              id: "toolsOfTheTrade",
              name: "Tools of the Trade",
              ranks: ["Reduce the time it takes to change weapons by 50%"],
              dependsOn: ["quickenedStrikes"],
              position: { x: 0, y: 0 },
            },
            {
              id: "onslaught",
              name: "Onslaught",
              ranks: [
                "Increases Attack Speed for each Consecutive hit by 1%, up to 5%",
                "Increases Attack Speed for each Consecutive hit by 2%, up to 10%",
              ],
              dependsOn: ["quickenedStrikes"],
              position: { x: 0, y: 0 },
            },
            {
              id: "ferocity",
              name: "Ferocity",
              ranks: [
                "Increases Attack Speed by 10% for 5s after killing an enemy",
                "Increases Attack Speed by 15% for 5s after killing an enemy",
                "Increases Attack Speed by 20% for 5s after killing an enemy",
              ],
              dependsOn: ["quickenedStrikes"],
              position: { x: 0, y: 0 },
            },
          ],
        },
        {
          id: "movement",
          name: "Movement",
          skills: [
            {
              id: "agility",
              name: "Agility",
              ranks: [
                "Dash costs 20% less stamina",
                "Dash costs 40% less stamina",
                "Dash costs 60% less stamina",
              ],
              dependsOn: [],
              position: { x: 0, y: 0 },
            },
            {
              id: "athleticBuild",
              name: "Athletic Build",
              ranks: ["Add 1 more long dash"],
              dependsOn: ["agility"],
              position: { x: 0, y: 0 },
            },
            {
              id: "fastReflexes",
              name: "Fast Reflexes",
              ranks: [
                "Dashes regenerate 20% faster",
                "Dashes regenerate 30% faster",
              ],
              dependsOn: ["athleticBuild"],
              position: { x: 0, y: 0 },
            },
            {
              id: "termporalSlip",
              name: "Termporal Slip",
              ranks: ["Sliding slows down time for 2s"],
              dependsOn: ["fastReflexes"],
              position: { x: 0, y: 0 },
            },
          ],
        },
        {
          id: "bows",
          name: "Bows",
          skills: [
            {
              id: "strongArmOfTheBowmaster",
              name: "Strong Arm of the Bowmaster",
              ranks: [
                "The stamina cost of holding a drawn bow is reduced by 50%",
                "The stamina cost of holding a drawn bow is reduced by 90%",
              ],
              dependsOn: [],
              position: { x: 0, y: 0 },
            },
            {
              id: "properDrawTechnique",
              name: "Proper Draw Technique",
              ranks: ["Drawing a bow costs 25% less stamina"],
              dependsOn: ["strongArmOfTheBowmaster"],
              position: { x: 0, y: 0 },
            },
            {
              id: "luckyShot",
              name: "Lucky Shot",
              ranks: [
                "Critical Hits with arrows have a 25% chance to refund 1 arrow",
                "Critical Hits with arrows have a 50% chance to refund 1 arrow",
                "Critical Hits with arrows have a 75% chance to refund 1 arrow",
              ],
              dependsOn: ["properDrawTechnique"],
              position: { x: 0, y: 0 },
            },
            {
              id: "eagleEye",
              name: "Eagle Eye",
              ranks: ["Significantly increased zoom while using bows"],
              dependsOn: ["properDrawTechnique"],
              position: { x: 0, y: 0 },
            },
            {
              id: "unnaturalFocus",
              name: "Unnatural Focus",
              ranks: [
                "Zooming while an arrow is drawn slows down time, but drains 20% of Stamina per second",
                "Zooming while an arrow is drawn slows down time, but drains 15% of Stamina per second",
                "Zooming while an arrow is drawn slows down time, but drains 10% of Stamina per second",
              ],
              dependsOn: ["eagleEye"],
              position: { x: 0, y: 0 },
            },
            {
              id: "deadlyAim",
              name: "Deadly Aim",
              ranks: [
                "Deal 50% extra damage when hitting enemy Weakspots",
                "Deal 85% extra damage when hitting enemy Weakspots",
              ],
              dependsOn: ["strongArmOfTheBowmaster"],
              position: { x: 0, y: 0 },
            },
            {
              id: "piercingVolley",
              name: "Piercing Volley",
              ranks: ["Arrows and throwables pierce through 1 enemy"],
              dependsOn: ["deadlyAim"],
              position: { x: 0, y: 0 },
            },
            {
              id: "impalingShot",
              name: "Impaling Shot",
              ranks: ["Shooting an enemy below 35% Max Health applies Bleed"],
              dependsOn: ["piercingVolley"],
              position: { x: 0, y: 0 },
            },
            {
              id: "cheatersTrickshot",
              name: "Cheater's Trickshot",
              ranks: [
                "You have a 5% chance to get a Weakspot Damage bonus, even when the arrow does not hit the target's Weakspot",
              ],
              dependsOn: ["deadlyAim"],
              position: { x: 0, y: 0 },
            },
            {
              id: "aimForTheEyes",
              name: "Aim for the Eyes",
              ranks: [
                "Shooting a Weakspot has a 10% chance to Blind the target for 10s",
              ],
              dependsOn: ["cheatersTrickshot"],
              position: { x: 0, y: 0 },
            },
            {
              id: "unendingVolley",
              name: "Unending Volley",
              ranks: ["Shooting a Weakspot regenerates 10 Stamina"],
              dependsOn: ["cheatersTrickshot"],
              position: { x: 0, y: 0 },
            },
            {
              id: "marksman",
              name: "Marksman",
              ranks: [
                "The farther you are from the enemy, the more damage you inflict, up to 50%",
                "The farther you are from the enemy, the more damage you inflict, up to 80%",
                "The farther you are from the enemy, the more damage you inflict, up to 100%",
              ],
              dependsOn: [],
              position: { x: 0, y: 0 },
            },
            {
              id: "rackThemUp",
              name: "Rack Them Up",
              ranks: [
                "On kill, increase Bow Draw Speed by 20% for the next arrow",
                "On kill, increase Bow Draw Speed by 40% for the next arrow",
                "On kill, increase Bow Draw Speed by 60% for the next arrow",
              ],
              dependsOn: ["marksman"],
              position: { x: 0, y: 0 },
            },
            {
              id: "strongBack",
              name: "Strong Back",
              ranks: [
                "Increase the speed of drawing a bow by 10%",
                "Increase the speed of drawing a bow by 15%",
                "Increase the speed of drawing a bow by 20%",
              ],
              dependsOn: ["marksman"],
              position: { x: 0, y: 0 },
            },
            {
              id: "powerfulDraw",
              name: "Powerful Draw",
              ranks: [
                "Fully drawn arrows have a 10% chance to Stun an enemy",
                "Fully drawn arrows have a 20% chance to Stun an enemy",
              ],
              dependsOn: ["strongBack"],
              position: { x: 0, y: 0 },
            },
          ],
        },
      ],
    },
    {
      id: "spirituality",
      name: "Spirituality",
      skillTrees: [],
    },
    {
      id: "perception",
      name: "Perception",
      skillTrees: [],
    },
    {
      id: "practicality",
      name: "Practicality",
      skillTrees: [],
    },
  ],

  getSection(id) {
    return this.sections.find((section) => section.id === id);
  },

  getSkillTree(id) {
    for (const skillTree of this.allSkillTrees()) {
      if (skillTree.id === id) {
        return skillTree;
      }
    }
  },

  getSkill(id) {
    for (const skill of this.allSkills()) {
      if (skill.id === id) {
        return skill;
      }
    }
  },

  *allSkillTrees() {
    for (const section of this.sections) {
      for (const skillTree of section.skillTrees) {
        yield skillTree;
      }
    }
  },

  *allSkills() {
    for (const skillTree of this.allSkillTrees()) {
      for (const skill of skillTree.skills) {
        yield skill;
      }
    }
  },
};
