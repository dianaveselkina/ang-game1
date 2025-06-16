import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-triangle',
  imports: [CommonModule],
  templateUrl: './triangle.html',
  styleUrl: './triangle.css'
})
export class Triangle {
 @Input() dataFromParent: any;
}


  