import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {GenericService} from '../services/generic.service';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProdutosService extends GenericService{
  readonly ROOT_URL = environment.apiUrl;
  constructor(http: Http) {
    super(http, "http://localhost:3002/produto/listar")
    super(http, "http://localhost:3002/produto/cadastrarProduto")
  }
}
