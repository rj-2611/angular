import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';
import { BookrideService } from '../Service/bookride.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { BookrideInfo } from '../bookride/bookride-Info';
import { BookrideresponseInfo } from '../bookride/bookrideresponse-info';
import { parseHttpResponse } from 'selenium-webdriver/http';



@Component({
  selector: 'app-bookride',
  templateUrl: './bookride.component.html',
  styleUrls: ['./bookride.component.css']
})
export class BookrideComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string;
  name: string;
  private loginInfo: AuthLoginInfo;
  info: any;
  bookrideInfo: BookrideInfo;
  bookrideresp: BookrideresponseInfo[];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router: Router,private bookrideservice: BookrideService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
      this.name = this.tokenStorage.getUsername();
    }
    this.info = {
      tokenStorage: this.tokenStorage.getToken(),
      username: this.tokenStorage.getUsername(),
      authorities: this.tokenStorage.getAuthorities()
    };
  }
  parseresp(bookrideresp)
  {
    alert("Your trip ID is : " +bookrideresp.tripId +"\n"+ "Your booking has been assigned to " + bookrideresp.empName +"\n"+"You can reach to him on " +bookrideresp.empMobile);
  }

  onSubmitBook() {
    this.bookrideInfo = new BookrideInfo(
      this.form.source,
      this.form.destination,
      this.form.vehicleType);

      this.bookrideservice.bookridemethod(this.bookrideInfo).subscribe(
        data => {
          this.parseresp(data);
          this.router.navigate(['/trip']);
        }

      )
  }


}
