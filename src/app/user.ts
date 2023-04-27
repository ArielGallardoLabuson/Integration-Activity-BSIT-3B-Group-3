export class user{

    public id : number;
    public fullname : string;
    public email : string;
    public password : string;
    constructor( id : number, fullname : string, email : string, password : string){
        this.id = id;
        this.fullname = fullname;
        this.email = email;
        this.password = password;

    }

}