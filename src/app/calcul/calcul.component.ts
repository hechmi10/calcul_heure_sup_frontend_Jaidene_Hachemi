import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrl: './calcul.component.css'
})
export class CalculComponent {
  calcul_data=new FormGroup({
    date_debut:new FormControl('',[Validators.required]),
    date_fin:new FormControl('',[Validators.required])
  })
}
