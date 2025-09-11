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

  incrementSkill(skillId) {
    const skill = data.getSkill(skillId);

    // Not learned at all.
    if (!this.learnedSkills[skillId]) {
      this.learnedSkills[skillId] = 1;

      for (const dependendeeId of skill.dependsOn) {
        this.incrementSkill(dependendeeId);
      }
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
});
