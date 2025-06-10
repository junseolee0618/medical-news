import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="backdrop-blur-md bg-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                  Medical News
                </span>
              </Link>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link href="/" className="text-gray-100 hover:text-cyan-400 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200">
                홈
              </Link>
              <Link href="/latest" className="text-gray-100 hover:text-cyan-400 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200">
                최신
              </Link>
              <Link href="/popular" className="text-gray-100 hover:text-cyan-400 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200">
                인기
              </Link>
              <Link href="/sponsored" className="text-gray-100 hover:text-cyan-400 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200">
                스폰서
              </Link>
              <Link href="/topics" className="text-gray-100 hover:text-cyan-400 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200">
                토픽
              </Link>
              <Link href="/search" className="text-gray-100 hover:text-cyan-400 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200">
                검색
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link 
              href="/newsletter" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              뉴스레터 구독
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 