import 'styles/main.css';

export default function Body() {
  return (
    <div>
      <main className="flex-1 w-full flex flex-col justify-center items-center">
        <h2 className="text-center font-bold text-5xl mb-4 signika-title pt-10 pb-10">
          Cognitive Calendar
        </h2>

        <p className="text-1.5xl !leading-tight mx-auto max-w-xl text-center">
          The Cognitive Calendar is designed to organize your tasks and
          activities based on your cognitive abilities, enhancing your
          efficiency and productivity.
        </p>
        <p className="text-1.5xl !leading-tight mx-auto max-w-xl text-center pt-10 ">
          Here are the cognitive abilities we'll be working with and more
          information about them, though do know that we are not saying these
          are all of the cognitive abilities, but just that these are the ones
          we'll be working with in this app:
        </p>
      </main>
    </div>
  );
}
