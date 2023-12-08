import {Routes} from '@angular/router';
import {restaurantComponent} from "./components/restaurant/restaurant.component";

export const routes: Routes = [
  {
    path: '', redirectTo: 'restaurants', pathMatch: "full"
  },

  {
    path: 'restaurants', component: restaurantComponent
  }
];
