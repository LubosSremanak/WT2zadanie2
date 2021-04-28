import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OlympianDataFormComponent} from './olympian-data-form.component';

describe('OlympianDataFormComponent', () => {
  let component: OlympianDataFormComponent;
  let fixture: ComponentFixture<OlympianDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OlympianDataFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlympianDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
