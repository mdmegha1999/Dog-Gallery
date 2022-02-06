// import React, { useState, useEffect } from 'react';
// import PicAdd from './component/PicAdd';

// function Search(props){
//     const [dogPic, setDogPic] = useState(false);
//     const [modal, setModal] = useState(false);
//     const dogName = props.dogs;
//     console.log(props)
//     const closeModal = () => {
//         setModal(false)
//     }
    
//     const getDogPic = () => {
//         fetch(`https://dog.ceo/api/breed/${dogName}/images/random`)
//         .then((response) => response.json())
//         .then((json) => {
//             setDogPic(json.message)
//         })
//     }

//     useEffect(() => {
//         getDogPic();
       
//     }, [])

//     return (
//         <>
//             {modal && <PicAdd dog={dogName} closeModal={closeModal}/>}
//             <div className="matt" onClick={() => setModal(!modal)}>
//                 <div className="dogpic">
//                     <img src={dogPic} alt="Dog"/>
//                 </div>
//                 <p className="dogname"> {dogName} </p>
//             </div>
//         </>
//     );
// }

// export default Search;
import React, { useState, useEffect } from 'react';
import PicAdd from './component/PicAdd';

function Search (props){
    const [dogImage, setDogImage] = useState(false);
    const [modal, setModal] = useState(false);
    const dogName = props.dogName;
    console.log(props)

    const closeModal = () => {
        setModal(false)
    }
    
    const getDogImage = () => {
        fetch(`https://dog.ceo/api/breed/${dogName}/images/random`)
        .then((response) => response.json())
        .then((json) => {
            setDogImage(json.message)
        })
    }

    useEffect(() => {
        getDogImage();
        
    }, [])

    return (
        <>
            {modal && <PicAdd dog={dogName} closeModal={closeModal}/>}
            <div className="matt" onClick={() => setModal(!modal)}>
                <div className="dog-image">
                    <img src={dogImage} alt="Dog"/>
                </div>
                <p className="dogname"> {dogName} </p>
            </div>
        </>
    );
}

export default Search;