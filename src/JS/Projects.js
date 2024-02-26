import ScrollReveal from 'scrollreveal';
import projects from './Data/Projects_Data';
const projects_content = document.querySelector('.projects__content');

class Projects {
  constructor() {}

  create_NewProject(imageURL, projectTitle, description, technologies, websiteURL, GitHubURL) {
    const projectData = {
      imageURL: imageURL,
      projectTitle: projectTitle,
      description: description,
      technologies: technologies,
      websiteURL: websiteURL,
      GitHubURL: GitHubURL,
    };
    projects.push(projectData);
  }

  store_Projects() {
    this.create_NewProject(
      `assets/website-image__clothes-store.webp`,
      `Landing_Website-template--ClothesStore`,
      `This project is free figma layout that I found on Figma website. <br>
      The project itself is a sort of clothes store. <br>
      I used all my FrontEnd skills and build a responsive layout, that matches the figma design <br>
      Also because it is not a customer job task I choose to add animation some of the buttons on page.
       `,
      `HTML5(BEM method), CSS3, JavaScript, Webpack5.`,
      `https://koatkoetl.github.io/Landing_Website-template--ClothesStore/`,
      `https://github.com/KoatKoetl/Landing_Website-template--ClothesStore`
    );
    this.create_NewProject(
      `assets/website-image__education.webp`,
      `Simple-website-template__Sort-of-Education-website`,
      `This project is free figma layout that I found on Figma website. <br>
      It is a sort of course website where is a lot of different sections about the prices, course links, packages and reviews. <br>
      I build the website trying to stick to the figma design. <br>
      Also I choose to add to some elements animations because it is a personal project. Otherwise, I would follow the clients' requirements.
      `,
      `HTML5(BEM method), CSS3, JavaScript, Webpack5.`,
      `https://koatkoetl.github.io/Simple-website-template__Sort-of-Education-website/`,
      `https://github.com/KoatKoetl/Simple-website-template__Sort-of-Education-website`
    );
    this.create_NewProject(
      `assets/website-image__my-favorite-music.webp`,
      `My Favorite Music`,
      `This is my personal project created using React and Tailwind for the first time. <br />
      The design was created during the process of creating the page, and I managed to make it exactly as I imagined it.  <br />
      The website itself contains sections of my favorite bands <br />
      These are only two sections because they are all look the same, and two is enough to show all the functions and style design differences in them.
      `,
      `HTML5, CSS3, JS, React, TailwindCSS, Vite.`,
      `https://koatkoetl.github.io/Music-Website/`,
      `https://github.com/KoatKoetl/Music-Website`
    );
  }

  check_ProjectDataIntegrity() {
    projects.forEach((project) => {
      Object.keys(project).forEach((key) => {
        if (key === 'imageURL' && !project['imageURL']) {
          project['imageURL'] = 'assets/missing-flag-image.webp';
        }
        if (!project[key]) {
          project[key] = 'No available information';
        }
      });
    });
  }

  render_Projects() {
    this.store_Projects();
    this.check_ProjectDataIntegrity();

    projects.forEach((project) => {
      projects_content.innerHTML += `
    <div class = 'projects__project-block'>
        <div class = 'projects__image-block'>
            <img src = '${project.imageURL}' class = 'projects__image' alt='Project: ${project.projectTitle} main page image'>
        </div>
        <div class='projects__info-block'>
            <h3 class = 'projects__item-title section__title--h3'>${project.projectTitle}</h3>
            <div class='projects__desctiption-block'>
            <h4 class='projects__description-title section__title--h4'>About this project</h4>
            <p class = 'projects__content-description section__text'>${project.description}</p>
            </div>
            <p class = 'projects__technologies section__text'><b>Technologies: <br></b> ${project.technologies}</p>
            <div class = 'projects__nav'>
                <a href = '${project.websiteURL}' class = 'projects__nav-link section__text' target='_blank'>Live Preview <img src='assets/website-svgrepo-com.svg' class='projects__link-icon projects__link-icon--webpage' alt='Webpage dark icon'></a>
                <a href = '${project.GitHubURL}' class = 'projects__nav-link section__text' target='_blank'>GitHub <img src='assets/github-svgrepo-com--project-link-icon.svg' class='projects__link-icon projects__link-icon--github' alt='GitHub dark icon'></a>
            </div>
        </div> 
    </div>`;
    });

    const allProjects = document.querySelectorAll('.projects__project-block');
    allProjects.forEach((project) => ScrollReveal().reveal(project, { distance: '200px', reset: true, origin: 'left' }));
  }
}

const newProject = new Projects();

export default function render_ProjectsSection() {
  newProject.render_Projects();
}
