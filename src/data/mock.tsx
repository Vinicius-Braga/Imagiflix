import cover1 from '../assets/Movie1.jpg';
import cover2 from '../assets/Movie2.jpg';
import cover3 from '../assets/Movie3.jpg';

export interface Movie {
   title?: string;
   name?: string;
   cover?: string;
   poster_path?: string;
   vote_average?: number | string;
}

const mockData: Movie[] = [
   {
      title: 'Avangers',
      cover:  cover1, 
   },
   {
      title: 'Missão Impossivel',
      cover:  cover2,
   },
   {
      title: 'Megatubarão',
      cover:  cover3,
   },
   {
      title: 'Avangers',
      cover:  cover1, 
   },
   {
      title: 'Missão Impossivel',
      cover:  cover2,
   },
   {
      title: 'Megatubarão',
      cover:  cover3,
   },
   {
      title: 'Avangers',
      cover:  cover1, 
   },
   {
      title: 'Missão Impossivel',
      cover:  cover2,
   },
   {
      title: 'Megatubarão',
      cover:  cover3,
   },
   {
      title: 'Avangers',
      cover:  cover1, 
   },
   {
      title: 'Missão Impossivel',
      cover:  cover2,
   },
   {
      title: 'Megatubarão',
      cover:  cover3,
   },
   {
      title: 'Avangers',
      cover:  cover1, 
   },
   {
      title: 'Missão Impossivel',
      cover:  cover2,
   },
   {
      title: 'Megatubarão',
      cover:  cover3,
   }
];

export default mockData;