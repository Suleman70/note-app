import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTableSectionComponent } from './main-table-section.component';

describe('MainTableSectionComponent', () => {
  let component: MainTableSectionComponent;
  let fixture: ComponentFixture<MainTableSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainTableSectionComponent]
    });
    fixture = TestBed.createComponent(MainTableSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
