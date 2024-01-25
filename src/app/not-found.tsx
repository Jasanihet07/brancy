import { Metadata } from "next"
import Link from "next/link"
import LeftArrow from "@/public/icons/left-arrow.svg"

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
}

export default function NotFound() {
  return (
    <div className="bg-green min-h-[calc(100vh-64px)] text-white flex flex-col items-center justify-center">
      <h1 className="text-2xl-semi text-gry-900">
        <span className="font-bold text-yellow">404</span> Page not found
      </h1>
      <p className="text-small-regular text-gray-700">
        The page you tried to access does not exist.
      </p>
      <Link
        href="/"
        className="group mt-4 text-yellow flex gap-2 items-center text-base-regular text-gray-900"
      >
        <span className="group-hover:-translate-x-1 duration-300">
          <LeftArrow className="w-6 aspect-square" />
        </span>
        <span className="underline">Go to frontpage</span>
      </Link>
    </div>
  )
}
