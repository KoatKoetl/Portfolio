import { enable_AllAnimations } from './Animations.js';
import enable_HeaderBurgerMenu from './Burger-menu.js';
import render_ProjectsSection from './Projects.js';
import { enable_SkillSection } from './Skills.js';

export default function enableApp() {
  enable_HeaderBurgerMenu();
  enable_SkillSection();
  render_ProjectsSection();
  enable_AllAnimations();
}
