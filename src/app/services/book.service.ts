import { Book } from './../models/Book';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {
 baseURL = '/api/Book';
  constructor(private http: HttpClient) { }

 

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseURL);
  }

  getBook(id : number): Observable<Book>{

    return this.http.get<Book>(this.baseURL + "/" + id);
  }

  postBook(book: Book): Observable<Book> {
    const body = {
      ID: book.ID,
      Title: book.Title,
      PageCount: book.PageCount,
      PublishDate: book.PublishDate,
      Description: book.Description,
      Excerpt: book.Excerpt
    }
    return this.http.post<Book>(this.baseURL, body);
  }

  putBook(book: Book):Observable<Book>{
    const body = {
      ID: book.ID,
      Title: book.Title,
      PageCount: book.PageCount,
      PublishDate: book.PublishDate,
      Description: book.Description,
      Excerpt: book.Excerpt
    }
    return this.http.put<Book>(this.baseURL + "/" +book.ID, body);
  }

  deleteBook(id: number):Observable<Book>{

    return this.http.delete<Book>(this.baseURL + "/" + id);
  }


}
