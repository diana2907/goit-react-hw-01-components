import css from './FriendListItem.module.css';


export function FriendListItem ({friend: {isOnline, avatar, name}}) {
  let statusO = null;
  isOnline ? statusO = "online" : statusO = "offline"
  
return    <>  
<div className={`${css.status} ${css[statusO]}`}></div>
<img className={css.avatar} src={avatar} alt="User avatar" width="48" />
<p className={css.name}>{name}</p>
</> }
