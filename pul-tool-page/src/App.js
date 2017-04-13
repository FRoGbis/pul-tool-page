import React, { Component } from 'react';
import { map, contains } from 'ramda';

import logo from './logo.svg';
import './App.css';
import links from './links';
import Link from './Link';

const widthLogic = i => contains(i % 4, [0, 3]); 

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShort: false,
		};
	}
	render() {
		return (
			<div className="App" style={{ backgroundColor: 'black' }}>
				<div style={{ fontSize: '28px', color: 'white', justifyContent: 'center', display: 'flex', alignItems: 'baseline' }}>
					PUL Tool Page
					<span style={{ fontSize: '10px', marginLeft: '10px' }}> BY BEBELOU </span>
				</div>
				<div style={{ display: 'flex', flexWrap: 'wrap' }}>
					{links.map((link, i) => console.log(i, widthLogic(i)) ||
					<Link
						key={link.title + i}
						{...link}
	  					style={{ width: widthLogic(i) ? '60%' : '39%', height: '20vh' }}
					/>
					)}
				</div>
			</div>
		);
	}
}

export default App;