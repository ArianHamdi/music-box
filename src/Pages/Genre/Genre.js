import styles from './Genre.module.scss';
import { useParams } from 'react-router-dom';
import { useAllArtists } from '../../Hooks/useAPI'

const Genre = () => {

    const { genre } = useParams();

    const { data, isLoading } = useAllArtists(genre);

    console.log('data', data);

    return (
        <div style={{ width: 200, height: 200, backgroundColor: 'red' }}>salaaaam</div>
    )
}

export default Genre;