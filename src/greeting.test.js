import { expect } from 'chai';

import greeting from './greeting';

describe('greeting', () => {
  it('should say "Hello World" when given "World"', () => {
    const desired = 'Hello World';
    const actual = greeting('World');
    
    expect(actual).to.equal(desired);
  });
});