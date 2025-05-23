"use client";

import { loginWithGoogle } from "@/api/auth";
import { CodeResponse, useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { ButtonPrimary } from "@/components/ui/button";
import GoogleIcon from "@/icons/google";

export function ButtonGoogleSignIn() {
  const [errorMessage, setErrorMessage] = useState("");

  // handle success callback
  const handleSuccess = async (res: CodeResponse) => {
    const authCode = res.code;
    if (!authCode) {
      console.error("No auth code received.");
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
    console.error("Failed to sign in.");
  };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => handleSuccess(codeResponse),
    onError: () => handleError(),
    flow: "auth-code"
  });

  return (
    <>
      <ButtonPrimary onClick={() => login()}>
        <GoogleIcon /> Continue with Google
      </ButtonPrimary>
      <p>{errorMessage}</p>
    </>
  );
}
