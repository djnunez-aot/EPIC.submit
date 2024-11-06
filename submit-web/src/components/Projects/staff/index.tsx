import { AccountProject } from "@/models/Project";
import { Stack } from "@mui/material";
import { StaffProject } from "./Project";
import { Navigate } from "@tanstack/react-router";

type StaffProjectParams = {
  accountProjects?: AccountProject[];
};
export const StaffProjects = ({ accountProjects }: StaffProjectParams) => {
  if (!accountProjects) return <Navigate to={"/error"} />;
  return (
    <Stack spacing={2} direction={"column"}>
      {accountProjects.map((accountProject) => (
        <StaffProject key={accountProject.id} accountProject={accountProject} />
      ))}
    </Stack>
  );
};
