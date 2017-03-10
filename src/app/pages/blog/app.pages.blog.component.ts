import {Component} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {PostService} from "../../post/app.post.service";
import {AccountService} from "../../account/app.account.service";
import {User} from "../../account/app.account.user";
@Component({
    selector: "blog",
    templateUrl: "./app/pages/blog/app.pages.blog.component.html",
    styleUrls: ["./app/pages/blog/app.pages.blog.component.css"]
})
export class BlogComponent {
    private _post;
    private _id;
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get post() {
        return this._post;
    }

    set post(value) {
        this._post = value;
    }

    private _comments;

    get comments() {
        return this._comments;
    }

    set comments(value) {
        this._comments = value;
    }

    public getUser(): User {
        return AccountService.user;
    }
    public getUserName(): string {
        return AccountService.user.name;
    }

    constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.post = postService.readById(params['id']).then(data => this.post = data);
            this.id = params['id'];
        });
    }

    public publishComment(input: HTMLInputElement) {
        this.postService.addComment(this.getUser(), this.id, input.value);
    }
}