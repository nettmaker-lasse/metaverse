import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import TimeAgo from "timeago-react";

function Message({ message }) {
	const { user } = useMoralis();

	const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

	return (
		<div
			className={`flex items-end space-x-2 relative ${
				isUserMessage && "justify-end"
			}`}
		>
			<div className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`}>
				<Avatar username={message.get("username")} />
			</div>
			<div
				className={`flex space-x-4 p-3 rounded-lg ${
					isUserMessage
						? "rounded-br-none text-black bg-white"
						: "rounded-bl-none text-white bg-blue-700"
				}`}
			>
				<p>{message.get("message")}</p>
			</div>

			{/* Timestamp */}
			<TimeAgo 
			className={`mb-4 text-[10px] italic text-white ${isUserMessage && 'order-first pr-1'}`}
			datetime={message.createdAt}
			/>

			<p
				className={`absolute -bottom-6 text-xs ${
					isUserMessage ? "text-white" : "text-white"
				}`}
			>
				{message.get("username")}
			</p>
		</div>
	);
}

export default Message;
