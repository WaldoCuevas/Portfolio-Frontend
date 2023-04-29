import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationWorkExpComponent } from './education-work-exp.component';

describe('EducationWorkExpComponent', () => {
  let component: EducationWorkExpComponent;
  let fixture: ComponentFixture<EducationWorkExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationWorkExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationWorkExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
