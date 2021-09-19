//Generic Typography Component

const Text = ({ content, fontSize, fontWeight, color, lineHeight, width, margin, textAlign, others }) => {
    return (
        <div className="text" style = {{
            width,
            margin,
            ...others
        }}>
            <p style={
                {
                    fontSize,
                    fontWeight,
                    color,
                    lineHeight,
                    textAlign
                }
            }>{content}</p>
        </div>
    )
}

export default Text