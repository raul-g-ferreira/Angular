import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookImportComponent } from './components/book-import-component/book-import-component';
import { ViewBooksComponent } from './components/view-books-component/view-books-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookImportComponent, ViewBooksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('library-frontend');
}
