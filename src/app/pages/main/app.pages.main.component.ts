import {Component, OnInit} from '@angular/core';

import {PostService} from "../../post/app.post.service";
import {PostModel} from "../../post/app.post.model";

@Component({
    selector: "main-page",
    templateUrl: "./app/pages/main/app.pages.main.component.html"
})
export class MainPage implements OnInit {
    private posts: PostModel[];

    constructor(public  posetService: PostService) {
    }

    ngOnInit(): void {
        this.posetService.readAll().then(data => {
            this.posts = data;
        });
    }

    public removeYes(post: any) {
        this.posetService.remove(post.id).then((posts) => {
            this.posts = posts;
        });
    }
}