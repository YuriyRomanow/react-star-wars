import PropTypes from 'prop-types';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> origin/feature

import styles from './PeopleList.module.css';

const PeopleList = ({ people }) => {
    return (
        <ul className={styles.list__container}>
            {people.map(({ id, name, img }) => 
                <li className={styles.list__item} key={id}>
<<<<<<< HEAD
                    <Link to={`/people/${id}`}>
                        <img className={styles.person__photo} src={img} alt={name} />
                        <p>{name}</p>
                    </Link>
=======
                    <a href="#">
                        <img className={styles.person__photo} src={img} alt={name} />
                        <p>{name}</p>
                    </a>
>>>>>>> origin/feature
                </li>
            )}
        </ul> 
    )
}

PeopleList.propTypes = {
    people: PropTypes.array
}

export default PeopleList;
