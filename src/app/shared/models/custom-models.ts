export type CustomTimeZone = {
  name: string;
  abbreviation: string;
  timeOffset: number;
  localDate: string;
  dayLightSavingFlag: boolean;
  daylightStartDate?: string;
  daylightEndDate?: string;
}
