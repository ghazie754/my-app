'use client';

import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';

type Props = {
  children: string | React.JSX.Element | React.JSX.Element[];
};

const Provider = ({ children }: Props | React.ReactNode | any) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    /* @ts-ignore */
    <ThemeProvider defaultTheme='system' attribute='class' enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default Provider;
