import { formatDistanceToNow } from "date-fns";

export function getTimeSince(date: string) {
  const givenDate = new Date(date);

  return formatDistanceToNow(givenDate, { addSuffix: true });
}
