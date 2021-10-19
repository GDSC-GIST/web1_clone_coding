import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [userObject, setUserObject] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObject(user);
      }else{
        setUserObject(null);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObject(Object.assign({}), user);
  };
  return (
    <>
    {init ? (
        <AppRouter refreshUser = {refreshUser} isLoggedIn={Boolean(userObject)} userObject={userObject} />
      ) : (
        "Oh Wait, I'm Initializing..."
      )}
  </>
  );
}

export default App;