import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OlympicWinnerDetail} from '../../shared/model/olympic-winner-detail';
import {OlympicService} from '../../shared/services/olympic.service';

@Component({
  selector: 'app-olympian-data-form',
  templateUrl: './olympian-data-form.component.html',
  styleUrls: ['./olympian-data-form.component.css']
})
export class OlympianDataFormComponent implements OnInit {
  @Output() formData: EventEmitter<OlympicWinnerDetail> = new EventEmitter();
  @Input() oldData: OlympicWinnerDetail;

  constructor(private olympicService: OlympicService) {
    this.edit = true;
  }

  private _edit: boolean;

  get edit(): boolean {
    return this._edit;
  }

  set edit(value: boolean) {
    this._edit = value;
  }

  private _data: FormGroup;

  get data(): FormGroup {
    return this._data;
  }

  set data(value: FormGroup) {
    this._data = value;
  }

  ngOnInit(): void {
    this.setNullOldData();
    this._data = new FormGroup({
      name: new FormControl(this.oldData.name, [
        Validators.required,
        Validators.minLength(1)]),
      surname: new FormControl(this.oldData.surname, [
        Validators.required,
        Validators.minLength(1)]),
      birthDay: new FormControl(this.formatDate(this.oldData.birthDay), [
        Validators.required,
        Validators.minLength(1)]),
      birthPlace: new FormControl(this.oldData.birthPlace, [
        Validators.required,
        Validators.minLength(1)]),
      birthCountry: new FormControl(this.oldData.birthCountry, [
        Validators.required,
        Validators.minLength(1)]),
      deathDay: new FormControl(this.formatDate(this.oldData.deathDay), []),
      deathPlace: new FormControl(this.oldData.deathPlace, []),
      deathCountry: new FormControl(this.oldData.deathCountry, []),
    });
  }

  addZero(dateAttribute: string): string {
    if (dateAttribute.length === 1) {
      return '0' + dateAttribute;
    }
    return dateAttribute;
  }

  checkAndAddZero(dateAttributes: string[]): void {
    for (let i = 0; i <= 2; i++) {
      dateAttributes[i] = this.addZero(dateAttributes[i]);
    }
  }


  formatDate(date: string): string {
    if (!date) {
      return;
    }
    let dateAttributes = date.split('.');
    dateAttributes = [dateAttributes[2], dateAttributes[1], dateAttributes[0]];
    this.checkAndAddZero(dateAttributes);
    return dateAttributes.join('-');
  }

  onSubmit(data: FormGroup): void {

    if (data.valid) {
      this.formData.emit(data.value);
    }

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

  deletePlace(id: number): void {
    const index = this.oldData[0].placing.findIndex((place) => {
      return place.id === id;
    });
    if (index !== -1) {
      this.oldData[0].placing.splice(index, 1);
    }
    this.olympicService.removeMedal(id).subscribe((response) => {
      console.log(response);
    });
  }

  private setNullOldData(): void {
    if (!this.oldData) {
      this.edit = false;
      this.oldData = {
        birthCountry: '',
        birthDay: '',
        birthPlace: '',
        deathCountry: '',
        deathDay: '',
        deathPlace: '',
        id: 0,
        surname: '',
        name: ''
      };
    }
  }
}
