//The squared button component

//The functional component
const ButtonSquared = ({content, backgroundColor, color, width, height, fontSize, padding, margin, fontWeight, lineHeight, onClick}) => {
    return (
        <div className="squaredButton" onClick = {onClick} style = {{
            backgroundColor,
            color,
            width,
            height,
            textAlign: "center",
            fontSize,
            padding,
            margin,
            fontWeight,
            lineHeight
        }}>
            {content}
        </div>
    )
}

//Default Export
export default ButtonSquared