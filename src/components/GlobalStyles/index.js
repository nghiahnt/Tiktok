import PropTypes from 'prop-types';
import './GlobalStyles.scss';

function Globalstyles( {children} ) {
    return ( 
        children
     );
};

Globalstyles.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Globalstyles;