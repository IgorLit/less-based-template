import {Component, OnInit, Input} from "@angular/core";

import {PostModel} from "./app.post.model";
import {PostService} from "./app.post.service";

@Component({
    selector: "post-controls",
    templateUrl: "./app/post/app.post.controls.component.html",
    styleUrls: ["./app/post/app.post.controls.component.css"]
})
export class PostControls implements OnInit {
    @Input() private post: PostModel;
    private showDialog: boolean;

    constructor(private postService: PostService) {
    }

    ngOnInit(): void {
        this.showDialog = false;
    }

    public remove() {
        this.showDialog = true;
    }

    public yes() {
        this.postService.remove(this.post.id).then(() => {
            this.showDialog = false;
        });
    }

    public no() {
        this.showDialog = false;
    }

}
