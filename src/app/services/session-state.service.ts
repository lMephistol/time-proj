import {Injectable} from '@angular/core';
import {CustomTimeZone} from '../shared/models/custom-models';

const STORAGE_KEY = 'TIME_ZONES';

@Injectable({
  providedIn: 'root'
})
export class SessionStateService {
  public getTimeZonesSession(): CustomTimeZone[] {
    const timeZones = sessionStorage.getItem(STORAGE_KEY);
    return timeZones ? JSON.parse(timeZones) as CustomTimeZone[] : [];
  };

  public addTimeZoneSession(newZone: CustomTimeZone): void {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify([...this.getTimeZonesSession(), newZone]));
  }
}
