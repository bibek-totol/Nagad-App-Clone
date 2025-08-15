import React, { createContext, useState, useContext, ReactNode } from 'react';
import Item from '../type/type';



interface EveryDataContextType {
  everydata: Item;
  setEverydata: React.Dispatch<React.SetStateAction<Item>>;
  data: Item[];
  setData: React.Dispatch<React.SetStateAction<Item[]>>;
}

const EveryDataContext = createContext<EveryDataContextType | undefined>(undefined);

export  const EveryDataProvider = ({ children }: { children: ReactNode }) => {
  const [everydata, setEverydata] = useState<Item>({});
  const [data, setData] = useState<Item[]>([]);

  return (
    <EveryDataContext.Provider value={{ everydata, setEverydata, data, setData }}>
      {children}
    </EveryDataContext.Provider>
  );
};

export const useEveryData = () => {
  const context = useContext(EveryDataContext);
  if (!context) {
    throw new Error('useEveryData must be used within an EveryDataProvider');
  }
  return context;
};
