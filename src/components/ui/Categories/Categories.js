import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Categories = async() => {
    const {data:allCategories} = await getAllCategories()
    // console.log(allCategories);
    return (
        <Box className='mt-5 bg-gray-100 px-5 py-2'>
            <Typography variant="h6">Categories</Typography>
            <Divider/>
            <Stack rowGap={1} sx={{mt:2.5}}> 
                {
                    allCategories.map(category=><Button key={category.id} variant="outlined">
                        <Link href={`/categories/news?category=${category.title.toLowerCase()}`}>{category.title}</Link></Button>)
                }
            </Stack>
        </Box>
    );
};

export default Categories;