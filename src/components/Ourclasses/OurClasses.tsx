import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";

import Class from "./Class";
import { ClassType, SelectedPage } from "../Shared/types";
import Htext from "../Shared/Htext";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Snare play truth reason morality truth superiority will good love. Hope noble burying depths grandeur gains insofar. Virtues selfish superiority free aversion insofar pinnacle good pious joy ubermensch. Gains hatred spirit enlightenment ultimate justice. Deceptions ocean joy intentions christianity reason convictions.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Snare play truth reason morality truth superiority will good love. Hope noble burying depths grandeur gains insofar. Virtues selfish superiority free aversion insofar pinnacle good pious joy ubermensch. Gains hatred spirit enlightenment ultimate justice. Deceptions ocean joy intentions christianity reason convictions.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Snare play truth reason morality truth superiority will good love. Hope noble burying depths grandeur gains insofar. Virtues selfish superiority free aversion insofar pinnacle good pious joy ubermensch. Gains hatred spirit enlightenment ultimate justice. Deceptions ocean joy intentions christianity reason convictions.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Snare play truth reason morality truth superiority will good love. Hope noble burying depths grandeur gains insofar. Virtues selfish superiority free aversion insofar pinnacle good pious joy ubermensch. Gains hatred spirit enlightenment ultimate justice. Deceptions ocean joy intentions christianity reason convictions.",
    image: image6,
  },
];

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
              Madness war depths convictions christian justice ultimate faith
              convictions self depths. Superiority self prejudice society
              zarathustra oneself battle eternal-return deceptions society.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
