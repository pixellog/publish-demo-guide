const service = {
  name: 'API 서비스',
  link: 'service',
  sub: [
    { name: 'API 패키지', link: '/service/package' },
    { name: '개별 API', link: '/service/products' },
    // { name: 'API 상품', link: '/service/products' },
    { name: '공인인증서 서비스', link: '/service/cert' },
  ],
};

const pricing = {
  name: '가격정책',
  link: 'pricing',
  sub: [
    { name: '단계별 가격정책', link: '/pricing/overview' },
    { name: '예상요금 계산기', link: '/pricing/calculator' },
  ],
};

const useCases = {
  name: '이용사례',
  link: 'use-cases',
  sub: [
    { name: '금융', link: '/use-cases/pfms' },
    { name: '보험', link: '/use-cases/insurance' },
    { name: '기업', link: '/use-cases/business' },
    { name: '인증', link: '/use-cases/authorization' },
    { name: '기타', link: '/use-cases/more' },
  ],
};
const cs = {
  name: '고객지원',
  link: 'cs',
  sub: [
    { name: '공지사항', link: '/cs/notice' },
    { name: 'FAQ', link: '/cs/faq' },
    { name: 'Q&A', link: '/cs/inquiry' },
    // { name: '서비스문의', link: '/cs/inquiry' },
    // { name: '기술문의', link: '/cs/inquiry' },
  ],
};

const apis = {
  name: 'CODEF API는',
  link: 'apis',
  sub: [{ name: '개요', link: '/apis' }],
};

const account = {
  name: '계정',
  link: '/account',
  sub: [
    { name: '기본정보', link: '/account/general' },
    { name: '키 관리', link: '/account/keys' },
    { name: '팀 관리', link: '/account/team' },
    { name: '결제 관리', link: '/account/payment' },
    { name: '크레딧', link: '/account/credit' },
  ],
};

const dashboard = {
  name: '대시보드',
  link: '/dashboard',
  sub: [
    { name: '대시보드', link: '/dashboard', path: 'general' },
    { name: '오류', link: '/dashboard', path: 'error' },
    { name: 'API 상태', link: '/dashboard', path: 'apiStatus' },
    { name: '웹훅', link: '/dashboard', path: 'webhook' },
    { name: 'API 서비스 설정', link: '/dashboard', path: 'setting' },
    {
      name: '공인인증서 서비스 설정',
      link: '/dashboard',
      path: 'setting-cert',
    },
  ],
};

const legal = {
  name: '약관',
  link: '/legal',
  sub: [
    // { name: '서비스 문의', link: '/contact/0' },
    { name: '이용약관', link: '/legal/terms' },
    { name: '개인정보처리방침', link: '/legal/privacy' },
    { name: '이메일무단수집거부', link: '/legal/email' },
    { name: '유료서비스이용약관', link: '/legal/paidService' },
    { name: '보안', link: '/legal/security' },
    // { name: '자동결제약관', link: '/legal/autoPayment' },
  ],
};

const link = {
  name: '외부링크',
  sub: [
    { name: '개발가이드', link: '//developer.codef.io' },
    { name: '회사소개', link: '//about.codef.io' },
    { name: 'E-SPIDER', link: '//www.espider.co.kr' },

    // { name: '공식 페이스북', link: '//www.facebook.com/CODEF.api/?ref=br_rs' },
    // { name: '공식 블로그', link: '//blog.naver.com/codef_api' },
  ],
};

const etc = [{ name: 'API 상태', link: '/api-state' }];

const gnb = [service, pricing, useCases, cs, apis];

const MENUS = [
  service,
  pricing,
  useCases,
  cs,
  apis,
  account,
  dashboard,
  legal,
  // link,
  // etc
];

export {
  MENUS,
  service,
  pricing,
  useCases,
  cs,
  apis,
  account,
  dashboard,
  legal,
  link,
  gnb,
  etc,
};
