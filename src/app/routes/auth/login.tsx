import { useNavigate, useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layouts/auth-layout";

export const LoginRoute = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");

  return <Layout title="Login"></Layout>;
};
