import { Component, OnInit } from '@angular/core';
import { TripService } from '../Service/trip.service';
import { Tripinfo } from '../Model/tripinfo';
import { TokenStorageService } from '../auth/token-storage.service';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  info: any;
  name: string;
  isLoggedIn = false;
  roles: string;
  trips: Tripinfo[];
  constructor(private token: TokenStorageService,private tripInfoService: TripService) { }
 
  ngOnInit() {
    this.tripInfoService.findAll().subscribe(data => {
      this.trips = data;
      console.log(this.trips);
    });

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
  

  filter() {
    $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  }
}
