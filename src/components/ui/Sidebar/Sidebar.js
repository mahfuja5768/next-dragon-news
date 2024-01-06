
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
  } from "@mui/material";
  
  import topNews from '../../../assets/side-top-news.png'
  import topNews2 from '../../../assets/side-bottom-img.png'
  import Image from "next/image";
  

const Sidebar = () => {
    return (
        <Box className='my-5 '>
  <Card>
        <CardActionArea>
          <CardMedia
           ><Image src={topNews} width={800}  alt='top'/></CardMedia>
          <CardContent>
            <p className="w-[100px] bg-red-500 px-2 text-white my-5 rounded py-2">Technology</p>
            <Typography gutterBottom variant="h5" component="div">
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom className="my-3">
            By Awlad Hossain - Mar 18 2023
            </Typography>
            <Typography  variant="body2" color="text.secondary">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        </Box>
    );
};

export default Sidebar;