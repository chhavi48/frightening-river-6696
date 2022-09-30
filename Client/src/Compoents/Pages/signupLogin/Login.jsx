import React from "react";
import "./login.css";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Box, Text, Input, Button } from "@chakra-ui/react";

const Login = () => {
  return (
    <Box bg={"#2E1B33"} w="100%" h='150vh'>
      <Box>
        <Box p="3rem">
          <img
            src="https://toggl.com/blog/wp-content/uploads/2020/09/toggl-track_logotype_horizontal_pink_rgb-e1599116263835.png"
            width={"170px"}
            height="15%"
            alt=""
          />
        </Box>

        <Box ml='80px' w='55%' className="tt">
        <Text className="txt">Sign up for a free Toggl Track account</Text>
        <Text color='white' fontSize='18px' mt='20px' lineHeight={1.5} >
          All plans come with a free, 30-day trial of Toggl Track Premium—no
          credit card required. Upgrade at the end of the trial or continue
          using Track for free.

          <Text mt='1rem'>Allready have an account <span><a href="/signup" style={{color:'pink', textDecoration :'underline'}}>Login here </a></span></Text>
        </Text>
        </Box>
        </Box>


        <Box bg={"#2E0B36"} h="auto" className="log">
        <Box className="bt">
          <Box w={"40%"}>
            <Button>
              <FcGoogle size={"25px"} />
              Login via Google
            </Button>
          </Box>
          <Box w={"40%"}>
            <Button>
              <BsApple size={"25px"} />
              Login via Apple
            </Button>
          </Box>
        </Box>

        <Box color={"white"} w='90%' margin={"auto"} p="2rem">
          <label>Email</label>
          <Input placeholder="Email" borderRadius={"0px"} mt="10px" />

          <Box mt="20px">
            <label> Password</label>
            <Input
              placeholder="Password"
              borderRadius={"0px"}
              mt="10px"
              required="true"
            />
          </Box>

          <Text textAlign="end" textDecoration={"underline"} mt="10px">
            Forget password?
          </Text>

          <Box p={'1rem'}>
          <Button
            borderRadius={"25px"}
            p="1.5rem"
            bg="#E57CD8"
            w="100%"
          >
            Log in
          </Button>
          </Box>
        </Box>
        </Box>

      
    </Box>
  );
};

export default Login;

/* 
font-family: "GT Haptik Medium", sans-serif;
    font-weight: 400;
    line-height: 1.1;
    font-size: clamp(2.25rem, 4.2vw, 4.5rem);
    color: rgb(255, 243, 237);   */
