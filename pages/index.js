import Navigation from "./component/Navigation";

function Home() {
  return (
    <>
      <Navigation />
      <h1>Home Page</h1>

      <style jsx>{`
        .Home {
          margin: 30px;
          color: blue;
        }
      `}</style>
    </>
  );
}

export default Home;
