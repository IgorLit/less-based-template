import {User} from "../account/app.account.user";

export class CommentModel {
    public id: Number;
    public postId: Number;
    public commenter: User;
    public date: string;
    public text: string;
}