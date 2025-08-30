
import { useProductStore } from "../store/useProductStore.js";

import { useEffect } from "react";
import Slider from "../pages/Slider/Slider.jsx";
import Footer from "./Footer/Footer.jsx";
import CategoryCard from "../components/CategoryCard.jsx";


function HomePage() {
  const { fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div >
      <div className="mt-14 ">
        <h1 className='mb-5 text-center font-semibold text-5xl  font-mono tracking-widest 
                  bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>WELCOME TO SMART AGRO HUB</h1>

        <h1 className='text-center font-semibold text-5xl mb-7 font-mono tracking-widest 
                  bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>SEE SOME PRODUCTS</h1>
      </div>
      <Slider />
      <h1 className='text-center font-semibold text-5xl  font-mono tracking-widest 
                  bg-clip-text text-transparent bg-gradient-to-r from-primary mb-10 to-secondary'>ALL CATEGORY OF PRODUCTS HERE</h1>
      <CategoryCard></CategoryCard>
      {/* ---------------------------------FAQ-------------------- */}
      <div>
        <h1 className='text-center font-semibold text-5xl mb-10 mt-32 font-mono tracking-widest 
                  bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>SOME FREQUENTLY ASKED QUESTION</h1>
      </div>
      <br />
      <div className="join join-vertical ml-[140px] mb-20  w-[1200px] ">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How can I make online payments ?
          </div>
          <div className="collapse-content text-sky-500 text-xl">
            <p>HealthHaven provide all kinds of online payment option such as - Stripe , Visa Debit or MasterCard Debit and more. Also HealthHaven have a self HealthHaven wallet. Our all online payment option is 100% secure.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What is the refund policy? ?
          </div>
          <div className="collapse-content">
            <p className='text-sky-500 text-xl'>Refund Policy is the agreement where you inform customers about your policies regarding returns and refunds. HealthHaven have refund policy. </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Is it possible to have my order delivered faster?
          </div>
          <div className="collapse-content">
            <p className='text-sky-500 text-xl'>We have urgent delivery options if you are wise. Some fees may apply. Please contact us.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Can I have my order delivered outside Bangladesh?
          </div>
          <div className="collapse-content">
            <p className='text-sky-500 text-xl'>For legal reasons, we cannot receive any orders outside Bangladesh. If you are on vacation and need a refill, please contact us at - 09610-00-11-22.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Are there any hidden charges?
          </div>
          <div className="collapse-content">
            <p className='text-sky-500 text-xl'> No, there are no hidden charges for any activity you are engaged with HealthHaven. We always follow an honest and transparent business policy.</p>
          </div>
        </div>
      </div>


      <Footer></Footer>
    </div>
  );
}
export default HomePage;
