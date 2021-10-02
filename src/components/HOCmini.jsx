import reactDom from "react-dom"
import Loader from 'react-loader-spinner'

const HOCmini = () => {
    return reactDom.createPortal((
        <div className="hoc">
            <Loader type="TailSpin" color="#000000" height={80} width={80} />
        </div>
    ), document.getElementById('portal'))
}

export default HOCmini