import React, { Component } from 'react';
import RandomColor from './RandomColor';

class TableControl extends Component
{
	constructor() {
			super();
			this.state = 	{ 
								color: "#666666",
								useColor: false,
								rowAmount: 10,
								colAmount: 20,
								interval: 300
							};	
	}
	
	render()
	{
		return this.generateTable();
	}
	
	onMouseDownSelect(selectedColor)
	{
		this.setState({color: selectedColor, useColor:true});
	}
	
	onMouseUpSelect()
	{
		this.setState({useColor: false});
	}
	
	generateTable()
	{
		return <table cellSpacing="0"><tbody>{this.generateRows(this.state.rowAmount, this.state.colAmount)}</tbody></table>;
	}
	
	generateRows(rowAmount, colAmount)
	{
		if(rowAmount<1)
			return '';
		else
		{
			var data = [];
			for(var i=0; i<rowAmount; i++)
			{
				data.push(<tr key={i+1}>{this.generateCells(i+1, colAmount)}</tr>);
			}
			return data;
		}
	}
	
	generateCells(rowNum, amount)
	{
		if(amount<1)
			return '';
		else
		{
			var data = [];
			for(var i=0;i<amount;i++)
			{
				var idValue = '' + rowNum + (i+1)
				data.push(<td className="cell" id={idValue} key={idValue}> <RandomColor color={this.state.color} useColor={this.state.useColor} interval={this.state.interval} onMouseDownSelect={this.onMouseDownSelect.bind(this)} onMouseUpSelect={this.onMouseUpSelect.bind(this)}/></td>);
			}
			return data;
		}
	}
}

export default TableControl;