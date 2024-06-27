import { useState } from 'react';

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            onBlur={() => handleInputBlur('email')}
            value={enteredValues.email} 
            onChange={(event) => {handleInput('email', event.target.value)}}/>
          <div className='control-error'>
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            value={enteredValues.password} 
            onChange={(event) => {handleInput('password', event.target.value)}}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
