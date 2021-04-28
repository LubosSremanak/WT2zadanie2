import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OlympicWinnerDetail} from '../../shared/model/olympic-winner-detail';
import {OlympicService} from '../../shared/services/olympic.service';
import {Placing} from '../../shared/model/placing';

@Component({
  selector: 'app-edit-olympian',
  templateUrl: './edit-olympian.component.html',
  styleUrls: ['./edit-olympian.component.css']
})
export class EditOlympianComponent implements OnInit {
  constructor(private olympicService: OlympicService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  private _placing: Placing[];

  get placing(): Placing[] {
    return this._placing;
  }

  set placing(value: Placing[]) {
    this._placing = value;
  }

  private _oldData: OlympicWinnerDetail;

  get oldData(): OlympicWinnerDetail {
    return this._oldData;
  }

  set oldData(value: OlympicWinnerDetail) {
    this._oldData = value;
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this._oldData = JSON.parse(JSON.stringify(data.editOlympianResolver))[0];
    });
  }

  public formatDate(date: string): string {
    if (!date || date.length === 0 || date.indexOf('-') === -1) {
      return date;
    }
    let dateAttributes = date.split('-');
    dateAttributes = [dateAttributes[2], dateAttributes[1], dateAttributes[0]];
    return dateAttributes.join('.');
  }

  onSubmit(data: OlympicWinnerDetail): void {
    data.birthDay = this.formatDate(data.birthDay);
    const id: string = this.route.snapshot.paramMap.get('id');
    data.id = Number(id);
    this.olympicService.editOlympian(data).subscribe((response) => {
      console.log(response);
      this.router.navigate(['']).then();
    });
  }
}
