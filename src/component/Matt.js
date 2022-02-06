import React, { useState, useEffect } from 'react';
import PicAdd from './PicAdd';
import './PicSearch.css';
function Matt(props){
    const [dogPic, setDogPic] = useState(false);
    const [modal, setModal] = useState(false);
    const dogName = props.dogs;

    const closeModal = () => {
        setModal(false)
    }
    
    const getDogPic = () => {
        fetch(`https://dog.ceo/api/breed/${dogName}/images/random`)
        .then((response) => response.json())
        .then((json) => {
            setDogPic(json.message)
        })
    }

    useEffect(() => {
        getDogPic();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {modal && <PicAdd dog={dogName} closeModal={closeModal}/>}
            <div className="matt" onClick={() => setModal(!modal)}>
                <div className="dogpic">
                    <img className="pic" src={dogPic} alt="Dog"/>
                </div>
                <p className="dogname"> {dogName} </p>
            </div>
        </>
    );
}

export default Matt;