import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  info: any;
  name: string;
  isLoggedIn = false;
  roles: string;
  constructor(private token: TokenStorageService,private router: Router) { }
 
  ngOnInit() {
    this.name= this.token.getUsername();
    if(this.name == null || this.name === "")
    {
      alert("Please login to continue");
      this.router.navigate(['/home']);
    }
  }
 
}
