//The squared button component

//The functional component
const ButtonRound = ({content, backgroundColor, color, width, height, fontSize, padding, margin, fontWeight, lineHeight}) => {
    return (
        <div className="roundButton" style = {{
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
export default ButtonRound