import replacePunctuation from './replacePunctuation';

import { render, screen } from '@testing-library/react';
import App from './App';

/* test('Renders "Hello World" text', () => {
  render(<App />);
  const linkElement = screen.getByText('Hello World');
  expect(linkElement).toBeInTheDocument();
}); */

describe('Filter string tests', () => {
  const testStrings = [
    "hello world",
    "hello%world", // Replace % with space
    "!hello world", // Replace ! with space
    "hello?world!", // Replace ?, ! with space and trim last char
    "hello;world", // Replace ; with space
    "hello world?", // Replace ? with space and trim last char
    "hello  world?", // Replace double spacing, ? with space and trim last char
    "hello. world?", // Replace ., ? with space. Replace new double space. Trim last char
    " hello world " // Trim leading and trailing spaces
  ]

  const expected = "hello world"

  testStrings.map(testStr => {
    it(`Return ${expected} when string is ${testStr}`, () => {
      const actual: string = replacePunctuation(testStr)

      expect(actual).toBe(expected)
    })
  })
})
