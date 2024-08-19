import { MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUserName = localStorage.getItem("username");
    if (storedUserName) {
      setUserName(storedUserName);
      console.log({ localStorage });
    }
  }, []);

  const handleSignOut = (event: MouseEvent<HTMLButtonElement>) => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("username");
    router.push("/login");
  };

  return (
    <nav className="px-4 py-3 bg-blue-50 h-[10vh] flex items-center justify-between">
      {/* <h3 className="font-bold text-xl">Hi-Fi Inc. - Welcome {userName}</h3> */}
      <button
        className="px-4 py-2 bg-red-500 text-red-50 rounded-md"
        onClick={handleSignOut}>
        Sign Out
      </button>
    </nav>
  );
}
