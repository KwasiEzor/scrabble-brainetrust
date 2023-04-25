import { Button, Label, TextInput } from "flowbite-react";

const ForgotPasswordPage = () => {
  return (
    <section className="page grid place-content-center bg-neutral-50 min-h-screen">
      <div className="max-w-2xl w-full">
        <form className="shadow-lg flex flex-col bg-white gap-4 lg:p-8 md:p-4 sm:p-4 min-w-[25rem] border-2 border-slate-50 rounded-lg">
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
            />
          </div>

          <Button type="submit">Récupérer mon mot de passe</Button>
        </form>
      </div>
    </section>
  );
};

export default ForgotPasswordPage;
