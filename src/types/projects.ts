export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}
