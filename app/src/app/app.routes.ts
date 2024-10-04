import { Routes } from '@angular/router';
import { CadastroComponent } from './_modules/cadastro/cadastro.component';
import { EditComponent } from './_modules/edit/edit.component';

export const routes: Routes = [
  {path: "",component:CadastroComponent},
  {path: 'edit',component:EditComponent}
];
