"use client"; // Important: Framer Motion runs on the client-side

import { motion } from "framer-motion";

export default function AnimationPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            Hello, Framer Motion!
        </motion.div>
    );
}
