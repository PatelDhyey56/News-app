import React, { useState } from 'react'
import Card from './Card'
import news from '../news.json'

export default function Main() {
    // const [item, setItem] = useState()
    let news = require('../news.json');
   
    return (
        <div className='container mt-5'>
            <div className='row'>
                {news.articles.map((e) => {
                    return (
                        <div className='col-md-3 mt-3' key={e.title}>
                            <Card title={e.title.slice(0,30)} discription={e.description.slice(0,100)} img={e.urlToImage} web={e.url} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
