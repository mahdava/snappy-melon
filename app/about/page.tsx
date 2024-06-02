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
            description={
              <>
                <ul>
                  <li>
                    This HeaderTitle shows how much flexibility you can have
                  </li>
                  <li>
                    while the component itself doesn&apos;t have to include
                    natively any &apos;fixed&apos; position
                  </li>
                </ul>
              </>
            }
            className="fixed right-0 top-24"
          />
        </section>
      </main>
    </>
  );
}
