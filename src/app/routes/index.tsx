import { createBrowserRouter } from "react-router-dom";

export const createRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      lazy: async () => {
        const { LandingRoute } = await import("./landing");
        return { Component: LandingRoute };
      },
    },
    {
      path: "/auth/login",
      lazy: async () => {
        const { LandingRoute } = await import("./landing");
        return { Component: LandingRoute };
      },
    },
    {
      path: "*",
      lazy: async () => {
        const { NotFoundRoute } = await import("./not-found");
        return { Component: NotFoundRoute };
      },
    },
  ]);
