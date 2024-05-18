import Button from "../UI/Button";

const MainHeader = () => {
  const isCurrentPage = (path: string) => path === location.pathname ? true : false;

  return (
    <header id="main-header">
      <h1>ReactMentoring</h1>
      <nav>
        <ul>
          <li><a href="/" className={isCurrentPage('/') ? 'active' : ''}>Our Mission</a></li>
          <li><a href="/sessions" className={isCurrentPage('/sessions') ? 'active' : ''}>Browse Sessions</a></li>
          <li><Button>Upcoming Sessions</Button></li>
        </ul>
      </nav>
    </header>
  )
};

export default MainHeader;
