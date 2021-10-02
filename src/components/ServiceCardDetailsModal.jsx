import closeBtnWhite from "../cdn/images/closeBtnWhite.png"
import ImageWrapper from "./ImageWrapper"
import { useState } from "react"
import Text from "./Text"
import Plans from "./Plans"
import Affiliate from "../cdn/images/Affiliate.png"
const ServiceCardDetailsModal = ({details, closeModal, hero}) => {
    return (
        <div className="serviceDetailsModal" >
            <div onClick = {closeModal} className="serviceDetailsModal__close-btn">
                <ImageWrapper
                    imageSource={closeBtnWhite}
                    margin="0 0 0 0"
                    alternateName="HomeAsset1"
                    imageWidth="36px"
                />
            </div>
            <div className="serviceDetailsModal__Wrapper">
            <div className="serviceDetailsModal__Wrapper__hero">
            <ImageWrapper
                    imageSource={hero}
                    margin="10vh 0 0 0"
                    alternateName=""
                    imageWidth="250px"
                />
            </div>
            <Text
                content={details.title}
                fontSize="18px"
                width="70vw"
                margin="5vh 0 0 0"
                lineHeight="28px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content={details.description}
                fontSize="14px"
                width="70vw"
                margin="1vh 0 5vh 0"
                lineHeight="22px"
                color="#707070"
                textAlign="left"
            />
            {details.amazon ? <div className="serviceDetailsModal__Wrapper__amazon">
            <ImageWrapper
                    imageSource={Affiliate}
                    margin="1vh 0 2vh 0"
                    alternateName=""
                    imageWidth="250px"
                />
                <Text
                content="Affiliate Purchase Benefits"
                fontSize="16px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="28px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content="We know how much you love the prices online. And for PC components, Amazon is the best. Get the required products from Amazon through our affiliate Links and we will do the installation for free"
                fontSize="12px"
                width="70vw"
                margin="1vh 0 5vh 0"
                lineHeight="18px"
                color="#707070"
                textAlign="left"
            />
            </div>: ""}
            {details.plans.map(ele => {
                return <Plans key = {ele.plan} plan = {ele.plan} price = {ele.price}/>
            })}
            <Text
                content="Important!"
                fontSize="16px"
                width="70vw"
                margin="5vh 0 0 0"
                lineHeight="22px"
                color="#ff7e7e"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content={details.important}
                fontSize="12px"
                width="70vw"
                margin="1vh 0 10vh 0"
                lineHeight="18px"
                color="#a8a8a8"
                textAlign="center"
            />
            </div>
        </div>
    )
}

export default ServiceCardDetailsModal