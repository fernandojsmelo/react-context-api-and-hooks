import P from 'prop-types';

export const Button = ({ children, onButtonClick }) => {
  return <button style={{fontSize: '60px' }} onClick={onButtonClick}>{children}</button>
};

Button.prototype = {
  children: P.node.isRequired,
  onButtonClick: P.func.isRequired,
}