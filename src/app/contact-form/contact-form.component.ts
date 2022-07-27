import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Formulario } from '../models/formulario.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    
   }

  ngOnInit() {
    this.createForm(new Formulario())
  }

  // recebendo um formGroup
  // createForm(formulario : Formulario){
  //   this.form = new FormGroup({
  //     nome: new FormControl(formulario.nome),
  //     telefone: (new FormControl(formulario.telefone)),
  //     email: new FormControl(formulario.email),
  //     descricao: new FormControl(formulario.descricao),
  //     sobrenome: new FormControl(formulario.sobrenome)
  //   })
  // }

  /**
   * 
   * @param formulario Builder
   */
  createForm(formulario : Formulario){
    this.form = this.formBuilder.group({
      nome: [formulario.nome],
      telefone: [formulario.telefone],
      email: [formulario.email],
      descricao: [formulario.descricao],
      sobrenome: [formulario.sobrenome],
    })
  }

  onSubmit(){
    console.log(this.form.value);
    this.form.reset(new Formulario());
  }

}
