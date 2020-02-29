import React, { Component } from 'react';

import axios from 'axios';

class Albums extends Component {
   constructor(){
       super();


    // Push the album data into an empty array to be chosen when the user selects a mood
       this.state = {
            albumInfo: [],
       }
       
   }
   
    // Axios API Call
    componentDidMount (){
        const apiKey = 'a0b4a2a68217ad3b52fe53e7b7ba0679';

        axios({
            url: 'http://ws.audioscrobbler.com/2.0/',
            method: 'GET',
            responseType: 'json',
            params: {
                api_key: apiKey,
                method: 'artist.gettopalbums',
                artist: 'drake',
                format: 'json'
            }  
        }).then((response) => {

    // Grab information from the API call 
            const albumArray = response.data.topalbums.album

            // Change the initial state 
            this.setState({
                    albumInfo: albumArray,
                })
            
            console.log(albumArray);
        })
    }

    render(){
        return (
            <div className="album-container">
                
                
            </div>
        );
    }
    
}

    



export default Albums;


// ALBUMS
// [1] Views
// [2] Take Care
// [4] Nothing Was the Same 
// [5] Scorpion 
// [6] More Life

//INFO
//name: albumArray[index].name
//image: albumArray[index].image[3]."#text"
    // put this info into the image url

// onClick from MoodContainer I want the albums to display 
// 