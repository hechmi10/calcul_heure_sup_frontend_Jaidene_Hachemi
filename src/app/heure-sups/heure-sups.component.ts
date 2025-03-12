import { Component } from '@angular/core';
import { HeureSups } from '../models/HeureSups';

@Component({
  selector: 'app-heure-sups',
  templateUrl: './heure-sups.component.html',
  styleUrl: './heure-sups.component.css'
})
export class HeureSupsComponent {
  listHeuresSups!:HeureSups[];
}
