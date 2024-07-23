import { Button } from "@/components/ui/button";

export const NotFoundRoute = () => {
  return (
    <div className="mt-52 flex flex-col items-center ">
      <h1 className="text-3xl font-bold ">404 - Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
      <Button onClick={() => window.location.assign(window.location.origin)}>
        Go to Home
      </Button>
    </div>
  );
};
