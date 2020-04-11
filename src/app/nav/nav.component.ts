import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isUserLogin: boolean = false;
  isOpen: boolean =false;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      if(user) {
        this.isUserLogin = true
        this.authService.userId = user.uid
      } else {
        this.isUserLogin = false
        this.authService.userId = null
      }
    })
  }

  tglNavbar() {
    this.isOpen = !this.isOpen
  }

  logout(){
    this.authService.logout().then((result) => {
      this.router.navigate(['/login']);
    }).catch((err) => {
      console.log('err',err.message);
    });
  }

}
