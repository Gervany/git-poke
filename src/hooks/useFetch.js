import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {
  
    const [infoApi, setInfoApi] = useState()
    const [loading, setLoading] = useState(false)

    const getApi = () => {
        axios.get(url)
        .then(res => setInfoApi(res.data))
        .catch(err => console.log(err))
    }

    const getTypeApi = (urlType) => {
        setLoading(true)
        axios.get(urlType)
        .then(res => {
            res.data
            const obj = {
                results: res.data.pokemon.map(e => e.pokemon)
            }
            setInfoApi(obj)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }

    return [ infoApi, getApi, getTypeApi, loading ]
}

export default useFetch