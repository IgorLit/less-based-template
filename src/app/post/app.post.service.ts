import {Injectable} from '@angular/core';
import  {Post} from './app.post.interface';

@Injectable()
export class PostService {

    public readAll(): Promise<Post[]> {
        return Promise.resolve(this.items);
    }

    public remove(id: any) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === Number.parseInt(id)) {
                this.items.splice(i, 1);
                return Promise.resolve(this.items);
            }
        }
        return Promise.resolve(this.items);
    }

    constructor() {
        this.items = [{
            id: 1,
            imageUrl: "assets/img/new-head-img-1.jpg",
            title: "My Title-s",
            date: "small text",
            subtitle: "Subtitle",
            text: "If you read and listen to two articles every day, your reading and listening skills can improve fast.own language."
        }, {
            id: 6,
            imageUrl: "assets/img/new-head-img-1.jpg",
            title: "My Title 6",
            date: "small text 6",
            subtitle: "Subtitle 6",
            text: "ashdasoidhas hasdh dkjhas asash ahasdas 6"
        },
            {
                id: 2,
                imageUrl: "assets/img/new-head-img-1.jpg",
                title: "My Title 7",
                date: "small text 6",
                subtitle: "Subtitle 6",
                text: "ashdasoidhas hasdh dkjhas asash ahasdas 6"
            }, {
                id: 3,
                imageUrl: "assets/img/new-head-img-1.jpg",
                title: "My Title 6",
                date: "small text 6",
                subtitle: "Subtitle 6",
                text: "ashdasoidhas hasdh dkjhas asash ahasdas 6"
            },
            {
                id: 4,
                imageUrl: "assets/img/new-head-img-1.jpg",
                title: "My Title 6",
                date: "small text 6",
                subtitle: "Subtitle 6",
                text: "ashdasoidhas hasdh dkjhas asash ahasdas 6"
            }, {
                id: 5,
                imageUrl: "assets/img/new-head-img-1.jpg",
                title: "My Title 6",
                date: "small text 6",
                subtitle: "Subtitle 6",
                text: "ashdasoidhas hasdh dkjhas asash ahasdas 6"
            }];
    }

    private items: Post[];
}

