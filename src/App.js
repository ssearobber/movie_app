import React from 'react';
import './App.css';
import Movie from './Movie';

function App() {

  const movies = [
    {
      title : "Drug War",
      poster : "https://post-phinf.pstatic.net/MjAxODA1MjJfNjQg/MDAxNTI2OTYzMjEyMDI4.ZfY5-zRI0q9pVtj127kKlCEbBYpsrDrjdndFcxq-xCwg.pBLORyz1ildVHujcApZ1hzYb1yhW2tV-nb1Tj2T3aeUg.JPEG/0.1.0_%283%29.jpg?type=w1200"
    },
    {
      title : "Drug War",
      poster : "https://post-phinf.pstatic.net/MjAxODA1MjJfNjQg/MDAxNTI2OTYzMjEyMDI4.ZfY5-zRI0q9pVtj127kKlCEbBYpsrDrjdndFcxq-xCwg.pBLORyz1ildVHujcApZ1hzYb1yhW2tV-nb1Tj2T3aeUg.JPEG/0.1.0_%283%29.jpg?type=w1200"
    },
    {
      title : "Drug War",
      poster : "https://post-phinf.pstatic.net/MjAxODA1MjJfNjQg/MDAxNTI2OTYzMjEyMDI4.ZfY5-zRI0q9pVtj127kKlCEbBYpsrDrjdndFcxq-xCwg.pBLORyz1ildVHujcApZ1hzYb1yhW2tV-nb1Tj2T3aeUg.JPEG/0.1.0_%283%29.jpg?type=w1200"
    },
    {
      title : "Drug War",
      poster : "https://post-phinf.pstatic.net/MjAxODA1MjJfNjQg/MDAxNTI2OTYzMjEyMDI4.ZfY5-zRI0q9pVtj127kKlCEbBYpsrDrjdndFcxq-xCwg.pBLORyz1ildVHujcApZ1hzYb1yhW2tV-nb1Tj2T3aeUg.JPEG/0.1.0_%283%29.jpg?type=w1200"
    }

  ]
  //map함수로 movies배열을movie변수에 넣어줌
  //key를 사용해서 고유의 값을 부여할 수 있음
  return (
    <div className="App">
      {movies.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index}/>
      })}
    </div>
  );
}

export default App;
