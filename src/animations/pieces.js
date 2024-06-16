const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
}

const solutionItem = (delay) => {
    const item = {
        hidden: {
            y: -100, opacity: 0
        },
        visible: {
            y:0, opacity: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: delay
            }
        }
    }
    return item;
}

export {container, item, solutionItem}