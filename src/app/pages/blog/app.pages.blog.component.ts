import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {PostService} from "../../post/app.post.service";
@Component({
    selector: "blog",
    templateUrl: "./app/pages/blog/app.pages.blog.component.html"
})
export class BlogComponent implements OnInit {
    private _post;

    get post() {
        return this._post;
    }

    set post(value) {
        this._post = value;
    }

    constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.postService.readById(params['id']).then((data) => {
                this.post = data;
                console.log(this.post.id);
            });
        });
    }
}