import {
  Button,
  Flex,
  Heading,
  Image,
  Box,
  Stack,
  Text,
  useBreakpointValue,
  Input,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

export default function SplitScreen() {
  return (
    <>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"left"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"} padding={"40px"}>
            <Heading fontSize={{ base: "1xl", md: "4xl", lg: "3xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "100px",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}
              >
                Everhour has helped 240,000+ people complete over 135 million
                tasks in 3 million projects
              </Text>
              <br />{" "}
            </Heading>
            <Text fontSize={{ base: "sm", lg: "lg" }} color={"gray.500"}>
              Everhour helps us track our engineering hours which is a
              requirement for several Government grants we have received.
              Without Everhour, we would be unable to accurately track the hours
              associated with each individual project we are working on as a
              company. The reports are easily customizable which allows me to
              extract the data I need. Everhour is a great tool for our time
              tracking needs!
            </Text>
            <Text>
              Kelly Bonneau, CPA<br></br> Accounting Manager at 7shifts
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={4}
            ></Stack>
          </Stack>
        </Flex>
        <Flex flex={1} pt={20} h={600}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://blog-cdn.everhour.com/assets/images/new-design/illustrations/customers/customer-kelly.webp"
            }
          />
        </Flex>
      </Stack>
      <Box
        className="pricing_bottom-form"
        display={"flex"}
        justifyContent={"space-around"}
        gridGap={"10%"}
        paddingTop={"10%"}
      >
        <Box marginBottom="5rem" textAlign="left">
          <Box
            fontSize="2.25rem"
            fontFamily="geomanist-book sans-serif"
            fontWeight={500}
          >
            Take control of your time with Everhour
          </Box>
          <Box fontSize="1.2rem" color="gray">
            Beautiful integrations. Intuitive interface. No unexpected fees
          </Box>
          <Box>
            <Box margin={5} textAlign="left">
              <Input
                placeholder="Work Email..."
                size="md"
                width={300}
                borderColor="gray.600"
                p={5}
                padding={6}
                paddingBottom="-1rem"
                marginRight={5}
              />
              <Button
                colorScheme="green"
                size="lg"
                width="10rem"
                marginTop="-.4rem"
              >
                Try it free
              </Button>
            </Box>
            <Box>
              <Button
                className="email_btn"
                colorScheme="white"
                border="none"
                width="329px"
                leftIcon={<FcGoogle fontSize="1.5rem" />}
              >
                <Box className="login_endbtn" color="gray">
                  {" "}
                  Or Sign up with google account
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box>
          <UnorderedList fontSize="1.2rem" fontWeight="400">
            <ListItem>Track time from the apps you already use</ListItem>
            <ListItem>Know where your team’s time is going</ListItem>
            <ListItem>Keep projects on budget</ListItem>
            <ListItem>Increase transparency</ListItem>
            <ListItem>Make your workflow more efficient</ListItem>
            <ListItem>Spot burnout before it happens</ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </>
  );
}
