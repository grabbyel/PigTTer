import SidebarComponent from "./SidebarComponent";
import FeedComponent from "./FeedComponent";

const PigtterComponent = ({ tweets, user, setUser, setTweets, users }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-5 col-4">
          <SidebarComponent
            user={user}
            setUser={setUser}
            tweets={tweets}
            setTweets={setTweets}
          />
        </div>
        <div className="col-md-8 col-sm-7 col-8">
          <FeedComponent tweets={tweets} setTweets={setTweets} users={users} user={user} setUser={setUser} />
        </div>
      </div>
    </div>
  );
};

export default PigtterComponent;
