//The squared button component

//The functional component
const ButtonRound = ({content, backgroundColor, color, width, height, fontSize, padding, margin, fontWeight, lineHeight, onClick, className, opacity}) => {
    return (
        <div className={`roundButton${className ? className : ""}`} onClick = {onClick} style = {{
            backgroundColor,
            color,
            width,
            height,
            textAlign: "center",
            fontSize,
            padding,
            margin,
            fontWeight,
            lineHeight,
            opacity
        }}>
            {content}
        </div>
    )
}

//Default Export
export default ButtonRound