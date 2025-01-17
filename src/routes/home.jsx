import "./home.css";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div>
        <h1 className="home-page-title">
          So, you want to travel to
          <span>Space</span>
        </h1>
        <p className="home-page-content">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="home-page-button">
        <a href="/destination" className="home-page-explore-button">
          Explore
        </a>
      </div>
    </div>
  );
};

export default HomePage;
