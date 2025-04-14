"use client";

import { loginWithGoogle } from "@/api/auth";
import { CodeResponse, useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { ButtonPrimary } from "./button";
import GoogleIcon from "@/icons/google";

export function ButtonGoogleSignIn() {
  const [errorMessage, setErrorMessage] = useState("");

  // handle success callback
  const handleSuccess = async (res: CodeResponse) => {
    const authCode = res.code;
    if (!authCode) {
      console.log("No auth code received.");
      return;
    }

    // login with auth code
    const result = await loginWithGoogle(authCode);
    if (!result.success) {
      setErrorMessage(result.message || "");
    }
  };

  // handle error callback
  const handleError = () => {
    console.log("Failed to sign in.");
  };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => handleSuccess(codeResponse),
    onError: () => handleError(),
    flow: "auth-code"
  });

  return (
    <div>
      <ButtonPrimary onClick={() => login()}>
        <GoogleIcon /> Continue with Google
      </ButtonPrimary>
      <p>{errorMessage}</p>
    </div>
  );
}
