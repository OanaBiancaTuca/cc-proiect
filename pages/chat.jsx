import React from 'react';
import ChatComponent from '@/js/components/ChatComponent.jsx';
import NavBar from "@/js/components/NavBar";


const ChatPage = () => {
	return (
		<div>
			<NavBar/>
			<ChatComponent />
		</div>
	);
};

export default ChatPage;