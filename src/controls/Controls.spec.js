import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';

afterEach(cleanup);

describe('renders without crashing', () => {

   test('renders the Control component', () => {
    render(<Controls />)
  })

  test('provides buttons to toggle the closed and locked states', () => {
    const { getByText } = render(<Controls closed={false} locked={true} />);
    getByText(/lock gate/i);
    getByText(/close gate/i);
    
  })

  test('changes the button text when clicked, to reflect the state of the door', () => {
    const { getByText } = render(<Controls closed={false} locked={false} />);
    const toggleLockButton = getByText(/lock gate/i);
    expect(toggleLockButton).toHaveAttribute('disabled', '');

  })

  test('disables the closed toggle button when the gate is closed', () => {
    const { getByText } = render(<Controls closed={true} />);
  	    getByText(/open gate/i);
  })

  })




 