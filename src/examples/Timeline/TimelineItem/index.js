

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Timeline context
import { useTimeline } from "examples/Timeline/context";

// Custom styles for the TimelineItem
import timelineItem from "examples/Timeline/TimelineItem/styles";

function TimelineItem({ color, icon, title, dateTime, description, lastItem }) {
  const isDark = useTimeline();

  return (
    <MDBox position="relative" mb={0}>
      <MDBox pt={description ? 0.7 : 0.5} lineHeight={15} maxWidth="30rem">
        <MDTypography variant="button" fontWeight="bold" color={isDark ? "white" : "dark"}>
          {title}
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}

// Setting default values for the props of TimelineItem
TimelineItem.defaultProps = {
  color: "info",
  lastItem: false,
  description: "",
};

// Typechecking props for the TimelineItem
TimelineItem.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  description: PropTypes.string,
  lastItem: PropTypes.bool,
};

export default TimelineItem;
