"use client";
import { useRouter } from "next/navigation";
import { Typography } from "../Typography/Typography";

export function BackButton({
  className,
}: React.PropsWithChildren<{
  className?: string;
}>) {
  const router = useRouter();
  return (
    <a className={className} onClick={() => router.back()}>
      <Typography variant="small-paragraph" link>
        Previous page
      </Typography>
    </a>
  );
}
