import Counter from "./components/Counter";
import PostComp from "./components/Post/PostCom";
import {Routes, Route} from 'react-router-dom'
import Layout from './components/ui/Layout'
import PostItemPage from "./components/Post/PostItemPage";
import PostList from "./components/Post/PostList";


function App() {
  return (
    <div style={{padding: "3rm"}}>
      {/* <Counter /> */}
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route  index element={<PostList /> } />

          <Route path="post">
            <Route path=":postId" element={<PostItemPage />} />
          </Route>

        </Route>

      </Routes>
    </div>
  );
}

export default App;
