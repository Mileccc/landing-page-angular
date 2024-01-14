import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

 
  public usuario: any = {
    nombre: '',
    email: ''
  }

  enviar(){
    console.log(this.usuario);
  }

}
