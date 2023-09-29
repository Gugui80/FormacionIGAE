import { Injectable } from '@angular/core';
import { Usuario, TipologiaUsuario } from '../usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //Si no icializamos los atributos aquí, o en el constructor, nos dá un error en tiempo de ejecución.
  //Las declaramos privadas para que el usuario no pueda interactuar con ellas, como ocurre en java.
  private usuarios: Usuario[];
  private tipologias: TipologiaUsuario[];

  constructor() {
    this.tipologias = [
      {
        id: 0,
        nombreTipologia: ''
      },
      {
        id: 1,
        nombreTipologia: 'Desarrolladores'
      },
      {
        id: 2,
        nombreTipologia: 'Preproducción'
      },
      {
        id: 3,
        nombreTipologia: 'Producción'
      },
      {
        id: 3,
        nombreTipologia: 'Administradores'
      }
    ];
    this.usuarios = [];
   }

   getUsuario(): Usuario[] {
    return this.usuarios;
   }

   getTipologias(): TipologiaUsuario[] {
    return this.tipologias;
   }

   addUsuario( usuario: Usuario ): Usuario {
    this.usuarios.push(usuario);
    console.log(this.usuarios);
    return usuario;
   }

   nuevoUsuario(): Usuario {
    return {
      id: this.usuarios.length,
      nombre: '',
      dni: '',
      direccion: '',
      tipo: { id: 0, nombreTipologia: ''}
    }
   }
}
