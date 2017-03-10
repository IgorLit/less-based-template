import {Component} from "@angular/core";
import  {PostService} from "../post/app.post.service";

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
            let size = 24 - 4 * i;
            this.popularTagsFontSize[i].val = size < 12 ? 12 : size;
        }
    }

    public recentPostsLimit: Number = 4;

    constructor(public postService: PostService) {
        postService.readAll().then(data => {
            this.posts = data;
        });
        this.getPopularTags();
    }
}