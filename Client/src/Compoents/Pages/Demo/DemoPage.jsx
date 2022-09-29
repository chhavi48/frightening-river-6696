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
	Input,
	Image,
	Square,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
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
					
				>
					
					<Stack spacing={6} direction={"row"}>
						<Button
						 fontWeight={600}
						 fontSize={"3rem"}
							px={6}
							lineHeight={'109%'}
							marginTop={"60px"}
							bg={"white"}
							color={"black"}
						
						>
							Book a 30-min live demo
						</Button>
						<Button
						
							
							marginTop={"60px"}
							bg={"white"}
							color={"black"}
							marginLeft={"200px"}
						>
							<Image
						height="40px"
						width="40px"
						
						marginTop={"120px"}
						src="http://sch53rnd.ru/images/1f680.png"
					/>
						</Button>
					</Stack>
					
				</Stack>
			
				<Stack
					textAlign={"center"}
					align={"center"}
					spacing={{ base: 10, md: 10 }}
					py={{ base: 1, md: 20 }}
					
				>
					
					<Heading fontWeight={400}
							fontSize={"1.375rem"} color={"#767676"} maxW={"3xl"}
							>
						10+ users? Let one of our customer success experts show you how
						Everhour works, with plenty of time set aside for questions
					</Heading>
					<Stack spacing={6} direction={"row"}>
						<Button
							px={6}
							colorScheme={"orange"}
							bg={"green.400"}
							_hover={{ bg: "green.500" }}
							width={"200px"}
							height={"50px"}
						>
							Schedule time
						</Button>
						<Button
							px={6}
							bg={"white.400"}
							border={"1px solid #57bb71"}
							color={"#57bb71"}
							width={"150px"}
							height={"50px"}
						>
							
							<a href="https://www.youtube.com/playlist?list=PLpi40TLI2leiI-UuWIu-19xdTuGZwtHU3<">Watch Video</a>
						</Button>
					</Stack>
					<Flex w={"full"}></Flex>
				</Stack>
			</Container>
<Container >
<Center py={6}
			>
				<Box
				
					maxW={"550px"}
					w={"full"}
					boxShadow={"2xl"}
					rounded={"md"}
					overflow={"hidden"}
				>
					<Box px={6} py={10} >
						<Heading
							fontWeight={500}
							fontSize={{ base: "1xl", sm: "1xl", md: "1xl" }}
							lineHeight={"2.44"}
							marginLeft={"18px"}
						>
							{" "}
							What you’ll learn
						</Heading>
						<List spacing={4}>
							<ListItem>
								<ListIcon
									as={CircleIcon}
									boxSize={2.5}
									marginBottom={"5px"}
									color="green.400"
								/>
								We’ll briefly explain what’s so special about Everhour.
							</ListItem>
							<ListItem>
								<ListIcon
									as={CircleIcon}
									boxSize={2.5}
									marginBottom={"5px"}
									color="green.400"
								/>
								We’ll teach you the basics of using the app, with plenty of time
								for questions.
							</ListItem>
							<ListItem>
								<ListIcon
									as={CircleIcon}
									boxSize={2.5}
									marginBottom={"5px"}
									color="green.400"
								/>
								We’ll answer all questions about setting up Everhour, using it
								with your team, or anything else you’d like to ask.
							</ListItem>
						</List>
						<Heading
							fontWeight={500}
							fontSize={{ base: "1xl", sm: "1xl", md: "1xl" }}
							lineHeight={"2.44"}
							marginLeft={"18px"}
							marginTop={"50px"}
						>
							{" "}
							Other information
						</Heading>
						<List spacing={3}>
							<ListItem>
								<ListIcon
									as={CircleIcon}
									boxSize={2.5}
									marginBottom={"5px"}
									color="green.400"
								/>
								Screenshare is done in the browser by means of Whereby software
								using this link. Please ensure that your mic and speakers work
								in advance!
							</ListItem>
							<ListItem>
								<ListIcon
									as={CircleIcon}
									boxSize={2.5}
									marginBottom={"5px"}
									color="green.400"
								/>
								Demos typically last 30 minutes, but we will adjust the time
								based on your needs.
							</ListItem>
							<ListItem>
								<ListIcon
									as={CircleIcon}
									boxSize={2.5}
									marginBottom={"5px"}
									color="green.400"
								/>
								Feel free to invite other team members to join this call.
							</ListItem>
							<ListItem>
								<ListIcon
									as={CircleIcon}
									boxSize={2.5}
									marginBottom={"5px"}
									color="green.400"
								/>
								No available time slots? Contact us and we'll surely work
								something out.
							</ListItem>
						</List>
					</Box>
				</Box>
			</Center>
</Container>
			
			<Box
				textAlign="center"
				marginBottom="3rem"
				marginTop={"10rem"}
				w={"full"}
			>
				<Box
					fontSize="2.2rem"
					fontFamily="geomanist-regular sans-serif"
					fontWeight="bold"
				>
					Skip the demo and try for yourself?
				</Box>
				<Box fontSize="1.2rem" color="gray" width="36%" margin="auto">
					Try Everhour for free to see if it works for your business. 
				</Box>
				<Box fontSize="1.2rem" color="gray" width="36%" margin="auto">
					No credit
					card required. No obligations.
				</Box>
				<Box margin={5}>
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
			
		</>
	);
}
