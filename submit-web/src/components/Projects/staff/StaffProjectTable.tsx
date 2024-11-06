import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { BCDesignTokens } from "epic.theme";
import { SubmissionPackage } from "@/models/Package";
import ProjectTableRow from "./StaffProjectTableRow";
import { StyledTableHeadCell } from "../../Shared/Table/common";

export default function StaffSubmissionPackageTable({
  submissionPackages,
  headless,
  onSubmissionClick,
}: {
  submissionPackages: Array<SubmissionPackage>;
  headless?: boolean;
  onSubmissionClick: (submissionId: number) => void;
}) {
  return (
    <TableContainer component={Box} sx={{ height: "100%" }}>
      <Table sx={{ tableLayout: "fixed", border: 0 }}>
        {!headless && (
          <TableHead
            sx={{
              border: 0,
              ".MuiTableCell-root": {
                p: BCDesignTokens.layoutPaddingXsmall,
              },
            }}
          >
            <TableRow>
              <StyledTableHeadCell>Submission Name</StyledTableHeadCell>
              <StyledTableHeadCell align="right">Type</StyledTableHeadCell>
              <StyledTableHeadCell align="right">
                Submitted On
              </StyledTableHeadCell>
              <StyledTableHeadCell align="right">
                Days since submission
              </StyledTableHeadCell>
              <StyledTableHeadCell align="right">
                CC Completed On
              </StyledTableHeadCell>
              <StyledTableHeadCell align="right">MP Review</StyledTableHeadCell>
              <StyledTableHeadCell align="center">Status</StyledTableHeadCell>
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {submissionPackages?.map((subPackage) => (
            <ProjectTableRow
              key={subPackage.id}
              subPackage={subPackage}
              onSubmissionClick={onSubmissionClick}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
