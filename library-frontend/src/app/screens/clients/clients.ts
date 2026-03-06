import { Component, input } from '@angular/core';
import { ClientService } from '../../services/client-service';
import { MatIcon } from '@angular/material/icon';
import { ClientEntity } from '../../model/client-entity';
import { FormsModule } from '@angular/forms';
import { submit } from '@angular/forms/signals';

@Component({
  selector: 'app-clients',
  imports: [MatIcon, FormsModule],
  templateUrl: './clients.html',
  styleUrl: './clients.css',
})
export class Clients {
  constructor(private clientService: ClientService) {}

  name: string = '';
  email: string = '';

  client: ClientEntity = {
    name: this.name,
    email: this.email,
  };

  montarClient() {
    this.client.name = this.name;
    this.client.email = this.email;

  }


  submit() {
    this.montarClient();
    this.clientService.createClient(this.client).subscribe({
      next: (response) => {
        console.log('Client created successfully:', response);
        // Optionally, you can reset the form or show a success message here
      },
      error: (error) => {
        console.error('Error creating client:', error);
        // Optionally, you can show an error message to the user here
      },
    });
  }
}
