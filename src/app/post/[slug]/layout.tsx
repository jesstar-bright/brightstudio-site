// Strips the marketing site's grain + chrome. Centers the post for easy
// screenshotting at native 1080x1350.

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-200 grid place-items-center p-6">
      {children}
    </div>
  );
}
