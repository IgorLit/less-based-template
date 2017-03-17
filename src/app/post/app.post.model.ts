export class PostModel {
    id: Number;
    imageUrl: string;
    title: string;
    date: string;
    subtitle: string;
    text: string;
    creator: any;
    comments: any[];
    tags: string[];

    constructor() {
    }
}