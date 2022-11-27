import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css'
import { Statistic } from './Statistic';

export const StatisticsList = ({statistics, title}) => {
return <section className={css.statistics}>
<h2 className={css.title}>{title}</h2>

<ul className={css.list}>
{statistics.map(statistic => (
    <li className={css.item} key={statistic.id}>
   <Statistic  statistic={statistic}/>
    </li>
))}
 </ul>
</section>
}

StatisticsList.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(PropTypes.object)

}