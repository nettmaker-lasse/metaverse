import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
	const { authenticate } = useMoralis();

	return (
		<div className="relative">
			<div
				className="flex flex-col absolute z-50 h-5/6 
			items-center justify-center w-full space-y-6"
			>
				<Image
					className="object-cover rounded-full"
					src="/me.jpg"
					height={150}
					width={150}
					alt=""
				/>
				<div className="relative group">
					<div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-500 group-hover:duration-500"></div>
					<div className="overflow-hidden w-full h-full relative">
						<button
							onClick={authenticate}
							className="cursor-pointer relative p-4 rounded-lg inline-flex flex-row items-center justify-center text-black bg-white text-lg font-bold space-x-2"
						>
							Connect with a wallet
						</button>
					</div>
				</div>
			</div>

			<div className="backdrop-blur-sm w-full h-screen">
				<Image src="/bg.jpg" alt="" layout="fill" objectFit="cover" />
			</div>
		</div>
	);
}

export default Login;
