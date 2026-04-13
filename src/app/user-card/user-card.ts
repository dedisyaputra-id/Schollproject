import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-card',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  name = input<string>();
  product = input<any>();
  userClicked = output<string>();
  kirim (){
    this.userClicked.emit('Hello dari child user card');
  }
}
