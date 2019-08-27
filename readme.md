# Day 1:

- Install express vao tao code base
- Xem chart image
- Hoc cach deploy qua heroku cli
  cmd: heroku create, heroku login, heroku open, git remote add heroku,git push heroku master (Bai 14,15)
- Hoc cach dung passportjs cho Oauth.
  cmd: npm install passport passport-google-oauth20
  Cau hinh Google Oauth Api tree google console api
  http://localhost:3000/auth/google
  Client ID
  Client Secrete: luu tron config/keys (Bai 19,20...25)
- Cai dat nodemon thiet lap script, run npm run dev
- Tach file tu idex.js --> passport.js, authRoutes.js (bai 29)
- Truyen app tu idex sang authRoutes (cha sang con) (bai 29)

# Day 2

- Xu dung ID gui ve tu profile de lam Token (30,31)
- Tao database tren mlab
- Tai va goi mongoose (33,34, figure 07)
- Tao collection User trong mongodb vs mongoose de luu thong tin ID tu google account
- Tao folder models de chua tat ca cac model, tao file User.js
- Access vao mongoose models trong file passport.js
- Goi model user vua tao trong User.js vao passport.js
- Tao new User lay thong tin googleID = profile.id trong passport.js
- Set dieu kien de ko tao them Id trong database sau khi dang nhap lan sau (37)
- Neu id da ton tai, thuc thi dieu huong voi done property tu profile tra ve(38)
- Serialize user tra ve user.is trong database dung cho cookie, can dung user.id vi co the nguoi dung dang nhap bang nhieu cach, co the facebook hoac truc tiep (39)
- Dau tien ta dung profile.id de dang nhap bang google, sau do ta dung user.id de luu cookie
- install cookie.session de tao cookie session trong index.js (40)
- Tao cac api current_user vs logout, test cac route nay (42)
- How express work (43) Figure 004
- Giai thich diagram 015 (43)
- Tim hieu cookie-session vs express-session, giai thich ve inspect network luc nao gui cookie ve trong response(44)
- Su khac nhau khi deploy dev env vs production env (o cac key) (45)
- Tao them database prod va google api cho production (46)
- Tao them prod.js va thiet lap dieu kien trong keys.js cho dev vs prod
- Thiet lap keys cho deploy tren heroku evening brushland
- push heroku va new branch github
- Loi mo la do khac nhau giua https vs http, thiet lap proxy:true trong passport.js

# Day 3

- create react app github xem tutorial
- npm i -g create-react-app
- create-react-app client (51
- cach khoi dong ca server va client, xu dung concurrently va thay doi script trong package.js (52) \*\*\*
- install concurrently
- Tao link Sign In With Google va dat href toi duong link server/ Them proxy trong package.json cua client de khong phai goi duong dan day du cua api server --> ko duoc, them plugin va file setupProxy.js(53)
- Optimization cho production by mpm run build tai client, proxy chi quan trong o Dev env, vi no ko ton tai o Prod env do ca client vs server deu nam tren heroku(55)
- Tai sao khong su dung 2 server production rieng cho api va font end nhu dev env ma phai chung 1 server --> su dung cookie --> Su dung proxy (55)
- Cach proxy lam viec (55 figure 010 Oauth Flow)
- Cach dung ajax vaf fetch function (56), fetch tra ve mot promises, xu dung async vs await thay the syntax \*\*\*
- Su dung async await sua file passport.js (57)
- Delete tat ca defaul file reactjs trong src (59)
- Trong client cai dat redux vs react-redux
- Tao file index.js trong client/src
- Neu component co export ta len de ten viet hoa vd App.js, neu component chi xu ly ta de viet thuong vd index.js
- O backend ta dung require do lam viec tren nodejs, o front end ta dung import vi co babel
- Redux (63), import Provider from react-redux, import createStore, applyMiddleware from redux
- Provider chua store, Provide cho phep store tiep can moi component, Store chua thong tin ve state cua cac component, khi update state chi can duyet qua store. Khi co update state Provider se thong bao cho tat ca component ve dieu nay. \*\*\* (figure 007 - react)
- Store chua cac Reducers
- Tao cac reducer authReducers vs index.js trong folder reducers. Combine cac reducer trong reducers/index.js bang combineReducer from redux.
- Import reducer ve index.js cua src folder va chuyen no vao createStore (65)
- Mo mot store chua tat ca ca reducer dai dien cho state cua cac component, provider dong vai tro nhu nha cung cap, phan phoi va cap nhat cac state cua component den reducer (gian hang trong cua hang)
- Gioi thieu ve dieu kien hien thi cua cac componet (66)
- Khi thay doi cac route giao dien se thay doi theo (67). Import route trong App.js, import {BrowserRouter, Router} from 'react-router-dom', BrowserRouter nhu la bo nao cua react-route noi cho rr biet cach phan ung voi cac url khac nhau, Route de thiet lap cac rules
- Tat ca hien thi cua cac component se deu dc goi qua App de do qua #root
- (68) Dung BrowserRoute vs Route (path, component properties) de dua cac Component vao trong App. Tranh go nham Route vs Router \*\*\*
- (70) Tranh cac Route khong hien len cung nhau, bang thuoc tinh exact={true} hoac bo {true} cua Route, Chi can dat <Header /> len tren tat ca cac Route la phan nay se xuat hien trong tat ca cac giao dien \*\*\*
- Tao Header component va import vao App.js (71)
- material ui cho css vi day la cong cu phu hop vs javascript va React qua style property, ko can phai chuyen doi dang JSX --> nhung ko su dung
- Cai dat va Su dung materialize css, import materialize.min.css vao index.js do no co the covor App.js, App.js cover het cac thanh phan con lai, khong con './' doi voi npm module
- Them css cho Header.js
- Tao action creator den api/current_user, install axios vs redux thunk (cho dispatch) nhu la middleware (75)
- Tao folder actions de chua cac actions, tao file index.js trong actions
- Trong actions tao file types.js de luu cac action types, tao action FETCH_USER va import vao actions/index.js
- Trong index.js dung axios de get api, truoc do them target api cho proxy
- (76) Nhiem vu cua Redux Thunk la chuyen action creator thanh action, \*\*\*
- Dispatch function cua store nhu mot cai phau day action vao store (fig 020), redux thunk giup chung ta su dung truc tiep dispatch function

# Day 4

- (77) Call action FETCH_USER tai App.js, action phai duoc goi truoc khi trang duoc load ra, do do phai dung life cycle componentDidMount
- Sua lai App lai 1 class trong App.js de su dung componentDidMount
- (78) Import connect tu react-redux va tat ca action \* as actions tu action.js vao app.js, luc nay actions se tro thanh 1 object trong App.js
- Su dung connect tai vi tri export App, luc nay tat ca cac actions se duoc su dung nhu properties tai App.js, truoc do can phai export fetchUser
- (79) Su dung async await cho actions/index.js
- (80) Ta chi quan tam den res.data tra ve tai payload khi dispatch tai actions/index.js; Figure 21 ba trang thai (null, ) khi nhan dang ngap bang google, se la dieu kien de chuyen route.
- (81) Tao action tai Header quan connect cua react redux, tao function mapStatetoProps de truyen state tu store ve Header.
- Xay dung ham renderContent() de kiem tra dieu kien hien thi nut Login with google truoc va sau khi dang nhap, vao goi no vao trong jsx
- (82) Thay doi dao dien Header theo cac case null, false, default tuong ung voi trang thai dang nhap
- (83) Thiet lap route auth/google/callback, dieu huong sang './services' \*\*\*
- (84) Thiet lap logout route, cai duong link api cho button logout trong header, thiet lap dieu huong cho api/logout trong authRoutes ve trang chu
- (85) Tao Landing component, vao import vao trong App.js
- (86) Su dung Link cua React thay cho the a, Link chuyen sang component khac chu khong tai lai toan bo html nhu a, thuoc tinh dieu huong cua Link la to={}, su dung dieu kien ? : de kiem tra this.props.user co dang nhap hay chua de dieu huong phu hop
- (87, 88) Credict card section, rule of billing, Khong nhap va luu so the dang tho, luon su dung api ben thu 3, o day la stripe
- (89) Flow payment bang stripe
- (90) test cua Stripe cho ta su dung fake credit card, cai dat plugin stripe checkout react \*\*\*
- (91) Su dung cap Api keys cua stripe, them stripePublishableKeys vs stripeSecretKey vao configs/dev.js vs prod.js; config keys tren heroku. Tat ca cac config khong duoc su dung tren front end, trong dev ta van can 1 folder config o client, luu y su khac nhau giua import vs require trong keys.js o backend vs frontend. O front end ta khong con set logic ve moi truong production hay dev dc nua.
- (92) SU DUNG KEY O FRONT END REACT create react app environment variables git hub, --> adding custom environment variable, de su dung env o front ta tao 2 file .env.development vs .env.production trong client, trong 2 file tren nhap bien REACT_APP_STRIPE_KEY luu y bien phai bat dau bang REACT_APP... \*\*\*
- (93) React app stripe checkout (github read) component, tao component Payment.js trong src. Set cac thuoc tinh amount don vi nho nhat la cent \$; token : dc gui ve tru stripe.com, stripekey = {REACT_APP_STRIPE_KEY}
  import Payments vao Headers.
- (94) Chinh sua hien thi trong Header
- (95) Chinh sua nut Payment
- (96) Add Credits vao user account (Figure 003), tao mot action moi HandleToken trong file action/index.js, thuc hien post request den server.
- (97) Goi action moi them vao Payments.js bang connect redux.
- (98) Tao api/stripe trong file moi billingRoutes.js cua routes. Goi route vao main index.js
- (99) Chinh sua file billingRoutes.js, install stripe api vao server side , stripe.com/docs/api/node
- Cai dat body Parse de giup lay info tu api dung cho post request
- (100) check api/stripe, su dung stripe api docs, stripe charge create, set amount, currency, discription, source
- (101) Hoan thien api/stripe
- (102) Them credit vao model user (them tien vao tai khoan), req.user.credits +=5 tu dong thuc thi do da goi passport initialize
- (103) Thiet lap dieu kien phai login roi moi duoc nap credits, req.user la thong tin khi dang nhap roi dc passport tu dong lay, if (!req.user) dieu kien nay se dc dung lai nhieu lan do do nen tach ra mot vi tri de tien goi
- (104) Tao folder middlewares de chua tat ca cac middlewares, tao file requireLogin.js va su dung trong route can den
- (106) Them phan credit dang co vao trong header
- (107) Update header credits ngay sau khi nap them tien do token da dc luu
- (108) Deploy len heroku, su dung npm run build de ghep client vao server backend \*\*\*, lam sao de chay route tao react router tren server, giai phap la truyen no qua index.html de sau do di toi main.js va vao react
- (110) 3 cach de deploy, cach 1 truc tiep commit build project, cach 2 push len herouku va heroku tu cai dat all packages/dependencies (kho cho heroku cai dat tat ca cac dependencies nay va cung nang),
- Cach 3 Push to CI Server, CI Server co the run, test tat ca codebase tai len git, Ci commit and build client va deploy len heroku.
- Circle CI
- 111 chon cach 2, --> heroku customize build process, config lai script trong package.json, heroku-postbuild chi install tai client
