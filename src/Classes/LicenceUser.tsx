export class LicenceUser{
    constructor(public id: number, public userName: string, public password: string, public email: string , public isAdmin: boolean, public licenses : string[]) {}
}