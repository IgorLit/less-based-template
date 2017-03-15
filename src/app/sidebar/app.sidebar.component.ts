import {Component, OnInit} from "@angular/core";

import  {PostService} from "../post/app.post.service";
import {Router} from "@angular/router";

@Component({
    selector: "sidebar",
    templateUrl: "./app/sidebar/app.sidebar.component.html"
})
export class Sidebar implements OnInit {

    private posts: any[];



    private popularTags: any[];

    public getPopularTags(): any {
        this.postService.popularTags().then((tags) => {
            this.popularTags = tags;
            this.calculateFontSize();
        });
    }

    private popularTagsFontSize: any[];

    private calculateFontSize(): void {
        this.popularTagsFontSize = this.popularTags;
        for (let i = 0; i < this.popularTagsFontSize.length; i++) {
            let size = 24 - 3 * i;
            this.popularTagsFontSize[i].val = size < 10 ? 10 : size;
        }
    }

    public filterByTag(tag: string) {
        this.router.navigate(["posts", tag, "filter"]);
    }

    public recentPostsLimit: Number = 4;

    constructor(public postService: PostService, private router: Router) {
    }

    ngOnInit(): void {
        this.postService.readAll().then(data => {
            this.posts = data;
        });
        this.getPopularTags();
    }
}