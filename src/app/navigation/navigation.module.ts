import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { MaterialModule } from "../material/material.module";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  imports: [
    CommonModule,MaterialModule,AppRoutingModule
  ],
  declarations: [NavigationComponent],
  exports:[NavigationComponent]
})
export class NavigationModule { }
