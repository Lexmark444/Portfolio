"use client"
import { useState, useEffect } from "react";

export default function QuoteGen(){;
    const [quotes, setQuote] = useState(null);
    const [authors, setAuthor] = useState(null);

    const url ='https://quotable.io/random';

    
    useEffect(() => {
      const fetchData = async () => {
        const result = await fetch(url);
        result.json().then(json => {
            setQuote(json.content)
            setAuthor(json.author)
          })
      }
      fetchData();
    }, []);

    const fetchData2 = async () => {
        const result = await fetch(url);
        result.json().then(json => {
            setQuote(json.content)
            setAuthor(json.author)
          })
      }
    

  return (
    <section className="bg-orange-100">
    <div className=" px-10 md:px-20 lg:px-40">
        <div className="flex flex-col justify-center text-center py-10">
        <p className="p-5 text-md lg:text-2xl">{quotes}</p>
        <p className="content-end text-md pb-5">~ {authors}</p>
        <div className="border-black border-2 mx-auto">
        <button className="bg-black text-white py-2 px-4" onClick={fetchData2} >New Quote</button>
        </div>
        </div>
    </div>
    </section>
  )
  }
