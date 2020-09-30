import React from 'react';
import {mount, shallow, render} from 'enzyme';

import Calendar from '../client/src/components/Calendar.jsx';


describe('Calendar suite', () => {
  it('should find class calendarDropDown', () => {
    const wrapper = mount(<Calendar />);
    expect(wrapper).toContainMatchingElement('.calendarDropDown');
  });

  it('should not find any class relating to reservations', () => {
    const wrapper = mount(<Calendar />);
    expect(wrapper).not.toContainMatchingElement('.reservations');
  });

  it('renders five components', () => {
    const wrapper = mount(<Calendar />);
    expect(wrapper.find(Calendar)).to.have.lengthOf(5);
  });
});
