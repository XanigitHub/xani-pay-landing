import { useContext } from 'react';
import { ServiceContext } from '../contexts/ServiceProvider';

export const useServices = () => useContext(ServiceContext);
