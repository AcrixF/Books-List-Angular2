import { Component , OnInit , ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BookStoreService } from '../../services/book-store.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  @ViewChild('searchInput') searchInput;
  public bookTitles: Array<string>;

  constructor(private bookStoreService: BookStoreService) { }

  ngOnInit() {
      Observable.fromEvent(this.searchInput.nativeElement, 'keyup')
        .map((event: KeyboardEvent) => (<HTMLInputElement>event.target).value )
        .subscribe( title => this.bookStoreService.getBookTitles( title).subscribe( bookTitles => this.bookTitles = bookTitles) );
  }

}
