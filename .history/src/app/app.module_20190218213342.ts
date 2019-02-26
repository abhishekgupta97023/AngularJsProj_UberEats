import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CoreModule } from './core/core.module';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { NavigationtrialComponent } from './navigationtrial/navigationtrial.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PaymentComponent } from './payment/payment.component';
import { HelpComponent } from './help/help.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  // { path: '', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'help', component: HelpComponent},
  { path: 'promotions', component: FavoritesComponent},
  { path: 'delivery', component: FavoritesComponent },
  { path: 'settings', component: FavoritesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
   // RouterModule,
   // CoreModule,
    NavigationComponent,
   NavComponent,
   NavigationtrialComponent,
   FavoritesComponent,
   PaymentComponent,
   HelpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
