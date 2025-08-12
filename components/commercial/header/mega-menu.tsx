import { motion, Variants } from '@/components/module/framer-motion';
import Link from 'next/link';
import { chunkArray, cn } from '@/lib/utils';
import { SubMenu } from '@/lib/data/nav-data';

interface MegaMenuProps {
  submenu: SubMenu;
}

// Utility function to chunk an array into columns
// This is used to split the submenu links into multiple columns
// based on the number of columns defined in the submenu data
const ITEMS_PER_COLUMN = 6;

export function MegaMenu({ submenu }: MegaMenuProps) {
  const menuVariants: Variants = {
    initial: { opacity: 0, y: -10, pointerEvents: 'none' },
    animate: { opacity: 1, y: 0, pointerEvents: 'auto' },
    exit: { opacity: 0, y: -10, pointerEvents: 'none' },
    };
    
     // 1. Flatten all links from the data structure into a single array
  const allLinks = submenu.columns.flatMap(col => col.links);

  // 2. Use our utility to chunk the flat array into columns of 6
  const chunkedColumns = chunkArray(allLinks, ITEMS_PER_COLUMN);

  // 3. Determine the number of grid columns needed
  const numColumns = chunkedColumns.length;  

  return (
    <motion.div
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className="absolute top-full left-0 right-0"
    >
      <div className="container mx-auto px-4 flex justify-items-center">
        <div className="inline-block mt-2 bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-6">{submenu.title}</h3>
                  {/* Use dynamic grid columns */}
                  <div className={cn(`grid grid-cols-1 gap-x-8 gap-y-4`, `md:grid-cols-${numColumns}`)}></div>
                  
          <div className={`grid grid-cols-1 md:grid-cols-6 gap-x-8 gap-y-4`}>
            {chunkedColumns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col space-y-3">
                 {column.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}