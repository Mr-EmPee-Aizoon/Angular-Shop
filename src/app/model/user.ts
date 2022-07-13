import { Role } from "./role";

export class User {

    public static fromJson(json:any) {
        return new User(json.id, json.username, json.roles)
    }

    constructor(
        public id:number,
        public username:string,
        public roles:Role[],
    ) {
        
    }

    isAdmin() {
        return this.roles.find(
            role => role.name == "ADMIN"
        )
    }

}