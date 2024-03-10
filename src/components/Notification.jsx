import PropTypes from 'prop-types';
import { notificationImages } from "../constants";
import { notification1 } from "../assets";

const Notification = ({ className, title }) => {
  return (
    <div className={`${className || ''} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 gap-5 rounded-2xl`}
    >
      <img
        src={notification1}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />
      <div className="flex-1">
        <h6 className="font-semibold mb-1 text-base">{title}</h6>
        <div className="flex justify-between items-center">
          <ul className='flex -m-0.5'>
            {notificationImages.map((item, index) => (
              <li 
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img 
                  src={item}
                  alt={item}
                  width={20}
                  height={20}
                  className="w-full"
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  )
}

Notification.propTypes = {
  className: PropTypes.string, 
  title: PropTypes.string, 
}

export default Notification;