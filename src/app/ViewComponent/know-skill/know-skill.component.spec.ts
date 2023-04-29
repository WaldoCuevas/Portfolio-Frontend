import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowSkillComponent } from './know-skill.component';

describe('KnowSkillComponent', () => {
  let component: KnowSkillComponent;
  let fixture: ComponentFixture<KnowSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
