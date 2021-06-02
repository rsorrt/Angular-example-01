
import { Component } from '@angular/core';

@Component({

selector: 'app-test',

templateUrl: './test.component.html'

})
export class TestComponent {

  isDisplay = true;

  utenti = [
      {nome: 'Roberto', username: 'HO27702'},
      {nome: 'Mario'  , username: 'HO00001'},
      {nome: 'Pippo'  , username: 'HO00002'},
      {nome: 'Pluto'  , username: 'HO00002'},
      
  ];


  onUtenteAdd() {
    this.utenti.push({nome: 'nuovo', username: 'userxxxxx'});
  }

  onUtenteDel(utente: any) {
    let index = this.utenti.indexOf(utente);
    this.utenti.splice (index, 1);
  }


} //class