import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Login from './Login';

configure({ adapter: new Adapter() });

const wrapper = shallow(<Login />);
console.log(wrapper.debug());