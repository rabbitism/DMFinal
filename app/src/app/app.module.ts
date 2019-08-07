import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { QueryService } from './_services/query.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelComponent } from './panel/panel.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      PanelComponent
   ],
   imports: [
      BrowserAnimationsModule,
      BrowserModule,
      HttpClientModule,
      FormsModule,
      MatSidenavModule,
      MatButtonModule,
      MatListModule,
      MatChipsModule,
      MatCardModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      QueryService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
