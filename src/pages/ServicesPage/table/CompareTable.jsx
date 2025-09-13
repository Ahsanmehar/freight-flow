// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import STechIcon from '@/components/STechIcon';

const rowVariants = {
  hidden: { opacity: 0, y: 30 }, 
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.2, 
      ease: "easeOut",
    },
  }),
};

const CompareTable = ({ data }) => {
  return (
    <motion.div
      className="bg-bg2 rounded-lg overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Table className="overflow-hidden">
        <TableHeader>
          <TableRow className="bg-bg2 hover:bg-white/20">
            <TableHead className="font-semibold text-text1 py-4 px-6">
              Feature
            </TableHead>
            <TableHead className="font-semibold text-text1 py-4 px-6">
              FreightFlow
            </TableHead>
            <TableHead className="font-semibold text-text1 py-4 px-6">
              Traditional Brokers
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row, index) => (
            <motion.tr
              key={index}
              className="hover:bg-white/20 border-b border-white/20"
              variants={rowVariants}
              custom={index}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
              <TableCell className="font-medium text-text2 py-4 px-6">
                {row.feature}
              </TableCell>

              <TableCell className="py-4 px-6">
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0">
                    <STechIcon name="check-circle" className="h-5 w-5 text-green-500" />
                  </div>
                  <span className="text-text2">{row.freightFlow}</span>
                </div>
              </TableCell>

              <TableCell className="text-text2 py-4 px-6">
                {row.traditional}
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
};

export default CompareTable;