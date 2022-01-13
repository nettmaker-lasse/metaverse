import { useMoralis } from "react-moralis";

function ChangeUserName() {
	const { setUserData, isUserUpdating, userError, user } = useMoralis();
	const setUserName = () => {
		const username = prompt(
			`Enter your new Username (current: ${user.getUsername()})`
		);

		if (!username) return;

		setUserData({
			username,
		})
	};

	return (
		<div className="text-sm absolute text-white p-4 top-0 right-0">
			<button
				disabled={isUserUpdating}
				onClick={setUserName}
				className="hover:text-[#FC415A] underline"
			>
				Change your Username
			</button>
		</div>
	);
}

export default ChangeUserName;
