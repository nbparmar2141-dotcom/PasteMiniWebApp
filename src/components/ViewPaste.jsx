import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { data, useParams, useSearchParams } from 'react-router-dom'
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";


const ViewPaste = () => {

    const { id } = useParams();

    const allPastes = useSelector((state) => state.paste.pastes);

    const paste = allPastes.filter((p) => p._id === id)[0];



    return (
        <div className='m-5 flex flex-col gap-10'>
            <div className='flex justify-center items-center gap-10'>
                <input type="text" disabled className='border border-gray-500  p-3 rounded w-full' value={paste.title} required />

                {/* <button
                    onClick={createPastes}
                    className='border border-gray-500  p-3 w-full rounded bg-gray-500 active:scale-97 duration-200 text-white font-semibold hover:bg-gray-700'>
                    {
                        pasteId ? "Update My Paste" : "Create My Paste"
                    }
                </button> */}
            </div>
            <div className='w-full flex flex-col'>
                <div className='p-1 border  border-gray-500 rounded-t flex justify-between'>
                    <div className='flex gap-2'>

                        <p className='p-2 bg-red-400 rounded-full w-fit my-3 ml-5'></p>
                        <p className='p-2 bg-yellow-400 rounded-full w-fit my-3 '></p>
                        <p className='p-2 bg-green-400 rounded-full w-fit my-3 '></p>
                    </div>
                    <div>
                        <button className='right-0 top-0 p-1 bg-green-500 rounded text-white font-semibold m-1' onClick={() => {
                            navigator.clipboard.writeText(paste?.content)
                            toast("Copy content ")
                        }}> <FontAwesomeIcon icon={faCopy} />
                        </button>
                    </div>
                </div>
                <textarea disabled value={paste.content}
                    className='border border-gray-500  p-3 rounded-b border-t-0 w-full' style={{ height: "auto" }} ref={(textarea) => {
                        if (textarea) {

                            textarea.style.height = "auto";
                            textarea.style.height = `${textarea.scrollHeight}px`;
                        }
                    }} required>

                </textarea>


            </div>
        </div>
    )
}

export default ViewPaste