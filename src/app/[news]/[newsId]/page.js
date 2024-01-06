import { getSingleNews } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const NewsDetailsPage = async({params}) => {
    const {data:news}= await getSingleNews(params.newsId)
    console.log(news);
    return (
        <Box>
           <Container>
           <Grid className="mt-6" container spacing={2}>
           <Grid item lg={6} >
            <Image height={800} width={500} src={news.thumbnail_url} alt='news' />
            <Grid className="mt-2" container spacing={2}>
           <Grid item lg={6}>
            <Image height={800} width={500} src={news.image_url} alt='news' />
           </Grid>
           <Grid item lg={6} >
           <Image height={800} width={500} src={news.image_url} alt='news' />
           </Grid>
           </Grid>
           </Grid>
           <Grid item lg={6} >
            <Typography variant='h5' component='h2'>
                {news.title}
            </Typography>
            <Avatar alt="Remy Sharp" src={news.author.img} />
            <Typography gutterBottom className="my-2">
                  By {news.author.name} - {news.author.published_date}
                  </Typography>
                  <Typography style={{textAlign:"justify", whiteSpace:"pre-line", margin:'10px 0', color:'gray'}}  variant="body2" color="text.secondary">
                  {news.details}
                  </Typography>
                  <Typography   variant="h6">
                  ``Many desktop publishing packages and web page editors now use as their default model text!
                  </Typography>
                  <Typography   variant="h6">
                  -- Awlad Hossain
                  </Typography>
           </Grid>
           </Grid>
           </Container>
        </Box>
    );
};

export default NewsDetailsPage;