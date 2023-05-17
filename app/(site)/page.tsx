import Image from "next/image";
import AuthForm from "./components/AuthForm";
export default function Home() {
  return (
    <main className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="pikachu-logo"
          height="100"
          width="100"
          className="mx-auto w-auto"
          src="/images/logo-pika.png"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Leej's Tracking Expenses
        </h2>
      </div>
      <AuthForm />
    </main>
  );
}
