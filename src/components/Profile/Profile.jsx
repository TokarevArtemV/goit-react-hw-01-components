import css from 'components/Profile/Profile.module.css'

export const Profile = ({ avatar, tag, username, location, stats: { followers, views, likes } }) => {
  return (
    <div className={`${css.profile}`}>
        <div className={`${css.description}`}>
            <div className={`${css.profileImg}`}>
              <img
              src={avatar}
              alt={tag}
              className={`${css.avatar}`}
              />
            </div >
            <p className={`${css.name}`}>{username}</p>
            <p className={`${css.tag}`}>{tag}</p>
            <p className={`${css.location}`}>{location}</p>
        </div>

        <ul className={`${css.stats}`}>
            <li className={`${css.item}`}>
            <span className={`${css.label}`}>Followers</span>
            <span className={`${css.quantity}`}>{followers}</span>
            </li>
            <li className={`${css.item}`}>
            <span className={`${css.label}`}>Views</span>
            <span className={`${css.quantity}`}>{views}</span>
            </li>
            <li className={`${css.item}`}>
            <span className={`${css.label}`}>Likes</span>
            <span className={`${css.quantity}`}>{likes}</span>
            </li>
        </ul>
    </div>
  )
}
