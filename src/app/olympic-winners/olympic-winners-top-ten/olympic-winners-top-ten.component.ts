import {Component, OnInit} from '@angular/core';
import {OlympicService} from '../shared/services/olympic.service';
import {MatTableDataSource} from '@angular/material/table';
import {OlympicWinnerTopTen} from '../shared/model/olympic-winner-top-ten';
import {OlympicWinnerDetail} from '../shared/model/olympic-winner-detail';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatFabMenu} from '@angular-material-extensions/fab-menu';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-olympic-winners-top-ten',
  templateUrl: './olympic-winners-top-ten.component.html',
  styleUrls: ['./olympic-winners-top-ten.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({height: '0px', opacity: '0'})),
      state('expanded', style({height: '*', opacity: '1'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ],
})
export class OlympicWinnersTopTenComponent implements OnInit {
  displayedColumns: string[];
  expandedElement: OlympicWinnerDetail | null;
  fabButtonsMenu: MatFabMenu[];

  constructor(private olympicService: OlympicService, private router: Router, public dialog: MatDialog) {
    this.fabButtonsMenu = [
      {
        id: 1,
        imgUrl: 'assets/images/user.svg',
        color: 'primary',
        tooltip: 'Add olympian',
        tooltipPosition: 'above'
      },
      {
        id: 2,
        tooltip: 'Add medal',
        tooltipPosition: 'above',
        imgUrl: 'assets/images/medal.svg',
        color: 'primary',
      }
    ];
  }

  private _dataSource: any;

  get dataSource(): any {
    return this._dataSource;
  }

  set dataSource(value: any) {
    this._dataSource = value;
  }

  private _data: OlympicWinnerTopTen[];

  get data(): OlympicWinnerTopTen[] {
    return this._data;
  }

  set data(value: OlympicWinnerTopTen[]) {
    this._data = value;
  }

  ngOnInit(): void {
    this.displayedColumns = ['avatar', 'name', 'surname', 'birthPlace', 'goldMedals', 'edit', 'delete'];
    this._data = [];
    this.actualizeTable();
  }

  public isWoman(name: string): boolean {
    const length = name.length;
    const lastCharacter = name[length - 1];
    return lastCharacter === 'a';
  }

  openPageFromMenu(id: string | number): void {
    if (Number(id) === 1) {
      this.router.navigate(['/addOlympian']).then();
    } else {
      this.router.navigate(['/addMedal']).then();
    }

  }

  deleteOlympian(id: number): void {

    const index = this.data.findIndex((place) => {
      return place.id === id;
    });
    if (index !== -1) {
      this.olympicService.onOlympianDelete.next(id);
      this.data.splice(index, 1);
      this.dataSource = new MatTableDataSource(this._data);
    }
    this.olympicService.removeOlympian(id).subscribe((response) => {
      console.log(response);
    });
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteOlympian(id);
      }
    });
  }

  private actualizeTable(): void {
    this.olympicService.getTopTenOlympicWinners().subscribe(res => {
        this._data = JSON.parse(JSON.stringify(res));
        this.dataSource = new MatTableDataSource(this._data);
      }
    );

  }
}
