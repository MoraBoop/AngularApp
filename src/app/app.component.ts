import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  codigo = new FormControl('');
  producto = new FormControl('');
  precio = new FormControl('');
  descripcion = new FormControl('');

  detalles: Detalles[] = [
    { codigo: 1, producto: "Arroz", precio: 2.1, descripcion: "Marca saman" },
    { codigo: 2, producto: "Gaseosa", precio: 2.5, descripcion: "Marca Koka Kola" },
    { codigo: 3, producto: "Galleta", precio: 5, descripcion: "Orea y morochas" },
    { codigo: 4, producto: "Aceite", precio: 4, descripcion: "para freir" },
  ] 

  seleccionar(objeto){
    this.codigo.setValue(objeto.codigo);
    this.producto.setValue(objeto.producto);
    this.precio.setValue(objeto.precio);
    this.descripcion.setValue(objeto.descripcion);
  }

  eliminar(){
    for(let x = 0; x < this.detalles.length; x++){
      
    }
  }

  guardar(){

  }

  actualizar(){

  }

}
export class Detalles{
  codigo: number;
  producto: string;
  precio: number;
  descripcion: string;
}
