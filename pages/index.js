import Spinner from "./spinner";
import { useState } from "react";

export default function Home() {
	const [time, setTime] = useState(5);
	//make time countdown once per second until 0
	setInterval(() => {
		if (time > 0) {
			setTime(time - 1);
		}
	}, 1000);

	if (time=== 0) {

	window.location.href = 'http://www.trufflie.com';

	}
	return (
		<div className="flex flex-col  absolute  h-screen w-screen mt-[30vh]">
			<h1 className="text-3xl font-bold text-center"> This page has moved! </h1>
			<div className="justify-center block top-0 ml-auto mr-auto">
				<Spinner />
			</div>
			<div className="flex-col">
				<p className="text-lg text-center ">
					You can find the new location at{" "}
					<a href="trufflie.com">Trufflie.com</a>
				</p>
				<div>
					<p className="text-lg text-center"> you will be automatically redirected in {time} seconds.</p>
				</div>
			</div>
		</div>
	);
}
