import data from './data';
import { renderSkillTreeSvg } from './renderer';

export default () => ({
  data,
  activeSection: data.sections[0],
  selectedSkill: null,

  init() {
  },

  setActiveSection(sectionId) {
    this.activeSection = data.getSection(sectionId);
  },

  renderSkillTreeToHtml(skillTree) {
    return renderSkillTreeSvg(skillTree).outerHTML;
  },

  setSelectedSkill(skillId) {
    for (const skillTree of this.activeSection.skillTrees) {
      for (const skill of skillTree.skills) {
        if (skill.id === skillId) {
          console.log(skill);
          this.selectedSkill = skill;
        }
      }
    }
  }
});
