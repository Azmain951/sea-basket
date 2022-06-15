import React from 'react';
import useData from '../hooks/useData';

const FAQs = () => {
    const [data] = useData();
    return (
        <div className='container my-5 py-5' id='faqs'>
            <h2 className='text-center py-5'>FAQS</h2>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                {data?.faq?.map((item, index) =>
                    <div className="accordion-item mb-5 p-3 shadow-sm border-0" key={index} style={{ borderRadius: '30px' }}>
                        <h2 className="accordion-header" id={`panelsStayOpen-${index}`}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${index}`} aria-expanded="false" aria-controls={`panelsStayOpen-collapse${index}`}>
                                {item.question}
                            </button>
                        </h2>
                        <div id={`panelsStayOpen-collapse${index}`} className={`accordion-collapse collapse ${index === 1 ? 'show' : ''}`} aria-labelledby={`panelsStayOpen-heading${index}`}>
                            <div className="accordion-body mt-3">
                                {item.answer}
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </div >
    );
};

export default FAQs;