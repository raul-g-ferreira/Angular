import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookImportComponent } from './components/shared/book-import-component/book-import-component';
import { ViewBooksComponent } from './components/shared/view-books-component/view-books-component';
import { Page } from './components/shared/page/page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookImportComponent, ViewBooksComponent, Page],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}
