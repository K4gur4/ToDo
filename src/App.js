import Home from "./components/home/home";
import {Container,Wrapper} from './appStyle'
import Item from "./components/item/item";
function App() {
  return (
    <Container>
      <Wrapper>
        <Home/>
        <Item/>
      </Wrapper>
    </Container>
  );
}

export default App;
