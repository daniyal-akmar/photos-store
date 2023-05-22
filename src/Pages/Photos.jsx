import React, { useContext } from "react";
import { Context } from "../Context/Context";
import Photo from "../Context/Photo";

const Photos = () => {
    const { photos } = useContext(Context);
    const imgElements = photos.map((photo) => <Photo key={photo.id} photo={photo} />);

    return <main className="photos container">{imgElements}</main>;
};

export default Photos;
