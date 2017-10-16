import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MATERIAL_COMPATIBILITY_MODE,
  MatInputModule,
  MatButtonModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,MatToolbarModule,MatIconModule,
    MatCardModule,MatDialogModule,MatInputModule,
    MatButtonModule,MatListModule
  ],
  declarations: [],
  exports:[MatToolbarModule,MatIconModule,MatCardModule,MatDialogModule,
    MatInputModule,MatButtonModule,MatListModule],
  providers: [
    { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }
  ],
})
export class MaterialModule { }
