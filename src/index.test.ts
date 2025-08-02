import checkWeekend from './index';

describe('checkWeekend', () => {
  // Test with Date objects
  describe('Date objects', () => {
    it('should return true for Saturday', () => {
      const saturday = new Date('2024-01-06'); // Saturday
      expect(checkWeekend(saturday)).toBe(true);
    });

    it('should return true for Sunday', () => {
      const sunday = new Date('2024-01-07'); // Sunday
      expect(checkWeekend(sunday)).toBe(true);
    });

    it('should return false for Monday', () => {
      const monday = new Date('2024-01-08'); // Monday
      expect(checkWeekend(monday)).toBe(false);
    });

    it('should return false for Friday', () => {
      const friday = new Date('2024-01-05'); // Friday
      expect(checkWeekend(friday)).toBe(false);
    });

    it('should return false for Wednesday', () => {
      const wednesday = new Date('2024-01-03'); // Wednesday
      expect(checkWeekend(wednesday)).toBe(false);
    });
  });

  // Test with date strings
  describe('Date strings', () => {
    it('should return true for Saturday string', () => {
      expect(checkWeekend('2024-01-06')).toBe(true);
    });

    it('should return true for Sunday string', () => {
      expect(checkWeekend('2024-01-07')).toBe(true);
    });

    it('should return false for weekdays string', () => {
      expect(checkWeekend('2024-01-08')).toBe(false); // Monday
      expect(checkWeekend('2024-01-09')).toBe(false); // Tuesday
      expect(checkWeekend('2024-01-10')).toBe(false); // Wednesday
      expect(checkWeekend('2024-01-11')).toBe(false); // Thursday
      expect(checkWeekend('2024-01-12')).toBe(false); // Friday
    });
  });

  // Test with timestamps
  describe('Timestamps', () => {
    it('should return true for weekend timestamps', () => {
      const saturdayTimestamp = new Date('2024-01-06').getTime();
      const sundayTimestamp = new Date('2024-01-07').getTime();

      expect(checkWeekend(saturdayTimestamp)).toBe(true);
      expect(checkWeekend(sundayTimestamp)).toBe(true);
    });

    it('should return false for weekday timestamps', () => {
      const mondayTimestamp = new Date('2024-01-08').getTime();
      expect(checkWeekend(mondayTimestamp)).toBe(false);
    });
  });

  // Test with no arguments (current date)
  describe('No arguments', () => {
    it('should work with current date', () => {
      const result = checkWeekend();
      expect(typeof result).toBe('boolean');
    });
  });

  // Test error cases
  describe('Error handling', () => {
    it('should throw error for invalid date string', () => {
      expect(() => checkWeekend('invalid-date')).toThrow('Invalid date provided');
    });
  });

  // Test edge cases
  describe('Edge cases', () => {
    it('should handle different date formats', () => {
      expect(checkWeekend('01/06/2024')).toBe(true); // Saturday
      expect(checkWeekend('January 6, 2024')).toBe(true); // Saturday
    });

    it('should handle dates across different years', () => {
      expect(checkWeekend('2023-12-31')).toBe(true); // Sunday
      expect(checkWeekend('2025-01-01')).toBe(false); // Wednesday
    });
  });
});
