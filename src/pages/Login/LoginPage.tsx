import { TextInput, Label, Checkbox, Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

import AxiosClient from "../../api/AxiosClient";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await AxiosClient.post("api/auth/login", { email, password });
      setEmail("");
      setPassword("");
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="page grid place-content-center bg-neutral-50 min-h-screen">
      <div className="max-w-2xl w-full px-4">
        <form
          onSubmit={handleLogin}
          className="shadow-lg flex flex-col p-4 bg-white gap-4 lg:p-8 md:p-4 sm:p-4 min-w-[25rem] border-2 border-slate-50 rounded-lg"
        >
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email"
                value=" Adresse email"
                className="text-slate-500"
              />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="name@example.com"
              required={true}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Mot de passe" />
            </div>
            <TextInput
              id="password"
              type="password"
              name="password"
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Se rappeler de moi</Label>
          </div>
          <Button type="submit" className={``}>
            Je me connecte
          </Button>

          <div className="flex items-center justify-center gap-1 text-xs">
            <p>Mot de passe oublié? </p>{" "}
            <p>
              <Link
                to={"/forgot-password"}
                className="underline underline-offset-2 hover:text-blue-600 transition-all"
              >
                Récupérer mot de passe
              </Link>
            </p>
          </div>
          <div className="flex items-center justify-center gap-1 text-xs">
            <p>Pas de compte ?</p>
            <p>
              <Link
                to={"/register"}
                className=" underline underline-offset-2 hover:text-blue-600 transition-all"
              >
                Inscris-toi
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
