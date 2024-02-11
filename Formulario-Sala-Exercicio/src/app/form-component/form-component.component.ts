import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      login: ['', [Validators.required, this.validarTamanhoMinimo(4)]],
      senha: ['', [Validators.required, this.validarTamanhoMinimoEMaximo(4, 10)]]
    });
  }

  onSubmit(formulario: NgForm){
    let {login, senha} = formulario.value;
    console.log(login, senha);
  }

  private validarTamanhoMinimo(tamanhoMinimo: number) {
    return (control: any) => {
      if (control.value && control.value.length < tamanhoMinimo) {
        return { 'tamanhoMinimo': true };
      }
      return null;
    };
  }

  private validarTamanhoMinimoEMaximo(tamanhoMinimo: number, tamanhoMaximo: number) {
    return (control: any) => {
      if (control.value && control.value.length >= tamanhoMinimo && control.value.length <= tamanhoMaximo) {
        return { 'tamanhoMinimoEMaximo': true };
      }
      return null;
    };
  }
}
