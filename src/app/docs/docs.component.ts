import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  docs: Object;
  showBookDocs: boolean;
  showTankDocs: boolean;
  showUserDocs: boolean;
  constructor() { }

  ngOnInit() {
    this.docs = {
      books: [],
      tanks: [],
      users: []
    }
    this.showBookDocs = true;
    this.showTankDocs = false;
    this.showUserDocs = false;
    
    this.docs['books'] = [
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
    ];

    this.docs['tanks'] = [
      {
        description: "Get a list of tanks",
        method: "GET",
        endpoint: "http://34.209.151.254:3000/api/v1/tank",
        payload: "none",
        params: "none",
        response: [
          {
            "id": 2,
            "tank_name": "w",
            "serial_number": "asdf",
            "gallons": 3,
            "user_id": null,
            "active": true,
            "created_at": "2017-05-18T00:00:00.000Z",
            "updated_at": "2017-05-18T00:00:00.000Z",
            "deleted_at": null
          },
          {
            "id": 3,
            "tank_name": "asdf",
            "serial_number": "asdf",
            "gallons": 333,
            "user_id": null,
            "active": true,
            "created_at": "2017-05-18T00:00:00.000Z",
            "updated_at": "2017-05-18T00:00:00.000Z",
            "deleted_at": null
          },
          {
            "id": 4,
            "tank_name": "asdf",
            "serial_number": "23r",
            "gallons": 3333,
            "user_id": null,
            "active": true,
            "created_at": "2017-05-18T00:00:00.000Z",
            "updated_at": "2017-05-18T00:00:00.000Z",
            "deleted_at": null
          }]
      },
      {
        description: "Get a single tank",
        method: "GET",
        endpoint: "http://34.209.151.254:3000/api/v1/tank/id/<id>",
        payload: "none",
        params: "id",
        response: {
          "id": 2,
          "tank_name": "w",
          "serial_number": "asdf",
          "gallons": 3,
          "user_id": null,
          "active": true,
          "created_at": "2017-05-18T00:00:00.000Z",
          "updated_at": "2017-05-18T00:00:00.000Z",
          "deleted_at": null
        }
      },
      {
        description: "Update a tank",
        method: "PUT",
        endpoint: "http://34.209.151.254:3000/api/v1/tank/id/<id>",
        payload: {
          "tank_name": "some tank name",
          "serial_number": "some tank serial",
          "gallons": 111
        },
        params: "id",
        response: {
          "id": 2,
          "tank_name": "some tank name",
          "serial_number": "some tank serial",
          "gallons": 111,
          "user_id": null,
          "active": true,
          "created_at": "2017-05-18T00:00:00.000Z",
          "updated_at": "2017-05-18T00:00:00.000Z",
          "deleted_at": null
        }
      },
      {
        description: "Create a tank",
        method: "POST",
        endpoint: "http://34.209.151.254:3000/api/v1/tank",
        payload: {
          "tank_name": "some tank name2",
          "serial_number": "some tank serial2",
          "gallons": 1112
        },
        params: "none",
        response: {
          "id": 10,
          "tank_name": "some tank name2",
          "serial_number": "some tank serial2",
          "gallons": 1112,
          "user_id": null,
          "active": true,
          "created_at": "2017-05-18T00:00:00.000Z",
          "updated_at": "2017-05-18T00:00:00.000Z",
          "deleted_at": null
        }
      },
      {
        description: "Delete a tank",
        method: "DELETE",
        endpoint: "http://34.209.151.254:3000/api/v1/tank/id/<id>",
        payload: "none",
        params: "id",
        response: {
          "message": "delete success"
        }
      }
    ];

    this.docs['users'] = [
      {
        description: "Get a list of users",
        method: "GET",
        endpoint: "http://34.209.151.254:3000/api/v1/user",
        payload: "none",
        params: "none",
        response: [
          {
            "id": 2,
            "email": "asfd",
            "username": "asdf",
            "password": null,
            "role": null,
            "image_url": "http://cdn3-www.dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg",
            "super_admin": false,
            "is_activated": false,
            "active": true,
            "created_at": "2017-05-18T00:00:00.000Z",
            "updated_at": "2017-05-18T00:00:00.000Z",
            "deleted_at": null
          }
        ]

      },
      {
        description: "Get a single user",
        method: "GET",
        endpoint: "http://34.209.151.254:3000/api/v1/user/id/<id>",
        payload: "none",
        params: "id",
        response: {
          "id": 2,
          "email": "asfd",
          "username": "asdf",
          "password": null,
          "role": null,
          "image_url": "http://cdn3-www.dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg",
          "super_admin": false,
          "is_activated": false,
          "active": true,
          "created_at": "2017-05-18T00:00:00.000Z",
          "updated_at": "2017-05-18T00:00:00.000Z",
          "deleted_at": null
        }
      },
      {
        description: "Update a user",
        method: "PUT",
        endpoint: "http://34.209.151.254:3000/api/v1/user/id/<id>",
        payload: {
          "email": "asfdssssssss",
          "username": "asdf",
          "password": null,
          "role": null,
          "image_url": "http://cdn3-www.dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg",
          "super_admin": false,
          "is_activated": false,
          "active": true,
          "created_at": "2017-05-18T00:00:00.000Z",
          "updated_at": "2017-05-18T00:00:00.000Z",
          "deleted_at": null
        },
        params: "id",
        response: {
          "id": 2,
          "email": "asfdssssssss",
          "username": "asdf",
          "password": null,
          "role": null,
          "image_url": "http://cdn3-www.dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg",
          "super_admin": false,
          "is_activated": false,
          "active": true,
          "created_at": "2017-05-18T00:00:00.000Z",
          "updated_at": "2017-05-18T00:00:00.000Z",
          "deleted_at": null
        }
      },
      {
        description: "Create a user",
        method: "POST",
        endpoint: "http://34.209.151.254:3000/api/v1/user",
        payload: {
          "email": "lphan@shift3t3ech2.com",
          "username": "lphan ",
          "image_url": "http://cdn3-www.dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg"
        },
        params: "none",
        response: {
          "id": 5,
          "email": "lphan@shift3t3ech2.com",
          "username": "lphan",
          "password": null,
          "role": null,
          "image_url": "http://cdn3-www.dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg",
          "super_admin": false,
          "is_activated": false,
          "active": true,
          "created_at": "2017-05-18T00:00:00.000Z",
          "updated_at": "2017-05-18T00:00:00.000Z",
          "deleted_at": null
        }
      },
      {
        description: "Delete a user",
        method: "DELETE",
        endpoint: "http://34.209.151.254:3000/api/v1/user/id/<id>",
        payload: "none",
        params: "id",
        response: {
          "message": "delete success"
        }
      }
    ];

  }

  get(item: string) {
    switch (item) {
      case 'get payload':
        return []
      case '':

    }
  }

  toggleBooks() {
    this.showBookDocs = !this.showBookDocs;
    console.log('this.showBookDocs', this.showBookDocs);
    this.showTankDocs = false;
    this.showUserDocs = false;
  }
  toggleTanks() {
    this.showTankDocs = !this.showTankDocs;
    this.showBookDocs = false;
  }
  toggleUsers() {
    this.showUserDocs = !this.showUserDocs;
    this.showBookDocs = false;
    this.showTankDocs = false;
  }

}
