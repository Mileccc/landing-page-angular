import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnChanges{

  @Input() tipoDni: string = "";
  formularioDocumento: FormGroup;

  variableNueva: string = "DNI";

  
  constructor(private form: FormBuilder) {
    
    this.formularioDocumento = this.form.group({
      tipoDni: [''],
      dni: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
      // this.variableNueva = !changes?.['tipoDni'].firstChange ? changes['tipoDni'].currentValue : "Documento";
      this.variableNueva = changes?.['tipoDni'].currentValue;
  }

  hasErrors( controlName: string , errorType: string){
    return this.formularioDocumento.get(controlName)?.hasError(errorType) 
    && this.formularioDocumento.get(controlName)?.touched
  }

}

