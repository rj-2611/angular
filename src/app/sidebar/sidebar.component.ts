import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  info: any;
  name: string;
  isLoggedIn = false;
  roles: string;
  constructor(private token: TokenStorageService,private router: Router) { }
 
  ngOnInit() {
    this.name= this.token.getUsername();
    if (this.token.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.token.getAuthorities();
      this.name = this.token.getUsername();
    }

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      name: this.token.getUsername()
    };
    console.log(this.name);
    console.log(this.info);
  }
 
  logout() {
    this.token.signOut();
    this.router.navigate(['/home']);
  }
}
