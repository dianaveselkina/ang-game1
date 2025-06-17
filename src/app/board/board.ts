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
  counter: number = 0;
style1 = { cursor: 'pointer', backgroundColor: 'red', width: '2rem', height: '2rem'}; // первый стиль
style2 = { cursor: 'pointer', backgroundColor: 'blue', width: '3rem', height: '3rem' }; // второй стиль
style3 = { cursor: 'pointer', backgroundColor: 'green', width: '1rem', height: '1rem' }; // третий стиль
style4 = { cursor: 'pointer', backgroundColor: 'yellow', width: '4rem', height: '4rem' }; // первый стиль
style5 = { cursor: 'pointer', backgroundColor: 'black', width: '2rem', height: '2rem' }; // второй стиль


  
  showTriangle1: boolean = true;
  showTriangle2: boolean = true;
  showTriangle3: boolean = true;
  showTriangle4: boolean = true;
  showTriangle5: boolean = true;

  handleTriangleClick(triangleNumber: number): void {
    switch (triangleNumber) {
      case 1:
        if (this.showTriangle1) {
          this.showTriangle1 = false;
          this.counter++;
        }
        break;
      case 2:
        if (this.showTriangle2) {
          this.showTriangle2 = false;
          this.counter++;
        }
        break;
      case 3:
        if (this.showTriangle3) {
          this.showTriangle3 = false;
          this.counter++;
        }
        break;
      case 4:
        if (this.showTriangle4) {
          this.showTriangle4 = false;
          this.counter++;
        }
        break;
      case 5:
        if (this.showTriangle5) {
          this.showTriangle5 = false;
          this.counter++;
        }
        break;
    }
  }
}




