import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {GenericService} from '../services/generic.service';
@Injectable({
  providedIn: 'root'
})
export class ManufaturaService extends GenericService{
  constructor(http: Http) { 
    super(http, "http://localhost:1337/produto")
  }
}
