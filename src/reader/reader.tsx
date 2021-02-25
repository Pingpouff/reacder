import React from 'react';
import './reader.css'

interface readerProp {
    url: string,
    nextChap: Function
}

const Reader: React.FC<readerProp> = ({ url, nextChap }) => {

    const [images, setImages] = React.useState([{ imageUrl: `${url}/01.jpg`, id: 1 }]);
    const [i, setI] = React.useState<number>(1);
    const [chapEnded, setChapEnded] = React.useState(false);
    // setImages([`${url}/01.jpg`]);

    const oneMore = () => {
        setI(i + 1);
        let imageNumber: string = i.toString();
        if (i < 10) {
            imageNumber = `0${i}`;
        }
        const imageUrl = `${url}/${imageNumber}.jpg`;
        setImages([...images, { imageUrl, id: i }]);
        console.log(i);
    }
    const atEnd = () => {
        // console.log("ERROR")
        // nextChap();
        // console.log({ e })
        setChapEnded(true);
    }
    const toNextChapter = () => {
        setI(1)
        setChapEnded(false);
        setImages([{ imageUrl: `${url}/01.jpg`, id: 1 }]);
        nextChap();
    }
    let clickToNextChap;
    // if (chapEnded) {
        clickToNextChap = (<button id="next-chap" className="search" onClick={toNextChapter} >next chapter</button>);
    // }
    return (<div>
        {images.map(image => <img key={image.imageUrl.toString()} onError={atEnd} className="image" src={image.imageUrl} alt=""></img>)}
        <button id="next-img" className="search" onClick={oneMore} >next</button>
        {clickToNextChap}
    </div>);
}

export default Reader;