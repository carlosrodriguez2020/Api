import React,{useState,useEffect} from 'react';


const RickAndMortyApi = () => {
  const [api, setApi] = useState([]);
  useEffect (()=>{
    const req = async () => {
      let apiWork = 'https://rickandmortyapi.com/api/character';
      let petition = await fetch(apiWork);
      let response = await petition.json();
      setApi(response)  
      console.log(api)      
    }
    req()
  },[])
    return(
  <>
      <section className='row d-flex p-1'>
        <h3 className='text-center'>Rick and Morty</h3>
    {
      api.length !== 0 && (
      api.results.map(item=>
        (
            <div className="card mb-3 col-sm-6 col-md-4 col-xl-3" key={item.id}>
              <div>
                <img src={item.image} className="card-img-top max-with:100%" alt="..." />
              </div>
              <div className="card-body">
              <h5 className="card-title">{item.name} - {item.gender}</h5>
              <a className="card-text">{item.url}</a>
              </div>
            </div>
      ) 
      )     
      )
    }
    </section>
 </>
    )
}

export default RickAndMortyApi;