import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen bg-slate-200 flex-col items-center justify-between p-24">
			<div>
				<h1 className="mb-2 text-2xl text-black font-bold font-serif">
					Learning NextJs with Hitesh Choudhary Playlist
				</h1>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PLRAV69dS1uWR7KF-zV6YPYtKYEHENETyE"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			</div>
      <div className="flex flex-row items-center">
      <Link href={"/signup"} className="btn bg-black border rounded-lg p-2 text-xl text-white">Go to Signup Page</Link>
      <Link href={"/login"} className="btn bg-black border rounded-lg px-4 py-2 text-xl text-orange-400">Go to Login Page</Link>
      </div>
		</main>
	);
}
