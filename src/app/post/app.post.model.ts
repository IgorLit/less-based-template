import {Post} from "./app.post.interface";
export class PostModel implements Post {

    id: Number;
    imageUrl: string;
    title: string;
    date: string;
    subtitle: string;
    text: string;
    comments: any[];
    tags: string[];

    constructor() {
    }
}