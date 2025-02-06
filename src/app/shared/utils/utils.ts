import {TimeZoneData} from '../models/time-api-models';
import {CustomTimeZone} from '../models/custom-models';

export function getUTCOffset(offset: number): string {

  const strOffset = offset === 0
    ? '0' :
    (Math.abs(offset) / 3600)
    .toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      minimumFractionDigits: 2,
    })
    .replace('.', ':');
  const sign = offset >= 0 ? '+' : '-';
  return `UTC${sign}${strOffset}`;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${day}-${month}-${year}`;
}


export function transFormData(data: TimeZoneData): CustomTimeZone {
  const name = data.timeZone!;
  const utcOffset =getUTCOffset(data.currentUtcOffset?.seconds!);
  const abbreviation = data.dstInterval?.dstName ? data.dstInterval?.dstName + `(${utcOffset})`: utcOffset;
  const localDate = formatDate(data.currentLocalTime!);
  const dayLightSavingFlag = data.hasDayLightSaving!;
  if (dayLightSavingFlag) {
    const daylightStartDate = formatDate(data.dstInterval?.dstStart!);
    const daylightEndDate = formatDate(data.dstInterval?.dstEnd!);
    return {name, abbreviation, utcOffset, localDate, dayLightSavingFlag, daylightStartDate, daylightEndDate};
  }
  return {name, abbreviation,  utcOffset, localDate, dayLightSavingFlag};
}
