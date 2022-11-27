import { FriendListItem } from "components/FriendListItem/FriendListItem"
import css from 'components/FriendListItem/FriendListItem.module.css';

export const FriendList = ({friends}) => {
  return (
      <ul className={css.list}>
      {
        friends.map(friend => (
          <li className={css.item} key={friend.id}>
            <FriendListItem friend={friend}/>
          </li>)
        )
      }
    </ul>
  )
}

