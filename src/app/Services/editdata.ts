
export class Editdata{
  id:number;
  name:string;
  gender:string;
  email:string;
  phone:number;

  constructor(id:number,name:string,gender:string,email:string,phone:number) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.email = email;
    this.phone = phone
  }
}
