import { Technologys } from '../Data/technologys';
import { Educations } from '../Data/educations';
import { ExpWork } from '../Data/exp-work';
import { Skills } from '../Data/skills';
import { Projects } from '../Data/projects';
import { last } from 'rxjs';

export class Persona {
  user_id: number;
  name: string;
  last_name: string;
  user_image:string;
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

  Persona(name: string, last_name: string, email: string, user_name: string, user_password: string, about_me_r1: string,about_me_r2: string,technologys: Technologys,educations: Educations,expWork: ExpWork,skills: Skills,projects: Projects) {
    this.name = name;
    this.last_name = last_name;
    this.email = email;
    this.about_me_r1 = about_me_r1;
    this.about_me_r2 = about_me_r2;
    this.user_name = user_name;
    this.user_password = user_password;
    this.technologys = technologys;
    this.educations = educations;
    this.expWork = expWork;
    this.skills = skills;
    this.projects = projects;
  }
}
