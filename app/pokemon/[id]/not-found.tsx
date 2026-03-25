import Link from "next/link";

export default function NotFound() {
  return (
    <p>
      This pokemon could not be found. <Link href="/">Back</Link>
    </p>
  );
}
