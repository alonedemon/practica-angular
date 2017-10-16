import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { ErrorLoginComponent } from "../error-login/error-login.component";
@Component({
  selector: 'ap-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string='';
  password:string='';
  urlImage:string="http://librarianinblack.net/librarianinblack/wp-content/uploads/2014/10/Spy.png";
  constructor(private router:Router,
  public dialog:MatDialog) { }

  ngOnInit() {
  }
  validate():void{
    console.log(this.username);
    if(this.username==='test' && this.password==='test'){
      this.router.navigate(['/dashboard']);
    }
    else{
      this.openDialog();
    }
  }
  openDialog():void{
    const dialogRef = this.dialog.open(ErrorLoginComponent, {
      height: '200px',
      width:'300px'
    });
  }
}
