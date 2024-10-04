import { Component, DoCheck, EventEmitter, inject, Input, OnInit, Output, TrackByFunction } from '@angular/core';
import { AlunoSelecionadoComponent } from '../aluno-selecionado/aluno-selecionado.component';
import { UserService } from '../../_service/user.service';
import { Aluno } from '../../_models/aluno';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CpfPipe } from '../../_pipes/cpf.pipe';
import { TelefonePipe } from '../../_pipes/telefone.pipe';
import { DataPipe } from '../../_pipes/data.pipe';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';




@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [MatTableModule, RouterLink, AlunoSelecionadoComponent, CommonModule, ReactiveFormsModule,CpfPipe, TelefonePipe, DataPipe, MatIconModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements DoCheck{

  listaAlunos: Aluno[] = []
  userService: UserService = inject(UserService)

  ngDoCheck(): void {
    this.listaAlunos = this.userService.getAllAlunos()
  }
  trackById(index: number, aluno: any): number {
    return aluno.id; // ou qualquer identificador único
  }

}
