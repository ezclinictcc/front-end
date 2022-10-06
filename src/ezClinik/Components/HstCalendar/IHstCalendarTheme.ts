export default interface IHstCalendarTheme {
  backgroundCalendar: string;
  days: IDays;
}

interface IWeek {
  background: string;
}

interface IDays {
  selectedBackground: string;
  backgroundInterval: string;
}
