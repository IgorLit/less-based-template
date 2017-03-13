import {Component} from "@angular/core";
import  {PostService} from "../post/app.post.service";
import {Router} from "@angular/router";

@Component({
    selector: "sidebar",
    templateUrl: "./app/sidebar/app.sidebar.component.html"
})
export class Sidebar {

    private _posts: any[];

    public get posts() {
        return this._posts;
    }

    public set posts(value) {
        this._posts = value;
    }

    private popularTags: any[];

    public getPopularTags(): any {
        this.postService.popularTags().then((tags) => {
            this.popularTags = tags;
            this.calculateFontSize();
        });
    }

    private _popularTagsFontSize: any[];

    get popularTagsFontSize(): any[] {
        return this._popularTagsFontSize;
    }

    set popularTagsFontSize(value: any[]) {
        this._popularTagsFontSize = value;
    }

    private calculateFontSize(): void {
        this.popularTagsFontSize = this.popularTags;
        for (let i = 0; i < this.popularTagsFontSize.length; i++) {
            let size = 24 - 3 * i;
            this.popularTagsFontSize[i].val = size < 10 ? 10 : size;
        }
    }

    public filterByTag(tag:string) {
        this.router.navigate(["posts", tag, "filter"]);
    }

    public recentPostsLimit: Number = 4;

    constructor(public postService: PostService, private router: Router) {
        postService.readAll().then(data => {
            this.posts = data;
        });
        this.getPopularTags();
    }
}