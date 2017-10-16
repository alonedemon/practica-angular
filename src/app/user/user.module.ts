import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './forms/login/login.component';
import { UserService } from './user.service';
import { MaterialModule } from "../material/material.module";
import { FormsModule } from "@angular/forms";
import { ErrorLoginComponent } from './forms/error-login/error-login.component';

@NgModule({
  imports: [
    CommonModule,MaterialModule,FormsModule
  ],
  declarations: [LoginComponent, ErrorLoginComponent],
  providers: [UserService],
  entryComponents:[ErrorLoginComponent]
})
export class UserModule { }
