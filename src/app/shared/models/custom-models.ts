export type CustomTimeZone = {
  name: string;
  abbreviation: string;
  utcOffset: string;
  localDate: string;
  dayLightSavingFlag: boolean;
  daylightStartDate?: string;
  daylightEndDate?: string;
}
