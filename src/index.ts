/**
 * Check if a given date falls on a weekend (Saturday or Sunday)
 * @param date - The date to check. Can be a Date object, date string, or timestamp
 * @returns true if the date is a weekend, false otherwise
 * 
 * @example
 * ```typescript
 * import checkWeekend from 'check-weekend';
 * 
 * // Using Date object
 * checkWeekend(new Date('2024-01-06')); // true (Saturday)
 * checkWeekend(new Date('2024-01-08')); // false (Monday)
 * 
 * // Using date string
 * checkWeekend('2024-01-07'); // true (Sunday)
 * 
 * // Using timestamp
 * checkWeekend(1704585600000); // depends on the date
 * 
 * // Using current date
 * checkWeekend(); // true if today is weekend
 * ```
 */
function checkWeekend(date?: Date | string | number): boolean {
  const targetDate = date ? new Date(date) : new Date();
  
  // Check if the date is valid
  if (isNaN(targetDate.getTime())) {
    throw new Error('Invalid date provided');
  }
  
  const dayOfWeek = targetDate.getDay();
  
  // 0 = Sunday, 6 = Saturday
  return dayOfWeek === 0 || dayOfWeek === 6;
}

export default checkWeekend;
export { checkWeekend };
