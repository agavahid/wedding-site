import HomeSearch from '../../components/homeSearch/homeSearch';
import HomeCategory from '../../components/homeCategory/homeCategory';
import HomeContainer from '../../components/homeContainer/homeContainer'
import CatalogeContainer from '../../components/catalogeContainer/catalogeContainer';
import MissionSection from '../../components/missionSection/missionSection';
import BottomItems from '../../components/bottomItems/bottomItems'

const Home = () => {
    return (
        <>
            <HomeSearch/>
            <HomeCategory/>
            <HomeContainer/>
            <CatalogeContainer/>
            <MissionSection/>
            <BottomItems/>
        </>
    )
}

export default Home;