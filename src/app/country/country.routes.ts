import { Routes } from '@angular/router';
import { ByCapitalPage } from './page/by-capital-page/by-capital-page';

export const countryRoutes: Routes = [
  {
    path: '',
    component: ByCapitalPage,
  },
];

export default countryRoutes;
