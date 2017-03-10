import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "./app/app.component.html",
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    public createPost() {
        this.router.navigate(["posts", "create"]);
    }
    constructor(private router: Router) {
    }
}