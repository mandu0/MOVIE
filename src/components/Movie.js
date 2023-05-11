import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css"

function Movie({coverImg, id, title, summary, genres}) {
    return (
      <div className={styles.main_container}>
        <img className={styles.main_img} src={coverImg} alt={title}/>
        <h2 className={styles.main}>
          <Link to={`/movie/${id}`}>TITLE : {title}</Link>
        </h2>
        <p className={styles.content}>{summary.length > 200 ? `${summary.slice(0, 200)}...` : summary}</p>
        <ul className={styles.genres}> -
          {genres.map( (g) => <li className={styles.genres_li} key={g}> &nbsp; {g}</li>)}
        </ul>
      </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;