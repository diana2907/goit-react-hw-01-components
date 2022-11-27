import {Profile} from 'components/Profile/Profile'
import {StatisticsList} from 'components/Statistics/StatisticsList'
import { FriendList } from 'components/FriendList/FriendList'
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory'
import user from 'user.json'
import data from 'data.json'
import friends from 'friends.json'
import transactions from 'transactions.json'

export const App = () => {
  return (
    <>
<Profile profile ={user}/>
<StatisticsList title="Upload stats" statistics={data} />
<FriendList friends={friends} />
<TransactionHistory transactions={transactions} />
   </>
  );
};
