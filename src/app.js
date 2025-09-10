import data from './data';

export default () => ({
  data,
  activeSection: data.sections[0],

  setActiveSection(sectionId) {
    this.activeSection = data.getSection(sectionId);
  }
});
