import { createContext } from "react";
import { useMediaQuery } from "react-responsive";

export const DeviceContext = createContext({
  smallDevice: null,
  middleDevice: null,
  largeDevice: null,
  xlargeDevice: null,
});

const DeviceProvider = ({ children }: any) => {
  const smallDevice: any = useMediaQuery({ maxWidth: 767 });
  const middleDevice: any = useMediaQuery({ maxWidth: 1024, minWidth: 768 });
  const largeDevice: any = useMediaQuery({ minWidth: 1025 });

  const handleMediaQueryChange = (matches: any) => {};

  const xlargeDevice: any = useMediaQuery(
    { minWidth: 1200 },
    undefined,
    handleMediaQueryChange
  );

  return (
    <DeviceContext.Provider
      value={{ smallDevice, middleDevice, largeDevice, xlargeDevice }}
    >
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceProvider;
