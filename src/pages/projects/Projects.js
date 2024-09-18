import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { Fade } from 'react-awesome-reveal';
import { projectsHeader, projects } from '../../portfolio.js';
import './Projects.css';
import ProjectsImg from './ProjectsImg';
import { style } from 'glamor';
import PropTypes from 'prop-types';

function Projects(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentColor[1]}`,
    ':hover': {
      boxShadow: `0 5px 15px ${theme.accentColor[1]}`
    }
  });

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1 className="projects-heading-text" style={{ color: theme.text }}>
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}>
                {projectsHeader['description']}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {projects.data.map((repo, ind) => {
          return <ProjectCard key={ind} repo={repo} theme={theme} />;
        })}
      </div>
      <br />
      <br />
      <br />
      <a
        {...styles}
        className="general-btn"
        href="https://github.com/RishabhhG"
        target="_blank"
        rel="noopener noreferrer">
        More Projects (Github)
      </a>
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

Projects.propTypes = {
  theme: PropTypes.object,
  setTheme: PropTypes.func,
  onToggle: PropTypes.func
};
export default Projects;
