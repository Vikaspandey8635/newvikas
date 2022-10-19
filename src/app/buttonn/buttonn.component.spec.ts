import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonnComponent } from './buttonn.component';

describe('ButtonnComponent', () => {
  let component: ButtonnComponent;
  let fixture: ComponentFixture<ButtonnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
