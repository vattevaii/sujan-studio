"use client";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type State = { isOpen: boolean };
const SidebarContext = createContext<State>({ isOpen: false });

export function PopoverProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

function usePopoverContext() {
  let context = useContext(SidebarContext);
  if (!context) throw new Error("PopoverContext is not available");
}

export { usePopoverContext };
