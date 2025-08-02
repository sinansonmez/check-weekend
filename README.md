# check-weekend

A simple, lightweight TypeScript utility to check if a date falls on a weekend (Saturday or Sunday).

## Installation

```bash
npm install check-weekend
```

## Usage

```typescript
import checkWeekend from 'check-weekend';

// Check if today is a weekend
console.log(checkWeekend()); // true or false

// Check a specific date
console.log(checkWeekend(new Date('2024-01-06'))); // true (Saturday)
console.log(checkWeekend(new Date('2024-01-08'))); // false (Monday)

// Using date strings
console.log(checkWeekend('2024-01-07')); // true (Sunday)
console.log(checkWeekend('January 6, 2024')); // true (Saturday)

// Using timestamps
console.log(checkWeekend(1704585600000)); // depends on the date
```

## API

### `checkWeekend(date?)`

Returns `true` if the given date is a weekend (Saturday or Sunday), `false` otherwise.

#### Parameters

- `date` (optional): The date to check. Can be:
  - `Date` object
  - Date string (any format that `Date` constructor accepts)
  - Number (timestamp in milliseconds)
  - If not provided, uses the current date

#### Returns

- `boolean`: `true` if the date is a weekend, `false` otherwise

#### Throws

- `Error`: If an invalid date is provided

## Examples

```typescript
import checkWeekend from 'check-weekend';

// Different ways to check the same Saturday
checkWeekend(new Date(2024, 0, 6));     // true
checkWeekend('2024-01-06');             // true  
checkWeekend('January 6, 2024');        // true
checkWeekend('01/06/2024');             // true

// Weekday examples
checkWeekend('2024-01-08');             // false (Monday)
checkWeekend('2024-01-09');             // false (Tuesday)
checkWeekend('2024-01-10');             // false (Wednesday)
checkWeekend('2024-01-11');             // false (Thursday)
checkWeekend('2024-01-12');             // false (Friday)

// Weekend examples
checkWeekend('2024-01-06');             // true (Saturday)
checkWeekend('2024-01-07');             // true (Sunday)
```

## Features

- 🚀 **Lightweight**: Zero dependencies
- 📦 **TypeScript**: Full TypeScript support with type definitions
- 🧪 **Well tested**: Comprehensive test suite
- 🌍 **Universal**: Works with any valid date format
- ⚡ **Fast**: Simple and efficient implementation

## TypeScript Support

This package is written in TypeScript and includes type definitions. No additional `@types` package needed!

```typescript
import checkWeekend from 'check-weekend';

const date: Date = new Date();
const result: boolean = checkWeekend(date);
```

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build the package
npm run build

# Run tests in watch mode
npm run test:watch
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © Sinan Chaush

## Changelog

### 1.0.0
- Initial release
- Support for Date objects, date strings, and timestamps
- Comprehensive TypeScript support
- Full test coverage
