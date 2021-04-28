import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OlympicWinnersTableComponent} from './olympic-winners-table.component';

describe('OlympicWinnersTableComponent', () => {
  let component: OlympicWinnersTableComponent;
  let fixture: ComponentFixture<OlympicWinnersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OlympicWinnersTableComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlympicWinnersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
