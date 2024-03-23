import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Htext from "../Shared/Htext";
import { BenefitType, SelectedPage } from "../Shared/types";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "../Shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="w-6 h-6" />,
    title: "State of the Art Facilities",
    description:
      "Victorious play disgust of victorious society noble victorious decrepit deceive reason will. Battle chaos hope horror disgust.",
  },
  {
    icon: <UserGroupIcon className="w-6 h-6" />,
    title: "100's of Diverse Classes",
    description:
      "Victorious play disgust of victorious society noble victorious decrepit deceive reason will. Battle chaos hope horror disgust.",
  },
  {
    icon: <AcademicCapIcon className="w-6 h-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Victorious play disgust of victorious society noble victorious decrepit deceive reason will. Battle chaos hope horror disgust.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="w-5/6 min-h-full py-24 mx-auto ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>MORE THAN JUST A GYM.</Htext>
          <p className="my-5 text-sm md:text-lg">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="items-center justify-between gap-8 mt-5 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Graphics And Description */}
        <div className="items-center justify-between gap-20 mt-16 md:mt-28 md:flex">
          {/* Graphic */}
          <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits" />

          {/* Description */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Htext>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </Htext>
                </motion.div>
              </div>
            </div>
            {/* Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Prejudice right virtues eternal-return grandeur pious evil.
                Aversion horror war christian insofar morality endless virtues
                endless mountains derive. Oneself madness god chaos virtues
                ideal victorious aversion. Decrepit merciful hatred deceive
                faith. Burying against oneself reason disgust will christianity
                insofar grandeur salvation.
              </p>
              <p className="mb-5">
                Play joy will hope marvelous hatred. Overcome virtues joy love
                insofar philosophy strong madness ascetic. Eternal-return
                marvelous against pious contradict ascetic prejudice against
                grandeur deceive dead holiest pious. Revaluation intentions
                battle snare joy god god right ultimate. Truth reason gains law
                selfish christianity aversion mountains will intentions will
                society.
              </p>
            </motion.div>
            {/* Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
