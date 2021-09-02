import React from 'react';
import User from '../User'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('User Component', () => {
  let getByTestId

  beforeEach(() => {
    const component = render(
      <User user={
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret"
        }
      } />
    );

    getByTestId = component.getByTestId
  })

  test('user name renders correctly', () => {
    const userNameEl = getByTestId('name')

    expect(userNameEl.textContent).toBe('Leanne Graham')
  })

  test('username renders correctly', () => {
    const userNameEl = getByTestId('username')

    expect(userNameEl.textContent).toBe('@Bret')
  })

})
