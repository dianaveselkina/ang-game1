import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Triangle } from './triangle';

describe('Triangle', () => {
  let component: Triangle;
  let fixture: ComponentFixture<Triangle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Triangle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Triangle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
