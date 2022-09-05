import react from 'react';
import CONST from '../data/constants'
import Score from './Score';
import { Movie } from '../data/mock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import "./Poster.css"

const Poster = ({ cover, poster_path, title, name, vote_average } : Movie, index: number) => {
   const { IMAGEURL } = CONST;
   return (
   <article className="relative trasition-all duration-500 ease-in-out trnsform hover:scale-110 hover:z-10" key={index}>
      <img src={poster_path ? `${IMAGEURL}/w200/${poster_path}` : cover} alt={title} /> 
      <div className='poster cursor-pointer absolute inset-0 text-center w-full h-full px-4 py-8 grid leading-6 bg-black bg-opacity-50 place-items-center trasition-all duration-500 ease-in-out opacity-0  '>
         <h2 className='text-2xl'>{title? title : name}</h2>
         <FontAwesomeIcon icon={faPlayCircle} size="5x" />
         <Score value={vote_average} />
      </div>
   </article>
)};

export default Poster;