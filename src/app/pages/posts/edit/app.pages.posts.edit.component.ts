import {Component} from "@angular/core";
import {Params, ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../../post/app.post.service";
import {PostModel} from "../../../post/app.post.model";

@Component({
    selector: "edit-post",
    templateUrl: "./app/pages/posts/edit/app.pages.posts.edit.component.html"
})
export class EditPost {
    private _post;
    get post() {
        return this._post;
    }

    set post(value) {
        this._post = value;
    }

    private _id;

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    private _tags;

    get tags() {
        return this._tags;
    }

    set tags(value) {
        this._tags = value;
    }

    public postExist: boolean = false;

    constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = params['id'];
            if (this.id) {
                this.post = postService.readById(this.id).then(data => {
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