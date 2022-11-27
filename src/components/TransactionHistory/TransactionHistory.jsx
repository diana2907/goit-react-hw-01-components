import { Transaction } from "components/Transaction/Transaction";
import css from 'components/TransactionHistory/TransactionHistory.module.css'


export const TransactionHistory =  ({transactions}) => {
return <table className={css.history}>
  <thead className={css.head}>
    <tr className={css.string}>
      <th className={css.cell}>Type</th>
      <th className={css.cell}>Amount</th>
      <th className={css.cell}>Currency</th>
    </tr>
  </thead>
  <tbody>
  {
    transactions.map(transaction => (
    <tr className={css.string} key={transaction.id}>
        < Transaction transaction={transaction}/>
    </tr>
    ))
  }
   </tbody>
</table>
}