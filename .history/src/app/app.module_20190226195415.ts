import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { NavigationtrialComponent } from './navigationtrial/navigationtrial.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PaymentComponent } from './payment/payment.component';
import { HelpComponent } from './help/help.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { PromotionsComponent } from './promotions/promotions.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseComponent } from './firebase/firebase.component';
import { MatFormFieldModule, MatInputModule, MatPaginator, MatTable , MatSortModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: 'navigation', component: NavigationComponent, children: [
    { path: 'favorites', component: FavoritesComponent},
    { path: 'payment', component: PaymentComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'help', component: HelpComponent},
  { path: 'promotions', component: FavoritesComponent},
  { path: 'delivery', component: FavoritesComponent },
  { path: 'settings', component: FavoritesComponent },
  ]},
  { path: 'favorites', component: FavoritesComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/navigation', pathMatch: 'full' },
  // { path: '', component: NavigationComponent },

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
   HelpComponent,
   PromotionsComponent,
   LoginComponent,
   FirebaseComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
   MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

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
