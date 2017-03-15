import {Component, Input, EventEmitter, Output} from "@angular/core";
import {Router} from "@angular/router";
import {AccountService} from "../account/app.account.service";
@Component({
    selector: "posts",
    templateUrl: "./app/post/app.post.component.html",
    styleUrls: ["./app/post/app.post.component.css"]
})
export class Post {

    public showDialog: boolean;

    get posts(): any[] {
        return this._posts;
    }

    @Input()
    set posts(value: any[]) {
        this._posts = value;
    }

    private _bigPosts: Number;
    @Input()
    get bigPosts(): Number {
        return this._bigPosts;
    }

    set bigPosts(value: Number) {
        this._bigPosts = value;
    }

    private _posts: any[];

    public isLogin() {
        return AccountService.isLogin;
    }

    public getUser() {
        return AccountService.user;
    }

    public avaliableEdit(creator: any): boolean {
        console.log("creator: " + creator.name + " user:" + this.getUser().name + " equal: " + (creator.name === this.getUser().name));
        return creator === this.getUser();
    }

    constructor(private router: Router) {
        this.showDialog = false;
        this.bigPosts = 2;
    }

    public edit(post: any) {
        this.router.navigate(["posts", post.id, "edit"]);
    }

    private post;

    public remove(post: any) {
        this.showDialog = true;
        this.post = post;
    }

    @Output() removeYes = new EventEmitter<void>();
    @Output() removeNo = new EventEmitter<void>();

    public yes() {
        this.removeYes.emit(this.post);
        this.showDialog = false;
    }

    public no() {
        this.removeNo.emit();
        this.showDialog = false;
    }

    public comments(post: any) {
        this.router.navigate(["posts", post.id]);
    }
}