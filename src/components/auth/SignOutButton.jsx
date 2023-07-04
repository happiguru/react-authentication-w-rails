import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/actions';

const SignoutButton = () => {
  const dispatch = useDispatch();

  const handleSignout = () => {
    axios.delete('http://127.0.0.1:3001/authentication/logout')
      .then((response) => {
        console.log(response.data.message); // Signout successful
        dispatch(logoutUser());
        // Handle further actions, e.g., redirect to homepage
      })
      .catch((error) => {
        console.error(error); // Signout error
      });
  };

  return (
    <button onClick={handleSignout} type="button">Sign Out</button>
  );
};

export default SignoutButton;
