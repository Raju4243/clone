import * as React from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';
export default function Post(name,image,description){
    return (
        <div className="post">
            <div className="post_details">
                <Avatar>{name[0]}</Avatar>
                <p>{name}</p>
            </div>
            <div className="post_image">
                <img src={image} alt="img"/>
                <p>{description}</p>
            </div>
            
        </div>
    )
}