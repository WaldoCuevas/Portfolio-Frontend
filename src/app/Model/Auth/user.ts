import { Technologys } from '../../Model/technologys';
import { Educations } from '../../Model/educations';
import { ExpWork } from '../../Model/exp-work';
import { Skills } from '../../Model/skills';
import { Projects } from '../../Model/projects';

export class User {
  
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
