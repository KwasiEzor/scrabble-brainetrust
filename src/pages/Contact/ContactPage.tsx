import { Button, Label, TextInput, Textarea } from "flowbite-react";

const ContactPage = () => {
  return (
    <section className="page grid place-content-center bg-neutral-50 min-h-screen">
      <div className="max-w-4xl w-full">
        <form className="shadow-lg flex flex-col bg-white gap-4 lg:p-8 md:p-4 sm:p-4 min-w-[25rem] w-full border-2 border-slate-50 rounded-lg">
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
            />
          </div>
          <div id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="message" value="Votre message" />
            </div>
            <Textarea
              id="message"
              placeholder="Laissez nous un message..."
              required={true}
              rows={4}
              className="min-h-[10rem]"
            />
          </div>

          <Button type="submit">Envoyer message</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
