import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeureSups } from '../models/HeureSups';
import { HeureSupsComponent } from '../heure-sups/heure-sups.component';

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

  @ViewChildren(HeureSupsComponent) heure_sups!:QueryList<HeureSups>
  private heure_sup!:HeureSupsComponent

  onShowHeuresSups(){
    this.heure_sup.getAllHeuresSups();
  }


}
