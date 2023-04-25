import _Container from "../../components/Others/_Container";
const ErrorPage = () => {
  return (
    <_Container>
      <section className="max-w-7xl mx-auto flex items-center justify-center min-h-screen gap-6">
        <h1 className="text-4xl">Ooops</h1>
        <p className="text-slate-500 text-base">
          Sorry, an error has occured..!
        </p>
      </section>
    </_Container>
  );
};

export default ErrorPage;
