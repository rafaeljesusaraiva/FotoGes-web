import PropTypes from 'prop-types';
import Image from 'next/image';
import PenIcon from 'components/Icon/Pen';

function TopicBlock({ topic, index }) {
  return (
    <li className="my-4 first:mt-0 last:mb-0">
      <div className="flex">
        <div className="flex-shrink-0">
          <div
            className={
              'flex items-center justify-center h-12 w-12 rounded-md text-white' +
              (index % 2 ? ' bg-color-primary-dark' : ' bg-color-primary-light')
            }
          >
            <PenIcon />
          </div>
        </div>
        <div className="ml-4">
          <h5 className="text-lg leading-6 text-gray-900 dark:text-white font-bold">
            {topic.title}
          </h5>
          <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
            {topic.description}
          </p>
        </div>
      </div>
    </li>
  );
}

TopicBlock.propTypes = {
  topic: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default function FeatureTopicsWithImage({ coverImage, title, topics }) {
  return (
    <div className="relative bg-color-canvas-dark p-8 py-14 overflow-hidden">
      <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div className="lg:col-start-2 md:pl-20">
          <h4 className="text-2xl leading-8 font-extrabold dark:text-white tracking-tight sm:leading-9">
            {title}
          </h4>
          <ul className="mt-8">
            {topics.map((topic, index) => {
              return (
                <TopicBlock
                  key={'topic-0' + index}
                  index={index}
                  topic={topic}
                />
              );
            })}
          </ul>
        </div>
        <div className="mt-8 -mr-8 relative lg:mt-0 lg:col-start-1 h-full">
          <Image
            src={coverImage}
            layout="fixed"
            width="500"
            height="400"
            alt="illustration"
            className="relative mx-auto shadow-lg rounded max-w-fit"
          />
        </div>
      </div>
    </div>
  );
}

FeatureTopicsWithImage.propTypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  topics: PropTypes.array.isRequired,
};
