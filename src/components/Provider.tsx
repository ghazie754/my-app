import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
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
    <ThemeProvider defaultTheme='system' attribute='class' enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default Provider;
