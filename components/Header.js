import Image from "next/image";
import { useMoralis } from "react-moralis"
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";

function Header() {
	const { user } = useMoralis();

	return (
		<div className="text-black sticky top-0 p-5 z-50 bg-white shadow-sm border-b-4 border-pink-400">
			<div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
				<div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
					<Image 
					src="/me.jpg"
					layout="fill"
					className="rounded-full object-cover"
					alt=""
					/>
				</div>

				<div className="col-span-4 text-left lg:text-center">
					{/* Avatar */}
					<div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
						<Avatar logoutOnPress />
					</div>

					{/* Welcome Message */}
					<h1 className="text-3xl">Welcome to the metaverse</h1>

					{/* User name  */}
					<h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
					
					{/* Change username component  */}
					<ChangeUserName />
				</div>
			</div>
		</div>
	)
}

export default Header