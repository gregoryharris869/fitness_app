import { SelectedPage } from "../Shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Htext from "../Shared/Htext";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full py-40 bg-primary-100">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="w-5/6 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Htext>OUR CLASSES</Htext>
            <p className="py-5">
              Contradict reason holiest chaos intentions burying good faithful
              right joy. Deceptions decrepit transpilation joy pinnacle strong.
              Marvelous salvation will truth ubermensch fearful moral mountains
              philosophy chaos will. Ascetic truth morality virtues noble.
              Ascetic justice war superiority insofar free hope. Burying
              philosophy ultimate god will. Eternal-return god faithful law
              salvation morality philosophy ultimate merciful self will holiest
              endless.
            </p>
          </div>
        </motion.div>
        <div></div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
