import { Component, inject, resource, signal } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { Region } from '../../interfaces/region.type';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {
  countryService = inject(CountryService);

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Antarctic'];
  selectedRegion = signal<Region | null>(null);
  countryResource = resource({
    params: () => ({ query: this.selectedRegion() }),
    loader: async ({ params }) => {
      if (!params.query) return [];

      return await firstValueFrom(this.countryService.searchByRegion(params.query));
    },
  });
}
