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
				<button
					onClick={authenticate}
					className="bg-white border-4 border-fuchsia-200 shadow-4xl rounded-lg py-3 px-6 font-bold text-black text-sm"
				>
					Connect with a wallet
				</button>
			</div>

			<div className="w-full h-screen">
				<Image
					src="/bg.jpg"
					alt=""
					layout="fill"
					objectFit="cover"
				/>
			</div>
		</div>
	);
}

export default Login;
