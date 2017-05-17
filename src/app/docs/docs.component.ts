import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  docs: Object;

  constructor() { }

  ngOnInit() {
    this.docs = {};

    this.docs = [
      {
        description: "Get a list of books",
        method: "GET",
        endpoint: "http://34.209.151.254:3000/api/v1/book",
        payload: "none",
        params: "none",
        response: [{
          "id": 1,
          "title": "Book1",
          "author": "Michael",
          "genre": "kids",
          "image_url": "https://www.abebooks.com/images/books/iconic-childrens-books/wholes/cithds2.jpg",
          "read": true,
          "book_type_id": null,
          "active": true,
          "created_at": "2017-05-17T00:00:00.000Z",
          "updated_at": "2017-05-17T00:00:00.000Z",
          "deleted_at": null
        },
        {
          "id": 2,
          "title": "Book2",
          "author": "Chris",
          "genre": "Novel",
          "read": true,
          "image_url": "https://www.abebooks.com/images/books/iconic-childrens-books/wholes/cithds2.jpg",
          "book_type_id": null,
          "active": true,
          "created_at": "2017-05-17T00:00:00.000Z",
          "updated_at": "2017-05-17T00:00:00.000Z",
          "deleted_at": null
        },
        {
          "id": 3,
          "title": "Book3",
          "author": "Alan",
          "genre": "Fiction",
         "image_url": "https://www.abebooks.com/images/books/iconic-childrens-books/wholes/cithds2.jpg",
          "read": true,
          "book_type_id": null,
          "active": true,
          "created_at": "2017-05-17T00:00:00.000Z",
          "updated_at": "2017-05-17T00:00:00.000Z",
          "deleted_at": null
        }]
      },
      {
        description: "Get a single book",
        method: "GET",
        endpoint: "http://34.209.151.254:3000/api/v1/book/id/<id>",
        payload: "none",
        params: "id",
        response: {
          "id": 23,
          "title": "Book4",
          "author": "Michael",
          "genre": "kids",
          "read": true,
          "image_url": "https://www.abebooks.com/images/books/iconic-childrens-books/wholes/cithds2.jpg",
          "book_type_id": null,
          "active": true,
          "created_at": "2017-05-17T00:00:00.000Z",
          "updated_at": "2017-05-17T00:00:00.000Z",
          "deleted_at": null
        }
      },
      {
        description: "Update a book",
        method: "PUT",
        endpoint: "http://34.209.151.254:3000/api/v1/book/id/<id>",
        payload: {
          "title": "some title",
          "genre": "some genre",
          "author": "some author",
          "image_url": "https://www.abebooks.com/images/books/iconic-childrens-books/wholes/cithds2.jpg",
        },
        params: "id",
        response: {
          "id": 23,
          "title": "some title",
          "author": "some author",
          "genre": "some genre",
          "image_url": "https://www.abebooks.com/images/books/iconic-childrens-books/wholes/cithds2.jpg",
          "read": true,
          "book_type_id": null,
          "active": true,
          "created_at": "2017-05-17T00:00:00.000Z",
          "updated_at": "2017-05-17T00:00:00.000Z",
          "deleted_at": null
        }
      },
      {
        description: "Create a book",
        method: "POST",
        endpoint: "http://34.209.151.254:3000/api/v1/book",
        payload: {
          "title": "some title",
          "genre": "some genre",
          "author": "some author",
          "image_url": "https://www.abebooks.com/images/books/iconic-childrens-books/wholes/cithds2.jpg",
        },
        params: "none",
        response: {
          "id": 34,
          "title": "some title",
          "author": "some author",
          "genre": "some genre",
          "image_url": "https://www.abebooks.com/images/books/iconic-childrens-books/wholes/cithds2.jpg",
          "read": true,
          "book_type_id": null,
          "active": true,
          "created_at": "2017-05-17T00:00:00.000Z",
          "updated_at": "2017-05-17T00:00:00.000Z",
          "deleted_at": null
        }
      },
      {
        description: "Delete a book",
        method: "DELETE",
        endpoint: "http://34.209.151.254:3000/api/v1/book/id/<id>",
        payload: "none",
        params: "id",
        response: {
          "message": "delete success"
        }
      }
    ]

  }

  get(item: string) {
    switch (item) {
      case 'get payload':
        return []
      case '':

    }
  }

}
