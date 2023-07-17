import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';
import { RGBAFormat } from 'three';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./k-logo.png'
              alt="logo"
              className="w-50 h-12 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text" style={{ color: '#2f455c' }}>
                HAYAL <br className="xl:block hidden" /> ET.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base" style={{ color: '#2f455c' }}>
              Yepyeni 3D özelleştirme aracımızla benzersiz ve özel bir tişört oluşturun. <strong>Generative AI</strong>{" "} aracımız sayesinde hayalinizdeki deseni yazın veya cihazınızdan bir desen resmi yükleyin. Saniyeler içinde sonucu görün!
              </p>

              <CustomButton 
                type="filled"
                title="Şimdi Başla"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home