// 닥터트럽
const doctor = [
    { category: 'doctor', id: 0, price: 16800, title: '닥터트럽 징크 마스크 100ml', desc: '리얼 수딩 마스크팩 BEST3' },
    { category: 'doctor', id: 1, price: 16800, title: '닥터트럽 징크크림 60g', desc: '탄력/모공/각질/개선' },
    { category: 'doctor', id: 2, price: 8600, title: '닥터트럽 기능성 하이드로겔 30g', desc: '고농축 앰플 한병이 통째로' },
    { category: 'doctor', id: 3, price: 9800, title: '닥터트럽 피지제로 센텔라 팩트 8g', desc: '유분, 피지 컨트롤과 진정 케어' },
    { category: 'doctor', id: 4, price: 9800, title: '닥터트럽 셀라인 미네랄 수딩 토너 300ml', desc: '해조칼슘 미네랄 이온수 87% 수퍼수딩' },
    { category: 'doctor', id: 5, price: 14800, title: '닥터트럽 판테놀 샴푸 200ml', desc: '지성 두피를 위한 순한 샴푸' },
    { category: 'doctor', id: 6, price: 18900, title: '닥터트럽 아하 10 바디 클렌져 200ml', desc: '피부 밸런스+피부결 개선에 도움' },
    { category: 'doctor', id: 7, price: 19800, title: '닥터트럽 세라마이드 접착크림 60ml', desc: '20%할인 고함량 세라마이드' },
    { category: 'doctor', id: 8, price: 16800, title: '닥터트럽 포어 오프너 크림 60ml', desc: '피부결을 매끈하고 건강하게' },
    { category: 'doctor', id: 9, price: 16800, title: '닥터트럽 나이아텐 세럼 30ml', desc: '모공 관리 + 생기 부스팅 세럼' }
]


// 민중기
const minJung = [
    { category: 'minJung', id: 0, price: 9800, title: '민중기 프로폴리스 앰플', desc: '프로폴리스 98% 함유' },
    { category: 'minJung', id: 1, price: 69800, title: '민중기 피브로블라스트 앰플 11ml', desc: '바이오 기능성 화장품 rh-bFGF 20PPM 99%' },
    { category: 'minJung', id: 2, price: 14800, title: '민중기 EGCG 5% 앰플 13g', desc: '녹차카테킨+탄닉애씨드 민감성+모공수축' },
    { category: 'minJung', id: 3, price: 28600, title: '민중기 EFI 리바이브 세럼 30ml', desc: '3GF 성장인자 EGF+FGF+IGF' },
    { category: 'minJung', id: 4, price: 27100, title: '민중기 보르피린 앰플 11ml', desc: '탄력집중관리' },
    { category: 'minJung', id: 5, price: 14800, title: '민중기 IGF 미주탄 앰플', desc: '피부 장벽관리와 미백, 주름개선, 탄력집중관리' },
    { category: 'minJung', id: 6, price: 8800, title: '민중기 KGF 손톱 영양 앰플', desc: '손톱강화, 큐티클 영양 앰플' },
    { category: 'minJung', id: 7, price: 28000, title: '민중기 FGF 앰플 30ml', desc: '리페어 FGF 2PPM원료 99%' },
    { category: 'minJung', id: 8, price: 31200, title: '민중기 EGF 리페어 크림 60ml', desc: '알로에베라잎수60%,병풀추출물' }
]


// 무기자차
const mugija = [
    { category: 'mugija', id: 0, price: 16400, sale: 30, title: '민중기 무기자차 썬크림 SPF40 PA++', desc: 'NO옥시벤존/NO옥티녹세이트' },
    { category: 'mugija', id: 1, price: 15900, sale: 20, title: '무기자차 데일리 썬밀크 SPF20 PA++ 75ml', desc: '백탁 적은 무기자차' },
    { category: 'mugija', id: 2, price: 12800, sale: 40, title: '민중기 무기자차 썬블럭 SPF35 PA+++ 65g', desc: '논나노/물리차단제100' },
    { category: 'mugija', id: 3, price: 21800, sale: 30, title: '닥터트럽 징크자차 SPF35 PA+++ 50ml', desc: '물리차단제100 백탁적은 무기자차' },
    { category: 'mugija', id: 4, price: 19800, sale: 20, title: '닥터트럽 바이오 리페어 썬크림 SPF40 PA++ 60ml', desc: '무기자차 민감하고 붉어진, 문제성 피부' }
]


// 아크바이
const acbye = [
    { category: 'acbye', id: 1, price: 14800, sale: 20, title: '아크바이 딥 클렌징 워터', desc: '워터프루프, 한번에 딥 클렌징' },
    { category: 'acbye', id: 0, price: 22600, sale: 30, title: '아크바이™ 클린 페이스 폼클렌징 120ml', desc: '민감성 피부순하고 촉촉한 클렌징' },
    { category: 'acbye', id: 2, price: 8600, sale: 40, title: '아크바이 딥 클렌징 젤 120ml', desc: '쉽고 간편한 썬크림&비비 세안제' },
    { category: 'acbye', id: 3, price: 14800, sale: 30, title: '시드물 효소 파우더 클렌져 60g', desc: '카테킨/모공/각질 저자극/순한/세안제' },
    { category: 'acbye', id: 4, price: 6800, sale: 20, title: '아크바이™ 로션 120ml', desc: '민감성 지복합성 건강한 보습' },
    { category: 'acbye', id: 5, price: 9800, sale: 20, title: '아크바이™ 모델링 마스크 팩', desc: '민감성, 모공, 진정 관리를 위한 모델링 팩' }
]


// 사카로
const saccharo = [
    { category: 'saccharo', id: 0, price: 14800, sale: 30, title: '발효케어 온천수미네랄워터 125ml', desc: '국산 온천수 85%스킨/토너/미스트 사용' },
    { category: 'saccharo', id: 1, price: 25500, sale: 20, title: '사카로 퍼스트 앰플', desc: '효모발효여과물 73% 따가움 개선 버전' },
    { category: 'saccharo', id: 2, price: 31200, sale: 40, title: '사카로 광채 토너 128ml', desc: '발효 광채 탄력의 꿈 광채피부/자연보습' },
    { category: 'saccharo', id: 3, price: 9600, sale: 30, title: '사카로 오일 미스트 100ml', desc: '사카로 효모발효성분수분+오일 미스트' },
    { category: 'saccharo', id: 4, price: 19840, sale: 20, title: '사카로 효모 테라피에센스 60ml', desc: '효모 발효 성분 90% EGF,알란토인' },
]


// ETC
const ETC = [
    { category: 'ETC', id: 0, price: 19800, title: '카렌듈라 더블 딥클렌징 오일 150ml', desc: '순하지만 너무 잘 지워지는 카렌둘라꽃오일 45%' },
    { category: 'ETC', id: 1, price: 12500, title: '순수 비타민C 30% 앰플 13g', desc: '비타민C 30% 화이트닝/블랙스팟/잡티' },
    { category: 'ETC', id: 2, price: 13800, title: '시드물 티트리 에센셜 165ml', desc: '티트리 성분을 담은 피부 진정 촉촉 수분젤' },
    { category: 'ETC', id: 3, price: 34800, title: '황금 동백 귀한 크림 80ml', desc: '초강보습/장벽/탄력' },
    { category: 'ETC', id: 4, price: 9800, title: '프리미엄 호호바 오일 100ml', desc: '사용감 좋은 보습오일 페이셜 & 바디' },
    { category: 'ETC', id: 5, price: 23800, title: '마다가스카르 리얼 수분크림 80g', desc: '초 민감성, 장벽강화 다당류 보습' },
    { category: 'ETC', id: 6, price: 9800, title: '스킨소스 D-판테놀 앰플 32ml', desc: '확실한장벽케어 영국산 D-판테놀 30%' },
    { category: 'ETC', id: 7, price: 8900, title: '알로에 에센셜 165ml', desc: '국민 알로에 수분젤되기! 더욱 노력하겠습니다' },
]

export { doctor, minJung, mugija, acbye, saccharo, ETC };