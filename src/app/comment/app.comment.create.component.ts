import {Component, Input} from "@angular/core";

import {PostService} from "../post/app.post.service";
import {AccountService} from "../account/app.account.service";
import {User} from "../account/app.account.user";
import {PostModel} from "../post/app.post.model";

@Component({
    selector: "comment-create",
    templateUrl: "./app/comment/app.comment.create.component.html",
    styleUrls: ["./app/comment/app.comment.component.css"]
})
export class CommentCreate {
    @Input() private post: PostModel;

    constructor(private postService: PostService, private accountService: AccountService) {
    }

    public publishComment(input: HTMLInputElement) {
        this.postService.addComment(this.post.id, input.value);
    }

    public getUser(): User {
        return this.accountService.getUser();
    }

    public getUserName(): string {
        return this.accountService.getUser().name;
    }
}
