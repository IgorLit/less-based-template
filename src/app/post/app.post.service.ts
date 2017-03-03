import { Injectable } from '@angular/core';

@Injectable()
export class PostService {

    public readAll() {
        return new Promise((resolve) => {
            resolve(JSON.parse(this.posts));
        });
    }

  constructor() {

  }

  private posts:string = `{
    "posts":[{
        "imageUrl":"assets/img/new-head-img-1.jpg",
        "title": "My Title",
        "date": "small text",
        "subtitle": "Subtitle",
        "text": "If you read and listen to two articles every day, your reading and listening skills can improve fast.own language."
    },{
            "imageUrl":"assets/img/new-head-img-1.jpg",
            "title": "My Title 2",
            "date": "small text 2",
             "subtitle": "Subtitle 2",
            "text": "ashdasoidhas hasdh dkjhas asash ahasdas 2"
        },{
            "imageUrl":"assets/img/new-head-img-1.jpg",
            "title": "My Title 3",
            "date": "small text 2",
             "subtitle": "Subtitle 2",
            "text": "ashdasoidhas hasdh dkjhas asash ahasdas 2"
        },
        {
            "imageUrl":"assets/img/new-head-img-1.jpg",
            "title": "My Title 4",
            "date": "small text 2",
             "subtitle": "Subtitle 2",
            "text": "ashdasoidhas hasdh dkjhas asash ahasdas 2"
        },{
            "imageUrl":"assets/img/new-head-img-1.jpg",
            "title": "My Title 5    ",
            "date": "small text 2",
             "subtitle": "Subtitle 2",
            "text": "ashdasoidhas hasdh dkjhas asash ahasdas 2"
        }]
}`;
}

