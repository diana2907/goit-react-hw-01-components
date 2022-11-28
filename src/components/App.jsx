import {Profile} from 'components/Profile/Profile'
import {StatisticsList} from 'components/Statistics/StatisticsList'
import { FriendList } from 'components/FriendList/FriendList'
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory'
import user from 'Data/user.json'
import data from 'Data/data.json'
import friends from 'Data/friends.json'
import transactions from 'Data/transactions.json'

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
