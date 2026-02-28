import { createContext, useContext } from 'react';

interface RequestDemoContextType {
  isDemoDialogOpen: boolean;
  setIsDemoDialogOpen: (isOpen: boolean) => void;
}

export const RequestDemoContext = createContext<RequestDemoContextType | undefined>(undefined);

export const useRequestDemo = () => {
  const context = useContext(RequestDemoContext);
  if (context === undefined) {
    throw new Error('useRequestDemo must be used within a RequestDemoProvider');
  }
  return context;
};
