import data from './data';
import { renderSkillTreeSvg } from './renderer';

export default () => ({
  data,
  activeSection: data.sections[0],
  selectedSkillTree: data.sections[0].skillTrees[0],
  selectedSkill: null,
  learnedSkills: [],

  init() {
    // TODO: from url etc etc.
  },

  setActiveSection(sectionId) {
    this.activeSection = data.getSection(sectionId);
  },

  renderSkillTreeToHtml(skillTree, interactive) {
    return renderSkillTreeSvg(skillTree, interactive).outerHTML;
  },

  selectSkillTree(skillTree) {
    this.selectedSkillTree = skillTree;
  },

  selectSkill(skillId) {
    this.selectedSkill = data.getSkill(skillId);
  },

  learnSkill(skillId) {

  }
});
