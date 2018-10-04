import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { VendasService} from '../shared/services/vendas.service';
import { Vendas } from '../shared/models/vendas';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {

vendas: Venda[];
  constructor(private _vendasService: VendasService) { }

  ngOnInit() {
    this.getVendas()
  }
//   getVendas(){
//     this._vendasService.get()
//     .subscribe(
//       data => this.vendas = data,
//       err => console.log(err),
//       () => console.log(this.vendas)
//     )
//   },
// }
