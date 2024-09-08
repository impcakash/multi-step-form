import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [planName, setPlanName] = useState("");

  const handlePlanName = (val) => {
    setPlanName(val);
  };

  const [planPrice, setPlanPrice] = useState(0);
  const handlePlanPrice = (price) => {
    setPlanPrice(price);
  };

  const [onlineService, setOnlineService] = useState(0);

  const handleOnlineService = () => {
    setOnlineService(1);
  };

  const [largerStorage, setLargerStorage] = useState(0);

  const handleLargerStorage = () => {
    setLargerStorage(2);
  };

  const [customProfile, setCustomProfile] = useState(0);
  const handleCustomProfile = () => {
    setCustomProfile(2);
  };

  return (
    <DataContext.Provider
      value={{
        planName,
        handlePlanName,
        planPrice,
        handlePlanPrice,
        onlineService,
        handleOnlineService,
        largerStorage,
        handleLargerStorage,
        customProfile,
        handleCustomProfile,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
