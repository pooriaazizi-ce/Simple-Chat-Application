/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";
import { BorderAll, BorderBottom } from "@mui/icons-material";

// const RowComponent = () => { 
//   const [hoveredRow, setHoveredRow] = useState(null);
//   const handleMouseEnter = (index) => { setHoveredRow(index); }; 
//   const handleMouseLeave = () => { setHoveredRow(null); };
//   const rows = [ { name: "تعداد مکالمات", count: 0 }, { name: "تعداد کاربران", count: 0 }, { name: "نرخ تبدیل به مکالمه", count: "0.0%" }, ];
//   return 
//     ( <div> {rows.map((row, index) => ( <div key={index} style={{ padding: '10px', backgroundColor: hoveredRow === index ? '#f0f0f0' : 'transparent', transition: 'background-color 0.3s ease', }} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} > <Company name={row.name} count={row.count} /> </div> ))} </div> );
// }; 
  
  
// export default RowComponent;


export default function data() {

  const Company = ({ name, count }) => (
    <MDBox display="flex" flexDirection="column" alignItems="right" lineHeight={2} sx={{
      border: ({ borders: { borderWidth }, palette: { white } }) =>
        `${borderWidth[2]} solid ${white.main}`,
      cursor: "pointer",
      position: "relative",

      "&:not(:first-of-type)": {
        ml: -1.25,
      },

      "&:hover, &:focus": {
        zIndex: "10",
        yIndex: "10"
      },
    }}>
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={2} pt={1} >
        {name}
      </MDTypography>
      <MDTypography variant="button" fontWeight="small" ml={1} lineHeight={1.5} pb={1.5}>
        {count}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "", accessor: "companies",
        sx: { BorderAll: "none" }
      },
    ],

    rows: [
      {
        companies: <Company name="تعداد مکالمات" count="0"/>,
      },
      {
        companies: <Company name="تعداد کاربران" count="0"/>,
      },
      {
        companies: <Company name="نرخ تبدیل به مکالمه" count="0.0%" />,
      },
    ],
  };
}
