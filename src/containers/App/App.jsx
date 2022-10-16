import { BrowserRouter, Route } from 'react-router-dom';
import routesConfig from '@routes/routesConfig';
import Header from '@components/Header';

import styles from './App.module.css';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<div className={styles.wrapper}>
					<Header />


						{routesConfig.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								component={route.component}
							/>
						))}
				</div>
			</BrowserRouter>
		</>
	)
}

export default App;
