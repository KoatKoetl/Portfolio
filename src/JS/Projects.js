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
      `../assets/website-image__clothes-store.avif`,
      `TheOdinProject---Admin_Dashboard-exercise`,
      `This project is free figma layout that I found on Figma website. <br>
        That project was built to test how good my skills are and how I will use all the skills I have learned.<br>
        If you want to see the website you can use the link 'Live Preview'. <br>
        Repository can be accessed using - 'Github link'`,
      `HTML5(BEM method), CSS3, JavaScript, Webpack5.`,
      `https://koatkoetl.github.io/Landing_Website-template--ClothesStore/`,
      `https://github.com/KoatKoetl/Landing_Website-template--ClothesStore`
    );
    this.create_NewProject(
      `../assets/website-image__education.avif`,
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
    // this.create_NewProject('name2', 'home2', 'data2');
  }

  check_ProjectDataIntegrity() {
    projects.forEach((project) => {
      Object.keys(project).forEach((key) => {
        if (key === 'imageURL' && !project['imageURL']) {
          project['imageURL'] = '../assets/missing-flag-image.png';
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
                <a href = '${project.websiteURL}' class = 'projects__nav-link section__text' target='_blank'>Live Preview <img src='../assets/website-svgrepo-com.svg' class='projects__link-icon projects__link-icon--webpage' alt='Webpage dark icon'></a>
                <a href = '${project.GitHubURL}' class = 'projects__nav-link section__text' target='_blank'>GitHub <img src='../assets/github-svgrepo-com--project-link-icon.svg' class='projects__link-icon projects__link-icon--github' alt='GitHub dark icon'></a>
            </div>
        </div> 
    </div>`;
    });
  }
}

const newProject = new Projects();

export default function render_ProjectsSection() {
  newProject.render_Projects();
}
