import {Component} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {PostService} from "../../post/app.post.service";
@Component({
    selector: "blog",
    templateUrl: "./app/pages/blog/app.pages.blog.component.html"
})
export class BlogComponent {
    private _post;
    get post() {
        return this._post;
    }

    set post(value) {
        this._post = value;
    }

    constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params: Params) => {
          this.post =  postService.readById(params['id']).then(data => this.post = data);
        });
    }
}