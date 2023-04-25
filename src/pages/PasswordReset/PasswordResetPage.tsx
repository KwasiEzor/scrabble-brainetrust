import { Button, Label, TextInput } from "flowbite-react";

const PasswordResetPage = () => {
  return (
    <section className="page grid place-content-center bg-neutral-50 min-h-screen">
      <div className="max-w-2xl w-full">
        <form className="shadow-lg flex flex-col bg-white gap-4 lg:p-8 md:p-4 sm:p-4 min-w-[25rem] border-2 border-slate-50 rounded-lg">
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
            />
          </div>

          <Button type="submit">Modifier mot de passe</Button>
        </form>
      </div>
    </section>
  );
};

export default PasswordResetPage;
