import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, timeInterval} from 'rxjs';
import {CurrentTime, TimeZoneData} from '../shared/models/time-api-models';

@Injectable({
  providedIn: 'root'
})
export class TimeApiService {
  private static BASE_URL = 'https://timeapi.io/api';
  private static UTC_ZONE = 'UTC';

  private http = inject(HttpClient);

  public getCurrentUtcTimeMs(){
    return this.http.get<CurrentTime>(`${TimeApiService.BASE_URL}/time/current/zone`, {params: {timeZone: TimeApiService.UTC_ZONE}}).pipe(
      timeInterval(),
      map(({value: {dateTime}, interval}) => Date.parse(dateTime!) + interval)
    );
  }

  public getAllZones() {
    return this.http.get<string[]>(`${TimeApiService.BASE_URL}/timezone/availabletimezones`);
  }

  public getTimeZoneInfo(zoneName: string) {
    return this.http.get<TimeZoneData>(`${TimeApiService.BASE_URL}/timezone/zone`, {params: {timeZone: zoneName}});
  }

  public getTimeZoneInfoByIp(ip: string) {
    return this.http.get<TimeZoneData>(`${TimeApiService.BASE_URL}/timezone/ip`, {params: {ipAddress: ip}});
  }
}


