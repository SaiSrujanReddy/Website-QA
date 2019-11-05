export class User {
    Status: string;
    Message: string;
    Data: {
        Token: string;
        UserData: [ {Name: string, Mobile: string}]
    };
}
