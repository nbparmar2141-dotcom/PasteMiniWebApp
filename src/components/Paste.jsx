import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Paste = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const pastes = useSelector((state) => state.paste.pastes);

  const filteredData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId))
  }

  function handleShare(pasteId) {
    const shareUrl = `${window.location.origin}/pastes/${pasteId}`;

    navigator.clipboard.writeText(shareUrl);

    toast.success("Share link copied!");
  }


  return (
    <div className='m-5'>
      <div>
        <input type="search" placeholder='Search Here...'  value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} className='border border-gray-500  p-3 rounded w-full' required />
      </div>
      <div className='flex flex-col  my-5 gap-5 bg-gray-300 py-5 px-2 rounded'>
        {
          filteredData.length > 0 &&
          filteredData.map(
            (paste) => {
              return (
                <div className='border border-2  border-gray-700 bg-gray-950 text-gray-200 p-3 rounded-xl flex flex-col gap-5' key={paste?._id}>
                  <div className='flex flex-col gap-4'>

                    <h1 className='text-3xl line-clamp-1'>{paste.title}</h1>

                    <p className="text-gray-400 line-clamp-3">
                      {paste.content}
                    </p>
                    <p>{paste.createdAt}</p>
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                      <Link to={`/?pasteId=${paste?._id}`}>Edit</Link>
                    </button>

                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                      <Link to={`/pastes/${paste?._id}`}>View</Link>
                    </button>

                    <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={() => handleDelete(paste?._id)}>
                      Delete
                    </button>

                    <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"

                      onClick={() => {

                        navigator.clipboard.writeText(paste?.content)
                        toast("Copy successfully")
                      }}>
                      Copy
                    </button>

                    <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
                      onClick={() => handleShare(paste?._id)}
                    >
                      Share
                    </button>
                  </div>

                </div>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default Paste