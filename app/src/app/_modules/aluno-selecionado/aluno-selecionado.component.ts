import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Aluno } from '../../_models/aluno';
import { UserService } from '../../_service/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CpfPipe } from '../../_pipes/cpf.pipe';
import { TelefonePipe } from '../../_pipes/telefone.pipe';
import { DataPipe } from '../../_pipes/data.pipe';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-aluno-selecionado',
  standalone: true,
  imports: [CommonModule, RouterLink, CpfPipe, TelefonePipe, DataPipe, MatTableModule, MatIconModule,],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './aluno-selecionado.component.html',
  styleUrl: './aluno-selecionado.component.css'
})
export class AlunoSelecionadoComponent{

  @Input() alunoSelecionado: Aluno = {
    nome: '',
    email: '',
    telefone: '',
    celular: '',
    cpf: '',
    data: '',
  };
  @Output() userInfoEmitter = new EventEmitter<Aluno>();


  userService: UserService = inject(UserService)
  listaB:Aluno [] = []
  //Dados tabela
  displayedColumns: any = ['nome', 'email', 'telefone', 'celular' , 'cpf' , 'data' , 'editar/apagar'];
  dataSource: Aluno [] = this.userService.getAllAlunos()

  retornarDados(alunoSelecionado: Aluno){
    //console.log(this.alunoSelecionado)
    //this.userInfoEmitter.emit(this.alunoSelecionado)
    this.userService.setUser(alunoSelecionado)
  }

  apagar(alunoSelecionado: Aluno){
    this.listaB = this.userService.getAllAlunos()
    this.userService.apagar(this.listaB , 'email' , alunoSelecionado.email )
    location.reload()
  }
  atualizarAlunos(): void {
    this.listaB = this.userService.getAllAlunos();
    console.log("Lista atualizada:", this.listaB);
  }
}


