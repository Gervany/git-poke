import { Ripples } from '@uiball/loaders'
import React from 'react'

const Loader = () => {
    return (
        <div className='loader'>

            <Ripples
                size={150}
                speed={2}
                color="black"
            />
        </div>
    )
}

export default Loader