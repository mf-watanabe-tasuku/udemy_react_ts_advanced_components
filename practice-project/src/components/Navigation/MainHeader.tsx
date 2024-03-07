import Button from "../UI/Button";

const MainHeader = () => {
  return (
    <header id="main-header">
      <h1>ReactMentoring</h1>
      <nav>
        <ul>
          <li><a href="/" className="active">Our Mission</a></li>
          <li><a href="/sessions" className="">Browse Sessions</a></li>
          <li><Button>Upcoming Sessions</Button></li>
        </ul>
      </nav>
    </header>
  )
};

export default MainHeader;
