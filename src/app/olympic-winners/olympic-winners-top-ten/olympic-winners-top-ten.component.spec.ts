import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OlympicWinnersTopTenComponent} from './olympic-winners-top-ten.component';

describe('OlympicWinnersTopTenComponent', () => {
  let component: OlympicWinnersTopTenComponent;
  let fixture: ComponentFixture<OlympicWinnersTopTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OlympicWinnersTopTenComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlympicWinnersTopTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
