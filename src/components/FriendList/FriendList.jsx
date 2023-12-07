import FriendListItem from './FriendListItem'
import css from '../FriendList/FriendList.module.css'

export const FriendList = ({ friends }) => {
  return(
  <ul className={`${css.section}`}>
      {friends.map(({ id, isOnline, name, avatar }) => {
        return < FriendListItem
          key={id}
          id={id}
          isOnline={isOnline}
          name={name}
          avatar={avatar}/>
      })}
  </ul>
  );
}
