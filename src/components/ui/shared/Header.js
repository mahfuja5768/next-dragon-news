import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImg from "../../../assets/The Dragon News.png";
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
  const date = getCurrentDate();
//   console.log(date);

  return (
    <Box>
      <Container className="mx-auto my-4">
        <Image src={headingImg} className="mx-auto my-4" width={500} height={500} alt="logo" />
        <Typography variant="body1" className="my-3 text-2xl" color="gray" textAlign="center">
          Journalism Without Fear or Favour
        </Typography>
        <Typography variant="body2" color="black" className="text-xl" textAlign="center">
          {date}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
