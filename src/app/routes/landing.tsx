import { Head } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const LandingRoute = () => {
  //   const navigate = useNavigate();

  return (
    <>
      <Head description="Welcome to Group Expense" />
      <div className="flex h-screen items-center">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Group Expense</span>
          </h2>
          <img alt="react" />
          <p>A group expense manager</p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Button>Get Started</Button>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="https://github.com/alan2207/bulletproof-react"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline">Github Repo</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
