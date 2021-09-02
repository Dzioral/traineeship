import React from 'react';
import SearchList from '../SearchList'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('SearchList Component', () => {
  test('header renders with correct text', () => {
    const { getByTestId } = render(<SearchList />);
    const headerEl = getByTestId('header')

    expect(headerEl.textContent).toBe('User List')
  })
  
})