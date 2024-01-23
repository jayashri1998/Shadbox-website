import { useState, useEffect } from 'react';
import { Element, scroller } from 'react-scroll';

const ScrollIndicator = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollPosition(currentPosition);
      setScrollHeight(documentHeight);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroller.scrollTo('scroll-to-top', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOut'
    });
  };

  const getScrollPercentage = () => {
    if (scrollHeight === 0) {
      return 0;
    }
    return (scrollPosition / scrollHeight) * 100;
  };

  const progressBarStyles = {
    height: '5px',
    backgroundColor: 'blue',
    width: `${getScrollPercentage()}%`,
    transition: 'width 0.3s'
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: '#fff' , zIndex: '20'}}>
      <div style={progressBarStyles} />
    </div>
  );
};

export default ScrollIndicator;
