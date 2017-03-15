import {Component} from '@angular/core';
import {PostService} from "../../post/app.post.service";
import {PostModel} from "../../post/app.post.model";
@Component({
    selector: "main-page",
    templateUrl: "./app/pages/main/app.pages.main.component.html"
})
export class MainPage {
    constructor(public  posetService: PostService) {
        posetService.readAll().then(data => {
            this.posts = data;
        });
    }

    private _posts: PostModel[];
    get posts(): PostModel[] {
        return this._posts;
    }

    set posts(value: PostModel[]) {
        this._posts = value;
    }

    public removeYes(post: any) {
        this.posetService.remove(post.id).then((posts) => {
            this.posts = posts;
        });
    }
}