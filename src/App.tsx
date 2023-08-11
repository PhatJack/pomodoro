import Navbar from './components/Navbar';
import Tags from './components/Tags';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import { useThemeContext } from './hooks/useThemeContext';
import Background from './components/Background';

function App() {
	const [state, dispatch] = useThemeContext();
	console.log(state, dispatch)
	// Provide a default value for state.mainBg if it's null
	return (
		<div className='relative bg-black'>
			<Background />
			<div className="absolute flex flex-col justify-between items-center h-screen py-16 w-full bg-black/20">
				<Navbar />
				<Tags />
				<Footer />
			</div>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</div>
	);
}

export default App;
