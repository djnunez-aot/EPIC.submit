import React from "react";
import { AddProjects } from "../../../routes/_authenticated/registration/add-projects";
import { Project, AccountProject } from "../../../models/Project";
import { AppConfig } from "../../../utils/config";
import { setupIntercepts } from "../../../../cypress/support/utils";
import { useNavigate } from "@tanstack/react-router";

const sampleProjects: Project[] = [
  {
    id: 1,
    name: "Project Alpha",
    proponent_id: 101,
    proponent_name: "Proponent A",
    ea_certificate: "EA-12345",
  },
  {
    id: 2,
    name: "Project Beta",
    proponent_id: 101,
    proponent_name: "Proponent B",
  },
  {
    id: 3,
    name: "Project Gamma",
    proponent_id: 101,
    proponent_name: "Proponent C",
    ea_certificate: "EA-67890",
  },
];

const sampleAccountProjects: AccountProject[] = [
  {
    id: 1,
    project_id: 1,
    account_id: 201,
    project: sampleProjects[0],
  },
  {
    id: 2,
    project_id: 2,
    account_id: 201,
    project: sampleProjects[1],
  },
  {
    id: 3,
    project_id: 3,
    account_id: 201,
    project: sampleProjects[2],
  },
];

const newProject: Project = {
  id: 4,
  name: "Project Delta",
  proponent_id: 101,
  proponent_name: "Proponent D",
};

const newAccountProject: AccountProject = {
  id: 4,
  project_id: 4,
  account_id: 201,
  project: newProject,
};

const endpoints = [
  {
    name: "getProjectsOptions",
    method: "OPTIONS",
    url: `${AppConfig.apiUrl}/projects/proponents/${sampleProjects[0].proponent_id}`,
  },
  {
    name: "getProjects",
    method: "GET",
    url: `${AppConfig.apiUrl}/projects/proponents/${sampleProjects[0].proponent_id}`,
    response: { body: sampleProjects },
  },
  {
    name: "addProjects",
    method: "POST",
    url: `${AppConfig.apiUrl}/projects/accounts/${sampleAccountProjects[0].account_id}`,
    response: { body: [sampleAccountProjects, newAccountProject] },
  },
];

describe("Projects List", () => {
  beforeEach(() => {
    setupIntercepts(endpoints);
    cy.mount(<AddProjects />);
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
      sampleAccountProjects.length + 1
    );
  });
});
