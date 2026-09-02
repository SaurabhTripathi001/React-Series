import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Moments = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`
    )

    setUserData(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getData()
  }, [index])

  let printUserData = (
    <h3 className="text-gray-400 text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h3>
  )

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <div
          key={idx}
          className="group bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
          <a href={elem.url} target="_blank" rel="noreferrer">

            {/* Image */}
            <div className="h-52 w-full overflow-hidden">
              <img
                src={elem.download_url}
                alt={elem.author}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Card content */}
            <div className="p-4">
              <p className="text-xs text-gray-500 mb-1">
                PHOTOGRAPH BY
              </p>

              <h2 className="text-white font-semibold text-lg truncate">
                {elem.author}
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                View original photo →
              </p>
            </div>

          </a>
        </div>
      )
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-zinc-900 text-white">

      {/* Header */}
      <div className="px-8 pt-10 pb-6">

        <p className="text-amber-400 uppercase tracking-[4px] text-sm font-semibold">
          Discover
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          Beautiful Moments
        </h1>

        <p className="text-gray-400 mt-3 max-w-xl">
          Explore a collection of beautiful photographs from photographers
          around the world.
        </p>

      </div>

      {/* Gallery */}
      <div className="px-8 pb-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {printUserData}
        </div>

      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 pb-10">

        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setUserData([])
            }
          }}
          disabled={index === 1}
          className="px-6 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white font-semibold hover:bg-zinc-700 transition-all duration-200 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Prev
        </button>

        <div className="px-5 py-3 rounded-xl bg-amber-400 text-black font-bold">
          Page {index}
        </div>

        <button
          onClick={() => {
            setIndex(index + 1)
            setUserData([])
          }}
          className="px-6 py-3 rounded-xl bg-amber-400 text-black font-semibold hover:bg-amber-300 transition-all duration-200 active:scale-95"
        >
          Next →
        </button>

      </div>

    </div>
  )
}

export default Moments