// /**
// =========================================================
// * Material Dashboard 2 React - v2.2.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/material-dashboard-react
// * Copyright 2023 Creative Tim (https://www.creative-tim.com)

// Coded by www.creative-tim.com

//  =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

// import { useState } from "react";

// // react-router-dom components
// import { Link } from "react-router-dom";

// // @mui material components
// import Card from "@mui/material/Card";
// import Switch from "@mui/material/Switch";
// import Grid from "@mui/material/Grid";
// import MuiLink from "@mui/material/Link";

// // @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import GoogleIcon from "@mui/icons-material/Google";

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDInput from "components/MDInput";
// import MDButton from "components/MDButton";

// // Authentication layout components
// import BasicLayout from "layouts/authentication/components/BasicLayout";

// // Images
// import bgImage from "assets/images/bg-sign-in-basic.jpeg";

// function Basic() {
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleSetRememberMe = () => setRememberMe(!rememberMe);

//   return (
//     <BasicLayout image={bgImage}>
//       <Card>
//         <MDBox
//           variant="gradient"
//           bgColor="info"
//           borderRadius="lg"
//           coloredShadow="info"
//           mx={2}
//           mt={-3}
//           p={2}
//           mb={1}
//           textAlign="center"
//         >
//           <MDTypography variant="h4" fontWeight="medium" color="black" mt={1}>
//             ورود به رایچت
//           </MDTypography>
//           <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
//             <Grid item xs={2}>
//               <MDTypography component={MuiLink} href="#" variant="body1" color="white">
//                 <FacebookIcon color="inherit" />
//               </MDTypography>
//             </Grid>
//             <Grid item xs={2}>
//               <MDTypography component={MuiLink} href="#" variant="body1" color="white">
//                 <GitHubIcon color="inherit" />
//               </MDTypography>
//             </Grid>
//             <Grid item xs={2}>
//               <MDTypography component={MuiLink} href="#" variant="body1" color="white">
//                 <GoogleIcon color="inherit" />
//               </MDTypography>
//             </Grid>
//           </Grid>
//         </MDBox>
//         <MDBox pt={4} pb={3} px={3}>
//           <MDBox component="form" role="form">
//             <MDBox mb={2}>
//               <MDInput type="email" label="Email" fullWidth />
//             </MDBox>
//             <MDBox mb={2}>
//               <MDInput type="password" label="Password" fullWidth />
//             </MDBox>
//             <MDBox display="flex" alignItems="center" ml={-1}>
//               {/* <Switch checked={rememberMe} onChange={handleSetRememberMe} /> */}
//             </MDBox>
//             <MDBox mt={4}>
//               <MDButton variant="gradient" color="purple" fullWidth>
//               ورود به رایچت
//               </MDButton>
//               <MDTypography
//                 variant="button"
//                 fontWeight="regular"
//                 color="text"
//                 onClick={handleSetRememberMe}
//                 sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
//               >
//                 ورود با کد یکبار مصرف! کلیک کنید
//               </MDTypography>
//             </MDBox>
//             <MDBox mt={3} mb={1} textAlign="center">
//               <MDTypography variant="button" color="text">
//                 حساب کاربری ندارید؟
//                 <MDTypography
//                   component={Link}
//                   to="/authentication/sign-up"
//                   variant="button"
//                   color="purple"
//                   fontWeight="medium"
//                   textGradient
//                 >
//                  عضو شوید
//                 </MDTypography>
//               </MDTypography>
//             </MDBox>
//           </MDBox>
//         </MDBox>
//       </Card>
//     </BasicLayout>
//   );
// }

// export default Basic;


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
// import './NavBar.css';
import boxImage from "./chat.png";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import themeRTL from "assets/theme/theme-rtl";

function Cover() {
  return (
    <CoverLayout className={"noto-sans-arabic"}>
      <Card>
        <MDTypography mt={3} variant="h4" fontWeight="medium" color="black" className={"noto-sans-arabic"}>
            ورود به رایچت
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
                 عضو شوید
              </MDTypography>
              <MDTypography variant="button" color="black" mr = {2.7} className={"noto-sans-arabic"}>
                 حساب کاربری ندارید؟{" "}
              </MDTypography>
            </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="ایمیل" fullWidth />
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
            <MDBox mt={1}>
              <MDButton variant="gradient" color="purple" mb={5} fullWidth>
                عضویت
              </MDButton>
              <MDTypography variant="button" color="black" textAlign="center">
                ورود با کد یکبار مصرف!
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
                  کلیک کنید
                </MDTypography>
                 <MDTypography variant="button" color="black" textAlign="center">
                {" "}
              </MDTypography>
            </MDBox>
            <MDBox>
              <img 
                  src={boxImage}
                  alt="Logo" 
                  style={{ height: '27px', marginRight: '3px', marginTop: '2px' }} 
                />
              <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="black"
                  fontWeight="bold"
                  textGradient
                  ml = {0.4}
                  mr = {0.3}
                  mb={1}
                >
                  ورود به بخش گفتگو با کاربران
                </MDTypography>
                 <MDTypography variant="button" color="black" textAlign="center">
                {" "}
              </MDTypography>
            </MDBox>
            
          </MDBox>
        </MDBox>
      </Card>
      <MDBox textAlign={"center"} pt={18}>
        <MDTypography fontWeight={"bold"} variant="button" color="gray" textAlign="center" >
                  مورد اعتماد بیش از 40000 کسب و کار آنلاین
        </MDTypography>
      </MDBox>
        
    </CoverLayout>
  );
}

export default Cover;
