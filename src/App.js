import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

	return (
		<ChatEngine
			height='100vh'
			userName='jose'
			userSecret='123123'
			projectID='fdeff685-b143-4839-80e8-f4667642893b'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
		/>
	);
}

export default App;