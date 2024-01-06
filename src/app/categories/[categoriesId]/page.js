import { getCategoryNews } from "@/utils/getCategoryNews";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const DynamicNewsPage = async({params, searchParams}) => {
    // console.log(searchParams.category)
const {data} = await getCategoryNews(searchParams.category)
console.log(data); 
    return (
        <div>
           <h2 className="text-2xl my-3"> Total <strong>{searchParams.category}</strong> News : {data.length}</h2>
         <Box>
         <Grid className="mt-6" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  {
    data.map(item=><Grid key={item._id} item xs={6} gap={6}>
       <Link href={`/${item.category.toLowerCase()}/${item._id}`}>
       <Card>
              <CardActionArea>
                <CardMedia sx={{
                    "& img" : {
                        width:"100%",
                        height:"250px"
                    }
                }}
                 >
                     <Image src={item?.thumbnail_url} width={500} height={500}  alt='top'/>
                    </CardMedia> 
                <CardContent>
                  <span className="bg-red-500 px-2 text-white my-6 rounded">{item.category}</span>
                  <Typography gutterBottom variant="h6" component="div">
                {item.title.length > 30 ? item.title.slice(0,30)+"..." : item.title}
                  </Typography>
                  <Typography gutterBottom className="my-2">
                  By {item.author.name} - {item.author.published_date}
                  </Typography>
                  <Typography  variant="body2" color="text.secondary">
                  {item.details.length > 200 ? item.details.slice(0,200)+"..." : item.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card></Link>
        </Grid>)
  }
</Grid>
         </Box>
        
        </div>
    );
};

export default DynamicNewsPage;