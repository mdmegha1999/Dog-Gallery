
import React, { useState, useEffect } from 'react';
import PicSearch from './PicSearch.css';
function Picsearch(props){
    const [dogs, setDogs] = useState('')
    const [breedName, setBreedName] = useState('')
    const [imageNum, setImageNum] = useState('')
    const [dogPhoto, setDogPhoto] = useState('')
    
    
    const getDogs = () => {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then((response) => response.json())
        .then((json) => {
            setDogs(json.message)
        })
    }
    const [breedNameShow, setBreedNameShow] = useState('')
    const [imageNumShow, setImageNumShow] = useState('')
    
    const getImages = () => {
        fetch(`https://dog.ceo/api/breed/${breedName}/images/random/${imageNum}`)
        .then((response) => response.json())
        .then((json) => {
            setDogPhoto(json.message)
        })
        setBreedNameShow(breedName)
        setImageNumShow(imageNum)
    }

    useEffect(() => {
        getDogs();
    }, [])

    return (
        <div className="cont">
            <div className="arr">



                
                <div className="close" onClick={() => props.closeModal()}>Cancel</div>
                <div className="dogname">Custom Search..</div>
                <div className="content">
                    <div className="search">
                        <div className="searchbox">
                            <select value={breedName} onChange={(e) => setBreedName(e.target.value)}>
                                <option>Select a Breed</option>
                                {Object.keys(dogs).map((dogs, i) => (
                                    <option key={i} value={dogs}>{dogs}</option>
                                ))}
                            </select>
                        </div>
                        <div className="searchbox">
                            <input type="number" placeholder="Number of Images" value={imageNum} onChange={(e) => setImageNum(e.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <button  className="text_btn" onClick={() => getImages()}>Get Images</button>
                    </div>
                    {dogPhoto && <h5 className="search_heading">Showing "{imageNumShow}" Images "{breedNameShow}"</h5>}
                    {dogPhoto && 
                        <div className="result">
                            {dogPhoto && dogPhoto.map((dogPhoto, i) => (
                                <div key={i} className="resultbox">
                                    <img className="box_img" src={dogPhoto} alt="search-dog"/>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Picsearch;