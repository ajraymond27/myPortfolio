import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "../data/photos";

/* popout the browser and maximize to see more rows! -> */
export default function ImgGallery () {
    return (
        <>
        <h4>Photography</h4>
        <Gallery photos={photos} />
        </>
    )
}
