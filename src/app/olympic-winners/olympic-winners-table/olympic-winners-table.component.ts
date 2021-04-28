import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {OlympicService} from '../shared/services/olympic.service';
import {OlympicWinner} from '../shared/model/olympic-winner';
import {MatTableDataSource} from '@angular/material/table';
import {SortDirection} from './model/sort-direction.enum';
import {MatPaginator} from '@angular/material/paginator';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {OlympicWinnerDetail} from '../shared/model/olympic-winner-detail';

@Component({
  selector: 'app-olympic-winners-table',
  templateUrl: './olympic-winners-table.component.html',
  styleUrls: ['./olympic-winners-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({height: '0px', opacity: '0'})),
      state('expanded', style({height: '*', opacity: '1'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ],
})
export class OlympicWinnersTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('year') year: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[];
  expandedElement: OlympicWinnerDetail | null;

  constructor(private olympicService: OlympicService) {
    this.displayedColumns = ['avatar', 'name', 'surname', 'year', 'typeOfOlympics', 'place', 'discipline'];
    this._data = [];
    this.actualizeTable().then();
    this.yearSortDirection = 'ascending';
    this.yearSortStateNumber = 0;
    this.olympicService.onOlympianDelete.subscribe((response) => this.deleteOlympian(response));
  }

  private _data: OlympicWinner[];

  get data(): OlympicWinner[] {
    return this._data;
  }

  set data(value: OlympicWinner[]) {
    this._data = value;
  }

  private _dataSource: any;

  get dataSource(): any {
    return this._dataSource;
  }

  set dataSource(value: any) {
    this._dataSource = value;
  }

  private _yearSortDirection: string;

  get yearSortDirection(): string {
    return this._yearSortDirection;
  }

  set yearSortDirection(value: string) {
    this._yearSortDirection = value;
  }

  private _yearSortStateNumber: number;

  get yearSortStateNumber(): number {
    return this._yearSortStateNumber;
  }

  set yearSortStateNumber(value: number) {
    this._yearSortStateNumber = value;
  }

  deleteOlympian(id: number): void {
    const removedData = this.data.filter((olympian) => olympian.id === id);
    removedData.forEach(() => {
      const index = this.data.findIndex((olympian) => {
        return olympian.id === id;
      });

      if (index !== -1) {
        this.data.splice(index, 1);
      }
    });
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  ngOnInit(): void {
    this.actualizeTable().then();
  }

  sortYear(): void {
    let data: OlympicWinner[] = this.dataSource.filteredData;
    if (this.yearSortDirection === 'ascending') {
      data = data.sort((f, s) => f.year - s.year);
    }
    if ((this.yearSortDirection === 'descending')) {
      data = data.sort((f, s) => s.year - f.year);
    }
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.yearSortStateNumber++;
    if (this.yearSortStateNumber === 3) {
      this.yearSortStateNumber = 0;
    }
    this.yearSortDirection = SortDirection[this.yearSortStateNumber];
  }

  public isWoman(name: string): boolean {
    const length = name.length;
    const lastCharacter = name[length - 1];
    return lastCharacter === 'a';
  }

  private async actualizeTable(): Promise<void> {
    this.olympicService.getOlympicWinners().subscribe(res => {
        this._data = JSON.parse(JSON.stringify(res));
        this.dataSource = new MatTableDataSource(this._data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    );
  }
}
