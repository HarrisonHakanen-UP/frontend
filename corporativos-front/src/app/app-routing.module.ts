import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ManufaturaComponent } from './manufatura/manufatura.component';
import { RhComponent } from './rh/rh.component';
import { VendasComponent } from './vendas/vendas.component';
import { InventarioComponent } from './inventario/inventario.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { VendasComponent } from './manufatura/manufatura.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  }
  {
    path: 'manufatura',
    component: ManufaturaComponent
  }
  {
    path: 'rh',
    component: RhComponent
  }
  {
    path: 'vendas',
    component: VendasComponent
  }
  {
    path: 'inventario',
    component: InventarioComponent
  }
  {
    path: 'pessoas',
    component: PessoasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
