import { useState } from 'react';

export default function Signup() {
    const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target); // needs name prop
        const data = Object.fromEntries(formData.entries()); // entries gives array of all input fields and values. 
        const acquisitionChannel = formData.getAll('acquisition'); // prop has multiple values and are lost using entries()
        data.acquisition = acquisitionChannel;
        
        if (data.password !== data['confirm-password']) {
          setPasswordsAreNotEqual(true);
          return;
        }

        setPasswordsAreNotEqual(false);
        e.target.reset(); 
    }

    return (
      <form onSubmit={handleSubmit}>  
        <div className="control">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required/>
        </div>
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="password">Password</label>
            <input 
              id="password" 
              type="password" 
              name="password" 
              required 
              minLength={8}
            />
          </div>
  
          <div className="control">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              name="confirm-password"
              required
            />
            <div className='control-error'>
              {passwordsAreNotEqual && <p>Passwords do not match</p>}
            </div>
          </div>
        </div>
  
        <hr />
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" required/>
          </div>
  
          <div className="control">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" required/>
          </div>
        </div>
  
        <div className="control">
          <label htmlFor="phone">What best describes your role?</label>
          <select id="role" name="role">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="employee">Employee</option>
            <option value="founder">Founder</option>
            <option value="other">Other</option>
          </select>
        </div>
  
        <div className="control">
          <label htmlFor="terms-and-conditions">
            <input type="checkbox" id="terms-and-conditions" name="terms" required/>I
            agree to the terms and conditions
          </label>
        </div>
  
        <p className="form-actions">
          <button type="reset" className="button button-flat">
            Reset
          </button>
          <button type="submit" className="button">
            Sign up
          </button>
        </p>

      </form>
    );
  }