import { testimonials } from '../../constants';
import TitleHeader from '../TitleHeader';
import GlowCards from '../GlowCards';

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className='flex-center section-padding'
    >
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
          title='What People Say About Me?'
          sub='⭐️ Customer feedback highlights'
        />

        <div className='lg:columns-3 md:columns-2 columns-1 mt-16'>
          {testimonials.map((testimonial, index) => (
            <GlowCards
              card={testimonial}
              key={index}
              index={index}
            >
              <div className='flex items-center gap-3'>
                <div>
                  <p className='font-bold'>{testimonial.name}</p>
                </div>
              </div>
            </GlowCards>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
