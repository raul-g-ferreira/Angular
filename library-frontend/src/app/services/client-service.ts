import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ClientEntity } from '../model/client-entity';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private baseUrl = environment.apiUrl + '/client';

  constructor(private http: HttpClient) {}

  createClient(client: ClientEntity) {
    return this.http.post(`${this.baseUrl}`, client);
  }

  getAllClients() {
    return this.http.get<ClientEntity[]>(`${this.baseUrl}`);
  }
}
