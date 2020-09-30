import React from 'react';
import {mount, shallow, render} from 'enzyme';

import Calendar from '../client/src/components/Calendar.jsx';

const wrapper = mount(<Calendar />);

describe('Calendar suite', () => {
  it('should find class calendarDropDown', () => {
    expect(wrapper).toContainMatchingElement('.calendarDropDown');
  });

  it('should not find any class relating to reservations', () => {
    expect(wrapper).not.toContainMatchingElement('.reservations');
  })
});
