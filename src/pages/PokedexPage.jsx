import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import PaginationPoke from "../components/PokedexPage/PaginationPoke"
import Loader from "../components/HomePage/Loader"

const PokedexPage = () => {

    const [inputValue, setInputValue] = useState('')
    const [typeSelected, setTypeSelected] = useState('allPokemons')

    console.log(typeSelected)

    const trainer = useSelector(store => store.trainer)

    const inputSearch = useRef()

    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'
    const [ pokemons, getPokemons, getTypePokemon, loading ] = useFetch(url)

    useEffect(() => {
        if(typeSelected === 'allPokemons') {
            getPokemons()
        } else {
            getTypePokemon(typeSelected)
        }
    }, [typeSelected])  

    const handleSearch = e => {
        e.preventDefault()
        setInputValue(inputSearch.current.value.trim().toLowerCase())
    }

    const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))

    const itemsPerPage = 5;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    
    const currentItems = pokeFiltered?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(pokeFiltered?.length / itemsPerPage);
    
    const handleChange = (event, value) => {
      const value2 = value - 1;
      const newOffset = (value2 * itemsPerPage);
    
      setItemOffset(newOffset);
    };
  
    if(loading){
      return <Loader/>
    }

    return (
      <>   
      <div>
        <nav className="pokdex__navbar">

        </nav>
        <header className="pokedex__position__formSelectTrainer">

        <p>Hi, {trainer}</p>

        <div className="pokedex__form__select">
        <form onSubmit={handleSearch}>
            <input className="pokedex__input" ref={inputSearch} type="text" />
            <button className="pokedex__button">Search</button>
        </form>
        <SelectType 
          setTypeSelected={setTypeSelected}
        />
        </div>   
        </header>


        <div className="cards__global">
            {
              currentItems?.map(poke => (
                    <PokeCard 
                      key={poke.url}
                      url={poke.url}
                    />
                ))
            }
        </div>
        <PaginationPoke pageCount={pageCount} handleChange={handleChange}/>
      </div>
      </>
  )
}

export default PokedexPage