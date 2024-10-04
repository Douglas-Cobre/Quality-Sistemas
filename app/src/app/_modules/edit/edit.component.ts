import { Component, inject, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Aluno } from '../../_models/aluno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../_service/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { AlunoSelecionadoComponent } from '../aluno-selecionado/aluno-selecionado.component';
import { CpfPipe } from '../../_pipes/cpf.pipe';
import { TelefonePipe } from '../../_pipes/telefone.pipe';
import { DataPipe } from '../../_pipes/data.pipe';
import {MatIconModule} from '@angular/material/icon';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-edit',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatIconModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, RouterLink, CpfPipe, TelefonePipe, DataPipe,MatDatepickerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  novoAluno : Aluno = {
    nome: '',
    email: '',
    telefone: '',
    celular: '',
    cpf: '',
    data: '',
  }
  formulario: FormGroup = new FormGroup({});
  userService: UserService = inject(UserService)
  //alunoSelec: AlunoSelecionadoComponent = inject(AlunoSelecionadoComponent)
  listaB:Aluno [] = []


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.iniciarForm()
    console.log(this.userService.getAllAlunos())
  }

  iniciarForm(){
    this.novoAluno = this.userService.getUser()
    this.formulario = this.formBuilder.group({
      nome: [this.novoAluno.nome, [Validators.required]],
      email: [this.novoAluno.email, [Validators.required, Validators.email]],
      telefone: [this.novoAluno.telefone, [Validators.minLength(11),Validators.maxLength(11)]],
      celular: [this.novoAluno.celular, [Validators.minLength(11), Validators.maxLength(11)]],
      cpf: [this.novoAluno.cpf, [Validators.minLength(11), Validators.maxLength(11)]],
      data: [this.novoAluno.data]
    });
  }

  alterar(){
    if(this.formulario.valid){
      console.log('addEdit funcionou')//Confirmação

      this.listaB = this.userService.getAllAlunos()
      this.userService.apagar(this.listaB , 'email' , this.novoAluno.email )

      this.userService.setAluno(this.formulario.value)//Adiciona o aluno editado
    }
  }

  del(){
    this.formulario.reset()
  }
}


