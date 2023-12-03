import GoogleSuggestions from './components/GoogleSuggestions'

import './App.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum', uniqueNo: 1},
  {id: 2, suggestion: 'Oculus Quest 2 specs', uniqueNo: 2},
  {id: 3, suggestion: 'Tesla Share Price', uniqueNo: 3},
  {id: 4, suggestion: 'Price of Ethereum today', uniqueNo: 4},
  {id: 5, suggestion: 'Latest trends in AI', uniqueNo: 5},
  {id: 6, suggestion: 'Latest trends in ML', uniqueNo: 6},
]

const App = () => <GoogleSuggestions suggestionsList={suggestionsList} />

export default App
