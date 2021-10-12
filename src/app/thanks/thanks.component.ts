import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { NgModule } from '@angular/core';
import{NgModel}from '@angular/forms'
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  feedbackval?:any;
  curruser?:Users;
  ngOnInit(): void {
    // this.route.queryParams.subscribe((params) =>{
    //   this.bookings = JSON.parse(params.bookings);
      
    // })
    this.curruser = JSON.parse(localStorage.getItem("userlogin")!)
  this.curruser?.Name;
  }
  // logout(){
  //   localStorage.removeItem("userlogin");
  //   this.curruser = undefined;
  //   this.router.navigate(['/home'])
  // }
  submitfeedback(){
    this.feedbackval = this.feedbackval;
  //  this.bookingService.updatefeedback(this.bookings?.bookingId,this.bookings!)
  }
}

