import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditOlympianComponent} from './edit-olympian.component';

describe('EditOlympianComponent', () => {
  let component: EditOlympianComponent;
  let fixture: ComponentFixture<EditOlympianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditOlympianComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOlympianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
