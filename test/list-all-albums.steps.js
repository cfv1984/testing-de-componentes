import React                        from 'react';
import Gallery                      from '../src/components/Gallery/Gallery';
import Album                        from '../src/components/Gallery/Album';
import ReactTestUtils               from 'react-dom/test-utils';
import {defineFeature, loadFeature} from 'jest-cucumber';
import TestRenderer                 from 'react-test-renderer';
import MockData                     from './mocks/gallery';
import Thumbnail                    from "../src/components/Gallery/Thumbnail";

const feature = loadFeature('./test/features/list-all-albums.feature');

defineFeature(feature, test => {
    test('Viewing the Gallery', ({given, when, then}) => {
        let testInstance;
        let gallery;

        given('the Gallery component is present', () => {
            const renderer = TestRenderer.create(
                <Gallery data={MockData}/>
            );
            gallery = renderer.root;
            testInstance = renderer;
        });

        when('the component is rendered', () => {
            // mock init steps that happen at render time
        });

        then('I want the component to have an Album for each gallery in the site', () => {
            const albums = gallery.findAllByType(Album);
            expect(albums.length).toEqual(Object.keys(MockData).length);
        });

        then('I want the Album to hold a Thumbnail for each image in it', () => {
            const album = gallery.findAllByType(Album).pop();
            expect(album).toBeDefined();
            const thumbs = album.findAllByType(Thumbnail);
            expect(thumbs.length).toEqual(MockData[1].photos.length);
        });
    });
});