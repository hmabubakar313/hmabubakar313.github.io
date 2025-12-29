import { Box, Grid } from '@mui/material';
import Section from '../layout/Section';
import ProjectCard from '../ui/ProjectCard';
import { SITE } from '../../config/site';
import { useSectionInView } from '../../hooks/useSectionInView';

interface ProjectsProps {
  setActiveSection: (section: string) => void;
}

const Projects = ({ setActiveSection }: ProjectsProps) => {
  const { ref } = useSectionInView('projects', setActiveSection);

  return (
    <Box ref={ref}>
      <Section id="projects" title="Things I've Built">
        <Grid container spacing={3}>
          {SITE.projects.map((project, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={project.title}>
              <ProjectCard project={project} index={index} />
            </Grid>
          ))}
        </Grid>
      </Section>
    </Box>
  );
};

export default Projects;
