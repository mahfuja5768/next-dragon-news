
import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

const Footer = () => {
  const navItems = [
    {
      route: "Home",
      pathName: "/",
    },
    {
      route: "News",
      pathName: "/news",
    },
    {
      route: "About",
      pathName: "/about",
    },
    {
      route: "Contact",
      pathName: "/contact",
    },
  ];

  return (
    <Box className='bg-gray-800 py-12'>
      <Container className="w-full text-center">
        <Box className="w-full text-center" sx={{
                "& svg": {
                  color: "white",
                },
              }}>
          <IconButton>
            <FacebookIcon></FacebookIcon>
          </IconButton>
          <IconButton>
            <InstagramIcon></InstagramIcon>
          </IconButton>
          <IconButton>
            <TwitterIcon></TwitterIcon>
          </IconButton>
          <IconButton>
            <YouTubeIcon></YouTubeIcon>
          </IconButton>
        </Box>
        <Box>
          {navItems.map((item) => (
            <Link key={item} href={item.pathName}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography variant="body2" color='gray' textAlign='center'> @2023 Dragon News. Design by Programming Hero</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
