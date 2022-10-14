import {Route, Routes} from 'react-router-dom'
import Home from '../Page/Home'
import FeedBack from '../Page/FeedBack/index'

const ControllRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='FeedBack' element={<FeedBack/>} />
        </Routes>
    )
}

export default ControllRouter