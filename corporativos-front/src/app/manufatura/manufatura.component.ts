import { Component, OnInit } from '@angular/core';
import { ManufaturaService} from '../shared/services/manufatura.service';
import { Produto } from '../shared/models/produto';
@Component({
  selector: 'app-manufatura',
  templateUrl: './manufatura.component.html',
  styleUrls: ['./manufatura.component.scss']
})
export class ManufaturaComponent implements OnInit {

  produtos: Produto[];
  constructor(private _manufaturaService: ManufaturaService) { }

  ngOnInit() {
    this.getProdutos()
  }
  getProdutos(){
    this._manufaturaService.get()
    .subscribe(
      data => this.produtos = data,
      err => console.log(err),
      () => console.log(this.produtos)
    )
  }
}
