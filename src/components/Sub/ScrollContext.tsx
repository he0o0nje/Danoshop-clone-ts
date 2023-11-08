import React, { createContext, useContext, useState, ReactNode } from "react";

interface ScrollContextType {
  selectedTab: number;
  setSelectedTab: (tab: number) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

interface ScrollProviderProps {
  children: ReactNode;
}

export function ScrollProvider({ children }: ScrollProviderProps) {
  const [selectedTab, setSelectedTab] = useState(1);

  const value = {
    selectedTab,
    setSelectedTab,
  };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
}

export function useScroll(): ScrollContextType {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("ScrollProvider와 함께 사용해야합니다.");
  }
  return context;
}
