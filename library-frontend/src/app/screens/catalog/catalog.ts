import { Component, inject, signal } from '@angular/core';
import { BookService } from '../../services/book-service';
import { Book } from '../../model/book.entity';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-catalog',
  imports: [MatIcon],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {
  private bookService = inject(BookService);

  books = signal<Book[]>([]);

  constructor() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getAllBooks().subscribe((bs) => {
      return this.books.set(bs);
    });
  }

  protected deleteBook(id: number) {
    if (confirm('Tem certeza que deseja remover o registro deste livro?')) {
      this.bookService.deleteBook(id).subscribe({
        next: () => {
          this.books.update((list) => list.filter((b) => b.id !== id));
          alert('livro removido!');
        },
        error: (err) => console.error('Nâo foi possivel remover o livro', err),
      });
    }
  }
}
