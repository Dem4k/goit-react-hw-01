import Profile from "./components/Profile/Profile";
import userData from "./data/userData.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./data/friends.json";
import data from "./data/data.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        image={userData.avatar}
        location={userData.location}
        stats={userData.stats}
        tag={userData.tag}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={data} />
    </>
  );
}

export default App;
