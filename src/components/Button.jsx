const Button = ({ text, className, id, href }) => {
  const handleClick = (e) => {
    // If there's a target to scroll to, prevent default and scroll
    if (id) {
      e.preventDefault();
      const target = document.getElementById('counter');
      if (target) {
        const offset = window.innerHeight + 0.15;
        const top =
          target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
    // If there's no id but there's an href, let the default anchor behavior work
    // (navigation will happen automatically)
  };

  return (
    <a
      href={href || '#'}
      className={`${className ?? ''} cta-wrapper`}
      onClick={handleClick}
    >
      <div className='cta-button group'>
        <div className='bg-circle' />
        <p className='text'>{text}</p>
        <div className='arrow-wrapper'>
          <img
            src='/images/arrow-down.svg'
            alt='arrow'
          />
        </div>
      </div>
    </a>
  );
};

export default Button;