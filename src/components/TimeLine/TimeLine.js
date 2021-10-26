import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemOranization, CarouselItemText,CarouselItemPosition, CarouselMobileScrollNode, CarouselItemStartTime, CarouselItemEndTime } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="timeline">
      <SectionTitle>Time Line</SectionTitle>
      <SectionText>
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode key={index} final={index ===TOTAL_CAROUSEL_COUNT-1}>
              <CarouselItem 
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e,index)}
                >
                  <div style={{marginBottom:'10px'}}>
                    <CarouselItemStartTime>
                      {item.starttime}
                    </CarouselItemStartTime>
                    <CarouselItemEndTime>
                      {item.end ? ' - '+item.endtime : ' - Current'}
                    </CarouselItemEndTime>
                  </div>
                  <CarouselItemOranization>{item.organization}</CarouselItemOranization>
                  <CarouselItemPosition>{' - '+item.position}</CarouselItemPosition>
                  <div style={{marginLeft:'1.2rem'}}>
                    <CarouselItemText>{item.description}</CarouselItemText>
                  </div>
              </CarouselItem>

            </CarouselMobileScrollNode>
          ))}
        </>
        
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item,index)=>(
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e)=>handleClick(e,index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem}/>
          </CarouselButton>
        ))}

      </CarouselButtons>
      <SectionDivider/>
    </Section>
  );
};

export default Timeline;