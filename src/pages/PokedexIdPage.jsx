import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import Loader from "../components/HomePage/Loader"

const PokedexIdPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [ pokemon, getPokemon, opcion3, loading ] = useFetch(url)

  useEffect(() => {
    getPokemon()
  }, [id])

  console.log(pokemon)

  if(loading){ 
    <Loader/>
  }

  return (
    <div className="ID__card">
        <img className="ID__sizeImg" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <h2 className="ID__name">{pokemon?.name}</h2>
        <ul className="ID__wei__hei">
          <li><span>Weight: </span><span>{pokemon?.weight}</span></li>
          <li><span>Height: </span><span>{pokemon?.height}</span></li>
        </ul>

    </div>
  )
}

export default PokedexIdPage