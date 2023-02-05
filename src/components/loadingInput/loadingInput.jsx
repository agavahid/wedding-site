import './loadingInput.css';
import loadingGif from '../assets/icons/pageIcons/hearthloader.gif';

export default function LoadingInput(){
    return(
        <div className='loadingInput-container'>
            <img src={loadingGif}/>
        </div>
    )
}