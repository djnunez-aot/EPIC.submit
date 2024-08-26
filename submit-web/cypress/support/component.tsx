import "./commands";
import { MountReturn, mount } from "cypress/react";
import "@cypress/code-coverage/support";
import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "react-oidc-context";
import { OidcConfig } from "../../src/utils/config";
import { theme } from "../../src/styles/theme";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "../../src/routeTree.gen";
import React from "react";

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Mounts a React node
       * @param component React Node to mount
       * @param options Additional options to pass into mount
       */
      mount(component: React.ReactNode): Cypress.Chainable<MountReturn>;
    }
  }
}
const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  context: {
    authentication: undefined!,
  },
});

Cypress.Commands.add("mount", () => {
  const mockAuth = {
    isAuthenticated: true,
    user: { profile: { name: "Test User" } },
    signoutRedirect: cy.stub(),
    signinRedirect: cy.stub(),
    // add other necessary mocks here
  };

  const wrapped = (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthProvider {...OidcConfig}>
          <RouterProvider
            router={router}
            context={{ authentication: mockAuth }}
          />
        </AuthProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );

  return mount(wrapped);
});
// Example use:
// cy.mount(<MyComponent />)
