import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OlympicWinnerDetailComponent} from './olympic-winner-detail.component';

describe('OlympicWinnerDetailComponent', () => {
  let component: OlympicWinnerDetailComponent;
  let fixture: ComponentFixture<OlympicWinnerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OlympicWinnerDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlympicWinnerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
