import React from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';

// const data = require('./data.json');

// console.log("==============================",data)
const Wrapper = styled.div` 
    width: 32%;
    border: 2px solid #333;
    border-radius: 4px;
    margin-bottom: 25px;
    padding-right: 10px;
    overflow-hidden;
`;

const Image = styled.img`
    width: 46%;
    float: left;
    margin-right: 10px;

`;

const ShowCard = (props) => {
    console.log('rendering showcard', props);
    return (
        <Wrapper> 
            <Image alt={`${props.show.title} Show Poster`} src={`/public/img/posters/${props.show.poster}`} />
            <div>
            <h3>{props.show.alttitle}</h3>
            <h4>({props.show.year})</h4>
            <p>{props.show.description}</p>
            {/* <p><button onClick={props.handleWatch}>Watch</button></p> */}
            </div>
        </Wrapper>
    );
}; 
        
ShowCard.propTypes = {
    show: shape({        
        poster: string.isRequired,
        title: string.isRequired,
        year: string.isRequired,
        description: string.isRequired
    }).isRequired
};

export default ShowCard;
