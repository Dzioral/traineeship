import React from 'react';
import SearchBar from '../SearchBar'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('SearchBar Component', () => {
  let getByRole

  beforeEach(() => {
    const component = render(<SearchBar />);
    getByRole = component.getByRole
  })

  test('render search input', () => {
    const inputEl = getByRole('searchbox')

    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "search");
  })

  test('change value of input correctly', () => {
    const inputEl = getByRole('searchbox')

    expect(inputEl.value).toBe('')

    fireEvent.change(inputEl, {
      target: {
        value: 'test'
      }
    })

    expect(inputEl.value).toBe('test')

    fireEvent.change(inputEl, {
      target: {
        value: ''
      }
    })

    expect(inputEl.value).toBe('')
  })
})


