import React, {Component, Fragment} from 'react';
import Thumbnail                    from "./Thumbnail";

const Album = ({photos}) => <Fragment>
    {photos.map(photo => <Thumbnail photo={photo} key={photo.id}/>)}
    </Fragment>;

export default Album;