import { Employe } from "./Employe";
import { Tarif } from "./Tarif";
export class HeureSups{
    public id?:number;
    public date!:Date;
    public nb_heures!:number;
    public employe!:Employe;
    public tarif!:Tarif;
}