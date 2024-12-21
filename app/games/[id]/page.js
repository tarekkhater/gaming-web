import React from 'react'
import Layout from '../../components/Layout';
import Swiper from '../Swiper';
import {getGame , screenshots} from '../Hooks';
export default async function page({params}) {
    const {id} = await params;
    const data = await getGame({id});
    const d = await screenshots({id})
    const stories = d?.results
  if(!stories || data == null) return (<h3>Loading...</h3>)  
  return (
    <Layout container={
        <div>
         { <Swiper game={data} stories={stories} />}
        </div>
    }/>
  )
}
