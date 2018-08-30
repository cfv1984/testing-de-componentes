import React, {Component, Fragment} from 'react';
import Album                        from "./Album";

const Gallery = ({data}) => <Fragment>{Object.keys(data).map(id => <Album
    photos={data[id].photos} key={id}
/>)}</Fragment>;

export default Gallery;