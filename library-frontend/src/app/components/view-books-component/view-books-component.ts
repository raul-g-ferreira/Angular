import {signal, Component, OnInit } from '@angular/core';
import { Book, BookService } from '../../services/book-service';


@Component({
  selector: 'app-view-books-component',
  imports: [],
  templateUrl: './view-books-component.html',
  styleUrl: './view-books-component.css',
})
export class ViewBooksComponent implements OnInit{
  books = signal<Book[]>([]);

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getAllBooks().subscribe(data => {
      this.books.set(data); // Atualiza o signal
    });
  }


  deleteBook(bookId: number) {
    if (confirm("Tem certeza que deseja remover o registro deste livro?")) {
      this.bookService.deleteBook(bookId).subscribe({
        next: ()=> {
          this.books.update(list => list.filter(b => b.id !== bookId))
          alert("livro removido!")
      },
        error: (err) => console.error("Nâo foi possivel remover o livro", err)
      });
    }
  }
}
