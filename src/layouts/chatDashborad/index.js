// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import TocIcon from '@mui/icons-material/Toc';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import TextsmsTwoToneIcon from '@mui/icons-material/TextsmsTwoTone';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CircularProgress from '@mui/material/CircularProgress';
// Data
import reportsBarChartData from "layouts/chatDashborad/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/chatDashborad/components/Projects";
import OrdersOverview from "layouts/chatDashborad/components/OrdersOverview";
import travelBag from "./travel-bag.png"
import { Margin } from "@mui/icons-material";
import { Button } from "@mui/material";

function ChatDashboard() {

  return (
    <DashboardLayout>
      {/* <DashboardNavbar/> */}
      <MDBox>
      <MDBox>
            <Grid container spacing={3}>
              <Grid item>
                <MDBox mb={2}>
                  <MDTypography variant="h5" fontWeight="bold">
                      نوع پکیج شما:
                  </MDTypography>
                </MDBox>
                <MDBox display="flex" alignItems="center" sx={{width:"13rem", border: '2px solid gray', borderRadius: '4px', padding: '8px' }}>
                  <MDBox mr={2}>
                    <img width="40px" height="40px" src={travelBag} alt="Package Status" />
                  </MDBox>
                  <MDBox>
                    <MDBox>
                      <MDTypography variant="subtitle2" fontWeight="bold">
                        منقضی
                      </MDTypography>
                      <MDTypography variant="subtitle2" color="textSecondary">
                        پکیج منقضی رایچت
                      </MDTypography>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Grid>
              <Grid item>
              <MDBox display="flex" alignItems="center" justifyContent="space-between" sx={{width:"60rem", border: '2px solid gray', borderRadius: '7px', padding: '8px', backgroundColor: 'white' }}>
                <MDBox display="flex" alignItems="center" justifyContent="space-between" sx={{width:"28.5rem", height:"6rem", border: '2.5px solid white', borderRadius: '7px', padding: '8px', mr:"1.5", ml:"1.5", backgroundColor: 'white'}}>
                  <MDBox ml="25px">
                    <MDBox>
                      <MDTypography variant="subtitle1" fontWeight="bold">
                          سرویس باقی مانده
                      </MDTypography>
                      <Button variant="subtitle2" color="primary" sx={{border: '2px solid gray', borderRadius:'7px', backgroundColor: 'white', ml: '20px', mt: '3px'}}>
                          تمدید سرویس
                      </Button>
                    </MDBox>
                  </MDBox>
                  <MDBox mr={2} position="relative" display="inline-flex">
                    <CircularProgress
                      variant="determinate" 
                      value={100}
                      size={70}
                      sx={{
                        position: 'absolute',
                        color: 'lightgray',
                      }}
                    />
                    <CircularProgress
                    variant="determinate" 
                    value={0}
                    size={70}
                    sx={{
                      color: 'gray',
                    }}
                    />
                    <MDBox
                      top={0}
                      left={0}
                      bottom={0}
                      right={0}
                      position="absolute"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <MDTypography variant="caption" fontWeight="bold" component="div" color="textSecondary">
                        {`${Math.round(0)}`} روز
                      </MDTypography>
                    </MDBox>
                  </MDBox>
                </MDBox>
                <MDBox display="flex" alignItems="center" justifyContent="space-between" sx={{width:"28.5rem", height:"6rem", border: '2.5px solid white', borderRadius: '7px', padding: '8px', mr:"1.5", ml:"1.5", backgroundColor: 'white'}}>
                  <MDBox>
                    <MDBox ml="25px" mt="9px">
                      <MDTypography variant="subtitle1" fontWeight="bold">
                        شارژ باقی مانده
                      </MDTypography>
                    </MDBox>
                  </MDBox>
                  <MDBox mr={2} position="relative" display="inline-flex">
                    <CircularProgress
                      variant="determinate" 
                      value={100}
                      size={70}
                      sx={{
                        position: 'absolute',
                        color: 'lightgray',
                      }}
                    />
                    <CircularProgress
                    variant="determinate" 
                    value={0}
                    size={70}
                    sx={{
                      color: 'gray',
                    }}
                    />
                    <MDBox
                      top={0}
                      left={0}
                      bottom={0}
                      right={0}
                      position="absolute"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <MDTypography variant="caption" fontWeight="bold" component="div" color="textSecondary">
                        {`${Math.round(0)}`} روز
                      </MDTypography>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </MDBox>
              </Grid>
            </Grid>
          </MDBox>
        <MDBox mr={2} mt={2}>
          <MDTypography variant="h5" fontWeight="bold">
            آمار کلی:
          </MDTypography>
        </MDBox>
        <MDBox py={3}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5} mr={1}>
                <ComplexStatisticsCard
                  color="white"
                  icon = {<TocIcon color="dark"/>}
                  title="تعداد وب سایت ها"
                  percentage={{
                    color: "dark",
                    amount: "1",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5} mr={1.7}>
                <ComplexStatisticsCard
                  icon={<PermIdentityOutlinedIcon color="dark"/>}
                  color="white"
                  title="تعداد کل کاربران"
                  percentage={{
                    color: "dark",
                    amount: "0",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} lg={3}>
              <MDBox mb={1.5} mr={1}>
                <ComplexStatisticsCard
                  color="white"
                  icon={<TextsmsTwoToneIcon color="dark"/>}
                  title="تعداد همه مکالمات"
                  // count="34k"
                  percentage={{
                    color: "dark",
                    amount: "0",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5} mr={2.5}>
                <ComplexStatisticsCard
                  color="white"
                  icon={<PersonAddAltIcon color="dark"/>}
                  title="تعداد اپراتور ها"
                  percentage={{
                    color: "dark",
                    amount: "1",
                  }}
                />
              </MDBox>
            </Grid>
          </Grid>
          <MDBox>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6} lg={2}>
                <Projects />
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <OrdersOverview />
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
      </MDBox> 
    </DashboardLayout>
  );
}

export default ChatDashboard;
