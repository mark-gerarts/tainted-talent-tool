import data from "./data";
import { renderSkillTreeSvg } from "./renderer";

export default () => ({
  data,
  selectedSection: data.sections[0],
  selectedSkillTree: data.sections[0].skillTrees[0],
  selectedSkill: null,
  learnedSkills: {},

  init() {
    // TODO: from url etc etc.
  },

  selectSection(sectionId) {
    this.selectedSection = data.getSection(sectionId);
  },

  renderSkillTreeToHtml(skillTree, learnedSkills, interactive) {
    return renderSkillTreeSvg(skillTree, learnedSkills, interactive).outerHTML;
  },

  selectSkillTree(skillTree) {
    this.selectedSkillTree = skillTree;
  },

  selectSkill(skillId) {
    this.selectedSkill = data.getSkill(skillId);
  },

  unlearnSkill(skillId) {
    delete this.learnedSkills[skillId];

    for (const skill of data.allSkills()) {
      if (skill.dependsOn.includes(skillId)) {
        this.unlearnSkill(skill.id);
      }
    }
  },

  descendLearnSkill(skill) {
    for (const dependeeId of skill.dependsOn) {
      if (!this.learnedSkills[dependeeId]) {
        this.learnedSkills[dependeeId] = 1;
        this.descendLearnSkill(data.getSkill(dependeeId));
      }
    }
  },

  incrementSkill(skillId, descending = false) {
    const skill = data.getSkill(skillId);

    // Not learned at all.
    if (!this.learnedSkills[skillId]) {
      this.learnedSkills[skillId] = 1;
      this.descendLearnSkill(skill);
    }
    // Within rank bounds.
    else if (this.learnedSkills[skillId] < skill.ranks.length) {
      this.learnedSkills[skillId]++;
    }
    // At max; wrap around unlearn all.
    else {
      // Max skill -> unlearn all.
      this.unlearnSkill(skillId);
    }
  },

  decrementSkill(skillId) {
    if (!this.learnedSkills[skillId]) {
      return;
    }

    if (this.learnedSkills[skillId] === 1) {
      this.unlearnSkill(skillId);
      return;
    }

    this.learnedSkills[skillId]--;
  },

  learnedSkillCountForSkillTree(skillTree) {
    let count = 0;
    const skillIds = skillTree.skills.map((s) => s.id);

    for (const skillId of Object.keys(this.learnedSkills)) {
      if (skillIds.includes(skillId)) {
        count += this.learnedSkills[skillId];
      }
    }

    return count;
  },

  learnableSkillCountForSKillTree(skillTree) {
    let count = 0;

    for (const skill of skillTree.skills) {
      count += skill.ranks.length;
    }

    return count;
  },

  learnedSkillCountForSection(section) {
    let count = 0;

    for (const skillTree of section.skillTrees) {
      count += this.learnedSkillCountForSkillTree(skillTree);
    }

    return count;
  },

  learnableSkillCountForSection(section) {
    let count = 0;

    for (const skillTree of section.skillTrees) {
      count += this.learnableSkillCountForSKillTree(skillTree);
    }

    return count;
  },
});
