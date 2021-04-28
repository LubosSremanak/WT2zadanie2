import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddOlympianComponent} from './add-olympian.component';

describe('AddOlympianComponent', () => {
  let component: AddOlympianComponent;
  let fixture: ComponentFixture<AddOlympianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddOlympianComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOlympianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
