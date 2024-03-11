// components/Monuments.js
import React, { useState } from 'react';

const Monuments = () => {
    const [selectedMonument, setSelectedMonument] = useState('one');

    const monumentsData = {
        one: {
            heading: 'About Our School',
            content: 'At Pratibha Global School dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.'
        },

        two: {
            heading: 'Our philosophy',
            content: 'Philosophy plays a crucial role in shaping the foundation of education within schools. It serves as the guiding force that influences the principles, goals, and methods employed in the educational system. The philosophy of education encompasses fundamental questions such as the purpose of education, the nature of knowledge, and the role of educators and students. In schools, a well-defined educational philosophy provides a framework for decision-making and helps in creating a conducive learning environment. It determines the curriculum design, teaching strategies, and assessment methods, aligning them with the overarching educational goals. '
        },
        three: {
            heading: 'Umang phase(kindergarten)',
            content: 'The pre-primary phase of schooling is a critical period in a childs educational journey, laying the foundation for their future academic and social development. This phase typically includes early childhood education programs, such as preschool and kindergarten, designed to nurture a childs cognitive, emotional, and social skills. The primary goal during this stage is to create a supportive and stimulating environment that encourages curiosity, creativity, and a love for learning. Pre-primary education emphasizes play-based learning, fostering essential motor skills, language acquisition, and social interaction.'
        },
        five: {
            heading: 'Tarang phase(primary school)',
            content: 'The primary phase of school marks the beginning of formal education for children, typically spanning from around ages 6 to 12. This foundational stage is crucial in shaping a child academic, social, and emotional development. Primary education forms the basis for future learning, laying the groundwork for various subjects and essential skills. During the primary phase, students engage in a diverse curriculum that includes subjects such as mathematics, language arts, science, social studies, and physical education. The emphasis is not only on acquiring knowledge but also on developing critical thinking skills, problem-solving abilities, and effective communication.'
        },
        six: {
            heading: 'Pratibha phase(Middle school)',
            content: 'The secondary phase of school education marks a crucial juncture in the academic journey of students, typically spanning the ages of 11 to 16 or 18, depending on the educational system in place. This phase is often characterized by a more specialized and in-depth curriculum, building upon the foundational knowledge acquired during the primary years. Students delve into a broader array of subjects, allowing them to explore their interests and aptitudes in greater detail child academic, social, and emotional development. Primary education forms the basis for future learning, laying the groundwork for various subjects and essential skills..'
        },
        four: {
            heading: 'Tejas phase( Senior school)',
            content: 'The secondary phase of school education marks a crucial juncture in the academic journey of students, typically spanning the ages of 11 to 16 or 18, depending on the educational system in place. This phase is often characterized by a more specialized and in-depth curriculum, building upon the foundational knowledge acquired during the primary years. Students delve into a broader array of subjects, allowing them to explore their interests and aptitudes in greater detail.'
        },
    };

    const handleClick = (monument) => {
        setSelectedMonument(monument);
    };

    return (
        <div className="w-full lg:w-10/12 md:w-10/12 mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
            <div className="flex justify-between overflow-scroll">
                {Object.keys(monumentsData).map((monument) => (
                    <button
                        key={monument}
                        onClick={() => handleClick(monument)}
                        className={`p-2 text-sm focus:outline-none ${selectedMonument === monument ? 'rounded-t-lg font-bold bg-bteal p-5' : 'font-normal'}`}
                    >
                        {monumentsData[monument].heading}
                    </button>
                ))}
            </div>

            <div >
                <p className="text-gray-700 bg-bteal p-5 rounded-b-lg">{monumentsData[selectedMonument].content}</p>
            </div>
        </div>
    );
};

export default Monuments;
