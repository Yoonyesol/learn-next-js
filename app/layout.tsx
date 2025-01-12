import "@/app/ui/global.css"
import { inter } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiased: 글꼴을 부드럽게 만드는 클래스 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
