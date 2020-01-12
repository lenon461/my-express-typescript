# purpose : made a well structure typescript express template

2020년 1월 13일 작업노트

[V] dataValidation 미들웨어로 분리
[V] 컨트롤러 로직 , DBAccess 로직, 라우트 로직 분리

현재 컨트롤러 로직은 미들웨어 처럼 정의한후  
라우터 로직에서 호출해서 사용함  
DBaccess 로직은 *.service.ts 에 정의한 후 컨트롤러 로직에서 호출해서 사용함  

즉 라우터로직 ---호출---> 컨트롤러로직 ---호출---> 서비스로직  
차후 서비스 로직이 복잡해지면  DBA 로직을 따로 분리해 내야 할 수 도 있음.  

[V] dotenv 에러해결 dialect 설정을 enum 계열로 정의해 주는 것도 생각해봄직함  

[?] types 폴더 DB에 저장된 테이블에 자료형을 정의중인데 models 폴더랑 다소 겹침 개선이 필요  
[?] index.ctrl.ts는 컨트롤러 로직을 클래스화 하여 제공하는것이 목표였으나,  미들웨어 형태로 사용하기위해 콜백을 리턴해 주어야 하는데, 클래스가 콜백리턴이 다소 어려운 부분이 있어 중지  
 