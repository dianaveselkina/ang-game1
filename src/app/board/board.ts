import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Counter } from '../counter/counter';
import { Button } from '../button/button';

@Component({
  selector: 'app-board',
  imports: [Header, Counter, Button],
  templateUrl: './board.html',
  styleUrl: './board.css'
})
export class Board {

}
