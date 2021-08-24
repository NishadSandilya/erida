//Imports




const DetailsCard = ({seeDetails, btnControl1}) => {
    return (
        <div className = "App__productCardWrapper__preferenceBox">
            <p className = "App__productCardWrapper__heading">Please note</p>
            <p className = "App__productCardWrapper__sub-heading">{seeDetails}</p>            
            <div className = "App__productCardWrapper__preferenceBox__vector">
                <img src="https://b80d-2405-201-a803-6043-fd28-2276-c2a3-6b.ngrok.io/cdn/vector.png" alt="Illustration" width = "300px" crossOrigin = "https://nishadsandilya.github.io"/>
            </div>
            <div className = "App__productCardWrapper__preferenceBox__ctaBox">
                <div onClick = {btnControl1} className = "App__productCardWrapper__preferenceBox__ctaBox__backImg">
                    <img src="https://b80d-2405-201-a803-6043-fd28-2276-c2a3-6b.ngrok.io/cdn/back.png" alt="Back Arrow" crossOrigin = "https://nishadsandilya.github.io"/>
                </div>
            </div>
        </div>
    )
}

//Default exports
export default DetailsCard