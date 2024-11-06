import { AccountProject } from "@/models/Project";
import { submitRequest } from "@/utils/axiosUtils";
import { useQuery } from "@tanstack/react-query";
import { defaultUseQueryOptions, QUERY_KEY } from "./constants";

type GetProjectsByAccountParams = {
  accountId?: number;
  searchOptions?: Record<string, string | number | string[]>;
};

const getStaffProjects = ({
  accountId,
  searchOptions,
}: GetProjectsByAccountParams) => {
  // Initialize URL with base path and account ID
  const url = `/staff/projects`;

  return submitRequest<AccountProject[]>({
    url,
    params: searchOptions,
  });
};

type UseGetStaffProjectsParams = {
  searchOptions?: Record<string, string | number | string[]>;
  // queryOptions?: Record<string, unknown>;
};
export const useGetStaffProjects = ({
  searchOptions,
}: UseGetStaffProjectsParams) => {
  return useQuery({
    queryKey: [QUERY_KEY.ACCOUNT_PROJECTS, searchOptions],
    queryFn: () => getStaffProjects({ searchOptions }),
    ...defaultUseQueryOptions,
  });
};
