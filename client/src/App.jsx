import ShowBooks from "./components/ShowBooks";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500 to-purple-900 opacity-80"></div>
      <div className="relative z-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">Books! A lot of 'em</h1>
        <ShowBooks />
      </div>
    </div>
  );
}

export default App;
