"use client";

import { createContext, useContext, useState } from "react";

interface CatalogContextType {
  isCardHovered: boolean;
  setIsCardHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

const CatalogContext = createContext<CatalogContextType | null>(null);

export const useCatalogContext = () => {
  const context = useContext(CatalogContext);
  if (!context) {
    throw new Error(
      "useCatalogContext must be used within a CatalogContextProvider"
    );
  }
  return context;
};

export function CatalogContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <CatalogContext.Provider value={{ isCardHovered, setIsCardHovered }}>
      {children}
    </CatalogContext.Provider>
  );
}
