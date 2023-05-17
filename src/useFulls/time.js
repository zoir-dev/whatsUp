export function toTime(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amPm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  const isToday = date.toDateString() === now.toDateString();
  const dayName = isToday
    ? ""
    : date.toLocaleDateString("en-US", { weekday: "long" });

  return `${formattedHours}:${formattedMinutes} ${amPm} ${dayName}`;
}
