import { expect } from 'chai';

import GreetingComponent from './GreetingComponent';
import greeting from '../greeting';

describe('GreetingComponent', () => {
  it('should render greeting h1 element with innerHTML of "Hello World"', () => {

    const el = <GreetingComponent greeting={ greeting } name="World" />;

    document.body.appendChild(el);

    expect(document.getElementsByTagName('h1')[0].innerHTML).to.equal('Hello World');
  });
});
