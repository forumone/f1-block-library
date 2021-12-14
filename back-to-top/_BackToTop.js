import {__} from '@wordpress/i18n';
import Arrow from './_Arrow';

function BackToTop({
  topElement = 'top',
  title = __('Back to Top'),
  ...attributes
                   }) {
  return (
    <a href={`#${topElement}`} title={title} {...attributes}>
      <Arrow className="back-to-top__icon" />
    </a>
  )
}

export default BackToTop;
