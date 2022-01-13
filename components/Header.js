import Image from "next/image";
import { useMoralis } from "react-moralis"
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";

function Header() {
	const { user } = useMoralis();

	return (
		<div className="text-white sticky top-0 p-5 z-50 bg-[#591BC5] shadow-sm border-b-4 border-[#FC415A]">
			<div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
				<div className="relative h-24 w-24 mx-auto hidden lg:inline-grid lg:top">
					{/* <Image 
					src="/me.jpg"
					layout="fill"
					className="rounded-full object-cover"
					alt=""
					/> */}
				</div>

				<div className="col-span-4 text-left lg:text-center">
					{/* Avatar */}
					<div className="relative h-32 w-32 mb-12 lg:mx-auto border-[#FC415A] border-8 rounded-full">
						<Avatar logoutOnPress />
					</div>

					{/* Welcome Message */}
					<h1 className="text-xl mb-4">Welcome to the metaverse</h1>

					{/* User name  */}
					<h2 className="text-4xl font-bold uppercase truncate">{user.getUsername()}</h2>
					
					{/* Change username component  */}
					<ChangeUserName />
				</div>
			</div>
		</div>
	)
}

export default Header
