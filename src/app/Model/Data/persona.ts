export class Persona {
  user_id: number;
  
  name: string;
  last_name: string;
  user_image:string;

  about_me_r1: string;
  about_me_r2: string;

  Persona(name: string, last_name: string, email: string, user_name: string, user_password: string, about_me_r1: string,about_me_r2: string) {
    this.name = name;
    this.last_name = last_name;
    this.about_me_r1 = about_me_r1;
    this.about_me_r2 = about_me_r2;
  }
}
