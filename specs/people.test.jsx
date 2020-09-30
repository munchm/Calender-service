import React from 'react';
import {mount, shallow, render} from 'enzyme';

import People from '../client/src/components/People.jsx';

describe('People suite', () => {
  it('should only have a selection of 1-6 people', () => {
    const wrapper = shallow(<People />);
    expect(wrapper.find(People)).to.have.lengthOf(1);
  });
});
