import {Routes, Route} from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import MyPage from "../Pages/MyPage/MyPage";

function MyRoute() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />}/>
                <Route path="/mypage" element={<MyPage/>}/>
            </Route>
        </Routes>
    )
}

export default MyRoute;