import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaUsuarioComponent } from './components/alta-usuario/alta-usuario.component';
import { FormsModule } from '@angular/forms';
import { ListadoUsuariosComponent } from './components/listado-usuarios/listado-usuarios.component';

@NgModule({
  declarations: [
    AltaUsuarioComponent,
    ListadoUsuariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AltaUsuarioComponent,
    ListadoUsuariosComponent
  ]
})
export class UsuariosModule { }
