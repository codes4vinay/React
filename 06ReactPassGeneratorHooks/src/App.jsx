import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);

  // To pass the reference of password when we copy it it will select the password
  const passwordRef = useRef(null);

  const copyBtn = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    alert("password copied");
  }, [password]);

  //The useCallback hook in React is a performance optimization tool that memoizes (caches)
  //a function definition between re-renders. It ensures that the same function instance
  //is returned as long as its dependencies haven't changed, which helps prevent
  //unnecessary re-renders of child components
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "0123456789";
    if (characters) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i <= length; i++) {
      const ch = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(ch);
    }

    setPassword(pass);
  }, [length, numbers, characters, setPassword]); //dependency array

  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, characters]); //useEffect will call the passGen function on change of dependencies. An Effect lets you keep your component synchronized with some external system

  return (
    <>
      <div className="w-full text-xl max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800">
        <h1 className="text-white text-center text-3xl my-3">
          Password generator
        </h1>
        <div className="flex shadow bg-amber-50 rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyBtn}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex gap-2 text-white">
          <input
            type="range"
            value={length}
            min={6}
            max={100}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>length : {length}</label>

          <input
            type="checkbox"
            defaultChecked={numbers}
            onChange={() => setNumbers((prev) => !prev)}
          />
          <label>Numbers</label>
          <input
            type="checkbox"
            defaultChecked={characters}
            onChange={() => setCharacters((prev) => !prev)}
          />
          <label>Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
