import React from "react";
import { Box } from "@mui/material";
import PostCard from "./PostCard";

const DisplayPost = () => {
  const posts = [
    {
      id:"1",
      title: "this is title1",
      content: "this is content1",
      image:
        "https://images.pexels.com/photos/1381679/pexels-photo-1381679.jpeg?auto=compress&cs=tinysrgb&w=600",
      user: "jack",
      timestamp: "2 days ago",
    },
    {
      id:"2",
      title: "this is title2",
      content: "this is content2",
      image:
        "https://images.pexels.com/photos/931168/pexels-photo-931168.jpeg?auto=compress&cs=tinysrgb&w=600",
      user: "john",
      timestamp: "1 day ago",
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: "600px",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        gap: 3,
        py:2
      }}
    >
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </Box>
  );
};

export default DisplayPost;
