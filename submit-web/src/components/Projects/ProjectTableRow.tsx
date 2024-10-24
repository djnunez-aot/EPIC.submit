import { ArrowForwardIos } from "@mui/icons-material";
import { Link, TableCell, TableRow, Typography } from "@mui/material";
import { BCDesignTokens } from "epic.theme";
import { SubmissionPackage } from "@/models/Package";
import dayjs from "dayjs";
import { PackageStatusChipStack } from "../PackageStatusChip/PackageStatusChipStack";

interface ProjectRowProps {
  subPackage: SubmissionPackage;
  onSubmissionClick: (submissionId: number) => void;
}
const border = `1px solid ${BCDesignTokens.surfaceColorBorderDefault}`;

export default function ProjectTableRow({
  subPackage,
  onSubmissionClick,
}: ProjectRowProps) {
  return (
    <>
      <TableRow
        key={`row-${subPackage.id}`}
        sx={{
          my: 1,
          "&:hover": {
            backgroundColor: BCDesignTokens.surfaceColorMenusHover,
          },
        }}
      >
        <TableCell
          sx={{
            borderTop: border,
            borderBottom: border,
            borderLeft: border,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            py: BCDesignTokens.layoutPaddingXsmall,
          }}
        >
          <Link
            sx={{
              color: BCDesignTokens.themeBlue90,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
            component={"button"}
            onClick={() => onSubmissionClick(subPackage.id)}
          >
            <Typography
              variant="h6"
              color={BCDesignTokens.themeBlue90}
              fontWeight={"500"}
              sx={{ mr: 0.5 }}
            >
              {subPackage.name}
            </Typography>
            <ArrowForwardIos fontSize="small" />
          </Link>
        </TableCell>
        <TableCell
          align="right"
          sx={{
            borderTop: border,
            borderBottom: border,
            py: BCDesignTokens.layoutPaddingXsmall,
          }}
        >
          {subPackage.submitted_on
            ? dayjs(subPackage.submitted_on).format("DD-MMM-YYYY")
            : "--"}
        </TableCell>
        <TableCell
          align="right"
          sx={{
            borderTop: border,
            borderBottom: border,
            py: BCDesignTokens.layoutPaddingXsmall,
          }}
        >
          {subPackage.submitted_by ?? "--"}
        </TableCell>
        <TableCell
          align="center"
          sx={{
            borderTop: border,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            borderBottom: border,
            borderRight: border,
            py: BCDesignTokens.layoutPaddingXsmall,
          }}
        >
          <PackageStatusChipStack status={subPackage.status} />
        </TableCell>
      </TableRow>
      <TableRow key={`empty-row-${subPackage.id}`} sx={{ py: 1 }}>
        <TableCell
          component="th"
          scope="row"
          colSpan={4}
          sx={{
            border: 0,
            py: BCDesignTokens.layoutPaddingXsmall,
          }}
        />
      </TableRow>
    </>
  );
}
