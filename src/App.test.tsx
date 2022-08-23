import replacePunctuation from './replacePunctuation';

import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders "Hello World" text', () => {
  render(<App />);
  const linkElement = screen.getByText('Hello World');
  expect(linkElement).toBeInTheDocument();
});

describe('Filter string tests', () => {
  const testStrings = [
    "hello world",
    "hello%world",
    "!hello world",
    "hello?world!",
    "hello;world",
    "hello world?"
  ]

  const expected = "hello world"

  testStrings.map(testStr => {
    it(`Return ${expected} when string is ${testStr}`, () => {
      const actual: string = replacePunctuation(testStr)

      expect(actual).toBe(expected)
    })
  })
})
