import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import topNews from '../../../assets/top-news.png'
import topNews2 from '../../../assets/top-news2.png'
import Image from "next/image";
import { getAllNews } from "@/utils/getAllNews";

const LatestNews = async() => {
  const {data} = await getAllNews()
  console.log(data[0]);
  return (
    <Box className='my-5'>
      <Card>
        <CardActionArea>
          <CardMedia
           ><Image src={data[0].thumbnail_url} width={800} height={500} alt='top'/></CardMedia>
          <CardContent>
            <p className="w-[100px] bg-red-500 px-2 text-white my-5 rounded py-2">{data[0].category}</p>
            <Typography gutterBottom variant="h5" component="div">
            {data[0].title}
            </Typography>
            <Typography gutterBottom className="my-3">
            By {data[0].author.name} - {data[0].author.published_date}
            </Typography>
            <Typography  variant="body2" color="text.secondary">
            {data[0].details.length > 200 ? data[0].details.slice(0,200)+"..." : data[0].details}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Grid className="mt-6" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  {
    data.slice(0,4).map(item=><Grid key={item.id} item xs={6}>
      <Card>
            <CardActionArea>
              <CardMedia
               ><Image src={item.thumbnail_url} width={800} height={500}  alt='top'/></CardMedia>
              <CardContent>
                <p className="w-[100px] bg-red-500 px-2 text-white my-5 rounded py-2">Technology</p>
                <Typography gutterBottom variant="h5" component="div">
                {item.title}
                </Typography>
                <Typography gutterBottom className="my-3">
                By {item.author.name} - {item.author.published_date}
                </Typography>
                <Typography  variant="body2" color="text.secondary">
                {item.details.length > 200 ? item.details.slice(0,200)+"..." : item.details}
           </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </Grid>)
  }
</Grid>
    </Box>
  );
};

export default LatestNews;
