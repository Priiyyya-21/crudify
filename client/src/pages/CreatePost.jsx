import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  SpeedDial,
  SpeedDialIcon,
} from "@mui/material";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD89BM5uZQPL6d0ZGLA88vXWDQ73E3AyB4",
  authDomain: "blog-mern-project-1b4f2.firebaseapp.com",
  projectId: "blog-mern-project-1b4f2",
  storageBucket: "blog-mern-project-1b4f2.appspot.com",
  messagingSenderId: "942345400050",
  appId: "1:942345400050:web:a4e20bb2f94c1ab720aa6b",
  measurementId: "G-7EL47T3DJV",
  databaseURL: "gs://blog-mern-project-1b4f2.appspot.com",
};

firebase.initializeApp(firebaseConfig);

const CreatePost = () => {
  const [blog, setBlog] = useState({ title: "", content: "", image: null });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBlog({ ...blog, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBlog({ ...blog, image: file });
  };

  const handleSubmit = async () => {
    console.log(blog);

    if (blog.image === null) {
      alert("Please select an image.");
      return;
    }

    try {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(blog.image.name);
      await fileRef.put(blog.image);

      const imageUrl = await fileRef.getDownloadURL();
      console.log("Image uploaded successfully. Image URL:", imageUrl);

      const blogData = {
        title: blog.title,
        content: blog.content,
        image: imageUrl,
      };

      const res = await fetch("http://localhost:7000/api/blog/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify(blogData),
      });

      const data = await res.json();
      if (res.ok) {
        console.log(data);
        alert("Blog created");
        setBlog({ title: "", content: "", image: null });
      } else {
        console.log(data);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <Card
      sx={{
        p: 4,
        py: 5,
        maxWidth: "670px",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        borderRadius: "15px",
      }}
      elevation={10}
    >
      <CardContent sx={{ m: 0 }}>
        <Typography gutterBottom variant="h4" component="div" sx={{ m: 0 }}>
          Write Blog!
        </Typography>
      </CardContent>
      <TextField
        id="outlined-basic"
        label="title"
        variant="outlined"
        name="title"
        onChange={handleChange}
        value={blog.title}
      />
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <TextField
        id="outlined-basic"
        label="content"
        variant="outlined"
        name="content"
        rows={7}
        onChange={handleChange}
        value={blog.content}
        multiline
      />
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        icon={<SpeedDialIcon />}
        onClick={handleSubmit}
      />
    </Card>
  );
};

export default CreatePost;