import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {GenericService} from '../services/generic.service';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  constructor(http: Http) {
    // super(http, "https://swapi.co/api/people/1")
  }
}
