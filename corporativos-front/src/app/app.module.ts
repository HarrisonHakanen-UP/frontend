import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { ComprasComponent } from './compras/compras.component';
import { VendasComponent } from './vendas/vendas.component';
import { ManufaturaComponent } from './manufatura/manufatura.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { AdminComponent } from './admin/admin.component';
import { RhComponent } from './rh/rh.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PessoasComponent,
    ComprasComponent,
    VendasComponent,
    ManufaturaComponent,
    InventarioComponent,
    ProdutosComponent,
    AdminComponent,
    RhComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
