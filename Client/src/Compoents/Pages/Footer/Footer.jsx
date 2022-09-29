import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"md"} mb={2} color={"whiteAlpha.700"}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
    width="100%"
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"15xl"}
        py={10}
        bg={"black"}
        color={"white"}
        justifyContent={"space-around"}
      >
        <SimpleGrid columns={{ base: 2, sm: 2, md: 6 }} spacing={4}>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Contact</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Product</ListHeader>
            <Link href={"#"}>Tour</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Request a Demo</Link>
            <Link href={"#"}>Customers</Link>
            <Link href={"#"}>API & docs</Link>
            <Link href={"#"}> Status </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Solutions</ListHeader>
            <Link href={"#"}>Time tracking</Link>
            <Link href={"#"}>Project budgeting</Link>
            <Link href={"#"}>Visual Planning</Link>
            <Link href={"#"}>Expenses</Link>
            <Link href={"#"}>Reporting</Link>
            <Link href={"#"}>Invoicing</Link>
            {/* <Link href={"#"}>Time card calculator</Link>
            <Link href={"#"}>Weekly timesheet template</Link> */}
            <Link href={"#"}>Invoice generator</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Integrations</ListHeader>
            <Link href={"#"}>Asana</Link>
            <Link href={"#"}>Basecamp</Link>
            <Link href={"#"}>Trello</Link>
            <Link href={"#"}>Jira</Link>
            <Link href={"#"}>GitHub</Link>
            <Link href={"#"}>ClickUp</Link>
            <Link href={"#"}>Monday</Link>
            <Link href={"#"}>Notion</Link>
            <Link href={"#"}>Todoist</Link>
            <Link href={"#"}>GitLab</Link>
            <Link href={"#"}>All</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Learn</ListHeader>
            <Link href={"#"}>Resources</Link>
            <Link href={"#"}>Help center</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Product Updates</Link>
            <Link href={"#"}>Timesheet app</Link>
            <Link href={"#"}>Time clock app</Link>
            <Link href={"#"}>Attendance tracker</Link>
            <Link href={"#"}>Work hours tracker</Link>
            <Link href={"#"}>Employee tracking</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Download</ListHeader>
            <Link href={"#"}>Browser extension</Link>
            <Link href={"#"}>Chrome time track </Link>
            <Link href={"#"}>Time track with </Link>
            <Link href={"#"}>Iphone app</Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-around" }}
          align={{ md: "center" }}
        >
          <Text>©2022 Everhour Terms | Privacy | Cookies | Sitemap</Text>
          <Stack direction={"row"} spacing={4}>
            <SocialButton label={"Facebook"} href={"#"}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"Linkedin"} href={"#"}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
