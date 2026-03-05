import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  id?: number;
  title: string;
  author: string;
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = environment.apiUrl + '/book';

  constructor(private http: HttpClient) {}

  importBook(isbn: string): Observable<Book> {
    return this.http.post<Book>(`${this.baseUrl}/import/${isbn}`, {});
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/get`, {});
  }

  deleteBook(bookId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${bookId}`, {});
  }
}
