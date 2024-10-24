import { AccountProject } from "@/models/Project";
import { Stack } from "@mui/material";
import { Project } from "./Project";
import { ContentBoxSkeleton } from "../Shared/ContentBox/ContentBoxSkeleton";
import { Navigate } from "@tanstack/react-router";

type ProjectsParams = {
  accountProjects?: AccountProject[];
};
export const Projects = ({ accountProjects }: ProjectsParams) => {
  if (!accountProjects) return <Navigate to={"/error"} />;
  return (
    <Stack spacing={2} direction={"column"}>
      {accountProjects.map((accountProject) => (
        <Project key={accountProject.id} accountProject={accountProject} />
      ))}
    </Stack>
  );
};

export const ProjectsSkeleton = () => {
  return (
    <Stack spacing={2} direction={"column"}>
      <ContentBoxSkeleton />
      <ContentBoxSkeleton />
      <ContentBoxSkeleton />
    </Stack>
  );
};
