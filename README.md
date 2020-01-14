# purpose : made a well structure typescript express template

#### 2020년 1월 13일 작업노트

- [V] dataValidation 미들웨어로 분리  
- [V] 컨트롤러 로직 , DBAccess 로직, 라우트 로직 분리  

현재 컨트롤러 로직은 미들웨어 처럼 정의한후  
라우터 로직에서 호출해서 사용함  
DBaccess 로직은 *.service.ts 에 정의한 후 컨트롤러 로직에서 호출해서 사용함  

즉 라우터로직 ---호출---> 컨트롤러로직 ---호출---> 서비스로직  
**차후 서비스 로직이 복잡해지면  DBA 로직을 따로 분리해 내야 할 수 도 있음.  **

- [V] dotenv 에러해결 dialect 설정을 enum 계열로 정의해 주는 것도 생각해봄직함  

- [?] types 폴더 DB에 저장된 테이블에 자료형을 정의중인데 models 폴더랑 다소 겹침 개선이 필요  
- [?] index.ctrl.ts는 컨트롤러 로직을 클래스화 하여 제공하는것이 목표였으나,  미들웨어 형태로 사용하기위해 콜백을 리턴해 주어야 하는데, 클래스가 콜백리턴이 다소 어려운 부분이 있어 중지  
 
#### 2020년 1월 14일 작업노트

- [TODO] JWT / access token & refresh token 인증 구현
- [TODO] Test code 작성 (ex, jest, mocha) not decided 

- [?] JWT 프로세스 구현중  

- [V] dao logic 과 service logic 통합  
모든 DBA 요청을 일일이 함수를 만들 이유가 없다고 판단,  
 나눠서 에러를 던지기 위함이였는데 시퀄라이즈에서 뱉어내는 에러로 충분하다고 판단  
- [V] 회원가입 로그인 라우터 및 로직 생성  
회원 가입시 204   
로그인시 201 {accesstoken, refreshtoken, expiresIn} 토큰 신규 발급 및 디비 업데이트  
- [V] verifyToken middleware 생성    
req.headers.authoriztion 항목에 token 을 검사  
accesstoken 을 담아서 보낼경우 1시간동안 모든 유효한 요청 처리  
refreshtoken 을 담아서 /refreshAccesstoken으로 보낼경우 새 accesstoken 발급  
만료시 재 로그인 으로 처리하면 됨  
- [?] refreshtoken을 담아서 보내도 일단 모든요청 처리가능  

- [TODO] 다른 라우터에도 dao 로직 통합이 필요  

