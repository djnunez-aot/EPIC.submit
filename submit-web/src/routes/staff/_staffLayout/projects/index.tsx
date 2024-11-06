import { createFileRoute, Navigate } from "@tanstack/react-router";
import { Grid } from "@mui/material";
import { useGetAccountProjects } from "@/hooks/api/useProjects";
import { useAccount } from "@/store/accountStore";
import { Else, If, Then } from "react-if";
import { StaffProjects } from "@/components/Projects/staff";
import { useEffect } from "react";
import { notify } from "@/components/Shared/Snackbar/snackbarStore";
import { PageGrid } from "@/components/Shared/PageGrid";
import ProjectFilters from "@/components/Filters/ProjectFilters";
import { useProjectFilters } from "@/components/Filters/projectFilterStore";
import { ProjectsSkeleton } from "@/components/Projects/proponent";

export const Route = createFileRoute("/staff/_staffLayout/projects/")({
  component: ProjectsPage,
  meta: () => [{ title: "All Projects" }],
});

export function ProjectsPage() {
  const { accountId } = useAccount();
  const { filters } = useProjectFilters();
  const {
    data: projectsData,
    isPending: isProjectsLoading,
    isError: isProjectsError,
  } = useGetAccountProjects({
    accountId: 1,
    searchOptions: filters,
  });

  useEffect(() => {
    if (isProjectsError) {
      notify.error("Failed to load projects");
    }
  }, [isProjectsError]);

  if (isProjectsError) {
    return <Navigate to={"/error"} />;
  }

  return (
    <PageGrid>
      <Grid item xs={12}>
        <ProjectFilters />
        <If condition={isProjectsLoading}>
          <Then>
            <ProjectsSkeleton />
          </Then>
          <Else>
            <StaffProjects accountProjects={projectsData} />
          </Else>
        </If>
      </Grid>
    </PageGrid>
  );
}
