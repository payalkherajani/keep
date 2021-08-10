import React, { Fragment } from 'react';
import { TwitterPicker } from 'react-color';

function NotesCard(props: { showModal: boolean; }) {
    return (
        <Fragment>
            {props.showModal === false ? (<h2 className="text-center my-5"><strong>Welcome User</strong></h2>) : null}
            <ul
                className={`grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-8 font-semibold text-gray-900 text-center p-4 relative ${props.showModal === true ? ('opacity-10') : ('opacity-1')}`}
            >
                <li
                    className="flex flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full py-6 px-6 shadow-lg h-auto gap-7"
                >
                    <div className="flex flex-col gap-7 mt-5 mb-5">
                        <p>Title</p>
                        <p>Description</p>
                    </div>

                    <div className="flex justify-around">
                        <i className="fas fa-pen"></i>
                        <i className="fas fa-trash-alt"></i>
                        <i className="fas fa-thumbtack"></i>
                        {/* <TwitterPicker /> */}
                        <input type="color" id="head" name="head" value="#e66465" />
                    </div>
                    <span className=" absolute right-5 bg-green-300 text-green-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">IMP</span>
                </li>
                <li
                    className="flex flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full py-6 px-6 shadow-lg h-auto gap-7"
                >
                    <div className="flex flex-col gap-7 mt-5 mb-5">
                        <p>Title</p>
                        <p>Description</p>
                    </div>

                    <div className="flex justify-around">
                        <i className="fas fa-pen"></i>
                        <i className="fas fa-trash-alt"></i>
                        <i className="fas fa-thumbtack"></i>
                        {/* <TwitterPicker /> */}
                        <input type="color" id="head" name="head" value="#e66465" />
                    </div>
                    <span className=" absolute right-5 bg-green-300 text-green-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">CSL</span>
                </li>

                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
                <li className="flex  flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                    <h1>Title</h1>
                    <h2>Descriotion</h2>
                    <h3>Action Buttons</h3>
                </li>
            </ul>
        </Fragment>
    );
}

export default NotesCard;