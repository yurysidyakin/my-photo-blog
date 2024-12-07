import './App.css';
import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import MainLayout from './layout/MainLayout/MainLayout';

function App() {
	return (
		<>
			<Header>
				<Logo />
				<Menu />
			</Header>
			<MainLayout />
		</>
	);
}

export default App;
