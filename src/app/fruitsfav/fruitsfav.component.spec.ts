import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsfavComponent } from './fruitsfav.component';

describe('FruitsfavComponent', () => {
  let component: FruitsfavComponent;
  let fixture: ComponentFixture<FruitsfavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitsfavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitsfavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
