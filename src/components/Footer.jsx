import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <span className="text-xl font-bold">Udemy</span>
            </div>
            <p className="text-gray-400">
              The world's largest online learning platform with millions of courses and expert instructors.
            </p>
            <div className="flex space-x-4">
              <SafeIcon icon={FiFacebook} className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <SafeIcon icon={FiTwitter} className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <SafeIcon icon={FiInstagram} className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <SafeIcon icon={FiLinkedin} className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors">Browse Courses</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/courses?category=development" className="text-gray-400 hover:text-white transition-colors">Development</Link></li>
              <li><Link to="/courses?category=design" className="text-gray-400 hover:text-white transition-colors">Design</Link></li>
              <li><Link to="/courses?category=business" className="text-gray-400 hover:text-white transition-colors">Business</Link></li>
              <li><Link to="/courses?category=marketing" className="text-gray-400 hover:text-white transition-colors">Marketing</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Udemy Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;