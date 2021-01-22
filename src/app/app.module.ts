import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {GuideComponent} from './guide/guide.component';
import {KeyComponent} from './account/key/key.component';
import {GeneralComponent} from './account/general/general.component';
import {TeamComponent} from './account/team/team.component';
import {menus} from './menus';

@NgModule({
  declarations: [
    AppComponent,
    GuideComponent,
    KeyComponent,
    GeneralComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(menus)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule {
}
