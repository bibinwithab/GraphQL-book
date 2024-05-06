import ShowBooks from "./components/ShowBooks"

function App() {
  return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-600 to-fuchsia-600">
      <div className="absolute inset-0 backdrop-filter backdrop-blur-lg bg-opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-3xl font-bold text-center mb-8">Books! A lot of 'em</h1>
        <ShowBooks />
      </div>
    </div>
  );
}

export default App;
