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
  115102560466-v8blj8bfbcpj2b6l5vpted0v116f3h26.apps.googleusercontent.com
  UPQ6swf7ey_RQ8nTv-X-MFqn
- Tao them prod.js va thiet lap dieu kien trong keys.js cho dev vs prod
- Thiet lap keys cho deploy tren heroku evening brushland
