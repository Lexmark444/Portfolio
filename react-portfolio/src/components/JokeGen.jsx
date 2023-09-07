"use client"
import { useState, useEffect } from "react";

export default function JokeGen(){;
    const [jokes, setJokes] = useState(null);

    const apiKey = "JOKjATVd39yPg5xGL0WiLA==4b32eeXwTtuDtfKf"
    const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
    const options = {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
      }
    }
    useEffect(() => {
      const fetchData = async () => {
        const result = await fetch(apiURL, options);
        result.json().then(json => {
          setJokes(json[0].joke)
        })
      }
      fetchData();
    }, []);

    const fetchData = async () => {
      const result = await fetch(apiURL, options);
      result.json().then(json => {
        setJokes(json[0].joke)
      })
    }

  return (
    <section className="bg-white">
    <div className=" px-10 md:px-20 lg:px-40">
        <div className="flex flex-col justify-center text-center py-10">
        <p className="p-5 text-md lg:text-2xl">{jokes}</p>

        <div className="border-black border-2 mx-auto">
        <button className="bg-black text-white py-2 px-4" onClick={fetchData} >New Joke</button>
        </div>
        </div>
    </div>
    </section>
  )
}

