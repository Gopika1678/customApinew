import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountfruitsComponent } from './countfruits.component';

describe('CountfruitsComponent', () => {
  let component: CountfruitsComponent;
  let fixture: ComponentFixture<CountfruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountfruitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountfruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
