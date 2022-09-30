import React from "react";
import { Box, Button, Input, TagLabel, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import "./signup.css";

const Signup = () => {
  return (
    <Box
      className="log1"
      bg={"#2E1B33"}
      w="100%"
      h="100vh"
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
      fontFamily="Inter, sans-serif"
      fontSize={"16px"}
      fontWeight="400"
      bgImage="https://public-assets.toggl.com/b/static/a848ad9070fcf959a459fa1e878d2abb/c0583/hero-laptops.jpg"
    >
        
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

export default Signup;

// 2E0B36
/* font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400; 
    src="https://public-assets.toggl.com/b/static/a848ad9070fcf959a459fa1e878d2abb/c0583/hero-laptops.jpg"  */
