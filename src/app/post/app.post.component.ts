import {Component} from "@angular/core";

@Component({
    selector: "posts",
    templateUrl: "./app/post/app.post.component.html"
})
export class Post {
    public arr:string[];
    constructor() {
        this.arr =  ["sas", "sas"];
    }
}