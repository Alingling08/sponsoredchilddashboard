import React from 'react'
import Axios from 'axios'
import '../Styles/ChildPage.css';

const ChildPage = ({ child }) => {
    return (

        <div className="wrapper-flex">
            <div className="container">
                <img src={child.imageUrl} alt="Child Image" className="child-image" />
                <h1 className="child_name">{child.fullName}</h1>
                <p className="child_information">Gender: {child.genderCode}</p>
                <p className="child_information">Country: {child.country}</p>
                <p className="child_information">Favourite Subject: {child.favoriteSubject}</p>
            </div>
        </div>
    )
}

export default ChildPage
