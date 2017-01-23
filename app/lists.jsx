import React, { Component } from 'react';
import series from './series';

export const TVList = React.createClass({
    
    render(){
        const listItems = (

        );
        return(
            <div>
                <h3>TV Shows</h3>
                <ul>
                    <ListItem name="Gravitiy Falls" season="1" serieId="111" chapter="1" viewed="true"/>
                    <ListItem name="Game of Thrones" season="2" serieId="222" chapter="3" viewed="false"/>                    
                </ul>
            </div>
        );
    }
});

export const ListItem = React.createClass({
    render(){
        return(
            <li>
                {this.props.season} x {this.props.chapter} - {this.props.name}
            </li>
        );        
    },

    propTypes: {
        chapter: React.PropTypes.string,
        name: React.PropTypes.string.isRequired,
        serieId: React.PropTypes.number,        
        season: React.PropTypes.string,
        viewed: React.PropTypes.string,        
    },
});