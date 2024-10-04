import { Injectable } from '@angular/core';
import { Aluno } from '../_models/aluno';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user:Aluno = {
    nome: '',
    email: '',
    telefone: '',
    celular: '',
    cpf: '',
    data: '',
  }
  alunos: Aluno [] = []
  exibeLista: boolean = true

  getAllAlunos(){
    const save: any = localStorage.getItem('aluno')
    this.alunos = JSON.parse(save)
    this.alunos = this.alunos
    return this.alunos
  }
  setAlunoApagar(){
    localStorage.clear()
    localStorage.setItem('aluno',JSON.stringify(this.alunos))
  }

  setAluno(aluno:Aluno){
    console.log('setAluno funcionou')
    this.alunos.push(aluno)
    localStorage.setItem('aluno', JSON.stringify(this.alunos))
  }

  setUser(user:Aluno){
    this.user = user
  }

  getUser(){
    return this.user
  }

  apagar(arr:any , prop:any , value:String){
    //console.log('apagar funcionou')
    if(this.encontraItem(arr , prop, value)){
      let listaBack = this.removeItem(arr , prop, value)
      this.alunos = listaBack
      this.setAlunoApagar()
      console.log('Aluno apagado')
    }else{console.log('Aluno não encontrado')}
  }

  removeItem(arr:any , prop:any , value:String){
    console.log('removeItem funcionou')
    ///console.log(arr.filter(function(i:any){return i[prop]==value}))//Mostra o que foi apagado
    return arr.filter(function(i:any){return i[prop]!==value})
  }

  encontraItem(arr:any , prop:any , value:String){
    console.log('encontraItem funcionou')
    //console.log(arr.filter(function(i:any){return i[prop]==value}))
    return arr.filter(function(i:any){return i[prop]==value})
  }

  atualizarAlunos(): void {
    this.alunos = this.getAllAlunos();
    console.log("Lista atualizada:", this.alunos);
  }
}
