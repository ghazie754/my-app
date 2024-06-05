import React, { createContext, ReactElement, useEffect, useState } from "react";

const UseTheme = createContext({
  darkTheme: true,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element> | React.ReactNode ,
  router?: any;
}

export function MyThemeContextProvider(
  props: ThemePropsInterface
): ReactElement {
    
  const [darkTheme, setDarkTheme] = useState(true);
  useEffect(() => initialThemeHandler(), [darkTheme]);
  function initialThemeHandler(): void {
    if (!localStorage.getItem("darkTheme")) {
      localStorage.setItem("darkTheme", `true`);
      document.documentElement.removeAttribute("data-theme");
      setDarkTheme(true);
    } else {
      const darkTheme: boolean = JSON.parse(
        localStorage.getItem("darkTheme")!
      );
      darkTheme && document.documentElement.setAttribute("data-theme", "dark");
      setDarkTheme(() => {
        return darkTheme
      });
    }
  }

  function toggleThemeHandler(): void {
    const darkTheme: boolean = JSON.parse(
      localStorage.getItem("darkTheme")!
    );
    setDarkTheme(!darkTheme);
    toggleDarkClassToBody();
    setValueToLocalStorage();
  }

  function toggleDarkClassToBody(): void {
    document.documentElement.removeAttribute("data-theme");
  }

  function setValueToLocalStorage(): void {
    localStorage.setItem("darkTheme", `${!darkTheme}`);
  }

  return (
    <UseTheme.Provider value={{ darkTheme: true, toggleThemeHandler }}>
      {props.children}
    </UseTheme.Provider>
  );
}


export default UseTheme;