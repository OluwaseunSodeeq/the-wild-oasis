import { useState } from "react";
import { useLogin } from "./useLogin";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("hello@example.com");
  const [password, setPassword] = useState("hello1234");
  const { login, isLoading } = useLogin(false);

  function handleSubmit(e) {
    console.log("Clicked!");
    e.preventDefault();
    if (!email || !password) {
      console.log("Email or password missing");
      return;
    }
    // login({ email, password });
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button type="submit" size="large" disabled={isLoading}>
          {!isLoading ? "Log in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
