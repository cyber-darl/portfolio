const Button = ({ text, className, id, href, type, disabled, icon = '/images/arrow-right.svg' }) => {
  const handleClick = (e) => {
    // We only want the custom scroll behavior if an id is passed AND it's not a submit button
    if (id && type !== 'submit') {
      e.preventDefault();
      const target = document.getElementById('counter'); // Note: You might want to change 'counter' to use the 'id' variable here!
      if (target) {
        const offset = window.innerHeight + 0.15;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  const innerContent = (
    <div className='cta-button group'>
      <div className='bg-circle' />
      <p className='text'>{text}</p>
      <div className='arrow-wrapper'>
        <img src={icon} alt='arrow' />
      </div>
    </div>
  );

  // If used inside a form, render a standard HTML button
  if (type === 'submit' || type === 'button') {
    return (
      <button
        type={type}
        className={`${className ?? ''} cta-wrapper border-none bg-transparent p-0`}
        onClick={handleClick}
        disabled={disabled}
      >
        {innerContent}
      </button>
    );
  }

  // Otherwise, render the default anchor link
  return (
    <a
      href={href || '#'}
      className={`${className ?? ''} cta-wrapper`}
      onClick={handleClick}
    >
      {innerContent}
    </a>
  );
};

export default Button;