import FriendListItem from "../FriendListItem/FriendListItem";
export default function FriendList({ friends }) {
  return (
    <>
      <ul>
        {friends.map((friend) => {
          return (
            <li key={friend.id}>
              <FriendListItem
                name={friend.name}
                avatar={friend.avatar}
                isOnline={friend.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
