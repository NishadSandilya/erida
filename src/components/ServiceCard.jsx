import servicesAsset2 from "../cdn/images/servicesAsset2.png"
import closeBtnWhite from "../cdn/images/closeBtnWhite.png"
import ImageWrapper from "./ImageWrapper"
import { useState } from "react"
import ServiceCardDetailsModal from "./ServiceCardDetailsModal"

const ServiceCard = ({displayImg, title, price, details, number}) => {

    const [detailsModal, setDetailsModal] = useState(false)

    return (
        <div className="service-card">
            {detailsModal ? <ServiceCardDetailsModal details = {details} hero = {displayImg} closeModal = {() => setDetailsModal(() => false)}/> : ""}
            <div className="service-card__container">
                <div className="service-card__container__image">
                    <img src={displayImg} alt="" width = "70"/>
                </div>
                <div className="service-card__container__service-number">
                    <p className="service-card__container__service-number__content">
                        {number}
                    </p>
                </div>
                <div className="service-card__container__service-title">
                    <p className="service-card__container__service-title__content">
                        {title}
                    </p>
                </div>
                <div className="service-card__container__service-price-declaration">
                    <p className="service-card__container__service-price-declaration__content">
                        Starting at
                    </p>
                </div>
                <div  className="service-card__container__service-price">
                    <div className="service-card__container__service-price__circle">
                        <div className = "service-card__container__service-price__circle__currency">
                            INR
                        </div>
                        <div className = "service-card__container__service-price__circle__price">
                            {price}
                        </div>
                    </div>
                </div>
                <div onClick = {() => setDetailsModal(() => true)} className="service-card__container__service-details">
                    <p className="service-card__container__service-details__content">
                        See Details
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard