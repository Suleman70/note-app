import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonEditDefaultComponent } from './lesson-edit-default.component';

describe('LessonEditDefaultComponent', () => {
  let component: LessonEditDefaultComponent;
  let fixture: ComponentFixture<LessonEditDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessonEditDefaultComponent]
    });
    fixture = TestBed.createComponent(LessonEditDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
