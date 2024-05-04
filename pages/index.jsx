import Hero from "../components/pages/Hero/Hero";
import Text from "../components/pages/Text/Text";
import Elements from "../components/pages/Elements/Elements";
import Work from "../components/pages/Work/Work";
import Work2 from "../components/pages/Works2/index";
import Whyus from "../components/pages/Whyus/index"; 
import Footer from "../components/pages/Footer/Footer"; 
import Accordian from "../components/pages/Accordian/index"; 
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
	return (
		<DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Hero /> 
        <Text/>
        <Elements/>
        <Work/>
        <Work2/>
        <Whyus/>
        <Accordian/>
        <Footer/>
      </section>
		</DefaultLayout>
	);
}
