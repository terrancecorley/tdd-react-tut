import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Login from '../Login';

afterEach(() => {
    cleanup();
    console.error.mockClear();
});

console.error = jest.fn();

test('<Login />', () => {
    const { getByTestId, debug } = render(<Login />);

    // submit func gets called on form submit

    // the submit paramaters are passed back on submit

    // the submit func is called only once on submit

    // all fields render

    // make sure input vals are changing on user input

    // make sure incorrect login throw err

    // incorrect login does not redirect

    // correct login redirects, no errors

    debug();
});