import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../AdditionalCss/CustomRange.css"

const generatePassword = (length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) => {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  let allowedChars = '';

  if (includeLowercase) {
    allowedChars += lowercaseChars;
  }
  if (includeUppercase) {
    allowedChars += uppercaseChars;
  }
  if (includeNumbers) {
    allowedChars += numericChars;
  }
  if (includeSymbols) {
    allowedChars += symbolChars;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars.charAt(randomIndex);
  }

  return password;
};



function PswdChk() {
  // Password Generator
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handleGeneratePassword = () => {
    const password = generatePassword(
      passwordLength,
      includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSymbols
    );
    setGeneratedPassword(password);
  };

  // Password Checker
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('Enter Something !!!');

  const checkPasswordStrength = () => {
    const requirements = {
      symbols: /[!@#$%^&*()_+[\]{}|;:',.<>?]/,
      lowercase: /[a-z]/,
      uppercase: /[A-Z]/,
      numbers: /[0-9]/,
    };

    let metRequirements = 0;

    for (const requirement in requirements) {
      if (requirements[requirement].test(enteredPassword)) {
        metRequirements++;
      }
    }

    if (metRequirements === 1) {
      setPasswordStrength('Breakable');
    } else if (metRequirements === 2) {
      setPasswordStrength('Basic');
    } else if (metRequirements === 3) {
      setPasswordStrength('Medium');
    } else if (metRequirements === 4) {
      setPasswordStrength('Unbreakable');
    } else {
      setPasswordStrength('Enter Something !!!');
    }
  };

  const navigate = useNavigate();

  return (
    <div className='bg-gray-100'>
      <div className="relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-0 left-5 mt-2 mr-4 flex items-center rounded-full border border-green-500 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 p-2 hover:p-3 hover:font-bold"
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z" />
          </svg>
          <span className="ml-2">Go Back</span>
        </button>
      </div>
      <div className="min-h-screen  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg">
          <div className="bg-white shadow-md rounded-lg px-8 py-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Password Generator</h1>

            <div className="mb-4">
              <label htmlFor="passwordLength" className="block text-sm font-medium text-gray-700">
                Password Length: {passwordLength}
              </label>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                id="passwordLength"
                value={passwordLength}
                onChange={(e) => setPasswordLength(parseInt(e.target.value))}
                className="w-full mt-2  custom-range"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Include characters:
              </label>
              <div className="flex flex-wrap gap-4">
                <div>
                  <input
                    style={{ margin: 10 }}
                    type="checkbox"
                    id="includeLowercase"
                    checked={includeLowercase}
                    onChange={() => setIncludeLowercase(!includeLowercase)}
                  />
                  <label htmlFor="includeLowercase" className="text-sm text-gray-800">
                    Lowercase
                  </label>
                </div>
                <div >
                  <input
                    style={{ margin: 10 }}
                    type="checkbox"
                    id="includeUppercase"
                    checked={includeUppercase}
                    onChange={() => setIncludeUppercase(!includeUppercase)}
                  />
                  <label htmlFor="includeUppercase" className="text-sm text-gray-800">
                    Uppercase
                  </label>
                </div>
                <div>
                  <input
                    style={{ margin: 10 }}
                    type="checkbox"
                    id="includeNumbers"
                    checked={includeNumbers}
                    onChange={() => setIncludeNumbers(!includeNumbers)}
                  />
                  <label htmlFor="includeNumbers" className="text-sm text-gray-800">
                    Numbers
                  </label>
                </div>
                <div>
                  <input
                    style={{ margin: 10 }}
                    type="checkbox"
                    id="includeSymbols"
                    checked={includeSymbols}
                    onChange={() => setIncludeSymbols(!includeSymbols)}
                  />
                  <label htmlFor="includeSymbols" className="text-sm text-gray-800">
                    Symbols
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <button
                onClick={handleGeneratePassword}
                className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                Generate Password
              </button>
            </div>

            {generatedPassword && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Generated Password:</label>
                <div className="bg-gray-200 rounded-md py-2 px-4 text-gray-800">
                  {generatedPassword}
                </div>
              </div>
            )}
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Password Strength Checker</h1>
            {/* Add password strength checking UI here */}
            {/* You can create a component for this or add the UI directly */}
            <div className="mb-4">
              <input

                placeholder="Enter your password"
                className="px-3 py-2 border rounded-md"
                value={enteredPassword}
                onChange={(e) => setEnteredPassword(e.target.value)}
                onKeyUp={checkPasswordStrength}
              />
            </div>
            <div className="text-sm text-gray-700">Password Strength: {passwordStrength}</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PswdChk