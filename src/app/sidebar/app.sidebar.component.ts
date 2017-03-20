import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import  {PostService} from "../post/app.post.service";
import {PostModel} from "../post/app.post.model";

@Component({
    selector: "sidebar",
    templateUrl: "./app/sidebar/app.sidebar.component.html"
})
export class Sidebar implements OnInit {
    private posts: PostModel[] = [];
    private popularTags: any[];
    private popularTagsFontSize: any[];
    private recentPostsLimit: Number = 4;

    constructor(private postService: PostService) {
    }

    ngOnInit(): void {
        this.postService.readAll().then(data => {
            this.posts = data;
        });
        this.getPopularTags();
    }

    public getPopularTags(): any {
        this.postService.popularTags().then((tags) => {
            this.popularTags = tags;
            this.calculateFontSize();
        });
    }

    private calculateFontSize(): void {
        this.popularTagsFontSize = this.popularTags;
        for (let i = 0; i < this.popularTagsFontSize.length; i++) {
            let size = 24 - 3 * i;
            this.popularTagsFontSize[i].val = size < 10 ? 10 : size;
        }
    }
}