import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { registerUser } from '../../actions/actions';

export default function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setPasswordConfirmation(event.target.value);
  };

  const handleSubmit = (event) => {
    const userData = {
      user: {
        email,
        password,
        password_confirmation: passwordConfirmation,
      },
    };

    axios.post('http://127.0.0.1:3001/authentication/registrations', userData, { withCredentials: true })
      .then((response) => {
        dispatch(registerUser(response.data.user));
      })
      .catch((error) => {
        console.error(error);
      });
    event.preventDefault();
  };

  return (
    <div className="mt-40">
      <h2 className="text-center">Register</h2>
      <div className="mx-auto block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <form onSubmit={handleSubmit}>
          <div className="relative mb-6">
            <label htmlFor={email}>Email</label>
            <input
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="john@example.com"
              type="email"
              id={email}
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="relative mb-6">
            <label htmlFor={password}>Password</label>
            <input
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              type="password"
              id={password}
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="relative mb-6">
            <label htmlFor={passwordConfirmation}>Confirm Password</label>
            <input
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              type="password"
              id={passwordConfirmation}
              name="passwordConfirmation"
              value={passwordConfirmation}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>

          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
