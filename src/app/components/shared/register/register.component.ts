import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiCallService } from 'src/app/services/api-call.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:Users={
  // Id:5,
  //  Name:'Ananya',
  //    Email:'ananya@gmail.com',
  //   Contact:'9945930234',
  //    Password:'abc123@gmail.com'
};
userid1:number = 0;
ReactiveLogin=new FormGroup({
name: new FormControl('',[Validators.required]),
email: new FormControl('',[Validators.required,Validators.pattern("[^@]+@[^@]+.[a-zA-Z]{2,6}")]),
contact: new FormControl('',[Validators.required,Validators.minLength(10)]),
pwd: new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z0-9]+$")]),
cwd: new FormControl('',[Validators.required])
},)

constructor(private router:Router,private route:ActivatedRoute,private usercallservice:ApiCallService) { }

ngOnInit(): void {
this.usercallservice.getlastuserid()
    .subscribe((res:number)=>{
      
        this.userid1 = res;
        
    })
  
}

get name()
{
return this.ReactiveLogin.get('name');
}
get email()
{
return this.ReactiveLogin.get('email');
}
get contact()
{
return this.ReactiveLogin.get('contact');
}
get pwd()
{
return this.ReactiveLogin.get('pwd');
}
get cwd()
{
return this.ReactiveLogin.get('cwd');
}
Check()
{

if(this.ReactiveLogin.value.pwd != this.ReactiveLogin.value.cwd)
{
  alert("Password and confirm password must be the same ");
}
else{
  console.log(this.ReactiveLogin.value);
  this.usercallservice.getlastuserid();
  console.log(this.userid1);
    this.user.Id= this.userid1;
    this.user.Name =this.ReactiveLogin.value.name;

    this.user.Email =this.ReactiveLogin.value.email;
    this.user.Contact=this.ReactiveLogin.value.contact;
   
    this.user.Password=this.ReactiveLogin.value.pwd;
    
  
  this.usercallservice.create(this.user);
  console.log(this.user);
  this.router.navigate(["/login"]);
    alert("registration successfull")
}

}
}