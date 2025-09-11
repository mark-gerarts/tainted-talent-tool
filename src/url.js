import data from "./data";

const encodeState = (learnedSkills) => {
  let output = "1!"; // Version

  for (const skillTree of data.allSkillTrees()) {
    for (const skill of skillTree.skills) {
      output += learnedSkills[skill.id] || 0;
    }
    output = output.replace(/0+$/, "");
    output += ",";
  }

  output = output.replace(/,+$/, "");

  return output;
};

export const fetchStateFromUrl = () => {
  const hash = window.location.hash;
  if (!hash) {
    return;
  }

  const [version, rest] = hash.split("!");
  if (version === "#1") {
    const skillTreeEncodings = rest.split(",");
    const skillTrees = [...data.allSkillTrees()];
    const state = { learnedSkills: {} };

    for (let i = 0; i < skillTrees.length; i++) {
      if (!skillTreeEncodings[i]) {
        continue;
      }

      for (let j = 0; j < skillTrees[i].skills.length; j++) {
        const rank = skillTreeEncodings[i][j];

        if (rank) {
          const skill = skillTrees[i].skills[j];
          state.learnedSkills[skill.id] = Math.min(rank, skill.ranks.length);
        }
      }
    }

    return state;
  }
};

export const saveStateToUrl = (learnedSkills) => {
  history.replaceState(undefined, undefined, "#" + encodeState(learnedSkills));
};
