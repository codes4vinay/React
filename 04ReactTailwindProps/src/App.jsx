import Card from "./components/Card";
function App() {
  const name = "Ashish";

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      {/* from here where we are using compent we will send props to the component */}
      <Card name="Ashish" />
      <Card name="Aakashan" />
      <Card name="Rajput" />
    </div>
  );
}

export default App;
