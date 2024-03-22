import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import AppAppBar from "../components/navbar";
import getLPTheme from "../components/getLPTheme";
import "@radix-ui/themes/styles.css";
import { Flex, Separator } from "@radix-ui/themes";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SiInstagram } from "react-icons/si";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import "../components/add_student.css";

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100dvw",
        position: "fixed",
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Platform"
        sx={{
          backgroundColor: "background.default",
          "& .Mui-selected": {
            pointerEvents: "none",
          },
        }}
      ></ToggleButtonGroup>
    </Box>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.shape({
    valueOf: PropTypes.func.isRequired,
  }).isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

export default function Add_Student() {
  var uid = window.localStorage.getItem("uid");

  useEffect(() => {
    if (uid === null) {
      window.location.href = "/";
    }
  });
  console.log("user id: ", uid);

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [mode, setMode] = React.useState("light");
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />

      <Box>
        <AppAppBar />
        <div
          className="dash_home"
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                }}
          
        >
          <div className="container-1"
          
            style={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
                height: "100%",
                // border: '1px solid #e0e0e0',
                // marginTop: "-2rem",
                }}
          >
            <div className="container1-menu">
              <TabContext value={value}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    padding: "10px",
                    paddingBottom: "0px",
                  }}
                >
                  <TabList onChange={handleChange} aria-label="">
                    <Tab
                      label="Add Student"
                      value="1"
                      style={{
                        fontFamily: "Trebuchet MS",
                      }}
                    />
                    <Tab
                      label="Add Teacher"
                      value="2"
                      style={{
                        fontFamily: "Trebuchet MS",
                      }}
                    />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div className="add_student">
                    <h1
                      className="h2"
                      style={{
                        textAlign: "center",
                        fontFamily: "Russo One",
                        fontWeight: "400",
                        fontStyle: "normal",
                        color: "#2756BD",

                        "@media (max-width: 450px)": {
                          fontSize: "1rem",
                        },
                      }}
                    >
                      Add Student
                    </h1>

                    <div className="add_student_form">
                      <div className="form-row-1">
                        <TextField
                          id="outlined-basic"
                          label="First Name"
                          variant="outlined"
                          className="firstname"
                        />
                        <TextField
                          id="outlined-basic"
                          label="Last Name"
                          variant="outlined"
                          className="lastname"
                        />
                      </div>
                      <div className="form-row-2">
                        <TextField
                          id="outlined-basic"
                          label="CNIC number"
                          variant="outlined"
                          className="cnic"
                        />
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          type="date"
                          className="dob"
                        />

                        <TextField
                          id="outlined-basic"
                          label="Student ID"
                          variant="outlined"
                          className="studentid"
                        />
                      </div>
                      <div className="form-row-3">
                        <TextField
                          id="outlined-basic"
                          label="Batch"
                          variant="outlined"
                          className="batch"
                        />

                        <TextField
                          id="outlined-basic"
                          label="Phone number"
                          variant="outlined"
                          className="phone"
                        />
                      </div>
                      <div className="form-row-4">
                        <TextField
                          id="outlined-basic"
                          label="Email"
                          variant="outlined"
                          className="email"
                        />
                      </div>

                      <div className="form-row-5">
                        <TextField
                          id="outlined-basic"
                          label="Address"
                          variant="outlined"
                          className="address"
                        />
                      </div>
                    </div>
                    <div className="add_student_button">
                      <Button variant="outlined">Add Student</Button>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  <div
                    className="add_teacher"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      // border: '1px solid #e0e0e0',
                      height: "100%",
                      marginTop: "-2rem",
                    }}
                  >
                    <h1
                      className="h2"
                      style={{
                        textAlign: "center",
                        fontFamily: "Russo One",
                        fontWeight: "400",
                        fontStyle: "normal",
                        color: "#2756BD",

                        "@media (max-width: 450px)": {
                          fontSize: "1rem",
                        },
                      }}
                    >
                      Add Teacher
                    </h1>
                  </div>
                </TabPanel>
              </TabContext>
            </div>
          </div>
        </div>
      </Box>

      <ToggleCustomTheme
        showCustomTheme={showCustomTheme}
        toggleCustomTheme={toggleCustomTheme}
      />
    </ThemeProvider>
  );
}
