import {useState} from 'react';
import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

// dark-mode start
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/themes.js";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const App = () => {
	const [theme, setTheme] = useState("light");
	const themeToggler = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	  };

    if(!localStorage.getItem('username')) return <LoginForm />

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<GlobalStyles />
			<StyledApp>
        		<button onClick={() => themeToggler()}>Change Theme</button>
     		 
		<ChatEngine
			height='100vh'
			userName='jose'
			userSecret='123123'
			projectID='fdeff685-b143-4839-80e8-f4667642893b'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
		/>

 			</StyledApp>
		</ThemeProvider>
	);
}

export default App;