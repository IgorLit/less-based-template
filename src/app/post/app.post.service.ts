import {Injectable} from '@angular/core';
import  {Post} from './app.post.interface';
import {User} from "../account/app.account.user";

@Injectable()
export class PostService {
    public readAll(): Promise<Post[]> {
        return Promise.resolve(this.items);
    }

    public readById(id: Number) {
        let result = this.items[this.getIndexById(id)];
        return Promise.resolve(result);
    }

    public create(data: Post) {
        data.imageUrl = "assets/img/new-head-img-1.jpg";
        data.comments = [];
        data.date = new Date().toISOString().slice(0, 10).replace("T", " ");
        data.id = this.items.length + 1;
        this.items.push(data);
        console.log(this.items);
    }

    public remove(id: any) {
        this.items.splice(this.getIndexById(id), 1);
        return Promise.resolve(this.items);
    }

    public update(id: any, data: Post): Promise<Post> {
        Object.assign(this.items[this.getIndexById(id)], data);
        return Promise.resolve(this.items[this.getIndexById(id)]);
    }

    public addComment(user: User, postId: any, commentText: any) {
        this.items[this.getIndexById(postId)].comments.push({
            commenter: user,
            date: new Date().toISOString().slice(0, 19).replace("T", " "),
            text: commentText
        });
        return this.items[this.getIndexById(postId)].comments;
    }

    private getIndexById(id: any) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === Number.parseInt(id)) {
                return i;
            }
        }
        return null;
    }


    public popularTags(): Promise<any[]> {
        let _tags: any = {};
        for (let i = 0; i < this.items.length; i++) {
            for (let tag of this.items[i].tags) {
                if (Number.isInteger(_tags[tag])) {
                    _tags[tag] += 1;
                } else {
                    _tags[tag] = 1;
                }
            }
        }
        let result = [];
        for (let item in _tags) {
            if (_tags) {
                result.push({key: item, val: _tags[item]});
            }
        }
        result.sort((a, b) => {
            return b.val - a.val;
        });
        return Promise.resolve(result);
    }

    constructor() {
        this.items = [{
            id: 1,
            imageUrl: "assets/img/new-head-img-1.jpg",
            title: "My Title-s",
            date: "2017-05-15",
            subtitle: "Subtitle",
            text: "If you read and listen to two articles every day, your reading and listening skills can improve fast.own language.",
            comments: [{
                commenter: {
                    name: "Igor",
                    avatarUrl: "assets/img/user.jpg"
                },
                date: "2017-05-15",
                text: "first comment ... "
            }],
            tags: ["Tag1", "Tag2", "Tag8", "Tag0"]
        }, {
            id: 6,
            imageUrl: "assets/img/new-head-img-1.jpg",
            title: "My Title 6",
            date: "2017-07-06",
            subtitle: "Subtitle 6",
            text: "ashdasoidhas hasdh dkjhas asash ahasdas 6",
            comments: [{
                commenter: {
                    name: "Igor",
                    avatarUrl: "assets/img/user.jpg"
                },
                date: "2017-05-15",
                text: "first comment ... "
            },
                {
                    commenter: {
                        name: "Igor",
                        avatarUrl: "assets/img/user.jpg"
                    },
                    date: "2017-05-16",
                    text: "second comment ... "
                }],
            tags: ["Tag1", "Tag4", "Tag8", "Tag0"]
        },
            {
                id: 2,
                imageUrl: "assets/img/new-head-img-1.jpg",
                title: "My Title 7",
                date: "2017-08-03",
                subtitle: "Subtitle 6",
                text: "ashdasoidhas hasdh dkjhas asash ahasdas 6",
                comments: [{
                    commenter: {
                        name: "Igor",
                        avatarUrl: "assets/img/user.jpg"
                    },
                    date: "2017-05-15",
                    text: "first comment ... "
                }],
                tags: ["Tag2", "Tag8", "Tag0"]
            }, {
                id: 3,
                imageUrl: "assets/img/new-head-img-1.jpg",
                title: "My Title 6",
                date: "2017-08-28",
                subtitle: "Subtitle 6",
                text: "ashdasoidhas hasdh dkjhas asash ahasdas 6",
                comments: [{
                    date: "2017-05-15",
                    text: "first comment ... "
                }],
                tags: ["Tag8"]
            },
            {
                id: 4,
                imageUrl: "assets/img/new-head-img-1.jpg",
                title: "My Title 6",
                date: "2017-09-19",
                subtitle: "Subtitle 6",
                text: "ashdasoidhas hasdh dkjhas asash ahasdas 6",
                comments: [{
                    commenter: {
                        name: "Igor",
                        avatarUrl: "assets/img/user.jpg"
                    },
                    date: "2017-05-15",
                    text: "first comment ... "
                }],
                tags: ["Tag1", "Tag2", "Tag3", "Tag0"]
            }, {
                id: 5,
                imageUrl: "assets/img/new-head-img-1.jpg",
                title: "My Title 6",
                date: "2017-09-19",
                subtitle: "Subtitle 6",
                text: "ashdasoidhas hasdh dkjhas asash ahasdas 6",
                comments: [],
                tags: ["Tag1", "Tag4", "Tag0"]
            }];
    }

    private items: Post[];
}

