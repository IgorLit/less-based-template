import {Component, OnInit, Input} from "@angular/core";
import {CommentModel} from "./app.comment.model";
import {PostService} from "../post/app.post.service";

@Component({
    selector: "controls",
    templateUrl: "./app/comment/app.comment.controls.component.html",
    styleUrls: ["./app/comment/app.comment.controls.component.css"]
})
export class Controls implements OnInit {
    @Input() private comment: CommentModel;

    constructor(private postService: PostService) {
    }

    ngOnInit(): void {
    }

    public removeComment() {
        this.postService.removeComment(this.comment);
    }
}
