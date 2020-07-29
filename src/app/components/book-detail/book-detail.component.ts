import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../models/Book';
import { BookService } from '../../services/book.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
 id: number;
 book: Book;
 Form: FormGroup;
  constructor(private _ActivatedRoute: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    this.id = +this._ActivatedRoute.snapshot.paramMap.get("id");
    
    this.bookService.getBook(this.id)
    .subscribe(data => {
      this.book = data;
      this.loadForm();
      console.log(this.book);
    }, 
    (error) => {
      // alerta con el error
      alert(error);
    });

   
  }
  
  loadForm(){
    this.Form = new FormGroup({
      Title: new FormControl(this.book.Title, Validators.required),
      Description: new FormControl(this.book.Description, Validators.required),
      PageCount: new FormControl(this.book.PageCount, Validators.required),
      Excerpt: new FormControl(this.book.Excerpt, Validators.required),
      PublishDate: new FormControl(this.book.PublishDate)
    })  
  }

  editBook(){
    if(confirm("Seguro que desea editar?")){

    let data = this.Form.value;
    this.bookService.putBook(data).subscribe(data => {
      console.log(data);
      this.Form.reset();
    },
    (error) => {
      alert(error);
    });
    
  }
}


}
