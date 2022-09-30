import React from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import "./signup.css";
import Navbar from "./../../Navbar/Navbar";

const Signup = () => {
  return (
    <Box
      className="log1"
      w="100%"
      h="150vh"
      fontFamily="Inter, sans-serif"
      fontSize={"16px"}
      fontWeight="400"
    >
      <Navbar />

      <Box className="heading">
        <Text textAlign={"center"}>
          Make your team more productive with Everhour
        </Text>
      </Box>

      <Text
        fontFamily={"geomanist-book, sans-serif"}
        fontWeight="400"
        fontSize="1.125rem"
        lineHeight="1.44"
        textAlign={"center"}
        color="#333"
      >
        Join 3,500+ customers who use Everhour to track time and plan their
        future projects more effectively
      </Text>

      <Box className="log">
        <Box className="bt">
          <Box w={"40%"}>
            <Button>
              <FcGoogle size={"25px"} />
              Signup via Google
            </Button>
          </Box>
          <Box w={"40%"}>
            <Button>
              <BsApple size={"25px"} />
              Signup via Apple
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
            <Button fontWeight={200}  p="1.5rem" bg="#57bb71" w="100%">
              Get Started
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;

// 2E0B36
/* font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400; 
    src="https://public-assets.toggl.com/b/static/a848ad9070fcf959a459fa1e878d2abb/c0583/hero-laptops.jpg"  */
