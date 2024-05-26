const Home = ({ name }) => {
  return <div>{`${name}s Home`}</div>;
};

const Main = () => {
  return (
    <>
      <Home />
      <div>Main</div>
    </>
  );
};

const Favs = () => {
  return <div>Favs</div>;
};
