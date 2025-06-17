import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Counter } from '../counter/counter';
import { Button } from '../button/button';
import { Triangle } from '../triangle/triangle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  imports: [Header, Counter, Button, Triangle, CommonModule ],
  templateUrl: './board.html',
  styleUrl: './board.css'
})
export class Board {
style1 = { backgroundColor: 'red', width: '2rem', height: '2rem'}; // первый стиль
style2 = { backgroundColor: 'blue', width: '3rem', height: '3rem' }; // второй стиль
style3 = { backgroundColor: 'green', width: '1rem', height: '1rem' }; // третий стиль
style4 = { backgroundColor: 'yellow', width: '4rem', height: '4rem' }; // первый стиль
style5 = { backgroundColor: 'black', width: '2rem', height: '2rem' }; // второй стиль
}



