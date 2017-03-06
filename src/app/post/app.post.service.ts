import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import  {Post} from './app.post.interface';

@Injectable()
export class PostService {

    public readAll(): Promise<Post[]> {
        return Promise.resolve(JSON.parse(this.posts).posts);
    }

    constructor() {
    }

    private posts:string = `{
    "posts":[{
         "id" : 1,
        "imageUrl":"assets/img/new-head-img-1.jpg",
        "title": "My Title",
        "date": "small text",
        "subtitle": "Subtitle",
        "text": "If you read and listen to two articles every day, your reading and listening skills can improve fast.own language."
    },{
            "id" : 6,
            "imageUrl":"assets/img/new-head-img-1.jpg",
            "title": "My Title 6",
            "date": "small text 6",
             "subtitle": "Subtitle 6",
            "text": "ashdasoidhas hasdh dkjhas asash ahasdas 6"
        },
    {
            "id" : 2,
            "imageUrl":"assets/img/new-head-img-1.jpg",
            "title": "My Title 2",
            "date": "small text 2",
             "subtitle": "Subtitle 2",
            "text": "ashdasoidhas hasdh dkjhas asash ahasdas 2"
        },{
            "id" : 3,
            "imageUrl":"assets/img/new-head-img-1.jpg",
            "title": "My Title 3",
            "date": "small text 2",
             "subtitle": "Subtitle 2",
            "text": "ashdasoidhas hasdh dkjhas asash ahasdas 2"
        },
        {   "id" : 4,
            "imageUrl":"assets/img/new-head-img-1.jpg",
            "title": "My Title 4",
            "date": "small text 2",
             "subtitle": "Subtitle 2",
            "text": "ashdasoidhas hasdh dkjhas asash ahasdas 2"
        },{ 
            "id" : 5,
            "imageUrl":"assets/img/new-head-img-1.jpg",
            "title": "My Title 5    ",
            "date": "small text 2",
             "subtitle": "Subtitle 2",
            "text": "ashdasoidhas hasdh dkjhas asash ahasdas 2"
        }]
}`;
}

