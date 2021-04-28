import {Component, OnInit} from '@angular/core';
import {OlympicWinnerDetail} from '../../shared/model/olympic-winner-detail';
import {OlympicService} from '../../shared/services/olympic.service';
import {Router} from '@angular/router';
import {Olympian} from '../../shared/model/olympian';
import {MatDialog} from '@angular/material/dialog';
import {DuplicityDialogComponent} from './duplicity-dialog/duplicity-dialog.component';

@Component({
  selector: 'app-add-olympian',
  templateUrl: './add-olympian.component.html',
  styleUrls: ['./add-olympian.component.css']
})
export class AddOlympianComponent implements OnInit {
  constructor(private olympicService: OlympicService,
              private router: Router,
              private dialog: MatDialog) {
  }

  private allOlympians: Olympian[];

  ngOnInit(): void {
    this.olympicService.getAllOlympians().subscribe((response) => {
      this.allOlympians = JSON.parse(JSON.stringify(response));
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

  isDuplicity(data: OlympicWinnerDetail): Olympian | null {
    return this.allOlympians.find(olympian => (olympian.name === data.name) && (olympian.surname === data.surname));
  }

  onSubmit(data: OlympicWinnerDetail): void {
    data.birthDay = this.formatDate(data.birthDay);
    if (!this.isDuplicity(data)) {
      this.olympicService.addOlympian(data).subscribe((response) => {
        console.log(response);
        this.router.navigate(['']).then();
      });
    } else {
      this.dialog.open(DuplicityDialogComponent);
    }
  }
}
