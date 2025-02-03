import Layout from "./components/Layout";
import Swiper from "./components/Home/Swiper/Swiper";
import  Games  from "./components/Home/games/games";
export default async function Home() {
//  const data = await fetch(`https://api.rawg.io/api/games?key=01b5f2b2decd43a09825f962e8b072fa`, 
 //   { next: { revalidate: 0 } }).then (res => res.json());
 const data = await fetch(`https://api.rawg.io/api/games?key=01b5f2b2decd43a09825f962e8b072fa`,
  { next: { revalidate: 0 } }
).then((res) => res.json());
const games = data?.results.slice(0, 4);
  return (
    <div >
      <Layout container={
        <div>
          <Swiper />
          {/*<Games  games={games}/>*/}
        </div>
      }/>
    </div>
  );
}


