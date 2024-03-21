import './App.css'
import Hero from './components/Heroes/Heroes.jsx';
import Header from './components/Header/Header.jsx'
import heroes from './data/superheroes.json'


function App() {
  return( 
    <>
      <Header />
      <div className='heroes'>
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
      </div>
    </>
  )
}

export default App;
