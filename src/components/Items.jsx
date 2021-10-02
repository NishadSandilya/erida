const Items = ({ item, price, qty }) => {
    return (
        <div className="item">
            <div className="item__service-qty">
                <p>
                    {qty}
                </p>
            </div>
            <div className="item__container">
                <div className="item__container__service-title">
                    <p className="item__container__service-title__content">
                        {item}
                    </p>
                </div>
                <div className="item__container__service-price">
                    <div className="item__container__service-price__circle">
                        <div className="item__container__service-price__circle__currency">
                            INR
                        </div>
                        <div className="item__container__service-price__circle__price">
                            {price}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Items