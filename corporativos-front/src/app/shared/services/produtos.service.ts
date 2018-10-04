import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {GenericService} from '../services/generic.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService extends GenericService{

  constructor(http: Http) {
    super(http, "http://localhost:3002/produto/listar")
    super(http, "http://localhost:3002/produto/cadastrarProduto")
  }
}
