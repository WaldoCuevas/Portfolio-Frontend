import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologysComponent } from './technologys.component';

describe('TechnologysComponent', () => {
  let component: TechnologysComponent;
  let fixture: ComponentFixture<TechnologysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
