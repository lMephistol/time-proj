import {effect, inject, Injectable, Signal, signal} from '@angular/core';
import {TimeApiService} from './time-api.service';
import {filter, map, of, switchMap, tap} from 'rxjs';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {CustomTimeZone} from '../shared/models/custom-models';
import {transFormData} from '../shared/utils/utils';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimeZoneService {
  static readonly STORAGE_KEY = 'TIME_ZONES';
  private _timeApiService = inject(TimeApiService);
  private _http = inject(HttpClient);
  private _state = signal<CustomTimeZone[]>(
    JSON.parse(sessionStorage.getItem(TimeZoneService.STORAGE_KEY)!) as CustomTimeZone[]
  );
  public loading = signal(false);
  public timeZone = signal<string>('');

  constructor() {
    effect(() => {
      const data = this.timeZoneData();
      if (data) {
        this._state.update(value => {
          if (value.some(el => el.name === data.name)) {
            return value;
          } else {
            sessionStorage.setItem(TimeZoneService.STORAGE_KEY, JSON.stringify([...value, data]));
            return [...value, data];
          }
        });
      }
    })
  }

  get zones() {
    return this._state.asReadonly();
  }

  public init() {
    const session = JSON.parse(sessionStorage.getItem(TimeZoneService.STORAGE_KEY)!) as CustomTimeZone[];
    if (session) {
      return of();
    }
    return this._http.get<{ ip: string }>('https://api.ipify.org?format=json').pipe(
      switchMap(({ip}) => this._timeApiService.getTimeZoneInfoByIp(ip)),
      map((data) => transFormData(data)),
      tap((data) => {
        sessionStorage.setItem(TimeZoneService.STORAGE_KEY, JSON.stringify([data]));
        this._state.set([data]);
      })
    );
  }

  private timeZoneData: Signal<CustomTimeZone | undefined> = toSignal(
    toObservable(this.timeZone).pipe(
      filter((zone) => zone.length > 1),
      tap(_ => this.loading.set(true)),
      switchMap((name) => this._timeApiService.getTimeZoneInfo(name)),
      map((data) => transFormData(data)),
      tap(_ => this.loading.set(false)),
    )
  );
}


