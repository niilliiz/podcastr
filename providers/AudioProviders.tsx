"use client";

import React, { createContext, useEffect, useState } from "react";
import { AudioContextType, AudioProps } from "@/types";
import { usePathname } from "next/navigation";

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export default function AudioProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [audio, setAudio] = useState<AudioProps | undefined>();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/create-podcast") {
      setAudio(undefined);
    }
  }, [pathname]);
  return (
    <AudioContext.Provider value={{ audio, setAudio }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = React.useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within a AudioProvider");
  }
  return context;
}
