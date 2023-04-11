import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpWorkComponent } from './exp-work.component';

describe('ExpWorkComponent', () => {
  let component: ExpWorkComponent;
  let fixture: ComponentFixture<ExpWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
