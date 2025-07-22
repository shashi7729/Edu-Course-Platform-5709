import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiUsers, FiClock, FiBookmark, FiHeart } = FiIcons;

const CourseCard = ({ course, viewMode = 'grid' }) => {
  const isListView = viewMode === 'list';

  if (isListView) {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-300"
      >
        <div className="flex p-6">
          <div className="flex-shrink-0 mr-6">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-32 h-20 object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <Link to={`/course/${course.id}`}>
                <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors line-clamp-2">
                  {course.title}
                </h3>
              </Link>
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                <SafeIcon icon={FiHeart} className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <span className="mr-4">{course.instructor}</span>
              <div className="flex items-center mr-4">
                <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400 mr-1" />
                <span>{course.rating}</span>
              </div>
              <div className="flex items-center mr-4">
                <SafeIcon icon={FiUsers} className="w-4 h-4 mr-1" />
                <span>{course.students.toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                <span>{course.duration}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-900">
                  ${course.price}
                </span>
                {course.originalPrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">
                    ${course.originalPrice}
                  </span>
                )}
              </div>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                {course.level}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div className="relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 flex space-x-2">
          <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
            <SafeIcon icon={FiBookmark} className="w-4 h-4 text-gray-600" />
          </button>
          <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
            <SafeIcon icon={FiHeart} className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full">
            {course.level}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-primary-600 font-medium uppercase tracking-wide">
            {course.category}
          </span>
        </div>
        
        <Link to={`/course/${course.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors line-clamp-2">
            {course.title}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {course.description}
        </p>

        <div className="text-sm text-gray-500 mb-3">
          By {course.instructor}
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400 mr-1" />
              <span>{course.rating}</span>
            </div>
            <div className="flex items-center">
              <SafeIcon icon={FiUsers} className="w-4 h-4 mr-1" />
              <span>{course.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
              <span>{course.duration}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">
              {course.price === 0 ? 'Free' : `$${course.price}`}
            </span>
            {course.originalPrice && course.price > 0 && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ${course.originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;