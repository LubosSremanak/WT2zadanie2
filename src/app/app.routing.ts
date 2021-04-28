import {OlympicWinnersComponent} from './olympic-winners/olympic-winners.component';
import {EditOlympianComponent} from './olympic-winners/olympic-winners-top-ten/edit-olympian/edit-olympian.component';
import {AddOlympianComponent} from './olympic-winners/olympic-winners-top-ten/add-olympian/add-olympian.component';
import {AddMedalComponent} from './olympic-winners/olympic-winners-top-ten/add-medal/add-medal.component';
import {EditOlympianResolver} from './olympic-winners/olympic-winners-top-ten/edit-olympian/edit-olympian.resolver';

export const AppRoutes: any = [
    {path: '', component: OlympicWinnersComponent},
    {
      path: 'editOlympian/:id', component: EditOlympianComponent,
      resolve: {
        editOlympianResolver: EditOlympianResolver
      }
    },
    {path: 'addOlympian', component: AddOlympianComponent},
    {path: 'addMedal', component: AddMedalComponent}
  ]
;

export const AppComponents: any = [];
