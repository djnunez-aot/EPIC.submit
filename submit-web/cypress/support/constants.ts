import { faker } from "@faker-js/faker";
import { AccountProject, Project } from "../../src/models/Project";

export function createMockProject(id: number, proponentId: number): Project {
  return {
    id,
    name: faker.company.name(),
    proponent_id: proponentId,
    proponent_name: faker.name.fullName(),
    ea_certificate: faker.datatype.boolean()
      ? `EA-${faker.random.alphaNumeric(5)}`
      : undefined,
  };
}

export function createMockAccountProject(
  id: number,
  projectId: number,
  accountId: number,
): AccountProject {
  return {
    id,
    project_id: projectId,
    account_id: accountId,
    project: mockProjects.find(
      (project) => project.id === projectId,
    ) as Project,
    packages: [],
  };
}

export const mockProjects: Project[] = [
  createMockProject(1, 101),
  createMockProject(2, 101),
  createMockProject(3, 101),
];

export const mockAccountProjects: AccountProject[] = [
  createMockAccountProject(1, 1, 201),
  createMockAccountProject(2, 2, 201),
  createMockAccountProject(3, 3, 201),
];
