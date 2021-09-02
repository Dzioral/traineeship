import React from 'react';
import UserList from '../UserList'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('UserList Component', () => {

  test('Users are loading', () => {
    const isLoading = true;
    const { getByTestId } = render(<UserList isLoading={isLoading} />);
    const loadingEl = getByTestId('loading')

    expect(loadingEl.textContent).toBe('Loading...')
  });

  test('no users in list after loading', () => {
    const isLoading = false;
    const users = [];

    const { getByTestId } = render(<UserList isLoading={isLoading} users={users} />);
    const informationEl = getByTestId('no-users')

    expect(informationEl.textContent).toBe('User not found')
  });

  test('display a list of users from props', () => {
    const fakeUsers = [{
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette"
    }]
    const isLoading = false;

    const { getByTestId } = render(<UserList users={fakeUsers} isLoading={isLoading}/>);
    const listEl = getByTestId('list');

    expect(listEl.textContent).toBe(
      fakeUsers[0].name + '@' + fakeUsers[0].username +
      fakeUsers[1].name + '@' + fakeUsers[1].username
    );
  })

})