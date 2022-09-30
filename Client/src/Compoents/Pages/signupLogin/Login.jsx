import React from "react";
import "./login.css";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Box, Text, Input, Button } from "@chakra-ui/react";
import Navbar from "./../../Navbar/Navbar";

const Login = () => {
  return (
    <Box w="100%" h="130vh">
      <Box>
        <Navbar />
      </Box>
      <Text className="txt">Log in to Everhour</Text>

      <Box  className="log">
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

        <Box color={"white"} w="90%" margin={"auto"} p="2rem">
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

          <Box p={"1rem"}>
            <Button fontWeight={400} p="1.5rem" bg="#57bb71" w="100%">
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
