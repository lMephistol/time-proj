/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Calculation {
  /**
   * IANA Timezone used
   * @example "Europe/Amsterdam"
   */
  timeZone?: string | null;
  /**
   * Original DateTime given
   * @format date-time
   * @example "2021-11-27T05:45:00"
   */
  originalDateTime?: string;
  /**
   * The timespan used to increase or decrease the original datetime by in format: d:hh:mm:ss
   * @example "16:03:45:17"
   */
  usedTimeSpan?: string | null;
  calculationResult?: CalculationResult;
}

export interface CalculationRequestCurrent {
  /**
   * IANA TimeZone
   * @minLength 1
   * @example "Europe/Amsterdam"
   */
  timeZone: string;
  /**
   * Time span to increase or decrease datetime by in format: d:hh:mm:ss or in format: d:hh:mm:ss.fff
   * @minLength 1
   * @example "16:03:45:17"
   */
  timeSpan: string;
}

export interface CalculationRequestCustom {
  /**
   * IANA TimeZone
   * @minLength 1
   * @example "Europe/Amsterdam"
   */
  timeZone: string;
  /**
   * DateTime in format: yyyy-MM-dd HH:mm:ss or in format: yyyy-MM-dd HH:mm:ss.ffffff
   * @minLength 1
   * @example "2021-11-27 05:45:00"
   */
  dateTime: string;
  /**
   * Time span to increase or decrease datetime by in format: d:hh:mm:ss or in format: d:hh:mm:ss.fff
   * @minLength 1
   * @example "16:03:45:17"
   */
  timeSpan: string;
  /**
   * Sometimes a time can be ambiguous due to DST switching.
   * For example, suppose the time zone goes backward
   * at 2am, so the second after 01:59:59 becomes 01:00:00. In that case,
   * times such as 01:30:00 occur twice. By using "earlier" it uses the earlier version of 01:30:00 where 01:59:59 hasn't been passed.
   * By using "later" it uses the later version of 01:30:00 where the time has passed 01:59:59.
   * @example ""
   */
  dstAmbiguity?: string | null;
}

export interface CalculationResult {
  /**
   * Year
   * @format int32
   * @example 2021
   */
  year?: number;
  /**
   * Month
   * @format int32
   * @example 12
   */
  month?: number;
  /**
   * Day
   * @format int32
   * @example 13
   */
  day?: number;
  /**
   * Hour of the day in range 0-24
   * @format int32
   * @example 9
   */
  hour?: number;
  /**
   * Minute
   * @format int32
   * @example 30
   */
  minute?: number;
  /**
   * Second
   * @format int32
   * @example 17
   */
  seconds?: number;
  /**
   * Milliseconds
   * @format int32
   * @example 0
   */
  milliSeconds?: number;
  /**
   * Full date time
   * @format date-time
   * @example "2021-12-13T09:30:17"
   */
  dateTime?: string;
  /**
   * Date string
   * @example "13/12/2021"
   */
  date?: string | null;
  /**
   * Time string
   * @example "09:30"
   */
  time?: string | null;
  /**
   * Boolean describing whether DST is applied and active in that timezone
   * @example false
   */
  dstActive?: boolean;
}

export interface Conversion {
  fromTimezone?: string | null;
  /** @format date-time */
  fromDateTime?: string;
  toTimeZone?: string | null;
  conversionResult?: ConversionResult;
}

export interface ConversionResult {
  /**
   * Year
   * @format int32
   * @example 2021
   */
  year?: number;
  /**
   * Month
   * @format int32
   * @example 3
   */
  month?: number;
  /**
   * Day
   * @format int32
   * @example 14
   */
  day?: number;
  /**
   * Hour of the day in range 0-24
   * @format int32
   * @example 9
   */
  hour?: number;
  /**
   * Minute
   * @format int32
   * @example 45
   */
  minute?: number;
  /**
   * Second
   * @format int32
   * @example 0
   */
  seconds?: number;
  /**
   * Milliseconds
   * @format int32
   * @example 0
   */
  milliSeconds?: number;
  /**
   * Full date time
   * @format date-time
   * @example "2021-03-14T09:45:00"
   */
  dateTime?: string;
  /**
   * Date string
   * @example "14/03/2021"
   */
  date?: string | null;
  /**
   * Time string
   * @example "09:45"
   */
  time?: string | null;
  /**
   * TimeZone of the result
   * @example "America/Los_Angeles"
   */
  timeZone?: string | null;
  /**
   * Boolean describing whether DST is applied and active in that timezone
   * @example true
   */
  dstActive?: boolean;
}

export interface ConvertRequest {
  /**
   * IANA TimeZone
   * @minLength 1
   * @example "Europe/Amsterdam"
   */
  fromTimeZone: string;
  /**
   * DateTime in format: yyyy-MM-dd HH:mm:ss or in format: yyyy-MM-dd HH:mm:ss.ffffff
   * @minLength 1
   * @example "2021-03-14 17:45:00"
   */
  dateTime: string;
  /**
   * IANA TimeZone
   * @minLength 1
   * @example "America/Los_Angeles"
   */
  toTimeZone: string;
  /**
   * Sometimes a time can be ambiguous due to DST switching.
   * For example, suppose the time zone goes backward
   * at 2am, so the second after 01:59:59 becomes 01:00:00. In that case,
   * times such as 01:30:00 occur twice. By using "earlier" it uses the earlier version of 01:30:00 where 01:59:59 hasn't been passed.
   * By using "later" it uses the later version of 01:30:00 where the time has passed 01:59:59.
   * @example ""
   */
  dstAmbiguity?: string | null;
}

export interface CurrentTime {
  /**
   * Year
   * @format int32
   * @example 2020
   */
  year?: number;
  /**
   * Month
   * @format int32
   * @example 12
   */
  month?: number;
  /**
   * Day
   * @format int32
   * @example 13
   */
  day?: number;
  /**
   * Hour of the day in range 0-24
   * @format int32
   * @example 9
   */
  hour?: number;
  /**
   * Minute
   * @format int32
   * @example 30
   */
  minute?: number;
  /**
   * Second
   * @format int32
   * @example 17
   */
  seconds?: number;
  /**
   * Milliseconds
   * @format int32
   * @example 0
   */
  milliSeconds?: number;
  /**
   * Full date time
   * @format date-time
   * @example "2020-12-13T09:30:17"
   */
  dateTime?: string;
  /**
   * Date string
   * @example "13/12/2020"
   */
  date?: string | null;
  /**
   * Time string
   * @example "09:30"
   */
  time?: string | null;
  /**
   * TimeZone of the result
   * @example "America/Los_Angeles"
   */
  timeZone?: string | null;
  dayOfWeek?: DayOfWeek;
  /**
   * Boolean describing whether DST is applied and active in that timezone
   * @example false
   */
  dstActive?: boolean;
}

export interface DayOfTheWeekResult {
  dayOfWeek?: DayOfWeek;
}

export enum DayOfWeek {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
}

export interface DstInterval {
  dstName?: string | null;
  dstOffsetToUtc?: Offset;
  dstOffsetToStandardTime?: Offset;
  /** @format date-time */
  dstStart?: string | null;
  /** @format date-time */
  dstEnd?: string | null;
  dstDuration?: Duration;
}

export interface Duration {
  /** @format int32 */
  days?: number;
  /** @format int64 */
  nanosecondOfDay?: number;
  /** @format int32 */
  hours?: number;
  /** @format int32 */
  minutes?: number;
  /** @format int32 */
  seconds?: number;
  /** @format int32 */
  milliseconds?: number;
  /** @format int32 */
  subsecondTicks?: number;
  /** @format int32 */
  subsecondNanoseconds?: number;
  /** @format int64 */
  bclCompatibleTicks?: number;
  /** @format double */
  totalDays?: number;
  /** @format double */
  totalHours?: number;
  /** @format double */
  totalMinutes?: number;
  /** @format double */
  totalSeconds?: number;
  /** @format double */
  totalMilliseconds?: number;
  /** @format double */
  totalTicks?: number;
  /** @format double */
  totalNanoseconds?: number;
}

export interface Offset {
  /** @format int32 */
  seconds?: number;
  /** @format int32 */
  milliseconds?: number;
  /** @format int64 */
  ticks?: number;
  /** @format int64 */
  nanoseconds?: number;
}

export interface ProblemDetails {
  type?: string | null;
  title?: string | null;
  /** @format int32 */
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
  [key: string]: any;
}

export interface TimeZoneData {
  timeZone?: string | null;
  /** @format date-time */
  currentLocalTime?: string;
  currentUtcOffset?: Offset;
  standardUtcOffset?: Offset;
  hasDayLightSaving?: boolean;
  isDayLightSavingActive?: boolean;
  dstInterval?: DstInterval;
}

export interface Translation {
  /**
   * Given date time to translate
   * @example "2021-03-14 17:45:00"
   */
  dateTime?: string | null;
  /**
   * Given language code to translate the date time into
   * @example "de"
   */
  languageCode?: string | null;
  /**
   * Full translated date time
   * @example "Sonntag, 14. März 2021 17:45:00"
   */
  friendlyDateTime?: string | null;
  /**
   * Translated date
   * @example "Sonntag, 14. März 2021"
   */
  friendlyDate?: string | null;
  /**
   * Translated time
   * @example "17:45:00"
   */
  friendlyTime?: string | null;
}

export interface TranslationRequest {
  /**
   * DateTime in format: yyyy-MM-dd HH:mm:ss or in format: yyyy-MM-dd HH:mm:ss.ffffff
   * @minLength 1
   * @example "2021-03-14 17:45:00"
   */
  dateTime: string;
  /**
   * 2 letter ISO 639-1 language code. List of codes can be found at: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
   * @minLength 1
   * @example "de"
   */
  languageCode: string;
}







