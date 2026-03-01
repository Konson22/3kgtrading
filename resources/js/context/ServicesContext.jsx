/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import services from "../data/services";

const ServicesContext = createContext(null);

export function ServicesProvider({ children }) {
  return (
    <ServicesContext.Provider value={{ services }}>
      {children}
    </ServicesContext.Provider>
  );
}

export function useServices() {
  const ctx = useContext(ServicesContext);
  if (!ctx) throw new Error("useServices must be used within ServicesProvider");
  return ctx;
}

