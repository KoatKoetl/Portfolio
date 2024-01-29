import ScrollReveal from 'scrollreveal';
import data_AllSkills from './Data/Skills_Data';

class SkillSets {
  constructor(data_Skills) {
    this.allSkills = data_Skills;
  }

  // Check if data_AllSkills missing at all, and change name and imageURL to default values
  check_dataIntegrity() {
    const dataLength = this.allSkills.length;

    if (dataLength !== 0) {
      return this.allSkills.map((skill) => {
        if (!skill.name) {
          skill.name = 'No info';
        }
        if (!skill.imageURL) {
          skill.imageURL = 'assets/missing-skill-image.svg';
        }
        return { name: skill.name, imageURL: skill.imageURL };
      });
    } else {
      return [];
    }
  }

  // Render the skillSet on page
  render_skills() {
    const verified_SkillsData = this.check_dataIntegrity();
    const skills_section = document.querySelector('.skills__content-cards');

    verified_SkillsData.forEach((skill) => {
      skills_section.innerHTML += `<div class = 'skills__card'>
        <img src = '${skill.imageURL}' alt = '${skill.name} icon' class = 'skills__card-icon'>
        <h4 class = 'skills__card-title section__title--h4'>${skill.name}</h4>
      </div>`;
    });

    // Animate skill__card to appear one after another
    const allSkillCards = document.querySelectorAll('.skills__card');
    allSkillCards.forEach((card, index) => ScrollReveal().reveal(card, { distance: '50px', origin: 'top', delay: index * 300 }));
  }
}

const skillSet = new SkillSets(data_AllSkills);

function enable_SkillSection() {
  skillSet.render_skills();
}

export { SkillSets, enable_SkillSection };
