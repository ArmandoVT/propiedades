import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: UserModel;
  userRemember = false;
  constructor( private auth: AuthenticationService,
               private router: Router ) { }

  ngOnInit() { this.user = new UserModel(); }

  newUser( form: NgForm ){
    if ( form.invalid ) { return; }

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Cargando...'
    });
    Swal.showLoading();

    this.auth.registerUser(this.user)
        .subscribe( resp => {
          Swal.close();
          if ( this.userRemember ) {
            localStorage.setItem('email', this.user.email);
          }
          this.router.navigateByUrl('/list');
        }, (msgError) => {
          Swal.fire({
            allowOutsideClick: false,
            type: 'error',
            title: 'No se pudo crear la cuenta',
            text: 'Por favor intentalo de nuevo'
          });
        });
  }


}
