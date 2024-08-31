/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import { GiTreeBranch } from "react-icons/gi";
import './NavBar.css';

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import themeRTL from "assets/theme/theme-rtl";

function Cover() {
  return (
    <CoverLayout className={"noto-sans-arabic"}>
      <Card>
        <MDTypography mt={3} variant="h4" fontWeight="medium" color="black" className={"noto-sans-arabic"}>
            ایجاد حساب کاربری
          </MDTypography>
          <MDBox textAlign="right">
              <MDTypography
                  mr = {1}
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="purple"
                  fontWeight="medium"
                  textGradient
                  className={"noto-sans-arabic"}
                >
                 وارد شوید
              </MDTypography>
              <MDTypography variant="button" color="black" mr = {2.7} className={"noto-sans-arabic"}>
                از قبل حساب کاربری دارید؟{" "}
              </MDTypography>
            </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2} mt={0}>
              <MDInput type="text" label="نام" fullWidth className={"noto-sans-arabic"} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="نام خانوادگی" fullWidth className={"noto-sans-arabic"} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email" label="ایمیل" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="number" label="+98" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="رمز عبور"fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              {/* <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography> */}
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="purple" fullWidth>
                عضویت
              </MDButton>
              <MDTypography variant="button" color="black" textAlign="center">
                با کلیک بر روی "عضویت" با
              </MDTypography>
              <MDTypography variant="button" color="black" textAlign="center">
                {" "}
              </MDTypography>
              <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="purple"
                  fontWeight="medium"
                  textGradient
                  ml = {0.4}
                  mr = {0.3}
                >
                  شرایط استفاده
                </MDTypography>
              <MDTypography variant="button" color="black" textAlign="center">
                رایچت موافقیت میکنید.
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
