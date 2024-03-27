import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
 doc,
  setDoc,
  createUserWithEmailAndPassword,
  auth,
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  db,

} from "../firebase";
import { uploadFile } from "../utility/uploadimage";

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
import "../components/add_users.css";
import { ToastAlert } from "../utility/toast";

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

export default function Add_User() {

  useEffect(() => {

    if (uid === null) {
      window.location.href = "/";
    }


  });

  
  var uid = window.localStorage.getItem("uid");

  const [firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const [cnic, setCnic] = useState("");
  const [studentId, setStudentId] = useState("");
  const [batch, setBatch] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [stdImage, setStdImage] = useState(null);
  const [password, setPassword] = useState("");



  var fullname = firstName + " " + lastName;

  const adding_student = async () => {
    event.preventDefault();
    try {
      if (
        !fullname ||
        !cnic ||
        !studentId ||
        !batch ||
        !phone ||
        !email ||
        !address ||
        !password ||
        !stdImage
      ) {
        ToastAlert("required fields are missing", "error");
        return;
      }

      //AUTH
      const stdData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userID = stdData.user.uid;

      // Image
      const imageURL = await uploadFile(stdImage);

      const obj = {
        email,
        name: fullname,
        cnic,
        studentId,
        batch,
        phone,
        address,
        type: "student",
        imageURL,
        isActive: true,
      };




      await setDoc(doc(db, "users", userID), obj);
      ToastAlert("Student added successfully!", "success");

      setFirstName("");
      setLastName("");
      setCnic("");
      setStudentId("");
      setBatch("");
      setPhone("");
      setEmail("");
      setAddress("");
      setStdImage(null);
      setPassword("");

    

    } catch (error) {
      ToastAlert(error.code || error.message, "error");
    }
  };


  //adding teacher

  const [teacherFirstName, setTeacherFirstName] = useState("");
  const[teacherLastName, setTeacherLastName] = useState("");
  const [teacherCnic, setTeacherCnic] = useState("");
  const [teacherPhone, setTeacherPhone] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [teacherAddress, setTeacherAddress] = useState("");
  const [teacherImage, setTeacherImage] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");
  const [teacherCourse,  setTeacherCourse] = useState("");

  var teacherFullname = teacherFirstName + " " + teacherLastName;

  const adding_teacher = async () => {
    event.preventDefault();

    try{
      if (
        !teacherFullname ||
        !teacherCnic ||
        !teacherPhone ||
        !teacherEmail ||
        !teacherAddress ||
        !teacherCourse ||
        !teacherPassword 
      ) {
        ToastAlert("required fields are missing", "error");
        return;
      }

      //AUTH
      const teacherData = await createUserWithEmailAndPassword(
        auth,
        teacherEmail,
        teacherPassword
      );
      const userID = teacherData.user.uid;

      // Image
      const imageURL = await uploadFile(teacherImage);

      const obj = {
        email: teacherEmail,
        name: teacherFullname,
        cnic: teacherCnic,
        phone: teacherPhone,
        address: teacherAddress,
        course: teacherCourse,
        type: "teacher",
        imageURL,
        isActive: true,
      };

      await setDoc(doc(db, "users", userID), obj);
      ToastAlert("Teacher added successfully!", "success");

      setTeacherFirstName("");
      setTeacherLastName("");
      setTeacherCnic("");
      setTeacherPhone("");
      setTeacherEmail("");
      setTeacherAddress("");
      setTeacherImage("");
      setTeacherPassword("");
      setTeacherCourse("");
    }
    catch (error) {
      ToastAlert(error.code || error.message, "error");
    }
  }



  const [value, setValue] = React.useState("1");

  const handleChange = async(event, newValue) => {
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
          <div
            className="container-1"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
              height: "100%",
              // border: "1px solid #e0e0e0",
            }}
          >
            <div className="container1-menu">
              <TabContext value={ value }>
                <Box
                  sx={{
                    borderColor: "divider",
                    borderRadius: "10px 10px 0px 0px",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    padding: "10px",
                    paddingBottom: "0px",
                    backgroundColor: "#ececec",
                    // borderBottomColor: "#2756BD",
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
                        sx: {
                          "@media (max-width: 450px)": {
                            fontSize: "1rem",
                          },
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
                          onChange={(e) => {

                            setFirstName(e.target.value);

                          }}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Last Name"
                          variant="outlined"
                          className="lastname"
                          onChange={(e) => {
                            setLastName(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-row-2">
                        <TextField
                          id="outlined-basic"
                          label="CNIC number"
                          variant="outlined"
                          className="cnic"
                          onChange={(e) => {
                            setCnic(e.target.value);
                          }}
                        />
                        {/* <TextField
                          id="outlined-basic"
                          variant="outlined"
                          type=""

                          className="dob"
                          label="Date of Birth"

                        /> */}

                        <TextField
                          id="outlined-basic"
                          label="Student ID"
                          variant="outlined"
                          className="studentid"
                          onChange={(e) => {
                            setStudentId(e.target.value);
                          }}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Batch"
                          variant="outlined"
                          className="batch"
                          onChange={(e) => {
                            setBatch(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-row-3">
                        <TextField
                          id="outlined-basic"
                          label="Phone number"
                          variant="outlined"
                          className="phone"
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Email"
                          variant="outlined"
                          className="email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        <TextField
                        id= "outlined-basic"
                        label="Password"
                        variant="outlined"
                        className="password"

                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        />
                      </div>

                      <div className="form-row-5">
                        <TextField
                          id="outlined-basic"
                          label="Address"
                          variant="outlined"
                          className="address"
                          onChange={(e) => {
                            setAddress(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-row-4">
                        <Button
                          variant="contained"
                          component="label"
                          className="image_upload"
                          onChange={(e) => {
                            setStdImage(e.target.files[0]);
                          }}
                        >
                          Upload image
                          <input type="file" hidden />
                        </Button>
                      </div>
                    </div>
                    <div className="add_student_button">
                      <Button variant="outlined" onClick={adding_student}>Add Student</Button>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="2">
                <div className="add_student">
                    <h1
                      className="h2"
                      style={{
                        textAlign: "center",
                        fontFamily: "Russo One",
                        fontWeight: "400",
                        fontStyle: "normal",
                        color: "#2756BD",
                        sx: {
                          "@media (max-width: 450px)": {
                            fontSize: "1rem",
                          },
                        },
                      }}
                    >
                      Add Teacher
                    </h1>

                    <div className="add_student_form">
                      <div className="form-row-1">
                        <TextField
                          id="outlined-basic"
                          label="First Name"
                          variant="outlined"
                          className="firstname1"
                          onChange={(e) => {

                            setTeacherFirstName(e.target.value);

                          }}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Last Name"
                          variant="outlined"
                          className="lastname1"
                          onChange={(e) => {

                            setTeacherLastName(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-row-2">
                        <TextField
                          id="outlined-basic"
                          label="CNIC number"
                          variant="outlined"
                          className="cnic1"
                          onChange={(e) => {
                            setTeacherCnic(e.target.value);
                          }}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Phone number"
                          variant="outlined"
                          className="phone1"
                          onChange={(e) => {
                            setTeacherPhone(e.target.value);
                          }}
                        />

                        <TextField
                          id="outlined-basic"
                          label="Course"
                          variant="outlined"
                          className="course1"
                          onChange={(e) => {
                            setTeacherCourse(e.target.value);
                          }}
                        />
                        
                    
                      
                      </div>
                      <div className="form-row-3">
                        <TextField
                          id="outlined-basic"
                          label="Email"
                          variant="outlined"
                          className="email1"
                          onChange={(e) => {

                            setTeacherEmail(e.target.value);
                          }}
                        />
                        <TextField
                        id= "outlined-basic"
                        label="Password"
                        variant="outlined"
                        className="password1"

                        onChange={(e) => {

                          setTeacherPassword(e.target.value);
                        }}
                        />
                      </div>

                      <div className="form-row-5">
                        <TextField
                          id="outlined-basic"
                          label="Address"
                          variant="outlined"
                          className="address1"
                          onChange={(e) => {

                            setTeacherAddress(e.target.value);
                            
                          }}
                        />
                      </div>
                      <div className="form-row-4">
                        <Button
                          variant="contained"
                          component="label"
                          className="image_upload1"
                          onChange={(e) => {

                            setTeacherImage(e.target.files[0]);
                          }}
                        >
                          Upload image
                          <input type="file" hidden />
                        </Button>
                      </div>
                    </div>
                    <div className="add_student_button">
                      <Button variant="outlined" onClick={adding_teacher}>Add Teacher</Button>
                    </div>
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

