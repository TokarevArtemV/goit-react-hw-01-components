import css from 'components/FriendList/FriendList.module.css'

export const FriendListItem = ({ id, isOnline=false, avatar, name }) => {
  return (
          <li className={`${css.item}`}>
            <span className={isOnline ? `${css.onlineStyle}` : `${css.offlineStyle}`}></span>
            <img className={`${css.avatar}`} src={avatar} alt={name} width="48" />
            <p className={`${css.name}`}>{name}</p>
          </li>
        )
}

export default FriendListItem
