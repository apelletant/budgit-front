export enum RecurrenceType {
  Weekly,
  Monthly,
  Yearly
}

export enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

export enum Monthes {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

export function RecurrencetoString(rec: RecurrenceType): string {
  switch (rec) {
    case RecurrenceType.Weekly:
      return 'Weekly'
    case RecurrenceType.Monthly:
      return 'Monthly'
    case RecurrenceType.Yearly:
      return 'Yearly'
  }
}

export function DayToString(day: DayOfWeek): string {
  switch (day) {
    case DayOfWeek.Monday:
      return 'Monday'
    case DayOfWeek.Tuesday:
      return 'Tuesday'
    case DayOfWeek.Wednesday:
      return 'Wednesday'
    case DayOfWeek.Thursday:
      return 'Thursday'
    case DayOfWeek.Friday:
      return 'Friday'
    case DayOfWeek.Saturday:
      return 'Saturday'
    case DayOfWeek.Sunday:
      return 'Sunday'
  }
}

export function MonthToString(month: Monthes): string {
  switch (month) {
    case Monthes.January:
      return 'January'
    case Monthes.February:
      return 'February'
    case Monthes.March:
      return 'March'
    case Monthes.April:
      return 'April'
    case Monthes.May:
      return 'May'
    case Monthes.June:
      return 'June'
    case Monthes.July:
      return 'July'
    case Monthes.August:
      return 'August'
    case Monthes.September:
      return 'September'
    case Monthes.October:
      return 'October'
    case Monthes.November:
      return 'November'
    case Monthes.December:
      return 'December'
  }
}

interface BaseRecurrencePattern {
  frequency: number;
  count?: number;
}

export type WeeklyPattern = BaseRecurrencePattern & {
  type: RecurrenceType.Weekly;
  daysOfWeek: DayOfWeek[];
};

export type MonthlyByDatePattern = BaseRecurrencePattern & {
  type: RecurrenceType.Monthly;
  daysOfMonth: number[];
};

export type MonthlyByWeekdayPattern = BaseRecurrencePattern & {
  type: RecurrenceType.Monthly;
  weekOfMonth: number;
  dayOfWeek: DayOfWeek;
};

export type YearlyPattern = BaseRecurrencePattern & {
  type: RecurrenceType.Yearly;
  month: number;
  dayOfMonth: number;
};

export type RecurrencePattern =
  | WeeklyPattern
  | MonthlyByDatePattern
  | MonthlyByWeekdayPattern
  | YearlyPattern;

export interface Schedule {
  pattern: RecurrencePattern;
  startDate: string;
  endDate?: string;
}

export const createWeeklyPattern = (
  daysOfWeek: DayOfWeek[],
  frequency: number = 1,
  count?: number
): WeeklyPattern => ({
  type: RecurrenceType.Weekly,
  frequency,
  daysOfWeek,
  ...(count && { count })
});

export const createMonthlyByDatePattern = (
  daysOfMonth: number[],
  frequency: number = 1,
  count?: number
): MonthlyByDatePattern => ({
  type: RecurrenceType.Monthly,
  frequency,
  daysOfMonth,
  ...(count && { count })
});

export const createMonthlyByWeekdayPattern = (
  weekOfMonth: number,
  dayOfWeek: DayOfWeek,
  frequency: number = 1,
  count?: number
): MonthlyByWeekdayPattern => ({
  type: RecurrenceType.Monthly,
  frequency,
  weekOfMonth,
  dayOfWeek,
  ...(count && { count })
});

export const createYearlyPattern = (
  month: number,
  dayOfMonth: number,
  frequency: number = 1,
  count?: number
): YearlyPattern => ({
  type: RecurrenceType.Yearly,
  frequency,
  month,
  dayOfMonth,
  ...(count && { count })
});

export function isWeeklyPattern(pattern: RecurrencePattern): pattern is WeeklyPattern {
  return pattern.type === RecurrenceType.Weekly;
}

export function isMonthlyByDatePattern(pattern: RecurrencePattern): pattern is MonthlyByDatePattern {
  return pattern.type === RecurrenceType.Monthly && 'daysOfMonth' in pattern;
}

export function isMonthlyByWeekdayPattern(pattern: RecurrencePattern): pattern is MonthlyByWeekdayPattern {
  return pattern.type === RecurrenceType.Monthly && 'weekOfMonth' in pattern;
}

export function isYearlyPattern(pattern: RecurrencePattern): pattern is YearlyPattern {
  return pattern.type === RecurrenceType.Yearly;
}
