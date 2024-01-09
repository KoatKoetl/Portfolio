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
      `assets/website-image__clothes-store.avif`,
      `Landing_Website-template--ClothesStore`,
      `This project is free figma layout that I found on Figma website. <br>
        That project was built to test how good my skills are and how I will use all the skills I have learned.<br>
        If you want to see the website you can use the link 'Live Preview'. <br>
        Repository can be accessed using - 'Github link'`,
      `HTML5(BEM method), CSS3, JavaScript, Webpack5.`,
      `https://koatkoetl.github.io/Landing_Website-template--ClothesStore/`,
      `https://github.com/KoatKoetl/Landing_Website-template--ClothesStore`
    );
    this.create_NewProject(
      `assets/website-image__education.avif`,
      `Simple-website-template__Sort-of-Education-website`,
      `This project is free figma layout that I found on Figma website. <br>
      That is first project after I finished with The Odin Project HTML, CSS and JS lessons. It's first full project where I tried to use correct BEM structure, semantic tags, Webpack5 bundler...<br>
      I think the code will be not as good as it could be. But I tried to do my best in that project.<br>
      If you want to see the website you can use the link - 'Live Preview'<br>
      Repository can be accessed using - 'Github link'`,
      `HTML5(BEM method), CSS3, JavaScript, Webpack5.`,
      `https://koatkoetl.github.io/Simple-website-template__Sort-of-Education-website/`,
      `https://github.com/KoatKoetl/Simple-website-template__Sort-of-Education-website?tab=readme-ov-file`
    );
    this.create_NewProject(
      `assets/weather-app.avif`,
      `TheOdinProject---Weather-App`,
      `This is small task from The Odin project course. <br>
      It is a project that checks how I understand the basics how API works. <br>
      Basically it's a small weather app that shows forecast with 7 hours shift.<br>
      If you want to see the work you can use the link - 'Live Preview' <br>
      Repository can be accessed using - 'Github link'`,
      `HTML5, CSS3, JavaScript`,
      `https://koatkoetl.github.io/TheOdinProject---Weather-App/`,
      `https://github.com/KoatKoetl/TheOdinProject---Weather-App`
    );
    this.create_NewProject(
      `assets/etch-a-sketch.avif`,
      `TheOdinProject---Etch-A-Sketch-exercise`,
      `This is an exercise from The Odin Project course. <br>
      It's aimed to improve JS skills mostly DOM manipulation skills. <br>
      The game itself is based on real mechanical drawing toy invented by André Cassagnes. <br>
      If you want to see the work you can use the link - 'Live Preview' <br>
      Repository can be accessed using - 'Github link'`,
      'HTML, CSS, JS',
      `https://koatkoetl.github.io/TheOdinProject---Etch-A-Sketch-exercise/`,
      `https://github.com/KoatKoetl/TheOdinProject---Etch-A-Sketch-exercise`
    );
    this.create_NewProject(
      `assets/library.avif`,
      `TheOdinProject---Library-exercise`,
      `This is an exercise from The Odin Project course. <br>
      This exercise is focused on building a small library app. <br>
      Exercising with the library should improve your skills in using JavaScript functions and working with DOM elements. <br>
      If you want to see the work you can use the link - 'Live Preview' <br>
      Repository can be accessed using - 'Github link'`,
      'HTML, CSS, JS',
      `https://koatkoetl.github.io/TheOdinProject---Library-exercise`,
      `https://github.com/KoatKoetl/TheOdinProject---Library-exercise`
    );
  }

  check_ProjectDataIntegrity() {
    projects.forEach((project) => {
      Object.keys(project).forEach((key) => {
        if (key === 'imageURL' && !project['imageURL']) {
          project['imageURL'] = 'assets/missing-flag-image.avif';
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
