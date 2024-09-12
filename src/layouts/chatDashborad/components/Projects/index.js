import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/Datatable2";

// Data
import data from "layouts/dashboard/components/Projects/data";
import { BorderAll, BorderBottom } from "@mui/icons-material";

function Projects() {

  // console.log('mylog','salam')

  const { columns, rows } = data();

  return (
    <Card /*sx={{width:"22.8%"}}*/>
      {/* <MDBox display="flex" justifyContent="space-between" alignItems="center" p={0.5}>
        <MDBox>
          <MDBox display="flex" alignItems="center" lineHeight={0} sx={{BorderAll: "none"}}>
          </MDBox>
        </MDBox>
      </MDBox> */}
      <MDBox>
        <DataTable
          table={{ columns, rows }}
          showTotalEntries={false}
          isSorted={false}
          noEndBorder
          entriesPerPage={false}
          sx={{BorderAll: "none"}}
        />
      </MDBox>
    </Card>
  );
}

export default Projects;
