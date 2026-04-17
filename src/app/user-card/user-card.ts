import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { User } from '../services/user';
@Component({
  selector: 'app-user-card',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  constructor(private userService: User) {
    this.users = this.userService.getUsers();
}

  addUser(name: string){
    this.userService.addUser(name);
    this.users = this.userService.getUsers();
  }

  users: string [] = [];

  name = input<string>();
  product = input<any>();
  userClicked = output<string>();
  kirim (){
    this.userClicked.emit('Hello dari child user card');
  }

  private route = inject(ActivatedRoute);
  userCardId: string | null = null;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userCardId = params.get('id');
    });
  }
}
