import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {OlympicService} from '../../shared/services/olympic.service';

@Injectable({
  providedIn: 'root'
})
export class EditOlympianResolver implements Resolve<boolean> {

  constructor(private olympicService: OlympicService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.olympicService.getOlympicWinner(Number(route.params.id));
  }
}
