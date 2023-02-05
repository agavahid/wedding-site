import loadingGif from '../assets/icons/pageIcons/hearthloader.gif'
import './loading.css'
export default function Loading(){
    return(
        <div className='loading-container'>
            <img src={loadingGif}/>
        </div>
    )
}