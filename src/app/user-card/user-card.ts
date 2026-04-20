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
  users: any[] = [];

  constructor(private userService: User) {}

  ngOnInit() {
    this.userService.getUsers().subscribe({
       next: (data) => {
        this.users = data;
        console.log('Data berhasil diambil:', this.users);
      },
      error: (err) => {
        console.error('Error ambil data:', err);
      }
    })
  }

  name: string = '';
  email: string = '';

  saveUser(user: any){
    const data = {
      name : this.name,
      email : this.email
    }
    this.userService.addUser(data).subscribe({
      next: (data) => {
        alert('User berhasil ditambahkan!');
        console.log('User berhasil ditambahkan:', data);
        this.users.push(data);
      },
      error: (err) => {
        alert('Gagal menambahkan user!');
        console.error('Error menambahkan user:', err);
      }
    });
  }

  updateUser(id: number, user: any){
    const data = {
      name : this.name,
      email : this.email
    }
    this.userService.updateUser(id, data).subscribe({
      next: (data) => {
        alert('User berhasil diupdate!');
        console.log('User berhasil diupdate:', data);
        const index = this.users.findIndex((u) => u.id === id);
        if (index !== -1) {
          this.users[index] = data;
        }
      },
      error: (err) => {
        alert('Gagal mengupdate user!');
        console.error('Error mengupdate user:', err);
      }
    });
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe({
      next: () => {
        alert('User berhasil dihapus!');
        console.log('User berhasil dihapus');
        this.users = this.users.filter((u) => u.id !== id);
      },
      error: (err) => {
        alert('Gagal menghapus user!');
        console.error('Error menghapus user:', err);
      }
    });
  }
}
