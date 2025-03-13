import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeureSups } from '../models/HeureSups';
import { HeureSupsService } from '../services/heure-sups/heure-sups.service';

@Component({
  selector: 'app-heure-sups',
  templateUrl: './heure-sups.component.html',
  styleUrl: './heure-sups.component.css'
})
export class HeureSupsComponent {
  listHeuresSups!:HeureSups[];

  constructor(private _service:HeureSupsService){

  }

  getAllHeuresSups(){
    this._service.getAllHeureSup().subscribe(l=>this.listHeuresSups=l)
  }

  saveHeureSup(hs:HeureSups){
    this._service.saveHeureSup(hs).subscribe();
  }

  updateHeureSup(id:number,hs:HeureSups){
    this._service.updateHeureSup(id,hs).subscribe();
  }

  deleteHeureSup(id:number){
    this._service.deleteHeureSup(id).subscribe();
  }

  getHeureSup(id:number){
    this._service.getHeureSup(id).subscribe();
  }

  @Input() date_debut!:Date
  @Input() date_fin!:Date
  @Output() heureSupsDisplayed=new EventEmitter<HeureSups[]>()
}
