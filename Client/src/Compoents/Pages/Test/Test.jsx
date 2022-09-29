import React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Test = () => {
  const [slider, setSlider] = React.useState(0);
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-primary.webp",
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/trello-primary.webp",
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/basecamp-primary.webp",
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/jira-primary.webp",
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/github-primary.webp",
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/clickup-primary.webp",
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/monday-primary.webp",
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/notion-primary.webp",
  ];

  return (
    <div>
      <Box
        position={"relative"}
        height={"590px"}
        width={"800px"}
        marginLeft={"260px"}
        overflow={"hidden"}
        borderRadius={"5px"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          color={"black"}
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((url, index) => (
            <Box
              key={index}
              height={"2xl"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>
    </div>
  );
};

export default Test;
