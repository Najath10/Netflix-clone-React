import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import "./Banner.css"
import { API_KEY } from '../../constants/constants'
import { imageURL } from '../../constants/constants'

const Banner = () => {
    const [movie,setMovie] =useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
           const allmovies = response.data.results;
            console.log(response.data.results[0]);
            const randomMovie = Math.floor(Math.random()*allmovies.length)
            setMovie(allmovies[randomMovie])
        })
    },[])

  return (
    <div
        style={{backgroundImage:`url(${imageURL+movie?.backdrop_path})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?.title}</h1>
            <div className='banner-buttons'>
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className='description'>{movie?.overview}</h1>
        </div>
      <div className="fade-bottom">

      </div>
    </div>
  )
}

export default Banner
