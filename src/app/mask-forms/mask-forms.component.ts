import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mask-forms',
  templateUrl: './mask-forms.component.html',
  styleUrls: ['./mask-forms.component.css']
})
export class MaskFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  exemple = new FormGroup({
        cpf: new FormControl(''),
        cnpj: new FormControl(''),
        telefone: new FormControl(''),
        valor: new FormControl('')
  })
 
  onSubmit(){
   
   console.log(this.exemple.value);
  }
}
