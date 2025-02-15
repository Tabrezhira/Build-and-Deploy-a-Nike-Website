import { Hero,
  Footer,
  Offers,
  Products,
  Quality,
  Reviews,
  Services,
  Subscribe} from './sections/index'
  import Nav from './components/Nav'

const App = () => (
  <main className=" relative">
    <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding ">
    <Products/>
    </section>
    <section className="padding ">
      <Quality/>
    </section>
    <section className="padding-x py-10 ">
      <Services/>
    </section>
    <section className="padding ">
        <Offers/>
    </section>
    <section className="bg-pale-blue padding ">
        <Reviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full ">
         <Subscribe/>
    </section>
    <section className="padding-x padding-t bg-black pb-8">
     <Footer/>
    </section>
  </main>
)

export default App