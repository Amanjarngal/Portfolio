import FlutterImage from '../assets/FLUTTER.png';
import DSAImage from '../assets/DSA.jpg';

export default function LearningSection() {
  return (
    <div className="bg-gray-200  py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-3">
        <h2 className="text-4xl text-pretty font-semibold text-center text-gray-900 mb-12 ">
          What I Am Learning
        </h2>
        <div className="flex justify-center items-center space-x-8">
          {/* Flutter Box */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center justify-center">
            <img
              src={FlutterImage}
              alt="Flutter"
              className="mx-auto w-32 h-32 mb-4 rounded-full"
            />
            <h3 className="text-2xl font-semibold text-gray-900">Flutter</h3>
            <p className="text-gray-600 mt-2   text-pretty font-medium">
              Building beautiful cross-platform apps for Android & iOS with Flutter.
            </p>
          </div>

          {/* DSA Box */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center justify-center">
            <img
              src={DSAImage}
              alt="DSA"
              className="mx-auto w-32 h-32 mb-4 rounded-full"
            />
            <h3 className="text-2xl font-semibold text-gray-900">Data Structures & Algorithms</h3>
            <p className="text-gray-600 mt-2   text-pretty font-medium">
              Solving complex problems and improving algorithmic thinking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
