import { useState } from 'react';
import Input from './Input';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation';

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  const emailIsInvalid = 
    didEdit.email && 
    !isEmail(enteredValues.email) &&
    !isNotEmpty(enteredValues.email);
  const passwordIsInvalid = 
    didEdit.password && 
    hasMinLength(enteredValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Submitted', enteredValues);
  }

  // will update on each keystroke
  function handleInput(identifier, value) {
    setEnteredValues(prevState => ({
      ...prevState,
      [identifier]: value
    }));
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false
    }))
  }

  function handleInputBlur(identifier) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
          label="Email" 
          id="email" 
          type="email" 
          name="email"
          onBlur={() => handleInputBlur('email')}
          value={enteredValues.email} 
          onChange={(event) => {handleInput('email', event.target.value)}}
          error={emailIsInvalid && 'Please enter a valid email address'}
        />
        <Input 
          label="Password" 
          id="password" 
          type="password" 
          name="password"
          onBlur={() => handleInputBlur('password')}
          value={enteredValues.password} 
          onChange={(event) => {handleInput('password', event.target.value)}}
          error={passwordIsInvalid && 'Please enter a valid password'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
