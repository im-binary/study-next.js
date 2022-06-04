import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Hi!</h1>
      <style jsx>{`
        h1 {
          color: blue;
        }
      `}</style>
    </div>
  );
}
