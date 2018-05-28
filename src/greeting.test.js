import greeting from './greeting';

test('greeting with Reuben', () => {
  expect(greeting('Reuben')).toBe('Hello Reuben');
});