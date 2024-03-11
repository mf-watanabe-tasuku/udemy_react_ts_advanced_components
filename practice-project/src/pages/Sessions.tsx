import { SESSIONS } from '../dummy-sessions.ts'; // normally, we would probably load that from a server
import MainHeader from '../components/Navigation/MainHeader';
import Button from '../components/UI/Button.tsx';

export default function SessionsPage() {
  const camelToDash = (str: string) => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);

  return (
    <>
      <MainHeader />
      <main id="sessions-page">
        <header>
          <h2>Available mentoring sessions</h2>
          <p>
            From an one-on-one introduction to React's basics all the way up to a
            deep dive into state mechanics - we got just the right session for
            you!
          </p>
        </header>
        <ul id="sessions-list">
          {SESSIONS.map(session => {
            return (
              <li key={session.id}>
                <article className='session-item'>
                  <img src={camelToDash(session.image)} alt={session.title} />
                  <div className="session-data">
                    <div>
                      <h3>{session.title}</h3>
                      <p>{session.summary}</p>
                    </div>
                    <p className="actions">
                      <Button to={session.id}>Learn More</Button>
                    </p>
                  </div>
                </article>
              </li>
            );
          })};
        </ul>
      </main>
    </>
  );
}
