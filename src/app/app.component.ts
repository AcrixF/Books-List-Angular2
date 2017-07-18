//Angular Core
import { Component , OnInit , ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms'
//Modelos
import { BOOKS } from '../shared/mock-books';
import { Book } from './models/Book';
//Servicios
import { BookStoreService } from './services/book-store.service';
//Observables
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/merge';
import "rxjs/add/observable/interval";


@Component({
  selector: 'app-root',
   templateUrl: './app.component.html'
})

export class AppComponent implements OnInit{

  public booksList: Book[] = BOOKS;
  public selectedBook : Book;

  constructor(private bookStoreService: BookStoreService){}

  ngOnInit(){
    this.getBookList();
  }

  public getBookList(): void {
    this.booksList = this.bookStoreService.getBooksA();
  }

  public getBookDetails(isbn: number): void {
    this.selectedBook = this.bookStoreService.getBook( isbn );
  }

  public deleteBook( isbn : number): void {
    this.selectedBook = null;
    this.bookStoreService.deleteBook( isbn );
  }

}
