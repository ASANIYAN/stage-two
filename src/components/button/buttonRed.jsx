import PropTypes from 'prop-types';

const ButtonRed = ({children}) => {
    return (
        <button className="bg-color1 py-2 px-4 rounded flex items-center gap-2"> {children} </button>
    );
}

ButtonRed.propTypes = {
    children:PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string
      ])
}
 
export default ButtonRed;