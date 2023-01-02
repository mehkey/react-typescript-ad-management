import React from 'react';
import { shallow } from 'enzyme';
import CreateCampaignForm from './CampaignForm';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CampaignForm', () => {
  it('submits the form with the correct data', () => {
    const onSubmit = jest.fn();
    const wrapper = shallow(<CreateCampaignForm onSubmit={onSubmit} />);

    // Simulate form submission
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
      target: {
        elements: {
          name: { value: 'My Campaign' },
          goal: { value: 'Conversion' },
          budget: { value: '500.0' },
        },
      },
    });

    // Check that the onSubmit function was called with the correct data
    expect(onSubmit).toHaveBeenCalledWith({
      name: 'My Campaign',
      goal: 'Conversion',
      budget: 500.0,
      targetAudience: "",
    });
  });
});