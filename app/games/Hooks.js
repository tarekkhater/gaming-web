import React from 'react'

export default async function Hooks({id}) {
    
    const data = await fetch(`https://api.rawg.io/api/games/4291?key=01b5f2b2decd43a09825f962e8b072fa`,
        { next: { revalidate: 0 } }
      ).then((res) => res.json());
    const screenshots = await fetch(`https://api.rawg.io/api/games/4291/screenshots?key=01b5f2b2decd43a09825f962e8b072fa`,
        { next: { revalidate: 0 } }
      ).then((res) => res.json()); 
    const similar = await fetch(`https://api.rawg.io/api/games/4291/game-series?key=01b5f2b2decd43a09825f962e8b072fa`,
        { next: { revalidate: 0 } }
      ).then((res) => res.json()); 
  return (
    {
        games,data , screenshots , similar
    }
  )
}
export const getGame = async ({id}) => {
    const data = await fetch(`https://api.rawg.io/api/games/${id}?key=01b5f2b2decd43a09825f962e8b072fa`,
        { next: { revalidate: 0 } }
      ).then((res) => res.json());
    return data;  
}
export const screenshots = async ({id}) => {
    const data = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=01b5f2b2decd43a09825f962e8b072fa`,
        { next: { revalidate: 0 } }
      ).then((res) => res.json());
    return data;  
}