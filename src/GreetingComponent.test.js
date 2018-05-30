import { expect } from 'chai';
import { JSDOM } from 'jsdom';

import GreetingComponent from './GreetingComponent';

describe('GreetingComponent', () => {
  it('should render greeting h1 element', () => {
    const { window } = new JSDOM('<!DOCTYPE html>');
    window.document.body.appendChild(GreetingComponent('World'));
    expect(window.document.getElementsByTagName('h1')).to.have.lengthOf(1);
  });
});