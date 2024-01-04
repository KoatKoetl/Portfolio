import enable_HeaderBurgerMenu from './Burger-menu.js';
import render_CountrySectionData from './Country-section.js';
import enable_InfoButton from './Button.js';
import { enable_SkillSection } from './Skills.js';
import render_ProjectsSection from './Projects.js';

export default function enableApp() {
  enable_HeaderBurgerMenu();
  render_CountrySectionData();
  enable_InfoButton();
  enable_SkillSection();
  render_ProjectsSection();
}
