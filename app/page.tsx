import Image from "next/image";
import styles from "./page.module.css";
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar Component */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6">
        <section className="mb-6">
          <h1 className="text-3xl font-bold mb-4">Welcome to CPU Counseling</h1>
          <p className="text-gray-700">This is your personalized counseling platform.</p>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Dashboard cards */}
          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-bold text-blue-600">30</h2>
            <p>Completed Sessions</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-bold text-blue-600">15</h2>
            <p>Upcoming Events</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-bold text-blue-600">5</h2>
            <p>New Messages</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} CPU Counseling. All rights reserved.</p>
      </footer>
    </div>
  );
}