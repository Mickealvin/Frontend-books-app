import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookList: Book[] = [];
  searchTerm: number = 0;;
  p:number=1;

  
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.bookService.getAllBooks()
    .subscribe(data => {
      this.bookList = data;
      console.log(this.bookList);
    }, 
    (error) => {
      // alerta con el error
      alert(error);
    });

  }
  OndeleteBook(book:Book):void{

    if(confirm("Desea Eliminar el libro?")){
      this.bookService.deleteBook(book.ID).subscribe(data => {
        console.log(data);
        
      },
      (error) => {
        alert(error);
      });
      
    }
  }

  searchBook(){
    if(this.searchTerm != 0) {
      const search =this.bookList.filter(book => book.ID === this.searchTerm);
      this.bookList = search;
    }
  }

  clear() {
    this.bookService.getAllBooks()
    .subscribe(data => {
      this.bookList = data;
      console.log(this.bookList);
    }, 
    (error) => {
      // alerta con el error
      alert(error);
    });
  }

}
