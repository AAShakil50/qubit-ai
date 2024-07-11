import { LoginForm } from "./login_form";

export default function Login({ searchParams }: { searchParams: { required: string | undefined, error: string | undefined } }) {
  return (
    <LoginForm />
  );
}
