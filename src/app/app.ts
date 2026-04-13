import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { count } from 'rxjs';
import { UserCard } from './user-card/user-card';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, UserCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Schollproject');
  //userName : string = "Dedi";
  count : number = 0;
  nama: string = "";
  isLogin: boolean = false;
   product = input<any>();
  products = [
    { name: 'Sepatu', price: 500000 },
    { name: 'Baju', price: 200000 },
    { name: 'Topi', price: 100000 }
  ];


  tambah () : number {
    return this.count++;  
  }

  handleUserClicked(message: string) {
    alert('Pesan dari child:' + message);
  }
}
