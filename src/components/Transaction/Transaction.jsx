import css from 'components/TransactionHistory/TransactionHistory.module.css'

export const Transaction = ({transaction: {type, amount, currency}}) => {
    return (
        <>
    <td className={css.cell}>{type}</td>
    <td className={css.cell}>{amount}</td>
    <td className={css.cell}>{currency}</td>
       </>
    )
}