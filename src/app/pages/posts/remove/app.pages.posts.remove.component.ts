import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {PostService} from "../../../post/app.post.service";
@Component({
    selector: "remove-post",
    templateUrl: "./app/pages/posts/remove/app.pages.posts.remove.component.html",
    styleUrls: ["./app/pages/posts/remove/app.pages.posts.remove.component.css"]
})
export class RemovePost implements OnInit {
    public showDialog: boolean;

    constructor(private router: Router, private postService: PostService, private activatedRoute: ActivatedRoute) {
        this.showDialog = true;
    }

    private id: Number;

    public yes() {
        this.postService.remove(this.id as Number);
        this.router.navigate([""]);
    }

    public no() {
        this.router.navigate([""]);
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = params['id'];
        });
    }
}