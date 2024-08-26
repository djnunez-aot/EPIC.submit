import { AppConfig } from "../../../utils/config";
import { setupIntercepts } from "../../../../cypress/support/utils";
import { useAccount } from "../../../store/accountStore";
import { mockZustandStore } from "../../../../cypress/support/utils";
import {
  mockAccountProjects,
  mockProjects,
  createMockAccountProject,
} from "../../../../cypress/support/constants";

const endpoints = [
  {
    name: "getProjectsOptions",
    method: "OPTIONS",
    url: `${AppConfig.apiUrl}/projects/proponents/${mockProjects[0].proponent_id}`,
  },
  {
    name: "getProjects",
    method: "GET",
    url: `${AppConfig.apiUrl}/projects/proponents/${mockProjects[0].proponent_id}`,
    response: { body: mockProjects },
  },
  {
    name: "addProjects",
    method: "POST",
    url: `${AppConfig.apiUrl}/projects/accounts/${mockAccountProjects[0].account_id}`,
    response: {
      body: [
        mockAccountProjects,
        createMockAccountProject(
          mockAccountProjects[0].id,
          mockAccountProjects[0].project_id,
          mockAccountProjects[0].account_id
        ),
      ],
    },
  },
];

describe("Projects List", () => {
  beforeEach(() => {
    mockZustandStore(useAccount, {
      proponentId: 201,
      accountId: "Account A",
      isLoading: false,
    });
    setupIntercepts(endpoints);
    cy.navigate("/projects");
  });

  it("should display the projects", () => {
    // Select the table container
    cy.get(".MuiInputBase-root");
  });

  it("should add projects to the account", () => {
    // Click the "Add Projects" button
    cy.get(".MuiButton-root").click();
    // Confirm the projects
    cy.get(".MuiButton-root").click();
    // Check that the projects were added
    cy.get(".MuiTable-root").should(
      "have.length",
      mockAccountProjects.length + 1
    );
  });
});
