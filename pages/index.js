// eslint-disable-next-line @next/next/no-img-element

// eslint-disable-next-line @next/next/no-img-element

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          id,
          title: title,
        },
      },
      `/movies/${id}`
    );
  };
  // const [movies, setMovies] = useState();
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(`/api/movies`);
  //     const { results } = await response.json();
  //     setMovies(results);
  //   })();
  // }, []);
  return (
    <div className='container'>
      <Seo title='Home' />
      {/* {!movies && <h4>Loading ...</h4>} */}
      {results?.map((movie) => (
        <div onClick={() => onClick(movie.id, movie.original_title)} className='movie' key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// 서버에서 실행됨
// 데이터가 유효할 때 화면이 보이는 것이 좋을 때
// API가 완료된 후 정보 보여주기
// ! getServerSideProps 이름 변경 안 됨
export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/movies`);
  const { results } = await response.json();
  return {
    props: {
      results,
    },
  };
}
