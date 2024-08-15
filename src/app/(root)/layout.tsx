import Bottombar from '@/components/Shared/Bottombar';
import Leftbar from '@/components/Shared/Leftbar';
import Rightbar from '@/components/Shared/Rightbar';
import Topbar from '@/components/Shared/Topbar';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Topbar />
      <main className="flex flex-row">
        <Leftbar />
        <section className="main-container">
          <div className="w-full max-w-4xl">{children}</div>
        </section>
        <Rightbar />
      </main>
      <Bottombar />
    </div>
  );
}
