import { BookService } from '../../../services/book-service';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Book } from '../../../model/book.entity';

@Component({
  selector: 'app-book-import-component',
  imports: [FormsModule],
  templateUrl: './book-import-component.html',
  styleUrl: './book-import-component.css',
})
export class BookImportComponent {
  isbnInput: string = '';
  bookImported: Book | null = null;

  constructor(private bookService: BookService) {}

  isbnImport() {
    this.bookService.importBook(this.isbnInput).subscribe({
      next: (book) => {
        this.bookImported = book;
        alert('Livro importado com sucesso!');
      },
      error: (erro) => {
        console.error('Erro ao importar livro:', erro);
        alert('Erro ao importar livro. Verifique o ISBN.');
      },
    });
  }
}
