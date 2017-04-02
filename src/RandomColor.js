import React, { Component } from 'react';

class RandomColor extends Component
{
	handleMouseDown()
	{
		this.props.onMouseDownSelect(this.state.color);
	}
	
	handleMouseUp()
	{
		this.props.onMouseUpSelect();
	}
	
	constructor(props) {
		super(props);
		this.state = { color: getRandomColor()};
		this.handleMouseDown = this.handleMouseDown.bind(this);			
		this.handleMouseUp = this.handleMouseUp.bind(this);			
	}

	componentDidMount()
	{
		var self = this;
		self.repeat = setInterval(function()
		{
			var shownColor = "#000000";
			if(self.props.useColor)
			{
				shownColor = self.props.color;
			}
			else
			{
				shownColor = getRandomColor();
			}
			self.setState({color: shownColor});
		}, self.props.interval);
	}

	render()
	{
		return <div className="fill" onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} style={{backgroundColor:this.state.color}}>&nbsp;</div>
	}
	
	
	
}


function getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
}
export default RandomColor;