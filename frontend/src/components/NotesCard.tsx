import React, { Fragment, useEffect } from 'react';
import { useAppContext } from '../context/Context';
import { getNotesOfLoggedInUser } from '../services/notes';

function NotesCard(props: { showModal: boolean; }) {

    const { state, dispatch } = useAppContext();
    const { notes, user } = state;

    useEffect(() => {
        getNotesOfLoggedInUser(dispatch);
    }, []);

    const updateDetails = (e: React.MouseEvent, id: string) => {
        console.log({ id });
    };

    const deleteNoteWithID = (e: React.MouseEvent, id: string) => {
        console.log({ id });
    };
    const updatePinDetails = (e: React.MouseEvent, id: string) => {
        console.log({ id });
    };

    const updateBackgroundDetails = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
        console.log({ id });

    };

    return (
        <Fragment>
            {props.showModal === false ? (<h2 className="text-center my-5"><strong>Welcome {user.name}</strong></h2>) : null}
            {
                notes.length === 0 ? (
                    <div
                        className="mx-auto flex justify-center items-center" style={{ minHeight: '50vh' }}
                    >
                        <strong className="text-2xl text-purple-200">No Notes</strong>
                    </div>

                ) : (
                    <ul
                        className={`grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-8 font-semibold text-gray-900 text-center p-4 relative ${props.showModal === true ? ('opacity-10') : ('opacity-1')}`}
                    >
                        {
                            notes.map((note) => {
                                return <li
                                    className="flex flex-col relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full py-6 px-6 shadow-lg h-auto gap-7"
                                    key={note._id}
                                >
                                    <div className="flex flex-col gap-7 mt-5 mb-5">
                                        <p>{note.note_title}</p>
                                        <p>{note.note_description}</p>
                                    </div>

                                    <div className="flex justify-around">
                                        <i
                                            className="fas fa-pen text-xl fill-current text-blue-600"
                                            onClick={(e) => updateDetails(e, note._id)}
                                        >

                                        </i>
                                        <i
                                            className="fas fa-trash-alt text-xl fill-current text-red-600"
                                            onClick={(e) => deleteNoteWithID(e, note._id)}
                                        >

                                        </i>
                                        <i
                                            className="fas fa-thumbtack text-xl fill-current text-gray-600"
                                            onClick={(e) => updatePinDetails(e, note._id)}

                                        >

                                        </i>
                                        <input
                                            type="color"
                                            name="head"
                                            value={note.background_active_color}
                                            onChange={(e) => updateBackgroundDetails(e, note._id)}
                                        />
                                    </div>
                                    <span className=" absolute right-5 bg-green-300 text-green-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">{note.tag}</span>
                                </li>;
                            })
                        }


                    </ul>)
            }
        </Fragment>
    );
}

export default NotesCard;



