import Albums from './albums';
import Photos from './photos';

const Gallery = Albums.map(album => {
        album.photos = Photos.filter(photo => photo.albumId === album.id);
        return {[album.id]: album};
    })
    .reduce((all, current) => ({
        ...all,
        ...current
    }), {});

export default Gallery;