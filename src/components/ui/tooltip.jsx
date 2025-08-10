import React, { forwardRef } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const PremiumTooltip = forwardRef(({ label, certifications }, ref) => {
    const hasCert = certifications && certifications.length > 0;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    return (
        <div className="flex flex-col items-center">
            {isMobile ? (
                // Version mobile : affichage direct
                <>
                    <motion.span
                        ref={ref}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                        {hasCert && <GraduationCap size={14} className="text-blue-500" />}
                        {label}
                    </motion.span>
                    {hasCert && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="mt-1 text-xs text-gray-600 text-center max-w-[150px]"
                        >
                            {certifications.join(', ')}
                        </motion.div>
                    )}
                </>
            ) : (
                // Version desktop : Tooltip Radix
                <Tooltip.Root delayDuration={150}>
                    <Tooltip.Trigger asChild>
                        <motion.span
                            ref={ref}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium cursor-default hover:bg-blue-100"
                            style={{ margin: '4px' }}
                        >
                            {hasCert && <GraduationCap size={14} className="text-blue-500" />}
                            {label}
                        </motion.span>
                    </Tooltip.Trigger>

                    {hasCert && (
                        <Tooltip.Portal>
                            <Tooltip.Content
                                side="top"
                                sideOffset={10}
                                asChild
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg max-w-xs text-center"
                                >
                                    {certifications.join(', ')}
                                    <Tooltip.Arrow className="fill-gray-900" />
                                </motion.div>
                            </Tooltip.Content>
                        </Tooltip.Portal>
                    )}
                </Tooltip.Root>
            )}
        </div>
    );
});

PremiumTooltip.displayName = 'PremiumTooltip';

export {PremiumTooltip};
