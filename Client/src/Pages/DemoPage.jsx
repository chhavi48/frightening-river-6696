import { CheckIcon } from "@chakra-ui/icons";
import {
	Flex,
	Container,
	Heading,
	Stack,
	Text,
	Button,
	Icon,
	Box,
	Center,
	List,
	ListItem,
	ListIcon,
  SimpleGrid,
  HStack,
  VStack,
} from "@chakra-ui/react";

export default function CallToActionWithIllustration() {
	const CircleIcon = (props) => (
		<Icon viewBox="0 0 200 200" {...props}>
			<path
				fill="currentColor"
				d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
			/>
		</Icon>
	);
	return (
		<>
			<Container maxW={"5xl"}>
				<Stack
					textAlign={"center"}
					align={"center"}
					spacing={{ base: 8, md: 10 }}
					py={{ base: 20, md: 28 }}
				>
					<Heading
						fontWeight={600}
						fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
						lineHeight={"110%"}
					>
						Meeting scheduling{" "}
						<Text as={"span"} color={"orange.400"}>
							made easy
						</Text>
					</Heading>
					<Text color={"gray.500"} maxW={"3xl"}>
						10+ users? Let one of our customer success experts show you how
						Everhour works, with plenty of time set aside for questions
					</Text>
					<Stack spacing={6} direction={"row"}>
						<Button
							px={6}
							colorScheme={"orange"}
							bg={"green.400"}
							_hover={{ bg: "green.500" }}
						>
							Schedule time
						</Button>
						<Button
							px={6}
							bg={"white.400"}
							border={"1px solid green"}
							color={"green"}
						>
							Watch videos
						</Button>
					</Stack>
					<Flex w={"full"}></Flex>
				</Stack>
			</Container>

			<Center py={6}>
				<Box
					maxW={"550px"}
					w={"full"}
					boxShadow={"2xl"}
					rounded={"md"}
					overflow={"hidden"}
				>
					<Box px={6} py={10} border ={"1px solid red"}>
						<Heading
							fontWeight={500}
							fontSize={{ base: "1xl", sm: "1xl", md: "1xl" }}
							lineHeight={"2.44"}
              border ={"1px solid red"}
						>
						{" "}What you’ll learn
						</Heading>
						<List spacing={4}>
							<ListItem>
								<ListIcon as={CircleIcon} boxSize={2.5} color="green.400" />
								We’ll briefly explain what’s so special about Everhour.
							</ListItem>
							<ListItem>
								<ListIcon as={CircleIcon} boxSize={2.5} color="green.400" />
								We’ll teach you the basics of using the app, with plenty of time
								for questions.
							</ListItem>
							<ListItem>
								<ListIcon as={CircleIcon} boxSize={2.5} color="green.400" />
								We’ll answer all questions about setting up Everhour, using it
								with your team, or anything else you’d like to ask.
							</ListItem>
						</List>
						<Heading
							fontWeight={500}
							fontSize={{ base: "1xl", sm: "1xl", md: "1xl" }}
							lineHeight={"2.44"}
              marginTop={"50px"}
						>
							{" "}
							Other information
						</Heading>
						<List spacing={3}>
							<ListItem>
								<ListIcon as={CircleIcon} boxSize={2.5} color="green.400" />
								Screenshare is done in the browser by means of Whereby software
								using this link. Please ensure that your mic and speakers work
								in advance!
							</ListItem>
							<ListItem>
								<ListIcon as={CircleIcon} boxSize={2.5} color="green.400" />
								Demos typically last 30 minutes, but we will adjust the time
								based on your needs.
							</ListItem>
							<ListItem>
								<ListIcon as={CircleIcon} boxSize={2.5} color="green.400" />
								Feel free to invite other team members to join this call.
							</ListItem>
							<ListItem>
								<ListIcon as={CircleIcon} boxSize={2.5} color="green.400" />
								No available time slots? Contact us and we'll surely work
								something out.
							</ListItem>
						</List>
					</Box>
				</Box>

       

			</Center>
      <Box p={4}>
     
      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid rows={{ base: 1, md: 2, lg: 4 }} spacing={10}>
         
            <HStack  align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CircleIcon} boxSize={2.5} />
               
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>rrrr</Text>
                <Text color={'gray.600'}>rrrrr</Text>
              
              </VStack>
             
            </HStack>

            
            <HStack  align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
               
              </Box>

             
            </HStack>
            
            
          
        </SimpleGrid>
      </Container>
    </Box>
		</>
	);
}
