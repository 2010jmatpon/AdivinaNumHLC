import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numSecreto: number = 0;
  numUsuario: number = 0;
  txtMensaje: string = "";
  esCorrecto: boolean= false;
  
  constructor() {
    this.generarNumSecreto();
  }
  
  reiniciar(){
    this.generarNumSecreto();
    this.esCorrecto=false;
    this.numUsuario=0;
    this.txtMensaje="";
  }

  comprobarNumero(){
    console.log("click en botón");
    console.log("numUsuario="+this.numUsuario);
    if(this.numUsuario == this.numSecreto){
      this.txtMensaje = "Has acertado";
      this.esCorrecto=true;
    } else if (this.numSecreto < this.numUsuario){
      this.txtMensaje="El Número Secreto es menor";
    } else{
      this.txtMensaje="El Número Secreto es mayor";
    }
  }
  generarNumSecreto(){
    this.numSecreto=Math.floor(Math.random()*100+1);
    console.log("numSecreto="+this.numSecreto);
  }



}
