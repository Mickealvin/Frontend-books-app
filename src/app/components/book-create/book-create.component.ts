import { Book } from './../../models/Book';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl:'./book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  bookList: Book[] = [];

  Form = new FormGroup({
    Title: new FormControl('', Validators.required),
    Description: new FormControl('', Validators.required),
    PageCount: new FormControl('', Validators.required),
    Excerpt: new FormControl('', Validators.required),
    PublishDate: new FormControl('')
  })

  constructor(private bookService: BookService) { }

  ngOnInit(): void {

  }
  
  saveNew(){
    let data = this.Form.value;
    this.bookService.postBook(data).subscribe(data => {
      console.log(data);
      this.Form.reset();
    },
    (error) => {
      alert(error);
    });
    
  }
}