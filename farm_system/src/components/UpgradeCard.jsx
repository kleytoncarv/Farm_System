import React from 'react';
import './UpgradeCard.css'
import './Upgrade.css'


const UpgradeCard = ({ imagem }) => {
    return (

        <div className="card-container">
            <div className="item-card-upgrade">

                <img
                    src={imagem}
                    className="item-image3" />


            </div>
        </div>
    )
}

export default UpgradeCard;