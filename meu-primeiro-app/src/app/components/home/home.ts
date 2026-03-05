import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private enviaFormularioService = inject(EnviaFormularioService);
  name = "Raul";
  idButton = "dlkfja";
  deveMostrarTitulo = true;
  listItems = ["toptoptoptop", "GO DRINKING", "sTRING"]


  @Input("variable") minhaPropsDeFora!: string;

  @Output() emitindoValorName = new EventEmitter<string>();

  submit() {
    this.emitindoValorName.emit(this.name);
    this.enviaFormularioService.enviaInformacaoParaBackend("informacao")
  }
}
