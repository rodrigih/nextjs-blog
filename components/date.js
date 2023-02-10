import {parseISO, format} from "date-fns";

export default function Date({dateString}) {
  const date = parseISO(dateString);

  let formattedDate;

  try {
    formattedDate = format(date, "LLLL d, yyyy");
  } catch (e) {
    formattedDate = `Invalid Date: ${dateString}`
  }

  return <time dateTime={dateString}>{formattedDate}</time>;
}
