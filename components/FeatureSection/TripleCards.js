import PropTypes from 'prop-types';
import PenIcon from 'components/Icon/Pen';

function Card({ index, title, description, className }) {
  return (
    <div
      className={
        'w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 shadow-lg rounded-lg dark:bg-gray-800 ' +
        className
      }
    >
      <div className="flex-shrink-0">
        <div
          className={
            'flex items-center mx-auto justify-center h-12 w-12 rounded-md text-white ' +
            (index % 2 ? ' bg-color-primary-light' : ' bg-color-primary-dark')
          }
        >
          <PenIcon />
        </div>
      </div>
      <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
        {title}
      </h3>
      <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
        {description}
      </p>
    </div>
  );
}

Card.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default function FeatureTripleCards({ cardData }) {
  return (
    <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 mb-14">
      {cardData.map((info, index) => {
        return (
          <Card
            key={'card-0' + index}
            index={index}
            title={info.title}
            description={info.description}
            className={index % 2 ? 'sm:mt-16 md:mt-20 lg:mt-24' : ''}
          />
        );
      })}
    </div>
  );
}

FeatureTripleCards.propTypes = {
  cardData: PropTypes.array.isRequired,
};
