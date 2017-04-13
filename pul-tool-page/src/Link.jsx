import React, { Component } from 'react';
import './App.css';


const Link = ({ title, backgroundImg, style, textColor, link, ...otherProps }) =>
	<a href={ link }
	target="_blank"
	style={{
		border: '1px solid black',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundImage: `url(${backgroundImg})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		color: textColor,
		fontSize: '24px',
		position: 'relative',
		textDecoration: 'none',
		...style
	}}>
		<div
			style={{ backgroundColor: `rgb(0, 0, 0)`, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
			className="overlay"
		/>
		<span style={{ zIndex: 1 }}>{ title }</span>
	</a>
;

export default Link;
