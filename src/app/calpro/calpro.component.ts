import { Component } from '@angular/core';

@Component({
  selector: 'app-calpro',
  templateUrl: './calpro.component.html',
  styleUrls: ['./calpro.component.css']
})
export class CalproComponent {
  produto: any = {};

  salvarProduto() {
    console.log(this.produto);

  }
}
