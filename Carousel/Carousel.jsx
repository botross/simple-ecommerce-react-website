import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Data from "./Data"

function Carousel() {


const [index,setIndex] = useState(0)
const [people, setPeople] = useState(Data);



useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
        setIndex(lastIndex);
    }
    if (index > lastIndex) {
        setIndex(0);
    }
}, [index, people]);

useEffect(() => {
    let slider = setInterval(() => {
        setIndex(index + 1);
    }, 5000);
    return () => {
        clearInterval(slider);
    };
}, [index]);

return (
    <section className="section">
        <div className="section-center">
        {people.map((image, personIndex) => {
            let position = 'nextSlide';
            if (personIndex === index) {
                position = 'activeSlide';
            }
            if ( 
                    personIndex === index - 1 ||
                    (index === 0 && personIndex === people.length - 1)
                ) {
                    position = 'lastSlide';     }

        return (
            <article className={position} key={image.id} >
                <img src={image.image} alt={image.name} className='wel-img' />

            </article>
        );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
        </button>
        </div>

        
    </section>

)

}

export default Carousel;
