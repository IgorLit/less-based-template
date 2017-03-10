export  class User {
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get avatarUrl(): string {
        return this._avatarUrl;
    }

    set avatarUrl(value: string) {
        this._avatarUrl = value;
    }
    private _name:string;
    private _avatarUrl:string;
    constructor() {
    }
}