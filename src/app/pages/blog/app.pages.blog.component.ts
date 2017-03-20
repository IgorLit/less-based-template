import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";

import {PostService} from "../../post/app.post.service";
import {PostModel} from "../../post/app.post.model";

@Component({
    selector: "blog",
    templateUrl: "./app/pages/blog/app.pages.blog.component.html",
    styleUrls: ["./app/pages/blog/app.pages.blog.component.css"]
})
export class BlogComponent implements OnInit {
    private post: PostModel = new PostModel();
    private showControls = false;

    constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.postService.readById(params['id']).then(data => this.post = data);
        });
    }
}