import { Input, Radio, Rate } from 'antd';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";
import './App.css';

function Home() {
    return (
        <div>
            <h2>主页</h2>
            <h2>lalala</h2>

            <Rate allowHalf defaultValue={2.5} />


            <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">Hangzhou</Radio.Button>
                <Radio.Button value="b">Shanghai</Radio.Button>
                <Radio.Button value="c">Beijing</Radio.Button>
                <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
            <Radio.Group defaultValue="c" buttonStyle="solid" style={{ marginTop: 16 }}>
                <Radio.Button value="a">Hangzhou</Radio.Button>
                <Radio.Button value="b" disabled>
                    Shanghai
                </Radio.Button>
                <Radio.Button value="c">Beijing</Radio.Button>
                <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
            <Input placeholder='basic usage'></Input>

        </div>
    );
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/about">Home</Link>
                    <Link to="/users">Home</Link>
                </nav>
                <Routes>

                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/users" element={<Users />}></Route>

                </Routes>
            </BrowserRouter>
        </div>
    );
}





export default App;
