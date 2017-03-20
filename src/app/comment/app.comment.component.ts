import {Component, Input} from "@angular/core";

import {CommentModel} from "./app.comment.model";
import {AccountService} from "../account/app.account.service";
import {User} from "../account/app.account.user";

@Component({
    selector: "comment",
    templateUrl: "./app/comment/app.comment.component.html",
    styleUrls: ["./app/comment/app.comment.component.css"]
})
export class Comment {
    @Input() private comment: CommentModel;

    constructor(private accountService: AccountService) {
    }

    public getUser(): User {
        return this.accountService.getUser();
    }
}
