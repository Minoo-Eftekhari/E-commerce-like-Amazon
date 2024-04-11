export default function FrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="felx-grow container mx-auto px-4">{children}</main>;
}
