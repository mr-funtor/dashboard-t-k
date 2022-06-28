//components
import SideNav from './components/SideNav'
import Search from './components/Search'
import Profile from './components/Profile'
//import Profile from './components/Profile'

//icons

function App() {
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 bg-[#f4f8fc] h-screen rounded-tl-lg px-5 py-4">
      
          <section className="flex justify-between">
            <Search />
            <Profile />
          </section>
      
        
      </div>
    </div>
  );
}

export default App;
