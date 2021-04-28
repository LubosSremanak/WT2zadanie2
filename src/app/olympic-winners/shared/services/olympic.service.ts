import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OlympicWinnerDetail} from '../model/olympic-winner-detail';
import {Medal} from '../model/medal';

@Injectable({
  providedIn: 'root'
})
export class OlympicService {
  public onOlympianDelete: Subject<number> = new Subject<number>();
  private readonly url = 'controller/';

  constructor(private http: HttpClient) {
  }

  getOlympicWinners(): Observable<ArrayBuffer> {
    const httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    return this.http.get(
      this.url + 'OlympicWinnersController.php',
      httpOptions
    );
  }

  getTopTenOlympicWinners(): Observable<ArrayBuffer> {
    const httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    return this.http.get(
      this.url + 'OlympicWinnersTopTenController.php',
      httpOptions
    );
  }

  getOlympicWinner(id: number): Observable<ArrayBuffer> {
    const httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    return this.http.post(
      this.url + 'OlympicWinnerController.php',
      id,
      httpOptions
    );
  }

  getAllOlympians(): Observable<ArrayBuffer> {
    const httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    return this.http.get(
      this.url + 'OlympiansController.php',
      httpOptions
    );
  }

  getAllOlympicGames(): Observable<ArrayBuffer> {
    const httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    return this.http.get(
      this.url + 'OlympicGamesController.php',
      httpOptions
    );
  }

  addOlympian(olympian: OlympicWinnerDetail): Observable<ArrayBuffer> {
    const httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    return this.http.post(
      this.url + 'OlympianAddController.php',
      olympian,
      httpOptions
    );
  }

  addMedal(medal: Medal): Observable<ArrayBuffer> {
    const httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    return this.http.post(
      this.url + 'MedalAddController.php',
      medal,
      httpOptions
    );
  }

  removeOlympian(olympianId: number): Observable<ArrayBuffer> {
    const httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    return this.http.post(
      this.url + 'OlympianRemoveController.php',
      olympianId,
      httpOptions
    );
  }

  removeMedal(medalId: number): Observable<ArrayBuffer> {
    const httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    return this.http.post(
      this.url + 'MedalRemoveController.php',
      medalId,
      httpOptions
    );
  }

  editOlympian(olympian: OlympicWinnerDetail): Observable<ArrayBuffer> {
    const httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    return this.http.post(
      this.url + 'OlympianEditController.php',
      olympian,
      httpOptions
    );
  }
}
