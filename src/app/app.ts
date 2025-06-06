import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Counter } from './counter/counter';
import { Button } from './button/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Counter, Button],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ang-game1';
}
