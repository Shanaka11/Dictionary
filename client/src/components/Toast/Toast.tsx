import { useState, useCallback, useEffect, createContext, useContext } from "react";
import { ToastContainer, ToastsContainer } from "./Toast.styled";

export type ToastType = 'success' | 'info' | 'warning' | 'error';

export interface ToastProps {
  id?: number;
  type: ToastType;
  message: string;
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  handleClose?: (id:number) => void
}

const Toast:React.FC<ToastProps> = ({
  id,
  type,
  message,
  duration = 5000,
  position = 'top-right',
  handleClose
}) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      if(id && handleClose) handleClose(id);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <ToastContainer type={type} position={position}>
      <div>
        <h1>Error</h1>
        <p>{message}</p>
      </div>
      <button onClick={(event) => {if(id && handleClose) handleClose(id)}}>X</button>
    </ToastContainer>
    )
}

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastContext = createContext((toast: ToastProps) => {});

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const showToast = (toast: ToastProps) => {
    toast.id = Math.floor(Math.random() * 100)
    setToasts((prevToasts) => [...prevToasts, toast]);
    console.log(toasts)
  };

  const handleClose = (id: number) => {
    setToasts((prevToasts) =>
      prevToasts.filter((toast) => toast.id !== id)
    );
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      { toasts.length > 0 &&
        <ToastsContainer>
          {toasts.map((toast) => (
            <Toast
              id={toast.id}
              key={toast.id}
              type={toast.type}
              message={toast.message}
              duration={toast.duration}
              position={toast.position}
              handleClose={handleClose}
            />
          ))}
        </ToastsContainer>
      }
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const showToast = useContext(ToastContext);
  return showToast;
};