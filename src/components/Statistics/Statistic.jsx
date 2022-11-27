import css from 'components/Statistics/Statistics.module.css'


export const Statistic = ({statistic: {label, percentage}}) => {
    return <> <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}%</span>
    </>
}