export class Member {
    username: string;
    time: number;
    picture: string;
    country_code: string;

    constructor(obj: any) {
        Object.assign(this, obj);
    }
}