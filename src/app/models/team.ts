export class Team {
    name: string;
    logo: string;

    constructor(obj: any) {
        Object.assign(this, obj);
    }
}

