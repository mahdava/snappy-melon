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
            description="This HeaderTitle shows how much flexibility you can have while the component itself doesn't have to include natively any 'fixed' position"
            className="fixed right-0 top-24"
          />
        </section>
      </main>
    </>
  );
}
