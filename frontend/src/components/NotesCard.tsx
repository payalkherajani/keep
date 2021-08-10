import React, { Fragment } from 'react';

function NotesCard(props: { showModal: boolean; }) {
    return (
        <Fragment>
            {props.showModal === false ? (<h2 className="text-center my-5"><strong>Welcome User</strong></h2>) : null}
            <ul className={`grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-8 font-semibold text-gray-900 text-center p-4 relative ${props.showModal === true ? ('opacity-10') : ('opacity-1')}`}>
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