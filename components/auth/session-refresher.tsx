"use client";

import useSessionRefresh from "@/hooks/useSessionRefresh";
import { UserSession } from "@/lib/types";

export default function SessionRefresher({
  user,
  children
}: {
  user: UserSession;
  children?: React.ReactNode;
}) {
  useSessionRefresh(user);

  return children;
}
