import data from "./data";
import { renderSkillTreeSvg } from "./renderer";

export default () => ({
  data,
  selectedSection: data.sections[0],
  selectedSkillTree: data.sections[0].skillTrees[0],
  selectedSkill: null,
  learnedSkills: [],

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

  learnSkill(skillId) {
    if (this.learnedSkills.includes(skillId)) {
      return;
    }

    this.learnedSkills.push(skillId);
    data.getSkill(skillId).dependsOn.forEach((id) => this.learnSkill(id));
  },

  unlearnSkill(skillId) {
    this.learnedSkills = this.learnedSkills.filter((id) => id !== skillId);

    for (const skill of data.allSkills()) {
      if (skill.dependsOn.includes(skillId)) {
        this.unlearnSkill(skill.id);
      }
    }
  },

  toggleSkill(skillId) {
    if (this.learnedSkills.includes(skillId)) {
      this.unlearnSkill(skillId);
    } else {
      this.learnSkill(skillId);
    }
  },
});
