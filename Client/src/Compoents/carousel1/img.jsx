import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";
import { IoMdTime, IoMdFunnel } from "react-icons/io";
import { BsFillFolderFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaFileInvoiceDollar } from "react-icons/fa";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          ></Text>
          <Heading></Heading>
          <Text color={"gray.500"} fontSize={"lg"}></Text>
          <Stack
            spacing={6}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >

           
            <Feature 
              icon={<Icon as={IoMdTime} color={"blue.500"} w={5} h={5} />}
              text={"Time tracking"}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />}
              text={"Billing and budgeting"}
            />
            <Feature
              icon={
                <Icon as={BsFillFolderFill} color={"purple.500"} w={5} h={5} />
              }
              text={"Task Management"}
            />
            <Feature
              icon={<Icon as={IoMdFunnel} color={"purple.500"} w={5} h={5} />}
              text={"Visual planning"}
            />
            <Feature
              icon={
                <Icon
                  as={RiMoneyDollarCircleFill}
                  color={"purple.500"}
                  w={5}
                  h={5}
                />
              }
              text={"Expenses"}
            />
            <Feature
              icon={
                <Icon
                  as={FaFileInvoiceDollar}
                  color={"purple.500"}
                  w={5}
                  h={5}
                />
              }
              text={"Invoicing"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"2xl"}
            w={800}
            alt={"feature image"}
            src={
              "https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/invoices-preview-v3.webp"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
