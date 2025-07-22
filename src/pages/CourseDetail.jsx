import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { featuredCourses } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

const { FiStar, FiUsers, FiClock, FiPlay, FiDownload, FiAward, FiGlobe, FiCheck, FiHeart, FiShare2 } = FiIcons;

const CourseDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  
  const course = featuredCourses.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h2>
          <Link to="/courses" className="text-primary-600 hover:text-primary-700">
            Browse all courses
          </Link>
        </div>
      </div>
    );
  }

  const curriculum = [
    {
      title: "Getting Started",
      lessons: [
        "Course Introduction",
        "Setting up the Environment",
        "Understanding the Basics"
      ]
    },
    {
      title: "Core Concepts",
      lessons: [
        "Fundamental Principles",
        "Practical Applications",
        "Hands-on Exercise"
      ]
    },
    {
      title: "Advanced Topics",
      lessons: [
        "Advanced Techniques",
        "Real-world Projects",
        "Best Practices"
      ]
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      rating: 5,
      comment: "Excellent course! The instructor explains everything clearly and the projects are very practical.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      rating: 5,
      comment: "Best course I've taken on this topic. Highly recommended for beginners and intermediate learners.",
      date: "1 month ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full">
                    {course.category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {course.title}
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  {course.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center">
                    <SafeIcon icon={FiStar} className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="font-semibold mr-2">{course.rating}</span>
                    <span className="text-gray-300">({course.students.toLocaleString()} students)</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <SafeIcon icon={FiClock} className="w-5 h-5 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <SafeIcon icon={FiPlay} className="w-5 h-5 mr-2" />
                    <span>{course.lessons} lectures</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <SafeIcon icon={FiGlobe} className="w-5 h-5 mr-2" />
                    <span>{course.language}</span>
                  </div>
                </div>

                <div className="text-gray-300">
                  Created by <span className="text-white font-semibold">{course.instructor}</span>
                </div>
              </motion.div>
            </div>

            {/* Course Preview Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-lg shadow-xl overflow-hidden sticky top-8">
                <div className="relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiPlay} className="w-6 h-6 text-gray-900 ml-1" />
                    </div>
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold text-gray-900">
                        ${course.price}
                      </span>
                      {course.originalPrice && (
                        <span className="text-lg text-gray-500 line-through ml-2">
                          ${course.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <SafeIcon icon={FiHeart} className="w-5 h-5" />
                      </button>
                      <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <SafeIcon icon={FiShare2} className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors mb-3">
                    Enroll Now
                  </button>
                  
                  <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors mb-6">
                    Add to Cart
                  </button>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500 mr-3" />
                      <span>Full lifetime access</span>
                    </div>
                    <div className="flex items-center">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500 mr-3" />
                      <span>Access on mobile and TV</span>
                    </div>
                    <div className="flex items-center">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500 mr-3" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-center">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500 mr-3" />
                      <span>30-day money-back guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="border-b border-gray-200 mb-8">
                <nav className="flex space-x-8">
                  {['overview', 'curriculum', 'reviews'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                        activeTab === tab
                          ? 'border-primary-600 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">What you'll learn</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          "Master the fundamentals",
                          "Build real-world projects",
                          "Understand best practices",
                          "Get hands-on experience",
                          "Learn industry standards",
                          "Develop problem-solving skills"
                        ].map((item, index) => (
                          <div key={index} className="flex items-start">
                            <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Course Description</h3>
                      <div className="prose max-w-none text-gray-700">
                        <p className="mb-4">
                          This comprehensive course is designed to take you from a complete beginner to an advanced level. 
                          You'll learn through hands-on projects, real-world examples, and practical exercises that will 
                          help you build a strong foundation and develop the skills needed to succeed.
                        </p>
                        <p className="mb-4">
                          Throughout the course, you'll work on multiple projects that will help you apply what you've learned 
                          and build a portfolio that you can showcase to potential employers or clients.
                        </p>
                        <p>
                          By the end of this course, you'll have the confidence and skills to tackle complex challenges 
                          and continue your learning journey independently.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'curriculum' && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h3>
                    {curriculum.map((section, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg">
                        <div className="p-4 bg-gray-50 border-b border-gray-200">
                          <h4 className="font-semibold text-gray-900">{section.title}</h4>
                        </div>
                        <div className="divide-y divide-gray-200">
                          {section.lessons.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className="p-4 flex items-center justify-between hover:bg-gray-50">
                              <div className="flex items-center">
                                <SafeIcon icon={FiPlay} className="w-4 h-4 text-gray-400 mr-3" />
                                <span className="text-gray-700">{lesson}</span>
                              </div>
                              <span className="text-sm text-gray-500">5:30</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-gray-900">Student Reviews</h3>
                      <div className="flex items-center">
                        <SafeIcon icon={FiStar} className="w-5 h-5 text-yellow-400 mr-1" />
                        <span className="font-semibold mr-2">{course.rating}</span>
                        <span className="text-gray-500">({course.students.toLocaleString()} reviews)</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-200 pb-6">
                          <div className="flex items-start space-x-4">
                            <img
                              src={review.avatar}
                              alt={review.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-gray-900">{review.name}</h4>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                              <div className="flex items-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                  <SafeIcon
                                    key={i}
                                    icon={FiStar}
                                    className={`w-4 h-4 ${
                                      i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="text-gray-700">{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Course Features</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Skill level</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Language</span>
                    <span className="font-medium">{course.language}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Students</span>
                    <span className="font-medium">{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Certificate</span>
                    <span className="font-medium">{course.certificate ? 'Yes' : 'No'}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Instructor</h4>
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
                    alt={course.instructor}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-semibold text-gray-900">{course.instructor}</h5>
                    <p className="text-sm text-gray-600">Expert Instructor</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Professional instructor with years of experience in the field. 
                  Passionate about teaching and helping students achieve their goals.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <SafeIcon icon={FiStar} className="w-4 h-4 mr-1" />
                    <span>4.8 rating</span>
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiUsers} className="w-4 h-4 mr-1" />
                    <span>50K+ students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;