import {Component, Input} from "@angular/core";

import {CommentModel} from "./app.comment.model";
import {PostService} from "../post/app.post.service";

@Component({
    selector: "controls",
    templateUrl: "./app/comment/app.comment.controls.component.html",
    styleUrls: ["./app/comment/app.comment.controls.component.css"]
})
export class Controls {
    @Input() private comment: CommentModel;

    constructor(private postService: PostService) {
    }

    public removeComment() {
        this.postService.removeComment(this.comment);
    }
}
