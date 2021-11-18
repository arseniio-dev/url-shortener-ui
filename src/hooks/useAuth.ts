import { useState } from "react";

export default function useAuth() {
  const [isAuthorised, setIsAuthorised] = useState(false);

  const token = localStorage.getItem("token");

  if (token) {
    setIsAuthorised(true);
  }

  return isAuthorised;
}
