import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  curruser?:Users;
  router: any;
  constructor() { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem("userlogin");
    this.curruser = undefined;
    this.router.navigate(['/homepage'])
}
}