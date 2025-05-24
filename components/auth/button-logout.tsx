"use client";

import { logout } from "@/api/auth";
import { ButtonGhost } from "../ui/button";

export default function ButtonLogout() {
  return (
    <ButtonGhost
      onClick={() => {
        logout();
      }}
    >
      Logout
    </ButtonGhost>
  );
}
