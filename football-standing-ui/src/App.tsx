import './App.css';

import SearchComponent, { SearchData } from './serach/Search';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <SearchComponent onSearch={function (searchData: SearchData): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
}

export default App;
