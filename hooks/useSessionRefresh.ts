"use client";

import { useEffect } from "react";
import { refreshUser } from "@/api/auth";
import { UserSession } from "@/lib/types";

export default function useSessionRefresh(user: UserSession) {
  useEffect(() => {
    const refreshSession = async () => {
      await refreshUser(user);
    };

    refreshSession();
  }, []);
}
