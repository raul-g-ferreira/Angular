import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnviaFormularioService {

  enviaInformacaoParaBackend(info: string) {
    console.log("enviando para o backend");
  }
}
