import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Image,
	Collapse,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
} from "@chakra-ui/react";
import {
	HamburgerIcon,
	CloseIcon,
	ChevronDownIcon,
	ChevronRightIcon,
} from "@chakra-ui/icons";
import {Link as ReachLink  } from "react-router-dom";
export default function Navbar() {
	const { isOpen, onToggle } = useDisclosure();
	return (
		<Box>
			<Flex
				bg={useColorModeValue("white")}
				minH={"60px"}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				align={"center"}
			>
				<Flex
					flex={{ base: 1, md: "auto" }}
					ml={{ base: -2 }}
					display={{ base: "flex", md: "none" }}
				>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
						}
						variant={"ghost"}
						aria-label={"Toggle Navigation"}
					/>
				</Flex>
				<Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
					<Link as={ReachLink} to={"/"}>
						<Text
							textAlign={useBreakpointValue({ base: "center", md: "left" })}
							fontFamily={"geomanist-regular,sans-serif"}
							color={useColorModeValue("gray.900", "white")}
						>
							<Image
								w='65%'
								h='65px'
								// border={"1px solid red"}
								marginLeft={"25px"}
								pt={5}
								src='data:image/png;base64,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'
								alt=''
							/>
						</Text>
					</Link>
					<Flex
						display={{ base: "none", md: "flex" }}
						ml={1}
						pt={8}
						// border={"1px solid red"}
					>
						<DesktopNav />
					</Flex>
				</Flex>
				<Stack
					flex={{ base: 1, md: 0 }}
					justify={"flex-end"}
					direction={"row"}
					spacing={7}
					pr={8}
					pt={7}
					// border={"1px solid red"}
				>
					<Button
						as={"a"}
						fontSize={"md"}
						fontWeight={500}
						fontFamily={"geomanist-regular,sans-serif"}
						variant={"link"}
            
						cursor='pointer'
					>
					<Link as={ReachLink} to={"/login"}>Log IN</Link>
					</Button>
					<Button
						display={{ base: "none", md: "inline-flex" }}
						fontSize={"md"}
						fontWeight={500}
						fontFamily={"geomanist-regular,sans-serif"}
						color={"white"}
						bg={"#57bb71"}
						href={"#"}
						_hover={{
							bg: "#57bb71",
						}}
						onClick={() => {
							// navigate("/signup");
						}}
					>
						Sign Up
					</Button>
				</Stack>
			</Flex>
			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
}
const DesktopNav = () => {
	const linkColor = useColorModeValue("gray.600", "gray.200");
	const linkHoverColor = useColorModeValue("gray.800", "white");
	const popoverContentBgColor = useColorModeValue("white", "gray.800");
	return (
		<Stack direction={"row"} spacing={4}>
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={"hover"} placement={"bottom-start"}>
						<PopoverTrigger>
							<Link
								as={ReachLink}
								to={`${navItem.href}`}
								p={2}
								fontSize={"md"}
								fontFamily={"geomanist-regular,sans-serif"}
								fontWeight={500}
								color={linkColor}
								_hover={{
									textDecoration: "none",
									color: linkHoverColor,
								}}
							>
								{navItem.label}
							</Link>
						</PopoverTrigger>
						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={"xl"}
								bg={popoverContentBgColor}
								p={4}
								rounded={"xl"}
								minW={"sm"}
							>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</Stack>
	);
};

const DesktopSubNav = ({ label, href, subLabel }) => {
	return (
		<Link
			as={ReachLink}
			to={href}
			role={"group"}
			display={"block"}
			p={2}
			rounded={"md"}
			_hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
		>
			<Stack direction={"row"} align={"center"}>
				<Box>
					<Text
						transition={"all .3s ease"}
						_groupHover={{ color: "pink.400" }}
						fontWeight={500}
					>
						{label}
					</Text>
					<Text fontSize={"sm"}>{subLabel}</Text>
				</Box>
				<Flex
					transition={"all .3s ease"}
					transform={"translateX(-10px)"}
					opacity={0}
					_groupHover={{ opacity: "100%", transform: "translateX(0)" }}
					justify={"flex-end"}
					align={"center"}
					flex={1}
				>
					<Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</Stack>
		</Link>
	);
};

const MobileNav = () => {
	return (
		<Stack
			bg={useColorModeValue("white", "gray.800")}
			p={4}
			display={{ md: "none" }}
		>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children, href }) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex
				py={2}
				as={Link}
				href={href}
				justify={"space-between"}
				align={"center"}
				_hover={{
					textDecoration: "none",
				}}
			>
				<Text
					fontWeight={600}
					color={useColorModeValue("gray.600", "gray.200")}
				>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition={"all .25s ease-in-out"}
						transform={isOpen ? "rotate(180deg)" : ""}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={"solid"}
					borderColor={useColorModeValue("gray.200", "gray.700")}
					align={"start"}
				>
					{children &&
						children.map((child) => (
							<Link key={child.label} py={2} to={child.href}>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};

const NAV_ITEMS = [
	{
		label: "Everhour",
		href: "/",
	},
	{
		label: "Integrations",
	},
	{
		label: "Pricing",
		href: "pricing",
	},
	{
		label: "Demo",
		href: "demo",
	},
];
