import data from './data';
import { renderSkillTreeSvg } from './renderer';

export default () => ({
  data,
  activeSection: data.sections[0],
  selectedSkillTree: data.sections[0].skillTrees[0],
  selectedSkill: null,

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
    // Because the skills are rendered manually, we need to search manually as
    // well.
    for (const skillTree of this.activeSection.skillTrees) {
      for (const skill of skillTree.skills) {
        if (skill.id === skillId) {
          this.selectedSkill = skill;
        }
      }
    }
  }
});
