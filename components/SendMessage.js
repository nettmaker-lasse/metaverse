import { useMoralis } from "react-moralis";
import { useState } from "react";

function SendMessage({endOfMessagesRef}) {
	const { user, Moralis } = useMoralis();
	const [message, setMessage] = useState("");

	const sendMessage = (e) => {
		e.preventDefault();

		if (!message) return;

		const Messages = Moralis.Object.extend("Messages");
		const messages = new Messages();

		messages
			.save({
				message: message,
				username: user.getUsername(),
				ethAddress: user.get("ethAddress"),
			})
			.then(
				(message) => {
					// Object saved
				},
				(error) => {
					// The save failed
					console.log(error.message);
				}
			);

			endOfMessagesRef.current.scrollIntoView({behavior: "smooth"})

			setMessage("");
	};

	return (
		<form className="flex w-11/12 fixed bottom-10 bg-white px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-600">
			<input
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				type="text"
				className="flex-grow outline-none bg-transparent text-black placeholder-gray-500 pr-5"
				placeholder={`Enter a Message ${user.getUsername()}...`}
			/>
			<button onClick={sendMessage} className="font-bold text-black">
				Send
			</button>
		</form>
	);
}

export default SendMessage;
