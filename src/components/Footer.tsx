import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900/50 mt-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase mb-4">소개</h3>
          <p className="text-base text-gray-400">
            최신 의학 연구와 의료 기술 발전에 대한 전문적인 정보를 제공합니다.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase mb-4">카테고리</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <Link href="/category/research" className="text-base text-gray-400 hover:text-cyan-400 transition-colors duration-200">연구</Link>
            </li>
            <li>
              <Link href="/category/technology" className="text-base text-gray-400 hover:text-cyan-400 transition-colors duration-200">기술</Link>
            </li>
            <li>
              <Link href="/category/policy" className="text-base text-gray-400 hover:text-cyan-400 transition-colors duration-200">정책</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase mb-4">리소스</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <Link href="/newsletter" className="text-base text-gray-400 hover:text-cyan-400 transition-colors duration-200">뉴스레터</Link>
            </li>
            <li>
              <Link href="/events" className="text-base text-gray-400 hover:text-cyan-400 transition-colors duration-200">이벤트</Link>
            </li>
            <li>
              <Link href="/contact" className="text-base text-gray-400 hover:text-cyan-400 transition-colors duration-200">문의하기</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase mb-4">법적 고지</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <Link href="/privacy" className="text-base text-gray-400 hover:text-cyan-400 transition-colors duration-200">개인정보처리방침</Link>
            </li>
            <li>
              <Link href="/terms" className="text-base text-gray-400 hover:text-cyan-400 transition-colors duration-200">이용약관</Link>
            </li>
            <li>
              <Link href="/cookies" className="text-base text-gray-400 hover:text-cyan-400 transition-colors duration-200">쿠키 정책</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024 Medical News. 모든 권리 보유.
          </p>
        </div>
      </div>
    </footer>
  )
} 