import React, { useState } from 'react'
import { Card, CardContent, Typography, TextField,Button } from "@mui/material"
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const [blog, setBlog] = useState({ title: "", content: "", image: "" })
    const [file, setFile] = useState(null);
    const navigate = useNavigate();


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setBlog({ ...blog, [name]: value })
    }

    // for image
    const imageUpload =(event)=>{
        // console.log(event.target.files[0]);
        setBlog({ ...blog,image: event.target.files[0] })
        
    }


    const handleSubmit = async () => {
        console.log("==",blog.image,"==",blog.image.name);
        const formData = new FormData();
        formData.append("title", blog.title);
        formData.append("myFile", blog.image,blog.image.name);
        formData.append("content", blog.content);
        
    
        try {
          const res = await fetch("http://localhost:7000/api/blog/create", {
            method: "POST",
            headers: {
              token: localStorage.getItem("token"),
            },
            body: formData,
          });
    
          const data = await res.json();
          if (res.ok) {
            console.log(data);
            alert("Blog created successfully");
            navigate("/");
            setBlog({ title: "", content: "" });
            setFile(null);
          } else {
            console.log(data);
          }
        } catch (error) {
          console.error(error);
        }
      };



    // const handleSubmit = async () => {
    //     console.log(blog);
    //     const res = await fetch("http://localhost:7000/api/blog/create", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             token: localStorage.getItem("token")
    //         },
    //         body: JSON.stringify(blog)
    //     })
    //     const data = await res.json()
    //     if (res.ok) {
    //         console.log(data);
    //         alert("doubt posted")
    //         setBlog({ title: "", content: "", image: "" })
    //     } else {
    //         console.log(data);
    //     }
    // }


    return (
        <Card sx={{ p: 4, py: 5, maxWidth: "670px", margin: "50px auto", display: "flex", flexDirection: "column", gap: 4, borderRadius: "15px" }} elevation={10}>
            <CardContent sx={{ m: 0 }}>
                <Typography gutterBottom variant="h4" component="div" sx={{ m: 0 }}>
                    Ask Your Doubt !
                </Typography>
            </CardContent>
            <TextField id="outlined-basic" label="title" variant="outlined" name='title' onChange={handleChange} value={blog.title} />
            {/* <TextField id="outlined-basic" label="image" variant="outlined" name='image' onChange={handleChange} value={blog.image} /> */}
            {/* <div>
                <label className="form-label">Upload Image</label>
                <input type="file" className="form-control" name="myFile" autoComplete="off" onChange={imageUpload} />
            </div> */}
            <TextField input type="file" className="form-control" autoComplete='off' id="outlined-basic" label="image" variant="outlined" name="myFile" onChange={imageUpload} />
            <TextField id="outlined-basic" label="content" variant="outlined" name='content' rows={7} onChange={handleChange} value={blog.content} multiline />
            
            <Button variant="contained" disableElevation  onClick={handleSubmit}>
                Ask away!

            </Button>
        </Card>
    )
}

export default CreatePost;
