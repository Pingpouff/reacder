import React from 'react';
import './App.css';
import Reader from './reader/reader';

function App() {
  // const domain = "https://readcomiconline.to/Comic";
  // const domain = "https://readcomicsonline.ru/comic";
  const baseUrl = "https://readcomicsonline.ru";
  const imageBaseUrl = `${baseUrl}/uploads/manga`;
  // const comicBaseUrl = `${baseUrl}/comics`;

  const [comicName, setComicName] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [chapter, setChapter] = React.useState(1);

  const updateUrl = () => {
    setUrl(`${imageBaseUrl}/${comicName}/chapters/${chapter}`)
    console.log("chap:" + chapter);
    console.log("url:" + url);
  }
  const search = async (e: React.FormEvent) => {
    e.preventDefault();
    //https://readcomicsonline.ru/search?query=blabla

    // setUrl(`${domain}/${comicName}`)
    // const html = await fetch(`${comicBaseUrl}/${comicName}`);
    updateUrl();
  }
  const nextChap = () => {
    console.log("next chapter");
    console.log("avant: chap:" + chapter);
    setChapter(chapter => chapter + 1);
    console.log("apres: chap:" + chapter);
    updateUrl();
  }

  return (
    <div className="App">
      <form className="form" onSubmit={search}>
        <input className="input"
          type="text"
          name="query"
          placeholder="i.e. darth-vader-2017"
          value={comicName}
          onChange={(e) => { setComicName(e.target.value) }}></input>
          <div>
          </div>
        <input className="input"
          type="text"
          name="chapter"
          placeholder="i.e. 11"
          value={chapter}
          onChange={(e) => { setChapter(+e.target.value) }}></input>
        <button className="search" type="submit">Search</button>
      </form>
      <div>

      </div>
      <Reader url={url} nextChap={nextChap}></Reader>
    </div >
  );
}

export default App;
