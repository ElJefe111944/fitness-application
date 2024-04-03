import { SelectedPage, ClassType } from "@/shared/types";
import { motion } from "framer-motion";
import HeadingText from "@/shared/HeadingText";
import Class from "./Class";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";


const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "Consequatur officiis molestiae quae, suscipit optio quia accusantium officia ab rerum obcaecati et.",
    image: image1,
  },
  {
    name: "Ab Core Classes",
    description: "Consequatur officiis molestiae quae, suscipit optio quia accusantium officia ab rerum obcaecati et.",
    image: image2,
  },
  {
    name: "Yoga Classes",
    description: "Consequatur officiis molestiae quae, suscipit optio quia accusantium officia ab rerum obcaecati et.",
    image: image3,
  },
  {
    name: "Adventure Classes",
   
    image: image4,
  },
  {
    name: "Fitness Classes",
    description: "Consequatur officiis molestiae quae, suscipit optio quia accusantium officia ab rerum obcaecati et.",
    image: image5,
  },
  {
    name: "Training Classes",
    
    image: image6,
  }
]


interface Props {
    setSelectedPage: (value: SelectedPage) => void;
}

function Classes({ setSelectedPage }: Props) {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
          }}
        >
          <div className="md:w-3/5">
            <HeadingText>OUR CLASSES</HeadingText>
            <p className="py-5">Consequatur officiis molestiae quae, suscipit optio quia accusantium officia ab rerum obcaecati et. Molestias tempora eligendi explicabo dolorem. Quos quaerat repudiandae amet!</p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap flex">
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
  )
}

export default Classes