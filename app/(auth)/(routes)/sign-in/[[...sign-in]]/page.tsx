import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div className="bg-red-500">
      <UserButton />
    </div>
  )
}