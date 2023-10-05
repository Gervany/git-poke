import { useRef } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const HomePage = () => {

    const inputTrainer = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleTrainer = e => {
        e.preventDefault()
        dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
        navigate('/pokedex')
    }

  return (
    <div className="home__page">
        <h1 className="home__title"><img style={{height: "100px"}} src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png" alt="" /></h1>
        <h2 className="home__trainer">Hi Trainerhome!</h2>
        <p className="home__paragraph">To start, please, enter your trainer nickname</p>
        <form onSubmit={handleTrainer}>
            <input className="home__input" ref={inputTrainer} type="text" />
            <button className="home__button">Start!</button>
        </form>
    </div>
  )
}

export default HomePage