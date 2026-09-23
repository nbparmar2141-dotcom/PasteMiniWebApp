import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { data, useSearchParams } from 'react-router-dom'
import { addToPastes, updateToPastes } from '../redux/pasteSlice';



const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId")
  const dispatch = useDispatch()
  const allPastes = useSelector((state) => state.paste.pastes);

  function createPastes() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    }
    if (!title.trim() || !value.trim()) {
      alert("Please enter title and content");
      return;
    }
    else {

      if (pasteId) {
        // update
        dispatch(updateToPastes(paste))
      }
      else {
        // create 
        dispatch(addToPastes(paste))
      }
    }

    // After creation or updation 
    setTitle('')
    setValue('')
    setSearchParams({})
  }
  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId)
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId])


  return (
    <div className='m-5 flex flex-col gap-10'>
      <div className='flex justify-center items-center gap-10'>
        <input type="text" placeholder='Enter Title Here' className='border border-gray-500  p-3 rounded w-full' value={title} onChange={(e) => { setTitle(e.target.value) }} required />

        <button
          onClick={createPastes}
          className='border border-gray-500  p-3 w-full rounded bg-gray-500 active:scale-97 duration-200 text-white font-semibold hover:bg-gray-700'>
          {
            pasteId ? "Update My Paste" : "Create My Paste"
          }
        </button>
      </div>
      <div className='w-full flex justify-center items-center'>
        <textarea placeholder='Enter Your Content' value={value} onChange={(e) => {
          setValue(e.target.value)

        }}
          rows={10}
          className='border border-gray-500  p-3 rounded w-full' required></textarea>
      </div>
    </div>
  )
}

export default Home 