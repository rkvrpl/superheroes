

import Hero from './components/Heroes/Heroes.jsx';
import Header from './components/Header/Header.jsx'
import heroes from './data/superheroes.json'


function App() {
  return( 
    <>
      <Header />
      {
        heroes.map((item) => {
          return( <Hero 
          name={item.name} 
          alterego={item.alterego} 
          occupation={item.occupation} 
          friends={item.friends} 
          superpowers={item.superpowers} 
          info={item.info} 
          url={item.url} 
          key={item.id}/>)
        })
      }
    </>
  )
}

export default App;
