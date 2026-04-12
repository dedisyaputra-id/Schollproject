import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Schollproject');
  //userName : string = "Dedi";
  count : number = 0;
  nama: string = "";
  isLogin: boolean = false;


  tambah () : number {
    return this.count++;  
  }
}
