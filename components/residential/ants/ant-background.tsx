'use client'

import { motion } from '@/components/module/framer-motion'
export const mobileAntBackground = () => {
  const mobileAntsData = [
    {
      di: 1,
      imgUlr: '/assets/residential/icons/ants/ant1.png',
      description: "ant icon",
      top: '20%',
      left: '5%',
      scale: 0.8,
    },
    {
      di: 2,
      imgUlr: '/assets/residential/icons/ants/ant2.png',
      description: "ant icon",
      top: '47%',
      left: '4%',
      scale: 0.8,
    },
    {
      di: 3,
      imgUlr: '/assets/residential/icons/ants/ant3.png',
      description: "ant icon",
      top: '85%',
      left: '8%',
      scale: 1.2,
    },
    {
      di: 4,
      imgUlr: '/assets/residential/icons/ants/ant4.png',
      description: "ant icon",
      top: '85%',
      left: '24%',
      scale: 0.7,
    },
    {
      di: 5,
      imgUlr: '/assets/residential/icons/ants/ant5.png',
      description: "ant icon",
      top: '60%',
      left: '20%',
      scale: 1.1,
    },
    {
      di: 6,
      imgUlr: '/assets/residential/icons/ants/ant6.png',
      description: "ant icon",
      top: '90%',
      left: '50%',
      scale: 1.3,
    },
    {
      di: 7,
      imgUlr: '/assets/residential/icons/ants/ant7.png',
      description: "ant icon",
      top: '87%',
      left: '68%',
      width: 55,
      scale: 1.3,
    },
    {
      di: 8,
      imgUlr: '/assets/residential/icons/ants/ant8.png',
      description: "ant icon",
      top: '85%',
      left: '85%',
      scale: 1.3,
    },
    {
      di: 9,
      imgUlr: '/assets/residential/icons/ants/ant9.png',
      description: "ant icon",
      top: '47%',
      left: '80%',
      scale: 0.8,
    },
    {
      di: 10,
      imgUlr: '/assets/residential/icons/ants/ant10.png',
      description: "ant icon",
      top: '65%',
      left: '64%',
      scale: 0.7,
    },
    {
      di: 11,
      imgUlr: '/assets/residential/icons/ants/ant11.png',
      description: "ant icon",
      top: '20%',
      left: '85%',
      scale: 0.7,
    },
    {
      di: 12,
      imgUlr: '/assets/residential/icons/ants/ant12.png',
      description: "ant icon",
      top: '22%',
      left: '65%',
      scale: 0.7,
    },
    {
      di: 13,
      imgUlr: '/assets/residential/icons/ants/ant13.png',
      description: "ant icon",
      top: '22%',
      left: '45%',
      scale: 0.7,
    },
  ]
}

export const DesktopAntBackground = () => {  
	const desktopAntsData = [
    {
      di: 1,
			imgUlr: '/assets/residential/icons/ants/ant1.png',
      description: "ant icon",
			top: '20%',
      left: '5%',        			
			scale: 0.8,
		},
    {
      di: 2,
			imgUlr: '/assets/residential/icons/ants/ant2.png',
      description: "ant icon",
			top: '47%',
      left: '4%',      			
			scale: 0.8,
		},
    {
      di: 3,
			imgUlr: '/assets/residential/icons/ants/ant3.png',
      description: "ant icon",
			top: '85%',
      left: '8%',      
			scale: 1.2,
		},
    {
      di: 4,
			imgUlr: '/assets/residential/icons/ants/ant4.png',
      description: "ant icon",
			top: '85%',
      left: '24%',		      
			scale: 0.7,
		},
    {
      di: 5,
			imgUlr: '/assets/residential/icons/ants/ant5.png',
      description: "ant icon",
			top: '60%',
			left: '20%',			
			scale: 1.1,
		},
    {
      di: 6,
			imgUlr: '/assets/residential/icons/ants/ant6.png',
      description: "ant icon",
			top: '90%',
      left: '50%',	      
			scale: 1.3,
    },
    {
      di: 7,
			imgUlr: '/assets/residential/icons/ants/ant7.png',
      description: "ant icon",
			top: '87%',
      left: '68%',	
      width: 55,
			scale: 1.3,
    },
    {
      di: 8,
			imgUlr: '/assets/residential/icons/ants/ant8.png',
      description: "ant icon",
			top: '85%',
      left: '85%',	      
			scale: 1.3,
    },
    {
      di: 9,
			imgUlr: '/assets/residential/icons/ants/ant9.png',
      description: "ant icon",
			top: '47%',
      left: '80%',      			
			scale: 0.8,
    },
    {
      di: 10,
			imgUlr: '/assets/residential/icons/ants/ant10.png',
      description: "ant icon",
			top: '65%',
      left: '64%',		      
			scale: 0.7,
    },
    {
      di: 11,
			imgUlr: '/assets/residential/icons/ants/ant11.png',
      description: "ant icon",
			top: '20%',
      left: '85%',		      
			scale: 0.7,
    },
    {
      di: 12,
			imgUlr: '/assets/residential/icons/ants/ant12.png',
      description: "ant icon",
			top: '22%',
      left: '65%',		      
			scale: 0.7,
    },
     {
      di: 13,
			imgUlr: '/assets/residential/icons/ants/ant13.png',
      description: "ant icon",
			top: '22%',
      left: '45%',		      
			scale: 0.7,
    },
	]

  return (
    <>
      {/* mobile ant background */}     

      {/* laptop ant background */}
		<motion.div
			className='hidden md:block absolute inset-0 z-0 overflow-hidden'
			initial='initial'
			animate='animate'
			variants={{ animate: { transition: { staggerChildren: 0.2 } } }}>
			{desktopAntsData.map((ant, i) => (
				<motion.img
					key={i}
					src={ant.imgUlr}
					alt={ant.description}
					className='absolute'
					style={{ top: ant.top, left: ant.left, height: 'auto'}}
					variants={{
						initial: { opacity: 0, scale: 0.5 },
						animate: { opacity: 1, scale: ant.scale },
					}}
					transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 + i * 0.1 }}
				/>
			))}
		</motion.div>
    </>
	)
}
