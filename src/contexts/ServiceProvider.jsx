import { createContext, useState } from 'react';
import services from '../data/services.json';

export const ServiceContext = createContext();

export default function ServiceProvider({ children }) {
  const [service] = useState(services);

  return (
    <ServiceContext.Provider value={{ service }}>
      {children}
    </ServiceContext.Provider>
  );
}
