import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import './HospitalsListCard.css'

function HospitalsListCard() {
  const [like, setLike] = React.useState(false)
  const [status, setStatusRequest] = React.useState("Donate")
  const theme = useTheme();

  return (
    <>
  <div className='donate-container'>
                            <h4 className='donate-heading'>Donate Your Blood</h4>
                            <div className='donate-section'>

      <div className='donate-search-section'>
        <input type="text" placeholder='Search Hospital' />
        <i style={{ color: 'black' }} class="ri-search-2-line"></i>
      </div>

      <div className='donate-landing-section'>
        <div className='d-flex justify-content-center mb-4'>
          <div className='card-collection'>

            <Card sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h6">
                    Naruto Uzumaki Hospital
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Location: Thrissur
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  {!like ?
                    <div ><i className="ri-heart-line favourite-hospital" onClick={() => setLike(true)}></i></div> :
                    <div ><i class="ri-heart-fill favourite-hospital " onClick={() => setLike(false)}></i></div>
                  }
                  <button onClick={() => setStatusRequest("Requested")} className='btn btn-primary'>{status}</button>
                  {/* <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton> */}
                </Box>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://iristelehealth.com/wp-content/uploads/2023/04/How-Bridge-Care-Services-Help-Hospitals-Address-Short-Term-Mental-Health-Needs_Social-01-1-768x768.png"
                alt="Live from space album cover"
              />
            </Card>
          </div>

          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HospitalsListCard