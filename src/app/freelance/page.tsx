import Image from "next/image";
import CartIcon from "./components/cart";
import BrowserIcon from "./components/browser";
import AppsIcon from "./components/apps";
import InternetIcon from "./components/internet";
import AppleIcon from "./components/apple";

const FreelancePage = () => {
  return ( 
    <div className="bg-white h-full w-screen text-black p-10">
      <div className="grid auto-rows-[210px] grid-cols-3 gap-4">
        <div className="shadow row-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-8 col-span-1">
          <article className="flex flex-col gap-2 h-full justify-between">
            <div>
              <header>
                <h3 className="text-3xl font-extrabold">Tiendas en línea</h3>
                <h4 className="text-3xl font-extrabold">(E-commerce)</h4>
              </header>
              <p className="text-lg">Creo tiendas en línea personalizadas para vender tus productos y servicios de manera efectiva.</p>
            </div>
            <figure>
              <CartIcon />
              {/* <Image width={200} height={200} src="/images/freelance/ecommerce.webp" alt="ecommerce" /> */}
            </figure>
          </article>
        </div>
        <div className="shadow row-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-8 col-span-1">
          <article className="flex flex-col gap-2 justify-between h-full">
            <div>
              <header>
                <h3 className="text-3xl font-extrabold">SEO</h3>
              </header>
              <p className="text-lg">Optimizo tu sitio web para que aparezca en los primeros resultados de búsqueda y atraiga más tráfico orgánico.</p>
            </div>
            <figure>
              {/* <Image src="/images/freelance/seo.png" alt="ecommerce" width={180} height={180} /> */}
              <BrowserIcon />
            </figure>
          </article>
        </div>
        <div className="shadow row-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-8 col-span-1">
          <article className="flex flex-col h-full gap-10 justify-between">
            <div>
              <header>
                <h3 className="text-3xl font-extrabold">Desarrollo de Aplicaciones Web</h3>
              </header>
              <p>Diseño y desarrollo de aplicaciones web intuitivas y fáciles de usar que potencien tu negocio.</p>
            </div>
            <figure>
              {/* <Image fill src="/images/freelance/responsive-design.png" alt="responsive" /> */}
              <AppsIcon />
            </figure>
          </article>
        </div>

        <div className="shadow row-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-8 col-span-1">
          <article className="flex flex-col h-full gap-10 justify-between">
            <div>
              <header>
                <h3 className="text-3xl font-extrabold">Desarrollo de Sitios Web a Medida</h3>
              </header>
              <p>Creo sitios web personalizados que se ajustan a tus necesidades y reflejan la esencia de tu marca o proyecto.</p>
            </div>
            <figure>
              {/* <Image fill src="/images/freelance/responsive-design.png" alt="responsive" /> */}
              <InternetIcon />
            </figure>
          </article>
        </div>
        <div className="shadow relative row-span-1 rounded-xl border-2 border-slate-400/10 bg-black p-8 col-span-1">
          <Image src="/logosa.svg" className="p-1" fill alt="logo" />
        </div>
        <div className="shadow row-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-8 col-span-1">
          <article className="flex flex-col h-full gap-10 justify-between">
            <div>
              <header>
                <h3 className="text-3xl font-extrabold">Aplicaciones Móviles</h3>
                <h4 className="text-3xl font-extrabold">(iOS y Android)</h4>
              </header>
              <p>Creo aplicaciones móviles nativas y multiplataforma que te ayudan a llegar a una audiencia más amplia.</p>
            </div>
            <figure>
              {/* <Image fill src="/images/freelance/responsive-design.png" alt="responsive" /> */}
              <AppleIcon />
            </figure>
          </article>
        </div>
        <div className="shadow row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-8 col-span-1">
          <article className="text-center flex flex-col gap-3">
            <header>
              <h4 className="text-2xl">321-389-1059</h4>
              <h4 className="text-2xl">contact@sergioalcala.dev</h4>
            </header>
            <p>
              ¡Hablemos! Envíame un mensaje para discutir tu proyecto y obtener un presupuesto personalizado. Estoy aquí para hacer que tu presencia en línea sea un éxito.
            </p>
          </article>
        </div>

      </div>
    </div>
  );
}
 
export default FreelancePage;

/*
ecommerce SEOO SEOO webapps
ecommerce LOGO LOGO webapps
sitiosweb LOGO LOGO otro
sitiosweb XXXZ XXXZ otro



*/