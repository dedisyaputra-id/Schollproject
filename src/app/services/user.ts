import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  private users = ["John Doe", "Jane Smith", "Alice Johnson"];

  getUsers(): string[] {
    return this.users;
  }

  addUser(name: string): void {{
    this.users.push(name);
  }};
}
