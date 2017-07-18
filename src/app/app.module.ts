import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookStoreService } from './services/book-store.service';
import { ConsoleLogService } from './services/console-log.service';
import { BookSearchComponent } from './components/book-search/book-search.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailsComponent,
    BookSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BookStoreService, ConsoleLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
