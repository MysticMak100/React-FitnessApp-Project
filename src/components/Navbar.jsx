import React from "react";
import { Link } from "react-router-dom";
import { Stack,Button} from "@mui/material";
import { styled } from '@mui/system';
import Logo from "../assets/images/Logo.png";


const CustomButton = styled(Button)({
  // backgroundColor: '#4caf50', // Custom background color
  textDecoration: 'none',
  color: "#3A1212",           // Custom text color
  '&:hover': {
    backgroundColor: '#ffffff', // Custom hover background color
  },
  borderBottom: '3px solid #FF2625'
});


const Navbar = () => (
 

  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
    px="20px"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "48px", height: "48px", margin: "0px 20px" }}
      />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
     
        <CustomButton>
           <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#3A1212",
          
        }}
      >
        Home
      </Link>
        

        </CustomButton>
      {/* <a href="/#exercises" style={{ textDecoration: "none", color: "#3A1212" }}>
        Exercises
      </a> */}
      <CustomButton  onClick={() => {
      // setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }} size="medium"  >
      Exercises
      </CustomButton>
    </Stack>
  </Stack>
);

export default Navbar;
