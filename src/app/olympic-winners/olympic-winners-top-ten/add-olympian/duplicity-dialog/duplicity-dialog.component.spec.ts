import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicityDialogComponent } from './duplicity-dialog.component';

describe('DuplicityDialogComponent', () => {
  let component: DuplicityDialogComponent;
  let fixture: ComponentFixture<DuplicityDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicityDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
