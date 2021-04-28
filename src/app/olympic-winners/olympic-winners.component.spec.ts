import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OlympicWinnersComponent} from './olympic-winners.component';

describe('OlympicWinnersComponent', () => {
  let component: OlympicWinnersComponent;
  let fixture: ComponentFixture<OlympicWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OlympicWinnersComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlympicWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
