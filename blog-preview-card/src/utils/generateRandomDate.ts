function generateRandomDate(start: Date, end: Date): Date {
  const randomTime =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTime);
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function generateRandomFormattedDate(
  startDate: Date = new Date(2020, 0, 1),
  endDate: Date = new Date(2025, 0, 1)
): string {
  const randomDate = generateRandomDate(startDate, endDate);
  return formatDate(randomDate);
}
