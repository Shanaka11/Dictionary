import styled from "@emotion/styled";
import { colors, measurements } from "../../style";
import { ToastType } from "./Toast";

interface ToastContainerProps {
    type: ToastType;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const ToastsContainer = styled.div({
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    width: 250,
    zIndex: 10000,
    // Position Top Right
    top: measurements.marginBase * 2,
    right: measurements.marginBase * 2,
})
export const ToastContainer = styled.div<ToastContainerProps>({
    padding: measurements.marginBase * 2,
    color: 'white',
    width: 250,
    display: 'flex',
    justifyContent: "space-between",
    cursor: 'default',
    animation: 'toast-in 400ms linear forwards',
    marginBottom: measurements.marginBase * 2,
    
    "h1, p" : {
        margin: 0
    },

    "h1": {
        fontSize: "1.5em"
    },

    "p": {
        marginTop: measurements.marginBase * 2
    },

    "button" : {
        outline: "none",
        border: "none",
        height: 25,
        width: 25,
        color: 'white',
        cursor: 'pointer',
        transition: 'background-color 300ms ease-in-out',
    },

    "@keyframes toast-in" : {
        '0%' : {
            opacity: 0,
        },
        '100%' : {
            opacity: 1,
        }
    }
}, ({type}) => {
    switch (type) {
        case "error":
            return {
                backgroundColor: colors.toast.error.primary,
                "button" : {
                    backgroundColor: colors.toast.error.primary,
                    '&:hover' : {
                        backgroundColor: colors.toast.error.accent
                    }   
                }
            }
            case "info":
                return {
                    backgroundColor: colors.toast.information.primary,
                    "button" : {
                        backgroundColor: colors.toast.information.primary,
                        '&:hover' : {
                            backgroundColor: colors.toast.information.accent
                        }   
                    }
                }
            case "success":
                return {
                    backgroundColor: colors.toast.success.primary,
                    "button" : {
                        backgroundColor: colors.toast.success.primary,
                        '&:hover' : {
                            backgroundColor: colors.toast.success.accent
                        }   
                    }
                }
            case "warning":
                return {
                    backgroundColor: colors.toast.warnning.primary,
                    "button" : {
                        backgroundColor: colors.toast.warnning.primary,
                        '&:hover' : {
                            backgroundColor: colors.toast.warnning.accent
                        }   
                    }
                }
    }
})