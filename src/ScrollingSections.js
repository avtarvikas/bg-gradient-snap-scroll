import React, { useRef, useEffect } from "react";

const ScrollingSections = () => {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = (event) => {
      const delta = Math.sign(event.deltaY);

      if (delta > 0) {
        // Scrolling down
        const currentSectionIndex = sectionRefs.current.findIndex(
          (sectionRef) => sectionRef.offsetTop > window.scrollY
        );

        if (currentSectionIndex < sectionRefs.current.length - 1) {
          event.preventDefault();
          sectionRefs.current[currentSectionIndex + 1].scrollIntoView({
            behavior: "smooth",
          });
        }
      } else if (delta < 0) {
        // Scrolling up
        const currentSectionIndex = sectionRefs.current.findIndex(
          (sectionRef) => sectionRef.offsetTop >= window.scrollY
        );

        if (currentSectionIndex > 0) {
          event.preventDefault();
          sectionRefs.current[currentSectionIndex - 1].scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };

    const container = containerRef.current;
    container.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const setSectionRef = (index) => (ref) => {
    sectionRefs.current[index] = ref;
  };

  return (
    <div ref={containerRef}>
      <section className="section" ref={setSectionRef(0)}>
        <h2>Section 1</h2>
      </section>

      <section className="section" ref={setSectionRef(1)}>
        <h2>Section 2</h2>
      </section>

      <section className="section" ref={setSectionRef(2)}>
        <h2>Section 3</h2>
      </section>

      <section className="section" ref={setSectionRef(3)}>
        <h2>Section 4</h2>
      </section>

      <section className="section" ref={setSectionRef(4)}>
        <h2>Section 5</h2>
      </section>

      <section className="section" ref={setSectionRef(5)}>
        <h2>Section 6</h2>
      </section>
    </div>
  );
};

export default ScrollingSections;
