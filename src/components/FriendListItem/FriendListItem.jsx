import css from './FriendListItem.module.css';


export function FriendListItem ({friend: {isOnline, avatar, name}}) {
return    <>  
<div className={`${css.status} ${css[isOnline ? "online" : "offline"]}`}></div>
<img className={css.avatar} src={avatar} alt="User avatar" width="48" />
<p className={css.name}>{name}</p>
</> }
