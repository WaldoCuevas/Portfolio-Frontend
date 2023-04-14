import { Technologys } from '../Data/technologys';
import { Educations } from '../Data/educations';
import { ExpWork } from '../Data/exp-work';
import { Skills } from '../Data/skills';
import { Projects } from '../Data/projects';

export class Persona {

  user_id: number;
  name: string;
  last_name: string;
  email: string;

  //login data
  user_name: string;
  user_password: string;

  about_me_r1: string;
  about_me_r2: string;

  // Object
  technologys: Technologys;
  educations: Educations;
  expWork: ExpWork;
  skills: Skills;
  projects: Projects;
  
}
