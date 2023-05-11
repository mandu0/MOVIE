import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css"

function Detail() {
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState([]);
    const { id } = useParams();
    const getMovies = async () => {
      const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      const json = await response.json();
      setContent(json.data.movie);
      setLoading(false);
      console.log(json)
    }
    useEffect(() => {
      getMovies();
    }, [])
    return (
      <div className={styles.container}>
         {loading ? <h1>Loading...</h1> : 
         <div className={styles.main_container}>
          <div className={styles.main_img}>
            <img src={content.large_cover_image} />
          </div>
          <div className={styles.content_container}>
            <h1>{content.title_long}</h1>
            <p className={styles.summary_container}>{content.description_full}</p>
            <p className={styles.genres}>{content.genres.map( (g) => <li key={g}>{g}</li>)}</p>
            <p>RUNTIME : {content.runtime}Minitues</p>
          </div>
        </div>
         }
      </div>
    )
}

export default Detail;