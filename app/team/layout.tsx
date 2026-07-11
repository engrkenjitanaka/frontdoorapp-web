import { TeamHeader } from "@/components/team/TeamHeader";
import { Footer } from "@/components/Footer";

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TeamHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}
