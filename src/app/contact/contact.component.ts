import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  formularioContacto: FormGroup;
tipoDni: string = "";

  constructor(private form: FormBuilder) {
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: [''],
      tipoDni: [''],
      dni: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
      // this.formularioContacto.valueChanges.subscribe(valor => {
      //   console.log(valor);
      // });
      this.formularioContacto.get('tipoDni')?.valueChanges.subscribe((valor) => {
        this.tipoDni = valor;
      })
  }

  hasErrors( controlName: string , errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }
  enviar() {
    console.log(this.formularioContacto);
  }
}
