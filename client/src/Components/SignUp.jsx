import { useState, useContext } from 'react';
import actions from '../api/index';
import TheContext from '../TheContext';

export default function Signup() {
  const { history, user, setUser } = useContext(TheContext);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const signupUser = (e) => {
    e.preventDefault();
    actions
      .signUp(userData)
      .then((user) => {
        setUser({ ...user?.data });
        history.push('/profile');
      })
      .catch((error) => {
        const { data } = error.response;
        console.log(error.response)
        console.log(data.message);
      });
  };

  function handleChange(event) {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={signupUser}>
        <input
          name="email"
          type="string"
          onChange={handleChange}
          placeholder="email"
          value={userData.email}
        /> <br/>
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="password"
          value={userData.password}
        /> <br/>
        <button type="submit">Signup</button>
      </form>
    </>
  );
}
