import { Box, Pagination } from '@mui/material'
import React from 'react'

const PaginationPoke = ({pageCount, handleChange}) => {
    return (
        <div>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div className='pagination__home'>
                    <Pagination
                        variant='outlined'
                        count={pageCount}
                        onChange={handleChange}
                        size='small'                       
                    />
                </div>
            </Box>
        </div>
    )
}

export default PaginationPoke
