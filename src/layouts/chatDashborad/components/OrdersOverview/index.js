// @mui material components
import { WrapText } from "@mui/icons-material";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{width:"62rem", height:"18.25rem", justifyContent:"center", alignItems:"center"}}>
      <MDBox>
        <TimelineItem
          color="white"
          title="فعلا دیتایی ثبت نشده است. با اولین مکامله، نمودار چت ها را مشاهده خواهید کرد"
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
