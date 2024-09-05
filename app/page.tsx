import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-background-light grid content-center">
      <div className="mx-auto flex flex-col gap-3">
        <Image
          className="place-self-center"
          src="/SinglishLA.png" // Replace with your actual logo path
          alt="Logo"
          width={500}
          height={30}
          priority
        />

        <Link
          className="w-full p-2 place-self-center text-center rounded-xl bg-red"
          href="/login"
        >
          <button>Login</button>
        </Link>

        <Link
          className="w-full p-2 place-self-center text-center rounded-xl bg-red"
          href="/signup"
        >
          <button>Sign Up</button>
        </Link>
      </div>
    </main>
  );
}
