import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useAuth } from '../context/AuthContext';
import { featuredCourses } from '../data/mockData';

const { FiPlay, FiClock, FiStar, FiAward, FiTrendingUp, FiBookOpen, FiUsers, FiCalendar } = FiIcons;

const Dashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock enrolled courses (subset of featured courses)
  const enrolledCourses = featuredCourses.slice(0, 4).map(course => ({
    ...course,
    progress: Math.floor(Math.random() * 100),
    lastAccessed: '2 days ago',
    timeSpent: `${Math.floor(Math.random() * 20) + 5} hours`
  }));

  const stats = [
    { label: 'Courses Enrolled', value: '12', icon: FiBookOpen, color: 'text-blue-600' },
    { label: 'Hours Learned', value: '248', icon: FiClock, color: 'text-green-600' },
    { label: 'Certificates', value: '8', icon: FiAward, color: 'text-purple-600' },
    { label: 'Streak Days', value: '15', icon: FiTrendingUp, color: 'text-orange-600' }
  ];

  const recentActivity = [
    { course: 'JavaScript Fundamentals', action: 'Completed lesson', time: '2 hours ago' },
    { course: 'React Development', action: 'Started new section', time: '1 day ago' },
    { course: 'Python Basics', action: 'Earned certificate', time: '3 days ago' },
    { course: 'Web Design', action: 'Submitted assignment', time: '5 days ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {user?.name}!
              </h1>
              <p className="text-gray-600 mt-1">Continue your learning journey</p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src={user?.avatar}
                alt={user?.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <SafeIcon icon={stat.icon} className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {['overview', 'courses', 'progress', 'certificates'].map((tab) => (
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Continue Learning */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Continue Learning</h3>
                <div className="space-y-4">
                  {enrolledCourses.slice(0, 3).map((course) => (
                    <div key={course.id} className="bg-white rounded-lg shadow-sm border p-6">
                      <div className="flex items-start space-x-4">
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-20 h-14 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-semibold text-gray-900 mb-1 truncate">
                            {course.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-3">
                            Last accessed: {course.lastAccessed}
                          </p>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-600">Progress</span>
                            <span className="text-sm font-medium text-gray-900">
                              {course.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                            <div
                              className="bg-primary-600 h-2 rounded-full"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
                            <SafeIcon icon={FiPlay} className="w-4 h-4 mr-2" />
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            {activity.action}
                          </p>
                          <p className="text-sm text-gray-600">{activity.course}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">My Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {course.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        By {course.instructor}
                      </p>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm font-medium text-gray-900">
                          {course.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                        <div
                          className="bg-primary-600 h-2 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                        Continue Learning
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'progress' && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Learning Progress</h3>
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">This Month</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Hours Learned</span>
                        <span className="font-semibold text-gray-900">24.5 hrs</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Lessons Completed</span>
                        <span className="font-semibold text-gray-900">32</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Quizzes Passed</span>
                        <span className="font-semibold text-gray-900">8</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Certificates Earned</span>
                        <span className="font-semibold text-gray-900">2</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Goals</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-600">Weekly Goal</span>
                          <span className="text-sm text-gray-500">8/10 hours</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-600">Monthly Goal</span>
                          <span className="text-sm text-gray-500">24/40 hours</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">My Certificates</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledCourses.filter(course => course.progress === 100).map((course) => (
                  <div key={course.id} className="bg-white rounded-lg shadow-sm border p-6">
                    <div className="text-center">
                      <SafeIcon icon={FiAward} className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                      <h4 className="font-semibold text-gray-900 mb-2">{course.title}</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Completed on March 15, 2024
                      </p>
                      <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                        Download Certificate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;