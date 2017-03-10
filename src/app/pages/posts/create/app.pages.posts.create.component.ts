import {Component} from "@angular/core";
import {PostModel} from "../../../post/app.post.model";
import {PostService} from "../../../post/app.post.service";
import {Router} from "@angular/router";

@Component({
    selector: "create-post",
    templateUrl: "./app/pages/posts/create/app.pages.posts.create.component.html",
    styleUrls: ["./app/pages/posts/create/app.pages.posts.create.component.css"]
})
export class CreatePost {
    private post: PostModel;

    constructor(private router: Router, private postService: PostService) {
        this.post = new PostModel();
    }
    private tags:string;

    public create() {
        this.post.tags = this.tags.split(",");
        this.postService.create(this.post);
        this.router.navigate([""]);
    }

    public fileEvent(fileInput: any) {
        let file = fileInput.target.files[0];
        let fileName = file.name;
        console.log(file);
    }
}