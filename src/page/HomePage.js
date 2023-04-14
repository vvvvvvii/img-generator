import FancyBtn from "../components/FancyBtn";

function HomePage({ onChangePage }) {
  return (
    <div className="home-container">
      <h1 className="welcome-title title mb-6">長輩圖生成器</h1>
      <FancyBtn onChangePage={onChangePage} />
    </div>
  );
}

export default HomePage;
