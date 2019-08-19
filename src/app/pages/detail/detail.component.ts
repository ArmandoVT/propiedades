import { Component, OnInit } from '@angular/core';
import { PropiedadModel } from '../../models/propiedad.model';
import { NgForm } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  propiedad = new PropiedadModel();
  constructor() { }

  ngOnInit() {
  }

  addProperties( form: NgForm) {
    if ( form.invalid ) { return; }
    console.log( form );
    console.log( this.propiedad );
  }
}
