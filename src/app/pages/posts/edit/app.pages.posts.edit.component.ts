import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {Params, ActivatedRoute} from "@angular/router";
import {PostService} from "../../../post/app.post.service";
import {Post} from "../../../post/app.post.interface";

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

    constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = params['id'];
            this.post = postService.readById(this.id).then(data => this.post = data);
        });
    }

    public edit() {
        this.postService.update(this.id, this.post).then(data => this.post = data);
    }

}