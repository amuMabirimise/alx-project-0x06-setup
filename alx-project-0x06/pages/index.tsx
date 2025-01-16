import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Button from "@/components/common/Button";
import { useRouter } from "next/router";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface PageRouteProps {
  pageRoute: string;
}

export default function Home() {
  const router = useRouter();

  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false });
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to Splash App!
        </h1>
        <p className="text-lg text-gray-600">
          Your one-stop platform for everything AI you need. Start exploring by
          navigating to our features below.
        </p>
        <div className="flex gap-6">
          <Button
            action={() => routeToNextPage({ pageRoute: "/generate-text-ai" })}
            buttonLabel="Generate Text"
            buttonBackgroundColor="blue"
          />
          <Button
            action={() => routeToNextPage({ pageRoute: "/text-to-image" })}
            buttonLabel="Text to Image"
            buttonBackgroundColor="green"
          />
          <Button
            action={() => routeToNextPage({ pageRoute: "/counter-app" })}
            buttonLabel="Contact us"
            buttonBackgroundColor="orange"
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
