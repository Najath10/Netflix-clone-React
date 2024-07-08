import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { API_KEY, imageURL } from "../../constants/constants";
import YouTube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  useEffect(() => {
    axios
      .get(props.url).then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((err) => {
        // alert(err);
      });
  }, []);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovive =(id)=>{
    axios.get( `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        if(response.data.results.length!==0){
            setUrlId(response.data.results[0])
        }else {
            console.log("Trailer Not Available")
        }
    })

  }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={()=>{
            handleMovive(obj.id)  }}
            src={`${imageURL + obj.backdrop_path}`}
            alt=""
            className={props.isSmall ? "small-poster" : "poster"}
          />
        ))}
      </div>
     { urlId && <YouTube
        videoId={urlId.key}
        opts={opts}
      />}
    </div>
  );
}

export default RowPost;
