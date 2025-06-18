import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Counter } from '../counter/counter';
import { Button } from '../button/button';
import { Triangle } from '../triangle/triangle';
import { CommonModule } from '@angular/common';
import { Circle } from '../circle/circle';

@Component({
  selector: 'app-board',
  imports: [Header, Counter, Button, Triangle, CommonModule, Circle ],
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

circles: {id:number; visible:boolean; color:string; size:number; borderRadius?: number | string; position?: string; top?: number | string; left?: number | string;}[] = [
  { id: 1, visible: true, color: 'red', size: 100, borderRadius: '50%', position: 'absolute', top: '10rem', left: '12rem' },
  { id: 2, visible: true, color: 'green', size: 70, borderRadius: '50%', position: 'absolute', top: '16rem', left: '7rem' },
  { id: 3, visible: true, color: 'blue', size: 60, borderRadius: '50%', position: 'absolute', top: 14, left: '5rem' }
    
  ];

  
  handleCircleClick(id: number): void {
    const circle = this.circles.find(t => t.id === id);
    if (circle && circle.visible) {
      circle.visible = false;
      
    }
  }
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




