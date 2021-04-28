import {Component, Input, OnInit} from '@angular/core';
import {OlympicWinnerDetail} from '../../../shared/model/olympic-winner-detail';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({height: '0px', opacity: '0'})),
      state('expanded', style({height: '*', opacity: '1'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])]
})
export class PersonDetailComponent implements OnInit {
  @Input() olympicDetail: OlympicWinnerDetail;
  @Input() animationState: string;

  constructor() {
  }

  ngOnInit(): void {

  }

  public formattedMedal(medal: number): string {
    medal = Number(medal);
    if (medal === 1) {
      return 'Zlato';
    }
    if (medal === 2) {
      return 'Striebro';
    }
    if (medal === 3) {
      return 'Bronz';
    }
    return medal + '.miesto';
  }

  isWoman(name: string): boolean {
    const length = name.length;
    const lastCharacter = name[length - 1];
    return lastCharacter === 'a';
  }
}
