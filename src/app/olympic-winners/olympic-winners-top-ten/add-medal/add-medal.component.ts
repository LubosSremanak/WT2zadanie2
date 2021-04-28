import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OlympicService} from '../../shared/services/olympic.service';
import {Olympian} from '../../shared/model/olympian';
import {OlympicGames} from '../../shared/model/olympic-games';
import {Medal} from '../../shared/model/medal';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-medal',
  templateUrl: './add-medal.component.html',
  styleUrls: ['./add-medal.component.css', '../olympian-data-form/olympian-data-form.component.css']
})
export class AddMedalComponent implements OnInit {
  olympians: Olympian[];
  olympicGames: OlympicGames[];

  constructor(private olympicService: OlympicService, private router: Router) {
  }

  private _data: FormGroup;

  get data(): FormGroup {
    return this._data;
  }

  set data(value: FormGroup) {
    this._data = value;
  }

  ngOnInit(): void {
    this._data = new FormGroup({
      discipline: new FormControl(null, [
        Validators.required
      ]),
      medal: new FormControl(null, [
        Validators.required
      ]),
      olympian: new FormControl(null, [
        Validators.required
      ]),
      olympicGames: new FormControl(null, [
        Validators.required
      ]),
    });
    this.olympicService.getAllOlympians().subscribe((response) => {
      this.olympians = JSON.parse(JSON.stringify(response));
    });
    this.olympicService.getAllOlympicGames().subscribe((response) => {
      this.olympicGames = JSON.parse(JSON.stringify(response));
    });
  }

  onSubmit(data: FormGroup): void {

    if (data.valid) {
      const medal: Medal = {
        discipline: data.value.discipline,
        personId: data.value.olympian,
        placing: data.value.medal,
        ohId: data.value.olympicGames
      };
      this.olympicService.addMedal(medal).subscribe((response) => {
        console.log(response);
        this.router.navigate(['']).then();
      });
    }

  }
}
