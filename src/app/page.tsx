import Link from "next/link";
import {Link as LinkIcon} from "lucide-react"

export default function Home() {
  return (
    <div className="mt-64">
      <h1 className="text-3xl font-medium italic text-center">Instagram like User Stories</h1>
      
      <div className="flex justify-center gap-6 items-center mt-32">
        <Link href={"/image-and-video-stories"} className="flex gap-3 text-red-500 text-xl hover:text-blue-600">
          <LinkIcon/>
          <span>Go To Image And Video Stories</span>
        </Link>
        <span>|</span>
        <Link href={"/component-stories"} className="flex gap-3 text-red-500 text-xl hover:text-blue-600">
          <LinkIcon/>
          <span>Go To Component Stories</span>
        </Link>
      </div>
    </div>
  );
}
