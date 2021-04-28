import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routing';
import {OlympicWinnersTableComponent} from './olympic-winners/olympic-winners-table/olympic-winners-table.component';
import {MatSortModule} from '@angular/material/sort';
import {HttpClientModule} from '@angular/common/http';
import {OlympicWinnersComponent} from './olympic-winners/olympic-winners.component';
import {MatTabsModule} from '@angular/material/tabs';
import {HeaderComponent} from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FooterComponent} from './footer/footer.component';
import {OlympicWinnersTopTenComponent} from './olympic-winners/olympic-winners-top-ten/olympic-winners-top-ten.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {OlympicWinnerDetailComponent} from './olympic-winners/olympic-winners-table/olympic-winner-detail/olympic-winner-detail.component';
import {PersonDetailComponent} from './olympic-winners/olympic-winners-table/olympic-winner-detail/person-detail/person-detail.component';
import {MatCardModule} from '@angular/material/card';
import {MatFabMenuModule} from '@angular-material-extensions/fab-menu';
import {EditOlympianComponent} from './olympic-winners/olympic-winners-top-ten/edit-olympian/edit-olympian.component';
import {AddOlympianComponent} from './olympic-winners/olympic-winners-top-ten/add-olympian/add-olympian.component';
import {AddMedalComponent} from './olympic-winners/olympic-winners-top-ten/add-medal/add-medal.component';
import {OlympianDataFormComponent} from './olympic-winners/olympic-winners-top-ten/olympian-data-form/olympian-data-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {DeleteDialogComponent} from './olympic-winners/olympic-winners-top-ten/delete-dialog/delete-dialog.component';
import { DuplicityDialogComponent } from './olympic-winners/olympic-winners-top-ten/add-olympian/duplicity-dialog/duplicity-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    OlympicWinnersTableComponent,
    OlympicWinnersComponent,
    HeaderComponent,
    FooterComponent,
    OlympicWinnersTopTenComponent,
    OlympicWinnerDetailComponent,
    PersonDetailComponent,
    EditOlympianComponent,
    AddOlympianComponent,
    AddMedalComponent,
    OlympianDataFormComponent,
    DeleteDialogComponent,
    DuplicityDialogComponent
  ],
  entryComponents: [PersonDetailComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forRoot(AppRoutes, {
      scrollPositionRestoration: 'enabled'
    }),
    MatSortModule,
    MatTabsModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatCardModule,
    MatFabMenuModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
