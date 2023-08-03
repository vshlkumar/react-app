import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import React, { Component } from "react";
import {NavLink} from 'react-router-dom';

export class Layout extends Component {
    public pages = ["Home", "about", "Contact"];

    render(){
        return (
          <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <nav className="navbar-container">
            <NavLink to={"/"}>
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          </Box>
        );        
    }
}