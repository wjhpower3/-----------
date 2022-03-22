'use strict';

/*********************************************************
*                        Javascript                      *
*********************************************************/

// Section2 Svg Animation
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
gsap.defaults({ease: "none"});

const pulses = gsap.timeline({
  defaults: {
    duration: 0.15, 
    autoAlpha: 1, 
    scale: 1.5, 
    transformOrigin: 'center', 
    ease: "elastic(8, 0.5)"
  }})
.to(".ball02", {}, 0.22)
.to(".ball03", {}, 0.55)
.to(".ball04", {}, 0.73)
.to(".ball05", {}, 0.99)

const main = gsap
.timeline({defaults: {duration: 1},
  scrollTrigger: {
    trigger: "#svg",
    scrub: true,
    start: "top center",
    end: "bottom center"
  }})
.to(".ball01", {duration: 0.01, autoAlpha: 1})
.from(".theLine", {drawSVG: 0}, 0)
.to(".ball01", {motionPath: {
  path: ".theLine", 
  align:".theLine",
  alignOrigin: [0.5, 0.5],
}}, 0)
.add(pulses, 0);


// Section3 Animation
const section2Animation = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "top top",
    end: () => innerHeight * 3,
    scrub: true,
    pin: ".grid-container",
    anticipatePin: 1
  }
})
.set(".gridBlock", {autoAlpha: 1})
.from(".gridLayer", {
  scale: 1.5,
  ease: "none",
});


// email validation
function validateEmail(inputText){
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(mailformat)){
    alert("Valid email address!");
    document.form1.email.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    document.form1.email.focus();
    return false;
  }
}

// Telephone Max Length
function telNumLength(object){
  if (object.value.length > object.maxLength){
    object.value = object.value.slice(0, object.maxLength);
  }    
}


// Fix Typing Number.
let formTel = document.getElementById('inquiryTelephone');

formTel.onkeydown = function(e) {
  if(!((e.keyCode > 95 && e.keyCode < 106)
    || (e.keyCode > 47 && e.keyCode < 58) 
    || e.keyCode == 8
    || e.keyCode == 9)) {
      return false;
  }
}

// Check Form
function Checkform(inputText) {
  let valueCheckbox = document.frm.confirm.checked;
  let valueName = document.frm.name.value;
  let valueEmail = document.frm.email.value;
  let valueTel = document.frm.telephone.value;
  let valueCont = document.frm.contents.value;
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let thisOffset = $('.privatePolicy').offset().top - 128;
  
  $('#inquiry').find('.required').removeClass('required');

  if(valueCheckbox != true){

    $('.privatePolicyBtn').addClass('required');

    $('html, body').animate({scrollTop: thisOffset}, 300);

    return false; 

  } else if(valueName == "" ) {

    $('#inquiryName').addClass('required');

    $('html, body').animate({scrollTop: thisOffset + 40}, 300);

    valueName.focus();

    return false; 

  } else if(valueEmail != "") {

    if(inputText.value.match(mailformat)) {
      
    } else {

      validateEmail(inputText);

      $('#inquiryEmail').addClass('required');

      document.form1.text1.focus();

      $('html, body').animate({scrollTop: thisOffset + 80}, 310);

      return false;
    }
  } else if(valueTel == "" ) {

    $('#inquiryTelephone').addClass('required');

    $('html, body').animate({scrollTop: thisOffset + 200}, 320);

    valueName.focus();

    return false; 

  } else if(valueCont == "" ) {
    $('#inquiryContents').addClass('required');

    $('html, body').animate({scrollTop: thisOffset + 240}, 340);

    valueCont.focus();

    return false; 
  }
}


// Open Modal Event
function openPopup(popupName) {
  let modalWrap = document.getElementById('popupWrap');
  let popup = document.getElementById('popup' + popupName);

  modalWrap.classList.add('on');
  popup.classList.add('on');
}

// Close Modal Event
function closePopup(popupName) {
  let modalWrap = document.getElementById('popupWrap');
  let popup = document.getElementById('popup' + popupName);

  popup.classList.remove('on');
  modalWrap.classList.remove('on');
}



// Jquery
$(document).ready(function(){ 

  // Site Loader Event
  setTimeout(function() {
    $('#loading').fadeOut(500);
  }, 1000);
  setTimeout(function() {
    $('#loading').remove();
  }, 2000);

  
  // Header Scroll Evnet
  $(window).scroll(function() {
    let scrollValue = $(document).scrollTop();
    if(scrollValue > 100){
      $('.header').fadeIn(300);
    } else {
      $('.header').fadeOut(300);
    }
  });

  //Header Logo Click Event
  $('.header .logo').click(function(){
    let sec5offset = $('html, body').offset().top;
    $('html, body').animate({scrollTop: sec5offset}, 1000);

    return false;
  })
  

  //Go Inquiry Buttton Click Event
  $('.goInquiry').click(function(){
    let sec5offset = $('.section5').offset().top - 128;
    console.log(sec5offset);

    $('html, body').animate({scrollTop: sec5offset}, 1000);
  });

  // Form Submit Event
  $('#inquiry').on('submit', function openSubmit(e){
    openPopup('Submit');
    console.log(e);
    e.preventDefault();
  });


let privatePolicy = `주식회사 제우스(이하 ‘회사’라 한다)는 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립․공개합니다.<br>
<br>
<br>
제1조 (개인정보의 처리목적)<br>
회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.<br>
<br>
1. 홈페이지 회원 가입 및 관리<br>
회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별․인증, 회원자격 유지․관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정이용 방지, 만 14세 미만 아동의 개인정보처리시 법정대리인의 동의여부 확인, 각종 고지․통지, 고충처리 등을 목적으로 개인정보를 처리합니다.<br>
2. 재화 또는 서비스 제공<br>
물품배송, 서비스 제공, 계약서․청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금결제․정산, 채권추심 등을 목적으로 개인정보를 처리합니다.<br>
<br>
3. 고충처리<br>
민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락․통지, 처리결과 통보 등의 목적으로 개인정보를 처리합니다.<br>
<br>
<br>
제2조 (개인정보의 처리 및 보유기간)<br>
① 회사는 법령에 따른 개인정보 보유․이용기간 또는 정보주체로부터 개인정보를 수집시에 동의받은 개인정보 보유․이용기간 내에서 개인정보를 처리․보유합니다.<br>
② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.<br>
<br>
1. 홈페이지 회원 가입 및 관리 : 사업자/단체 홈페이지 탈퇴시까지<br>
다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료시까지<br>
1) 관계 법령 위반에 따른 수사․조사 등이 진행중인 경우에는 해당 수사․조사 종료시까지<br>
2) 홈페이지 이용에 따른 채권․채무관계 잔존시에는 해당 채권․채무관계 정산시까지<br>
<br>
2. 재화 또는 서비스 제공 : 재화․서비스 공급완료 및 요금결제․정산 완료시까지<br>
다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료시까지<br>
1) 「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른 표시․광고, 계약내용 및 이행 등 거래에 관한 기록<br>
- 표시․광고에 관한 기록 : 6월<br>
- 계약 또는 청약철회, 대금결제, 재화 등의 공급기록 : 5년<br>
- 소비자 불만 또는 분쟁처리에 관한 기록 : 3년<br>
2) 「통신비밀보호법」제41조에 따른 통신사실확인자료 보관<br>
- 가입자 전기통신일시, 개시․종료시간, 상대방 가입자번호, 사용도수, 발신기지국 위치추적자료 : 1년<br>
- 컴퓨터통신, 인터넷 로그기록자료, 접속지 추적자료 : 3개월<br>
<br>
<br>
제3조 (개인정보의 제3자 제공)<br>
① 회사는 정보주체의 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.<br>
② 회사는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.<br>
- 개인정보를 제공받는 자 : <예) (주) OOO 카드><br>
- 제공받는 자의 개인정보 이용목적 : <예) 이벤트 공동개최 등 업무제휴 및 제휴 신용카드 발급><br>
- 제공하는 개인정보 항목 : <예) 성명, 주소, 전화번호, 이메일주소, 카드결제계좌정보><br>
- 제공받는 자의 보유․이용기간 : <예) 신용카드 발급계약에 따른 거래기간동안><br>
<br>
<br>
제4조(개인정보처리의 위탁)<br>
① 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.<br>
<br>
1. 전화 상담센터 운영<br>
- 위탁받는 자 (수탁자) : OOO CS센터<br>
- 위탁하는 업무의 내용 : 전화상담 응대, 부서 및 직원 안내 등<br>
<br>
2. A/S 센터 운영<br>
- 위탁받는 자 (수탁자) : OOO 전자<br>
- 위탁하는 업무의 내용 : 고객 대상 제품 A/S 제공<br>
<br>
② 회사는 위탁계약 체결시 개인정보 보호법 제25조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.<br>
③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.<br>
<br>
<br>
제5조(이용자 및 법정대리인의 권리와 그 행사방법)<br>
<br>
① 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.<br>
1. 개인정보 열람요구<br>
2. 오류 등이 있을 경우 정정 요구<br>
3. 삭제요구<br>
4. 처리정지 요구<br>
② 제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.<br>
③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.<br>
④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.<br>
⑤ 정보주체는 개인정보 보호법 등 관계법령을 위반하여 회사가 처리하고 있는 정보주체 본인이나 타인의 개인정보 및 사생활을 침해하여서는 아니됩니다.<br>
<br>
<br>
제6조(처리하는 개인정보 항목)<br>
회사는 다음의 개인정보 항목을 처리하고 있습니다.<br>
<br>
1. 상담신청고객 서비스 제공 및 고객 정보 관리<br>
이름, 소속 회사명, 이메일주소, 연락처<br>
<br>
2. 인터넷 서비스 이용과정에서 아래 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다.
IP주소, 쿠키, MAC주소, 서비스 이용기록, 방문기록, 불량 이용기록 등<br>
<br>
<br>
제7조(개인정보의 파기)<br>
① 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.<br>
② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.<br>
③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.<br>
1. 파기절차<br>
회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.<br>
2. 파기방법<br>
회사는 전자적 파일 형태로 기록․저장된 개인정보는 기록을 재생할 수 없도록 로우레밸포멧(Low Level Format) 등의 방법을 이용하여 파기하며, 종이 문서에 기록․저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.<br>
<br>
<br>
제8조(개인정보의 안전성 확보조치)<br>
회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.<br>
1. 관리적 조치 : 내부관리계획 수립․시행, 정기적 직원 교육 등<br>
2. 기술적 조치 : 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보
등의 암호화, 보안프로그램 설치<br>
3. 물리적 조치 : 전산실, 자료보관실 등의 접근통제<br>
<br>
<br>
제9조(개인정보 자동 수집 장치의 설치∙운영 및 거부에 관한 사항)<br>
① 회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.<br>
② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.<br>
가. 쿠키의 사용목적: 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해
사용됩니다.<br>
나. 쿠키의 설치∙운영 및 거부 : 웹브라우저 상단의 도구>인터넷 옵션>개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.<br>
다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.<br>
<br>
<br>
제10조(개인정보 보호책임자)<br>
① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.<br>
<br>
▶ 개인정보 보호책임자<br>
성명 : OOO<br>
직책 : OOO<br>
연락처 : <전화번호>, <이메일>, <팩스번호><br>
※ 개인정보 보호 담당부서로 연결됩니다.<br>
<br>
▶ 개인정보 보호 담당부서<br>
부서명 : OOO 팀<br>
담당자 : OOO<br>
연락처 : <전화번호>, <이메일>, <팩스번호><br>
<br>
② 정보주체께서는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.<br>
<br>
<br>
제11조(개인정보 열람청구)<br>
정보주체는 개인정보 보호법 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 회사는 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.<br>
<br>
▶ 개인정보 열람청구 접수․처리 부서<br>
부서명 : OOO<br>
담당자 : OOO<br>
연락처 : <전화번호>, <이메일>, <팩스번호><br>
<br>
<br>
제12조(권익침해 구제방법)<br>
정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.<br>
▶ 개인정보 침해신고센터 (한국인터넷진흥원 운영)<br>
- 소관업무 : 개인정보 침해사실 신고, 상담 신청<br>
- 홈페이지 : privacy.kisa.or.kr<br>
- 전화 : (국번없이) 118<br>
- 주소 : (58324) 전남 나주시 진흥길 9(빛가람동 301-2) 3층 개인정보침해신고센터<br>
<br>
▶ 개인정보 분쟁조정위원회<br>
- 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)<br>
- 홈페이지 : www.kopico.go.kr<br>
- 전화 : (국번없이) 1833-6972<br>
- 주소 : (03171)서울특별시 종로구 세종대로 209 정부서울청사 4층<br>
<br>
▶ 대검찰청 사이버범죄수사단 : 02-3480-3573 (www.spo.go.kr)<br>
▶ 경찰청 사이버안전국 : 182 (http://cyberbureau.police.go.kr)<br>
<br>
<br>
제13조(개인정보 처리방침 시행 및 변경)<br>
이 개인정보 처리방침은 2022. 3. 25부터 적용됩니다.`;

  $('.privatePolicy').html(privatePolicy);

  //AOS start
  AOS.init();

}); 