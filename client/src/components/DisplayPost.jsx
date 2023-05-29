import React from 'react'
import {Box} from '@mui/material'
import PostCard from './PostCard'

const DisplayPost = () => {
    const post=[{
        title:"this is title1",
        content:"this is content1",
        image:"https://images.pexels.com/photos/1381679/pexels-photo-1381679.jpeg?auto=compress&cs=tinysrgb&w=600",
        user:"jack",
        timestamp:"2 days ago"
    
    },
    {
        title:"this is title2",
        content:"this is content2",
        image:"https://images.pexels.com/photos/931168/pexels-photo-931168.jpeg?auto=compress&cs=tinysrgb&w=600",
        user:"john",
        timestamp:"1 days ago"
    }
]
     
  return (
    <Box sx={{maxWidth:"500px",display:"flex",flexDirection:"column",margin:"auto",gap:3}}>
    
        {post && post.map(post =>{
            <PostCard post={post}/>
        })}
    </Box>
  )
}

export default DisplayPost