import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-triangle',
  imports: [CommonModule],
  templateUrl: './triangle.html',
  styleUrl: './triangle.css'
})
export class Triangle {
 @Input() dataFromParent: any;
  @Output() click = new EventEmitter<void>();

  onClick(): void {
    this.click.emit();
  }
}


  