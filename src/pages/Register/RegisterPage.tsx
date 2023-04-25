import { TextInput, Label, Button } from "flowbite-react";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AxiosClient from "../../api/AxiosClient";
import { toast } from "react-toastify";
const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const handleRegistration = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await AxiosClient.post("api/auth/register", {
        name,
        email,
        password,
        password_confirmation,
      });
      setName("");
      setEmail("");
      setPassword("");
      setPasswordConfirmation("");
      if (response) {
        toast.success("Nouveau utilisateur créer avec succès", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/register");
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="page grid place-content-center bg-neutral-50 min-h-screen">
      <div className="max-w-2xl w-full">
        <form
          onSubmit={handleRegistration}
          className="shadow-lg p-4 flex flex-col bg-white gap-4 lg:p-8 md:p-4 sm:p-4 min-w-[25rem] border-2 border-slate-50 rounded-lg"
        >
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="name"
                value="Nom et prénoms"
                className="text-slate-500"
              />
            </div>
            <TextInput
              id="name"
              type="name"
              placeholder="John Doe"
              required={true}
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              placeholder="************************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password_confirmation"
                value="Confirmation mot de passe"
              />
            </div>
            <TextInput
              id="password_confirmation"
              type="password"
              name="password_confirmation"
              required={true}
              placeholder="************************"
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>

          <Button type="submit">Je m'inscris</Button>

          <div className="flex items-center justify-center gap-1 text-xs">
            <p>J'ai déjà mon compte</p>
            <p>
              <Link
                to={"/login"}
                className=" underline underline-offset-2 hover:text-blue-600 transition-all"
              >
                Je me connecte
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
