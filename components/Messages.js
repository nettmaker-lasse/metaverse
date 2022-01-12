import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";
import Message from "./Message";
import { useRef } from "react";

const MINS_DURATION = 15;

function Messages() {
	const { user } = useMoralis();
	const endOfMessagesRef = useRef(null);

	const { data, loading, error } = useMoralisQuery(
		"Messages",
		(query) =>
			query
				.ascending("createdAt")
				.greaterThan(
					"createdAt",
					new Date(Date.now() - 1000 * 60 * MINS_DURATION)
				),
		[],
		{
			live: true,
		}
	);

	return (
		<div className="pb-56">
			<div className="my-10">
				<ByMoralis
					variant="dark"
					style={{ marginLeft: "auto", marginRight: "auto" }}
				/>
			</div>

			<div className="space-y-10 p-4">
				{/* Each messages  */}
				{data.map(message => (
					<Message key={message.id} message={message} />
				))}
			</div>

			<div className="flex justify-center">
				{/* Send message */}
				<SendMessage endOfMessagesRef={endOfMessagesRef} />
			</div>

			<div ref={endOfMessagesRef} className="text-center text-black mt-5">
				<p>You`re up to date {user.getUsername()}! 🎉</p>
			</div>
		</div>
	);
}

export default Messages;
