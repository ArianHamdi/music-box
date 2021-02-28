import Navigation from '../../Components/Navigation/Navigation'
import MusicPlayer from '../../Components/MusicPlayer/MusicPlayer'

const AppLayout = ({ children }) => (
    <>
        <Navigation />
        {children}
        <MusicPlayer />
    </>
)

export default AppLayout;