import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";

import {PostService} from "../../../post/app.post.service";
import {PostModel} from "../../../post/app.post.model";

@Component({
    selector: "filter-post",
    templateUrl: "./app/pages/posts/filter/app.pages.posts.filter.component.html"
})
export class FilterPost implements OnInit {
    private posts: PostModel[];
    private bigPosts: Number;

    constructor(private postService: PostService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.postService.readByTag(params['tag']).then(data => {
                this.posts = data;
            });
        });
        this.bigPosts = 5;
    }
}