import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import './styles/PokeCard.css'

const PokeCard = ({ url }) => {

  const [ pokemon, getPokemon ] = useFetch(url)

  const navigate = useNavigate()

  useEffect(() => {
    getPokemon()
  }, [])

const handleNavigate = () => {
    navigate(`/pokedex/${pokemon.id}`)
}

const firstType = pokemon?.types[0].type.name

  return (
    <article className={`card__pokemon ${firstType}-border`} onClick={handleNavigate}>
        <header className={`card__position ${firstType}-gradient`}>
            <img 
             className="card__image" 
             src={pokemon?.sprites.other['official-artwork'].front_default} 
             alt="" 
            />
        </header>
        <section className="card__body">
            <h3 className={`card__name ${firstType}-color`}>{pokemon?.name}</h3>
            <ul className="card__list__type">
                {
                    pokemon?.types.map((typeInfo) => (
                      <li className="card__type" key={typeInfo.type.url}>{typeInfo.type.name}</li>
                    ))
                }
            </ul>
            <hr className="card__hr" />
            <ul className="card__list__stat">
                {
                   pokemon?.stats.map((statInfo) => (
                      <li className="card__pokeStat" key={statInfo.stat.url}>
                        <h4 className="card__nameStat">{statInfo.stat.name}</h4>
                        <span className={`card__stat ${firstType}-color`}>{statInfo.base_stat}</span>
                      </li>
                    ))
                }
            </ul>
        </section>
    </article>
  )
}

export default PokeCard