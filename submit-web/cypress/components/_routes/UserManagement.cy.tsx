import { mount } from "cypress/react18";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "react-oidc-context";
import { AppConfig, OidcConfig } from "../../../src/utils/config";
import { mockZustandStore, setupTokenStorage } from "../utils";
import { useAccount } from "../../../src/store/accountStore";
import { USER_TYPE } from "../../../src/models/User";
import { QUERY_KEY } from "../../../src/hooks/api/constants";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "../../../src/routeTree.gen";
import {
  mockAccountProject,
  mockAccountUsersWithRoles,
  mockProponentAccount,
  mockProponentAuthentication,
  mockProponentUser,
} from "../utils/mockConstants";
import { ACCOUNT_USER_PERMISSIONS } from "../../../src/models/Role";

const mountDefaultPage = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  queryClient.setQueryData(
    [QUERY_KEY.ACCOUNT_PROJECT, mockAccountProject.id],
    mockAccountProject
  );

  queryClient.setQueryData(
    [QUERY_KEY.ACCOUNT_PROJECTS, mockAccountProject.id],
    [mockAccountProject]
  );

  queryClient.setQueryData(
    [QUERY_KEY.ACCOUNT_USERS, mockAccountProject.id],
    mockAccountUsersWithRoles
  );

  queryClient.setQueryData(
    [QUERY_KEY.ACCOUNT_USER, mockProponentUser.auth_guid],
    mockProponentUser
  );

  const router = createRouter({
    routeTree: routeTree,
    context: {
      authentication: mockProponentAuthentication,
      queryClient: queryClient,
      account: mockProponentAccount,
    },
  });

  router.navigate({
    to: `/proponent/user-management`,
  });

  mount(
    <QueryClientProvider client={queryClient}>
      <AuthProvider {...OidcConfig}>
        <RouterProvider
          router={router}
          context={{
            authentication: mockProponentAuthentication,
            account: mockProponentAccount,
          }}
        />
        ;
      </AuthProvider>
    </QueryClientProvider>
  );
};

describe("user management page", () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
    mockZustandStore(useAccount, {
      userType: USER_TYPE.PROPONENT,
      accountId: 1,
      userId: 1,
      proponentId: 1,
      roles: [ACCOUNT_USER_PERMISSIONS.INVITE_USERS],
      reset: () => {},
    });

    setupTokenStorage();
    cy.intercept(
      "GET",
      `${AppConfig.apiUrl}/projects/accounts/${mockAccountProject.id}`,
      {
        body: [mockAccountProject],
      }
    ).as("getAccountProjectsByAccountId");
    cy.intercept(
      "GET",
      `${AppConfig.apiUrl}/users/guid/${mockProponentUser.auth_guid}`,
      {
        body: mockProponentUser,
      }
    ).as("getUserByGuid");
    cy.intercept(
      "GET",
      `${AppConfig.apiUrl}/projects/${mockAccountProject.id}`,
      {
        body: mockAccountProject,
      }
    ).as("getAccountProjectById");
    cy.intercept(
      "GET",
      `${AppConfig.apiUrl}/accounts/${mockProponentAccount.accountId}/users?include_invitees=true&include_roles=true`,
      {
        body: mockAccountUsersWithRoles,
      }
    ).as("getUsers");
  });

  it("test page renders", () => {
    mountDefaultPage();
    cy.contains("User Management").should("exist");
  });
});
