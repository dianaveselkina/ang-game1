import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Counter } from '../counter/counter';
import { Button } from '../button/button';
import { Triangle } from '../triangle/triangle';
import { CommonModule } from '@angular/common';
import { Circle } from '../circle/circle';

@Component({
  selector: 'app-board',
  imports: [Header, Counter, Button, Triangle, CommonModule, Circle],
  templateUrl: './board.html',
  styleUrl: './board.css',
})
export class Board {
  counter: number = 0;
  style1 = {
    cursor: 'pointer',
    display: 'inline-block',
    border: '2rem solid transparent',
    borderBottom: '2rem solid orange',
  };
  style2 = {
    cursor: 'pointer',
    display: 'inline-block',
    border: '3rem solid transparent',
    borderLeft: '3rem solid blue',
  };
  style3 = {
    cursor: 'pointer',
    display: 'inline-block',
    border: '1rem solid transparent',
    borderBottom: '1rem solid green',
  };
  style4 = {
    cursor: 'pointer',
    display: 'inline-block',
    border: '4rem solid transparent',
    borderBottom: '4rem solid yellow',
  };
  style5 = {
    cursor: 'pointer',
    display: 'inline-block',
    border: '5rem solid transparent',
    borderBottom: '5rem solid black',
  };
  style6 = {
    cursor: 'pointer',
    display: 'inline-block',
    border: '5rem solid transparent',
    borderRight: '5rem solid pink',
  };
  style7 = {
    cursor: 'pointer',
    display: 'inline-block',
    border: '3.5rem solid transparent',
    borderBottom: '3.5rem solid grey',
  };
  style8 = {
    cursor: 'pointer',
    display: 'inline-block',
    border: '1rem solid transparent',
    borderBottom: '1rem solid violet',
  };
  style9 = {
    cursor: 'pointer',
    display: 'inline-block',
    border: '4rem solid transparent',
    borderTop: '4rem solid red',
  };
  style10 = {
    cursor: 'pointer',
    display: 'inline-block',
    border: '2rem solid transparent',
    borderBottom: '2rem solid gold',
  };

  circles: {
    id: number;
    visible: boolean;
    color: string;
    size: number;
    borderRadius?: number | string;
    position?: string;
    top?: number | string;
    left?: number | string;
    right?: number | string;
    bottom?: number | string;
    cursor: string;
  }[] = [
    {
      id: 1,
      cursor: 'pointer',
      visible: true,
      color: 'red',
      size: 100,
      borderRadius: '50%',
      position: 'absolute',
      top: '10rem',
      right: '31rem',
    },
    {
      id: 2,
      cursor: 'pointer',
      visible: true,
      color: 'yellow',
      size: 70,
      borderRadius: '50%',
      position: 'absolute',
      top: '16rem',
      right: '7rem',
    },
    {
      id: 3,
      cursor: 'pointer',
      visible: true,
      color: 'grey',
      size: 60,
      borderRadius: '50%',
      position: 'absolute',
      bottom: '14rem',
      right: '5rem',
    },
    {
      id: 4,
      cursor: 'pointer',
      visible: true,
      color: 'black',
      size: 30,
      borderRadius: '50%',
      position: 'absolute',
      top: '10rem',
      right: '12rem',
    },
    {
      id: 5,
      cursor: 'pointer',
      visible: true,
      color: 'violet',
      size: 50,
      borderRadius: '50%',
      position: 'absolute',
      top: '16rem',
      left: '7rem',
    },
    {
      id: 6,
      cursor: 'pointer',
      visible: true,
      color: 'orange',
      size: 20,
      borderRadius: '50%',
      position: 'absolute',
      bottom: '18rem',
      right: '5rem',
    },
    {
      id: 7,
      cursor: 'pointer',
      visible: true,
      color: 'blue',
      size: 90,
      borderRadius: '50%',
      position: 'absolute',
      top: '7rem',
      left: '12rem',
    },
    {
      id: 8,
      cursor: 'pointer',
      visible: true,
      color: 'green',
      size: 80,
      borderRadius: '50%',
      position: 'absolute',
      bottom: '16rem',
      left: '7rem',
    },
    {
      id: 9,
      cursor: 'pointer',
      visible: true,
      color: 'white',
      size: 40,
      borderRadius: '50%',
      position: 'absolute',
      bottom: '19rem',
      right: '20rem',
    },
  ];

  showMessage: boolean = false;
  MessageTimeoutId: any;
  handleCircleClick(id: number): void {
    const circle = this.circles.find((c) => c.id === id);
    if (circle && circle.visible) {
      circle.visible = false;
      this.show();
    }
  }

  show(): void {
    this.showMessage = true;
    if (this.MessageTimeoutId) {
      clearTimeout(this.MessageTimeoutId);
    }
    this.MessageTimeoutId = setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  }
  showTriangle1: boolean = true;
  showTriangle2: boolean = true;
  showTriangle3: boolean = true;
  showTriangle4: boolean = true;
  showTriangle5: boolean = true;
  showTriangle6: boolean = true;
  showTriangle7: boolean = true;
  showTriangle8: boolean = true;
  showTriangle9: boolean = true;
  showTriangle10: boolean = true;

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
      case 6:
        if (this.showTriangle6) {
          this.showTriangle6 = false;
          this.counter++;
        }
        break;
      case 7:
        if (this.showTriangle7) {
          this.showTriangle7 = false;
          this.counter++;
        }
        break;
      case 8:
        if (this.showTriangle8) {
          this.showTriangle8 = false;
          this.counter++;
        }
        break;
      case 9:
        if (this.showTriangle9) {
          this.showTriangle9 = false;
          this.counter++;
        }
        break;
      case 10:
        if (this.showTriangle10) {
          this.showTriangle10 = false;
          this.counter++;
        }
        break;
    }
  }
}
