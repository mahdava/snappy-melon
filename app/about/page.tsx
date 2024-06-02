import HeaderTitle from "@/components/heading";
import Menu from "@/components/menu";

export default function AboutPage() {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <section className="p-4">
          <HeaderTitle
            title="Lorem ipsum"
            description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            className="fixed right-0 top-24"
          />
        </section>
      </main>
    </>
  );
}
