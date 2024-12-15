import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
function Icon({ name, size }) {
    return (
        <div>
            <FontAwesomeIcon icon={name} width={size} height={size}></FontAwesomeIcon>
        </div>
    );
}

export default Icon;
