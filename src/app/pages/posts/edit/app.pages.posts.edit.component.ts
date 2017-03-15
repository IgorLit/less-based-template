import {Component, OnInit} from "@angular/core";
import {Params, ActivatedRoute, Router} from "@angular/router";

import {PostService} from "../../../post/app.post.service";
import {PostModel} from "../../../post/app.post.model";

@Component({
    selector: "edit-post",
    templateUrl: "./app/pages/posts/edit/app.pages.posts.edit.component.html"
})
export class EditPost implements OnInit {
    private post;
    private id;
    private tags;
    public postExist: boolean = false;

    constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = params['id'];
            if (this.id) {
                this.post = this.postService.readById(this.id).then(data => {
                    this.postExist = true;
                    this.post = data;
                    this.tags = data.tags.toString();
                });
            } else {
                this.post = new PostModel();
            }

        });
    }

    public edit() {
        this.post.tags = this.tags.split(',');
        this.postService.update(this.post.id, this.post).then(data => this.post = data);
        this.router.navigate([""]);
    }

    public create() {
        this.post.tags = this.tags.split(",");
        this.postService.create(this.post);
        this.router.navigate([""]);
    }

}