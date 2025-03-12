import { HeureSups } from "./HeureSups"
export class Employe{
    public id?:number
    public name!:string
    public surname!:string
    public poste!:string
    public heures_sups!:HeureSups[];
}