const Plans = ({plan, price}) => {
    return (
        <div className="plan">            
            <div className="plan__container">
                <div className="plan__container__service-title">
                    <p className="plan__container__service-title__content">
                        {plan}
                    </p>
                </div>
                <div  className="plan__container__service-price">
                    <div className="plan__container__service-price__circle">
                        <div className = "plan__container__service-price__circle__currency">
                            INR
                        </div>
                        <div className = "plan__container__service-price__circle__price">
                            {price}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans