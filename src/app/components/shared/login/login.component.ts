import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:Users={
    Id:2,
     Name:'Ananya',
       Email:'ananya@gmail.com',
      Contact:'9945930234',
       Password:'abc123@gmail.com'
};
  userid1:number = 0;
  ReactiveLogin=new FormGroup({
    email: new FormControl('',[Validators.required,Validators.pattern("[^@]+@[^@]+.[a-zA-Z]{2,6}")]),
    pwd: new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z0-9]+$")])
},)

constructor(private router:Router,private route:ActivatedRoute,private usercallservice:ApiCallService) { }

ngOnInit(): void {
this.usercallservice.getlastuserid()
    .subscribe((res:number)=>{
      
        this.userid1 = res;
        
    })
  
}


get email()
{
return this.ReactiveLogin.get('email');
}
get pwd()
{
return this.ReactiveLogin.get('pwd');
}

Check()
{

  
   this.usercallservice.verifyuser(this.ReactiveLogin.value.email, this.ReactiveLogin.value.pwd)
        .subscribe((res:Users)=>{
          
            this.user!.Id= res.Id;
            this.user!.Name = res.Name;
            this.user!.Email = res.Email;
            this.user!.Contact= res.Contact;
            this.user!.Password=res.Password;
           
            console.log(this.user)
            localStorage.setItem("user",JSON.stringify(this.user));
            this.router.navigate(["/home"]);
  
            
            alert("Successfully logged ")
        })
    
   
  }
}
