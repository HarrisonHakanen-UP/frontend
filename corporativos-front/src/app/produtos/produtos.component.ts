import { Component, OnInit } from '@angular/core';
import { ProdutosService} from '../shared/services/produtos.service';
import { Produto } from '../shared/models/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[];
  produtoPost: Produto = new Produto;
  constructor(private _produtosService: ProdutosService) { }

  ngOnInit() {
    this.getProdutos()
  }
  getProdutos(){
    this._produtosService.get()
    .subscribe(
      data => this.produtos = data,
      err => console.log(err),
      () => console.log(this.produtos)
    )
  }
  postProduto(){
    this._produtosService.post(this.produtoPost)
    .subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }

  }
