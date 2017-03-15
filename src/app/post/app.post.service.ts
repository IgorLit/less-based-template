import {Injectable, OnInit} from '@angular/core';

import  {Post} from './app.post.interface';
import {User} from "../account/app.account.user";
import {AccountService} from "../account/app.account.service";

@Injectable()
export class PostService implements OnInit {

    private items: Post[];
    public readAll(): Promise<Post[]> {
        return Promise.resolve(this.items);
    }

    public readByTag(tag: string) {
        return Promise.resolve(this.findByTag(tag));
    }

    private findByTag(filterTag: string) {
        let items = [];
        for (let item of this.items) {
            for (let tag of item.tags) {
                if (tag === filterTag) {
                    items.push(item);
                }
            }
        }
        return items;
    }

    public readById(id: Number) {
        let result = this.items[this.getIndexById(id)];
        return Promise.resolve(result);
    }

    public getUser() {
        return AccountService.user;
    }

    public create(data: Post) {
        data.imageUrl = "assets/img/new-head-img-1.jpg";
        data.comments = [];
        data.creator = this.getUser();
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
            id: Date.now(),
            commenter: user,
            date: new Date().toISOString().slice(0, 19).replace("T", " "),
            text: commentText
        });
        return this.items[this.getIndexById(postId)].comments;
    }

    public removeComment(postId: any, commentId: any) {
        return new Promise((resolve) => {
            let item = this.items[this.getIndexById(postId)];
            for (let i = 0; i < item.comments.length; i++) {
                if (item.comments[i].id === commentId) {
                    resolve(this.items[this.getIndexById(postId)].comments.splice(i, 1));
                }
            }
        });
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
        let tags: any = {};
        for (let i = 0; i < this.items.length; i++) {
            for (let tag of this.items[i].tags) {
                if (Number.isInteger(tags[tag])) {
                    tags[tag] += 1;
                } else {
                    tags[tag] = 1;
                }
            }
        }
        let result = [];
        for (let item in tags) {
            if (tags) {
                result.push({key: item, val: tags[item]});
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
            creator: {
                name: "root",
                avatarUrl: "assets/img/user.jpg"
            },
            comments: [{
                id: 1,
                commenter: {
                    name: "root",
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
            creator: {
                name: "root",
                avatarUrl: "assets/img/user.jpg"
            },
            text: "ashdasoidhas hasdh dkjhas asash ahasdas 6",
            comments: [{
                id: 2,
                commenter: {
                    name: "Igor",
                    avatarUrl: "assets/img/user.jpg"
                },
                date: "2017-05-15",
                text: "first comment ... "
            },
                {
                    id: 3,
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
                creator: {
                    name: "admin",
                    avatarUrl: "assets/img/user.jpg"
                },
                text: "ashdasoidhas hasdh dkjhas asash ahasdas 6",
                comments: [{
                    id: 4,
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
                creator: {
                    name: "admin",
                    avatarUrl: "assets/img/user.jpg"
                },
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
                creator: {
                    name: "root",
                    avatarUrl: "assets/img/user.jpg"
                },
                text: "ashdasoidhas hasdh dkjhas asash ahasdas 6",
                comments: [{
                    id: 5,
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
                creator: {
                    name: "root",
                    avatarUrl: "assets/img/user.jpg"
                },
                text: "ashdasoidhas hasdh dkjhas asash ahasdas 6",
                comments: [],
                tags: ["Tag1", "Tag4", "Tag0"]
            }];
    }

    ngOnInit(): void {
    }

}

