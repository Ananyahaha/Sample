import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { Observable,Subscription, interval  } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  curruser?:Users;
  router: any;
  updateSubscription: Subscription | undefined;
  constructor() { }

  ngOnInit(): void {
    this.curruser = JSON.parse(localStorage.getItem("user")!)
    this.updateSubscription = interval(1000).subscribe(
    )
  }
  logout(){
    localStorage.removeItem("user");
    this.curruser = undefined;
    this.router.navigate(['/home'])
}
}
