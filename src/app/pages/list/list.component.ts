import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private auth: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  deslogueo() {
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }
}
