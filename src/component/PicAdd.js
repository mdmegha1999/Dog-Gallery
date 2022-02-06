
import React, { useState, useEffect } from 'react';
import PicSearch from './PicSearch.css';
function PicAdd(props){
    const [dog, setDog] = useState('');
    const [dogImg, setDogImg] = useState('');
    const dogName = props.dog;

    const getSubBreed = () => {
        fetch(`https://dog.ceo/api/breed/${dogName}/list`)
        .then((res) => res.json())
        .then((json) => {
            if(json.message.length === 0){
                setDog('')
            } else {
                finalInfo(json.message)
            }
        })
    }
    
    const finalInfo = (subBreed) => {
        var newList = [];
        for(let i=0;i<subBreed.length;i++){
            fetch(`https://dog.ceo/api/breed/${dogName}/${subBreed[i]}/images/random/1`)
            .then((response) => response.json())
            .then((json) => {
                newList.push(json.message[0])
                if(newList.length === subBreed.length){
                    setDog(newList)
                } else {
                    // do nothing
                }
            })
        }
    }
    
    const getMoreImages = () => {
        fetch(`https://dog.ceo/api/breed/${dogName}/images/random/5`)
        .then((response) => response.json())
        .then((json) => {
            setDogImg(json.message)
        })
    }
    
    useEffect(() => {
        getSubBreed();
        getMoreImages();
        
    }, [])

    return (
        <div className="cont">
            <div className="arr">
                <div className="close" onClick={() => props.closeModal()}>X</div>
                <div className="dogname">{dogName}</div>
                <div className="content">
                    {dog && <h5 className="arr-heading">Sub Breeds</h5>}
                    <div className="more-images">
                        {dog && dog.map((dog, i) => (
                            <div className="images-box" key={i}>
                                <img className='pic' src={dog} alt="Dog"/>
                                <span>{dog.split('/')[4].split('-')[1]}</span>
                            </div>
                        ))}
                    </div>
                    {dogImg && <h5 className="arr-heading">More Images</h5>}
                    <div className="more-images">
                        {dogImg && dogImg.map((dogImg, i) => (
                            <div className="images-box" key={i}>
                                <img className='pic' src={dogImg} alt="Dog"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PicAdd;