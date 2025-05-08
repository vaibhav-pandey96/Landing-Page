import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Items from "./Items";
import CustomRightArrow from "./CustomRightArrow";
import CustomLeftArrow from "./CustomLeftArrow";


function Corosels({ deviceType }) {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 1450, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    return (
        <div className="bg-blue-600 max-h-[500px] w-full z-0 relative pb-5">
            <div className="text-left pl-10 pt-3 pb-2 md:mb-5">
                <h2 className="text-white text-2xl font-bold">
                    What People Say About Us
                </h2>
            </div>
            <div className="px-4 md:gap-2 relative">
                <Carousel
                    customRightArrow={<CustomRightArrow />}
                    customLeftArrow={<CustomLeftArrow />}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // Server-side rendering
                    infinite={true}
                    autoPlay={deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={90000}
                    keyBoardControl={true}
                    customTransition="all .5s"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div>
                        <Items
                            para="Batman, the Dark Knight of Gotham, is one of the most iconic and complex vigilantes in comic book history. Unlike traditional superheroes, Batman possesses no superhuman abilities—his strength comes from his unmatched intellect, peak human conditioning, and mastery of combat and stealth"
                            image="./face.jpg"
                            name="Bruce Wayne"
                            designation="Chairman of the Board & CEO" />
                    </div>
                    {/* Items2 */}
                    <div>
                        <Items
                            para="Batman, the Dark Knight of Gotham, is one of the most iconic and complex vigilantes in comic book history. Unlike traditional superheroes, Batman possesses no superhuman abilities—his strength comes from his unmatched intellect, peak human conditioning, and mastery of combat and stealth"
                            image="./face.jpg"
                            name="Bruce Wayne"
                            designation="Chairman of the Board & CEO" />
                    </div>
                    {/* Items3 */}
                    <div>
                        <Items
                            para="Batman, the Dark Knight of Gotham, is one of the most iconic and complex vigilantes in comic book history. Unlike traditional superheroes, Batman possesses no superhuman abilities—his strength comes from his unmatched intellect, peak human conditioning, and mastery of combat and stealth"
                            image="./face.jpg"
                            name="Bruce Wayne"
                            designation="Chairman of the Board & CEO" />
                    </div>
                    {/* Items4 */}
                    <div>
                        <Items
                            para="Batman, the Dark Knight of Gotham, is one of the most iconic and complex vigilantes in comic book history. Unlike traditional superheroes, Batman possesses no superhuman abilities—his strength comes from his unmatched intellect, peak human conditioning, and mastery of combat and stealth"
                            image="./face.jpg"
                            name="Bruce Wayne"
                            designation="Chairman of the Board & CEO" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Corosels;
