import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from "./_modules/cadastro/cadastro.component";
import { Aluno } from './_models/aluno';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CadastroComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}

