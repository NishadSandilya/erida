//Generic Image Component

//Defining the functional component
const ImageWrapper = ({margin, imageSource, alternateName, imageWidth, others, marginImg, borderRadius, className}) => {
    return (
        <div className= {`imageWrapper${className}`} style ={{
            margin,
            ...others
        }}>
            <img src= {imageSource} alt= {alternateName} width = {imageWidth} style = {
                {
                    margin: marginImg,
                    display: "block",
                    borderRadius
                }
            }/>
        </div>
    )
}

//Default Export
export default ImageWrapper