import { CommonModule,NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Aluno } from '../../_models/aluno';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService} from '../../_service/user.service';
import { ListaComponent } from "../lista/lista.component";
import { AlunoSelecionadoComponent } from '../aluno-selecionado/aluno-selecionado.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter} from '@angular/material/core';
import { CpfPipe } from '../../_pipes/cpf.pipe';
import { TelefonePipe } from '../../_pipes/telefone.pipe';
import { DataPipe } from '../../_pipes/data.pipe';
import { MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CpfPipe, TelefonePipe, DataPipe, NgFor, CommonModule,
    MatInputModule, MatFormFieldModule, MatDatepickerModule, ReactiveFormsModule,
    ListaComponent, AlunoSelecionadoComponent, MatIconModule,],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit{
  novoAluno : Aluno | undefined
  formulario: FormGroup = new FormGroup({});
  userService: UserService = inject(UserService)


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.iniciarForm()
  }

  iniciarForm(){
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.minLength(11),Validators.maxLength(11)]],
      celular: ['', [Validators.minLength(11), Validators.maxLength(11)]],
      cpf: ['', [Validators.minLength(11), Validators.maxLength(11)]],
      data: ['']
    });
  }

  add(){
    if(this.formulario.valid){
      console.log('add funcionou')
      this.userService.setAluno(this.formulario.value)
      this.formulario.reset()
      location.reload()
      console.log(this.userService.getAllAlunos())
    }else{console.log('Usuário inválido')}
  }

  del(){
    this.formulario.reset()
  }

}

