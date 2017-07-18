import { Injectable } from '@angular/core';
import { BOOKS } from '../../shared/mock-books';
import { Book } from '../models/Book';
import { ConsoleLogService } from './console-log.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class BookStoreService {

  public bookList: Book[] = BOOKS;

  constructor(private loggerService: ConsoleLogService) { }

  public getBooksA() {
    return this.bookList;
  }

  public getBooks(title: string): Observable<Book[]> {
    return Observable.of(this.filterBooks(title))
  }

  public getBookTitles(title: string): Observable<string[]> {
      return  Observable.of(this.filterBooks(title).map( book => book.title));
  }

  public filterBooks(title: string): Book[] {
      return title ? this.bookList.filter( book => new RegExp(title, 'gi').test(book.title)) : [];
  }

  public getBook(isbn: number): Book {
    const selectedBook = this.bookList.filter( book => book.isbn === isbn);
    return selectedBook[0];
  }

  public deleteBook( isbn: number): Book[] {
      this.bookList = this.bookList.filter( book => book.isbn !== isbn);
      return this.bookList;
  }

}
