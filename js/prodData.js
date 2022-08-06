// 닥터트럽
const doctor = [
    { category: '닥터트럽', id: 0, price: 16800, title: '닥터트럽 징크 마스크 100ml', desc: '리얼 수딩 마스크팩 BEST3' },
    { category: '닥터트럽', id: 1, price: 16800, title: '닥터트럽 징크크림 60g', desc: '탄력/모공/각질/개선' },
    { category: '닥터트럽', id: 2, price: 8600, title: '닥터트럽 기능성 하이드로겔 30g', desc: '고농축 앰플 한병이 통째로' },
    { category: '닥터트럽', id: 3, price: 9800, title: '닥터트럽 피지제로 센텔라 팩트 8g', desc: '유분, 피지 컨트롤과 진정 케어' },
    { category: '닥터트럽', id: 4, price: 18900, title: '닥터트럽 파하 클렌징 토너 200ml', desc: '순하고, 기능이 좋은 PHA 성분으로 각질관리' },
    { category: '닥터트럽', id: 5, price: 14800, title: '닥터트럽 판테놀 샴푸 200ml', desc: '지성 두피를 위한 순한 샴푸' },
    { category: '닥터트럽', id: 6, price: 18900, title: '닥터트럽 아하 10 바디 클렌져 200ml', desc: '피부 밸런스+피부결 개선에 도움' },
    { category: '닥터트럽', id: 7, price: 19800, title: '닥터트럽 세라마이드 접착크림 60ml', desc: '20%할인 고함량 세라마이드' },
    { category: '닥터트럽', id: 8, price: 16800, title: '닥터트럽 포어 오프너 크림 60ml', desc: '피부결을 매끈하고 건강하게' },
    { category: '닥터트럽', id: 9, price: 16800, title: '닥터트럽 나이아텐 세럼 30ml', desc: '모공 관리 + 생기 부스팅 세럼' }
]


// 민중기
const minJung = [
    { category: '민중기', id: 0, price: 9800, title: '민중기 프로폴리스 앰플', desc: '프로폴리스 98% 함유' },
    { category: '민중기', id: 1, price: 69800, title: '민중기 피브로블라스트 앰플 11ml', desc: '바이오 기능성 화장품 rh-bFGF 20PPM 99%' },
    { category: '민중기', id: 2, price: 12800, title: '민중기 무기자차 썬블럭 SPF35 PA+++ 65g', desc: 'NO 옥시벤존,NO 옥티녹세이트' },
    { category: '민중기', id: 3, price: 39800, title: '민중기 EGF 앰플 11ml', desc: '리포좀 EGF 50PPM 20% 적용' },
    { category: '민중기', id: 4, price: 28600, title: '민중기 EFI 리바이브 세럼 30ml', desc: '3GF 성장인자 EGF+FGF+IGF' },
    { category: '민중기', id: 5, price: 27100, title: '민중기 보르피린 앰플 11ml', desc: '탄력집중관리' },
    { category: '민중기', id: 6, price: 39800, title: '민중기 EGF 앰플 플러스 디판테놀', desc: 'EGF 50PPM 20% + 디판테놀 10%' },
    { category: '민중기', id: 7, price: 69800, title: '민중기 피브로블라스트 앰플 11ml', desc: 'rh-bFGF 20PPM 99%' },
    { category: '민중기', id: 8, price: 28000, title: '민중기 EFI 앰플쿠션 13g', desc: 'EGF20%+FGF+IGF' },
    { category: '민중기', id: 9, price: 31200, title: '민중기 EGF 리페어 크림 60ml', desc: '알로에베라잎수60%,병풀추출물' }
]


// 무기자차
const mugija = [
    { category: '무기자차', id: 0, price: 16400, sale: 30, title: '민중기 무기자차 썬크림 SPF40 PA++', desc: 'NO옥시벤존/NO옥티녹세이트' },
    { category: '무기자차', id: 1, price: 15900, sale: 20, title: '무기자차 데일리 썬밀크 SPF20 PA++ 75ml', desc: '백탁 적은 무기자차' },
    { category: '무기자차', id: 2, price: 12800, sale: 40, title: '민중기 무기자차 썬블럭 SPF35 PA+++ 65g', desc: '논나노/물리차단제100' },
    { category: '무기자차', id: 3, price: 21800, sale: 30, title: '닥터트럽 징크자차 SPF35 PA+++ 50ml', desc: '물리차단제100 백탁적은 무기자차' },
    { category: '무기자차', id: 4, price: 16400, sale: 20, title: '호호바 무기자차 썬크림 SPF40 PA++ 50g', desc: '깊은 촉촉함과 감동적 사용감' }
]


// ETC
const ETC = [
    { category: 'ETC', id: 0, price: 14800, title: '센텔라시카 힐스크림 35g', desc: '고농축 파우더 원료 사용' },
    { category: 'ETC', id: 1, price: 19800, title: '센텔라에센셜 165ml', desc: '센텔라테라피 수분/진정' },
    { category: 'ETC', id: 2, price: 18600, title: '마다가스카르 피지 수분크림 80g', desc: '기름/피지 잡는 수분 크림' },
    { category: 'ETC', id: 3, price: 11800, title: '티트리 마일드 클렌져 150ml', desc: '피지/모공/화이트헤드' },
    { category: 'ETC', id: 4, price: 9800, title: '자연산 티트리 에센셜 오일 10ml', desc: '호주 티트리잎오일 원액 100% ' },
    { category: 'ETC', id: 5, price: 15800, title: '아크바이™ 스팟 세럼 30ml', desc: '프로폴리스 & MultiEX 로 꿀광피부' },
    { category: 'ETC', id: 6, price: 10900, title: '자연산 냉압착 아르간오일 11ml', desc: '모로코의 선물 건강한영양+보습오일' },
    { category: 'ETC', id: 7, price: 16300, title: '프리미엄 호호바 오일 100ml', desc: '사용감 좋은 보습오일 페이셜 & 바디' },
    { category: 'ETC', id: 8, price: 4500, title: '저분자 히아루론산 필링젤 120ml', desc: '속 시원하고 확실한 필링젤' },
    { category: 'ETC', id: 9, price: 18900, title: '비피다 바이옴 90 앰플 100ml', desc: '탄탄한 피부 장벽 관리에 도움' }
]

export { doctor, minJung, mugija, ETC };