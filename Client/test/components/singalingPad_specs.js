import React from 'react/addons';
import SignalingPad from '../../src/components/signaling/SignalingPad';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag}
  = React.addons.TestUtils;

describe('SignalingPad...', () => {

  it('Well-behaves on no input,', () => {
    const component = renderIntoDocument(
      <SignalingPad name='' noise=''/> 
    );

    const h4 = scryRenderedDOMComponentsWithTag(component, 'h4');
    const textarea = scryRenderedDOMComponentsWithTag(component, 'textarea');
    expect(h4[0].textContent).to.equal('Enter your name and broadcast it.');
    expect(textarea[0].textContent).to.equal('');
  });

  it('...displays name and noise...', () => {
    const component = renderIntoDocument(
      <SignalingPad name='Kapusta' noise='Kiszona'/> 
    );
    const h4 = scryRenderedDOMComponentsWithTag(component, 'h4');
    const textarea = scryRenderedDOMComponentsWithTag(component, 'textarea');
    expect(h4[0].textContent).to.equal('Kapusta');
    expect(textarea[0].textContent).to.equal('Kiszona');
  });

   it('...and has a button.', () => {
    const component = renderIntoDocument(
      <SignalingPad name='' noise=''/> 
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equal(1);
    expect(buttons[0].textContent).to.equal('broadcast');
    expect(buttons[1].textContent).to.equal('go');
  });
 

});