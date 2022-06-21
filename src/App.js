import Counter from "./components/Counter";
import PostComp from "./components/Post/PostCom";
import {Routes, Route} from 'react-router-dom'
import Layout from './components/ui/Layout'
import PostItemPage from "./components/Post/PostItemPage";


function App() {
  return (
    <div style={{padding: "3rm"}}>
      {/* <Counter /> */}
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route  index element={<PostComp /> } />

          <Route path="post">
            <Route path=":postId" element={<PostItemPage />} />
          </Route>

        </Route>

      </Routes>
    </div>
  );
}

export default App;
