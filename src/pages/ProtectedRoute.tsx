import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

export function ProtectedRoute({ children }: Props) {
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated]
  );

  return isAuthenticated ? children : null;
}
