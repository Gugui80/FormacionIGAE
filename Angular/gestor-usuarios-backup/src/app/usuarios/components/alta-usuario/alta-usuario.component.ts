import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario, TipologiaUsuario } from '../../usuario.model';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.scss']
})
export class AltaUsuarioComponent implements OnInit {

  usuario: Usuario;
  tipologias: TipologiaUsuario[];

  constructor(private usuarioService: UsuarioService) {
    this.usuario = this.usuarioService.nuevoUsuario();
    this.tipologias = this.usuarioService.getTipologias();
  }

  ngOnInit(): void {
    /*console.log(this.usuario);
    console.log(this.tipologias);*/
  }

  altaUsuario(): void {
    this.usuarioService.addUsuario(this.usuario);
    this.usuario = this.usuarioService.nuevoUsuario();
  }

}
