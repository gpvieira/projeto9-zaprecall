import MainScreen from "./components/MainScreen";
import cards from './cards.js';

export default function App() {
  return (
    <>
      <MainScreen cards={cards}/>
    </>
  )
}
