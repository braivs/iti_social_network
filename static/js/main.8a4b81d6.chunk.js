(this.webpackJsonpiti_social_network=this.webpackJsonpiti_social_network||[]).push([[0],{11:function(e,t,n){e.exports={navbarContainer:"Sidebar_navbarContainer__ufyZh",nav:"Sidebar_nav__3JYpr",item:"Sidebar_item__2A-p9",navLink:"Sidebar_navLink__1tLgI",active:"Sidebar_active__1olf-",friends:"Sidebar_friends__p4LGN",friendsContainer:"Sidebar_friendsContainer__lXITY"}},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}));var r=n(41),a=n(3),c=n(26),i={dialogs:[{id:1,name:"BriWS"},{id:2,name:"Masha"},{id:3,name:"Lera"},{id:4,name:"Liza"},{id:5,name:"Diana"},{id:6,name:"Kristina"}],messages:[{id:1,message:"Lorem ipsum dolor sit amet",avatar:c.a},{id:2,message:"Lorem ipsum dolor sit amet",avatar:c.a},{id:3,message:"Lorem ipsum dolor sit amet",avatar:c.a},{id:4,message:"Lorem ipsum dolor sit amet",avatar:c.a}]},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;if("SEND-MESSAGE"===t.type){var n=t.newMessageBody,s={id:(new Date).getTime(),message:n,avatar:c.a};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[s])})}return e},o=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}}},13:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return r}));var r,a,c=n(133),i=n.n(c).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"36c47461-cd5e-48a2-a6d3-2dd87b11456f"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return i.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return i.post("follow/".concat(e))},unfollow:function(e){return i.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),o.getProfile(e)}},o={getProfile:function(e){return i.get("profile/"+e)},getStatus:function(e){return i.get("profile/status/"+e)},updateStatus:function(e){return i.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),i.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return i.put("profile",e)}},u={me:function(){return i.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return i.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return i.delete("auth/login")}},l={getCaptchaUrl:function(){return i.get("security/get-captcha-url")}};!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error",e[e.CaptchaRequired=10]="CaptchaRequired"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(a||(a={}))},134:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__snK0W",selectedPage:"Users_selectedPage__1A2Tj",pages:"Users_pages__r5DZK"}},169:function(e,t,n){},170:function(e,t,n){},26:function(e,t,n){"use strict";t.a=n.p+"static/media/ava.485fc51f.png"},27:function(e,t,n){"use strict";n.d(t,"b",(function(){return A})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return j}));var r=n(3),a=n(50),c=(n(1),n(92)),i=n(51),s=n.n(i),o=n(0),u=["input"],l=["input"],d=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(o.jsxs)("div",{className:s.a.formControl+" "+(c?s.a.error:""),children:[Object(o.jsx)("div",{children:a}),c&&Object(o.jsx)("span",{children:r})]})},A=function(e){var t=e.input,n=Object(a.a)(e,u);return Object(o.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)(Object(r.a)({},t),n),e))}))},f=function(e){var t=e.input,n=Object(a.a)(e,l);return Object(o.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e,t,n,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},i))," ",s]})}},300:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(66),i=n.n(c),s=(n(169),n(37)),o=n(38),u=n(39),l=n(40),d=(n(170),n(12)),A=n(18),f=n(14),j=n(11),b=n.n(j),g=n(93),h=n.n(g),p=n(0),O=function(e){return Object(p.jsxs)("div",{className:h.a.friendContainer,children:[Object(p.jsx)("img",{src:e.avatar,alt:"",className:h.a.avatar}),e.name]})},m=function(e){var t=Object(f.c)((function(e){return e.profilePage.profile})),n=e.friends.map((function(e){return Object(p.jsx)(O,{id:e.id,name:e.name,avatar:e.avatar},e.id)}));return t?Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:b.a.friends,children:[Object(p.jsx)("h3",{children:"Friends"}),Object(p.jsx)("div",{className:b.a.friendsContainer,children:n})]})}):Object(p.jsx)("div",{})},v=Object(f.b)((function(e){return{sidebar:e.sidebar}}))((function(e){return Object(p.jsxs)("div",{className:b.a.navbarContainer,children:[Object(p.jsxs)("nav",{className:b.a.nav,children:[Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsxs)(A.b,{to:"/profile",className:b.a.navLink,activeClassName:b.a.active,children:[Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA9gAAAPYBa0iqmwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIJSURBVFiFvdc7a1RRFAXg78QQRBODCmnULgmojcFXEAshjRY2ggF/gxDstBD8FUmfys7GNmATBIOVYgSLNNEiZBIfxEh85FjMGRjjzH3M3JkDixlm9l5rcc7Ze98bYozKrBDCedzBpQR4nfAsxviuFGGMsRAwiMfYQ2yDvRQzWJi3oPgwVjKED2IFw1UaWCgh3sBCJQYwg/0ODOxjpgoDSx2IN7CUxx+yqiCEEPAZo1kXOWN9xfGYITKQQzDehbiUO54VkGfgdBfihTjyjuAEtro0cDLGuN3uz8wdSIlrXYivZYnnGkjrRRcG8nMLlOEYNpUvwU2MVdUJZzswMFtZK04m5rBbQHgXc4V5iwYmExNYzhBfxkQZzswybLdCCGe0eB6IMa6X5srpA0O4jXv4hPkY44ccc5O4j1N4iucxxp9tEzK2el69CTVv8W8sYhojTfEj6bfFFNOcs5W4Wh5NK/Ep1ORftoiPCUVia7iYaQBX1Kdfp+M3D19wraUBXMW3Hoo3sIPr/xhQb8lv+yDewCoONRuY7qN4A1PNBobwpo/iLzFw8A5cSOfTa/FtTLargpv41UPxH5ouYLs+cFf220+n+I5bhYYRbmCjQvF1XC41DXEUj/zfjstgAw9wuONxjGN4ov6MX1S4hoc4Utk4DiGMqrfqcwln0+cfvFdvLqvp+6sY404R3r9OxtlBlOX8kQAAAABJRU5ErkJggg==",alt:""}),"Profile"]})}),Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsxs)(A.b,{to:"/dialogs",className:b.a.navLink,activeClassName:b.a.active,children:[Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAH3SURBVFiFzZfPK0RRFMc/fhcxbPkLbMgOIRqjKAvZyL9gy1+hhImisSJLycoSsfA7hT9AlF9DZIMyFudc87zmmffe3FdOnW7v3HvP9zP33nPfG/jnVgz0AjPAOXAPfAFp4AiYBzp1nHXrB86AjA+/BOK2hEuBRZ/Cbl/U+aGtHNgMKW58DagIC5AsUNx4Moz4oCXxDHJQE0EBjiwCZIDTIOJxy+LG2/MJm/odCEIbwEa19awMA9AVEUCbto3AAlDmNTBNNFuQ1vwxfd7AYzVeIwJ41/xljthcLoDniACuNX+dK95nhM0ZuMhFZcFutK13xSeBIifASUQAO9o2u+JNaIkagNWIANa1zXUrjrgDh9jd/wNkmauApxz9e26AbcsAPZp3zKP/0SleA3xYFJ/UvDHgzmPMixNg2KL4OlCieZf/GHfvBFiyJL5A9qYbzzN21wlw5er8RM6E31f0Idk9B5hAvgn+mjPlBNhBbq0Ush0xR18rMKsiDwp3A+wje92BXipALbDiE7oNi1aJnPZbn+LHZqLfL9hSoAX55XdANdCA3HAJYIjfq5bP3gKM/TFbH6wZpOSDAAOyCmsWIYaDAhiIWfKfcD+eCgNgLI68Qf0InSEl/emKXxUCYKwLmEZK8pHff1yTQDfZEo0hy55CSn7LBkDB9g0rdORSmQu65AAAAABJRU5ErkJggg==",alt:""}),"Dialogs"]})}),Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsxs)(A.b,{to:"/users",className:b.a.navLink,activeClassName:b.a.active,children:[Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJVSURBVFiF7ZYxTxRRFIW/O4wEkNhYUoCAFCQUBmgIArEwIaGy2YRCQoOBX8Cv4CdQkBA0VnTEqM0mVpZmY5bgSmEWsZACg6jkWnDfujv7ZnZmNzqNN7mZZO455565783ME1Ulzwhy7Q6E7ZBEpAeYAabs1lvgjap+zyymqpkSmAUOAY3kITCbWS9j8zngytPc5RUw91cMAL3AUUJzl0dAb1rdLJtwBhhOgRs2bKpoMiAifSIyLyIFERmpK01FsQlRw4rIiGnNi0hfEzIy5iWgSuNId4FbwAatx+9ywzi7kftVYMm7B4AJ4DJGcAcYzWBg1Di+2iUw4TOw10L0DlBO0bxs2CTMnm8T3mtan8aYBh4BpwmYU8NMt9Cq9ao38KUF6VhV3wELQMVTrwALhjluofWnV90SbBI/ss9AV2TDjgFPLMcitS7jxOltOqy4v6GIhMBr4H7E7SfgoaqWROQGMA4MARLBKfARKKnqTxEZB14AAxFcEXigqr8aJmBGQptEEXgPPAMGrbYCnCU8lcszYMU4g8BT0yqadpj5Uwysp2gczfVM/wKgAOwDH4ATG303cBs4b8PAuXG7TevEtPeBQoMBYNsjULbaYhvNXS6ahu/7sa2qBCKyDKzSHO5Vu+uppQ3H9b22qyKyHABrMWS1ayfHNsfVmPpaAEx20KDTmAyA/hwN9Od+Kv5vICB+h/6L0AA4yNHAQQBsAReeolueHx00cFzfUl8AW6GqvhSRAeAx10cpF1W7Puf6l3ozY/NvxgV4BZTqahVgR1W/1s4DeUXub8Fvtlx/5O0ZI1YAAAAASUVORK5CYII=",alt:""}),"Users"]})}),Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsxs)(A.b,{to:"/news",className:b.a.navLink,activeClassName:b.a.active,children:[Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7QAAAO0Bq2+TWQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGmSURBVFiFxdc9axRRFMbx3xkEMYgmFtqktrIIBoR0ithZmtYm2Fim0C/gNxC0Eb+AiI2m8w0shMVKEG0l0UYQbIygHouZhWW5KzszzO4Dp5j7Ms9/7j3nDhce4C9yoHiNKjOVwsDm4zg7C6BCGF5V645FaekAR+YY8wNv1XtZ0gbODAmwlZkfZnVGxAkc4HgXgHm2YCsi/peoG1jpYk5dAbOWdmglHi4TAHJRADewP/G8iTuUk/An7uJrB6OTuInTU+1vMvPj+GEypUoAzzLzdgfz8ctXcGve8SWAyxGxoy6ttlrDtTYTSgBr6j/kQrT0o7gE8AnrmRltA6fwoi/A58zssv8y83vzAXOrlANXIuK97kl4oS8AnGticJUA/uCJ7iuwjWN9AJ5m5nYHcxAR37DbB2AzIi7hSwf/VVxsM6EEsK5lKfXR0g+i0grs47ruW3AP5/sAvMvMlx3MQUS8agvwC0cn2q5GxCP9ynBaq4VxGm8jw1/N7k/dB5837SPqmh0a4DceY2fCPBtvFfYWADEde6jGS1I1NCMcDmh62Hjsaq7s/wBaFEE2np7rpAAAAABJRU5ErkJggg==",alt:""}),"News"]})}),Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsxs)(A.b,{to:"/music",className:b.a.navLink,activeClassName:b.a.active,children:[Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABIwAAASMBckF33gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGYSURBVFiFxdbBSxVRFMfxT2JBabZz4apN7hSKNmmrBGmXu4TAwPAfcNcf4K5FtA7aRPgHuFAK2rXQhaKQrRJpI5FgUokWb1rcNzA9ZsZp3sybHxxmuPdwzpdz7z33Ul7X8BHbuNpFnNKaRNS2hSYA7iYA9jBUJkhfRTDX8RIXKopXSMkKxPYKl5oEiLCDsSYBIvzEkyYBYnuNwSYBInzIg6jqFOTpDp7XEbhoBSK0cDstSC8qQOgPc3UCHBbweVAnwAwe4VuOz4iUTlkVQAtvcAsbGT79uFIXQKwvmMZuytx3oUHVCgBHeCxUJantNOe6TsEGVjrG3vcSgNCGk1ruNcBe4n9N+r7oSslOOJEyv9qeO8PNrCB1VuBr+/sUm1lO5z2hLmMW93EDv/EZ77CPt22/SeHWS6oPwzj4H+qkJoR1zLpgTuQvQVcax4+c5J1WGiBrDzzDQNmg3QJcxL1eJM8C6M8Yz9NxBSz/aF3x9T8QqlappvCnIMB81cljPRRKm5X4FIt1JY81giVsCcfyFz7hBUarSPAXsfaW5vbkQOIAAAAASUVORK5CYII=",alt:""}),"Music"]})}),Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsxs)(A.b,{to:"/settings",className:b.a.navLink,activeClassName:b.a.active,children:[Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHGSURBVFiFxZe/TgJBEMZ/B/1paKSBhIIg2uEfNIZGOx8BE5PzDazRJzAxMT4IjVbaUUJNCL6AURNpSBQNa8GeHOfdunscxyTT7H3zzXe3uzNzCCHQdSAHdAER4l0gZ8KZwszOgLLieVlitM1UwHpMmMgCijFhphawz9tANWDdAgaE77/rA8AKiK8Cu3/WfaBTYCyJesA5kAH2gbZGctfbMiYjOXqeZ06gAGAFeAkg+/CIMvGxjPWvvwGZIAHXEZJE9dsZAUAJGCUo4BvY9Aq4TzC5648yN0cRCYZAS/owIsdxCtjDzAZMqp0thKgJIWqALdcGhlxbAGtAX1PxO5BX9Iq8xOhw9YGsG2gDTY0gJyy5R4SjwdOUXxB/cEMRNATSGgLSqM9EQ1UJC4rAlkHbbil4CvO049jNL6CuwFYsy0r/RygxFQVkNsfSDyGQZZnXELjQDPCKcPDcCCYn3zFI7volwKFhkPdazl2K3Te4i0gwjz94u2ER+Eww+Rew4R9IrhIUcBM0EdnAcwA47pHsFVgNK8V1FjuUjoCT0F4gReywmLH8ACgpx3KNKtfRENAx4TRtRk8xYX7NVEAvJszUDLcg9t/zH72YU/7LxNChAAAAAElFTkSuQmCC",alt:""}),"Settings"]})})]}),Object(p.jsx)(m,{friends:e.sidebar.friends})]})})),x=function(){return Object(p.jsx)("div",{children:"in progress..."})},C=function(){return Object(p.jsx)("div",{children:"in progress..."})},w=function(){return Object(p.jsx)("div",{children:"in progress..."})},S=n(17),N=n(41),U=n(3),B=n(8),E=n.n(B),P=n(13),I=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(U.a)(Object(U.a)({},e),r):e}))},y={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},z=function(e){return{type:"FOLLOW",userId:e}},F=function(e){return{type:"UNFOLLOW",userId:e}},R=function(e){return{type:"SET-USERS",users:e}},L=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},k=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},T=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},Y=function(){var e=Object(S.a)(E.a.mark((function e(t,n,r,a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(T(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(T(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),_=n(50),M=n.p+"static/media/user.b9b5b31c.png",D=n(134),G=n.n(D),V=function(e){var t=e.user,n=e.followed,r=e.followingInProgress,a=e.unfollow,c=e.follow;return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(A.b,{to:"/profile/"+t.id,children:Object(p.jsx)("img",{src:null!==t.photos.small?t.photos.small:M,alt:"userPhoto",className:G.a.userPhoto})})}),Object(p.jsx)("div",{children:n?Object(p.jsx)("button",{disabled:r.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(p.jsx)("button",{disabled:r.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Follow"})})]}),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:t.name}),Object(p.jsx)("div",{children:t.status}),Object(p.jsxs)("div",{children:["id: ",t.id]})]})})]},t.id)})},K=n(43),H=n(99),Z=n(72),Q=n.n(Z),X=n(135),J=n.n(X),q=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,c=e.onPageChanged,i=e.portionSize,s=void 0===i?15:i,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var d=Math.ceil(o/s),A=Object(r.useState)(1),f=Object(H.a)(A,2),j=f[0],b=f[1],g=(j-1)*s+1,h=j*s;return Object(p.jsxs)("div",{className:Q.a.paginator,children:[j>1&&Object(p.jsx)("button",{onClick:function(){b(j-1)},children:"PREV "}),u.filter((function(e){return e>=g&&e<=h})).map((function(e){return Object(p.jsx)("span",{className:J()(Object(K.a)({},Q.a.selectedPage,a===e),Q.a.circle),onClick:function(){c(e)},children:e},e)})),d>j&&Object(p.jsx)("button",{onClick:function(){b(j+1)},children:"NEXT"})]})},W=["currentPage","totalUsersCount","pageSize","onPageChanged","users"],$=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,c=e.users,i=Object(_.a)(e,W);return Object(p.jsxs)("div",{children:[Object(p.jsx)(q,{currentPage:t,onPageChanged:a,pageSize:r,totalItemsCount:n}),Object(p.jsx)("div",{children:c.map((function(e){return Object(p.jsx)(V,{user:e,followingInProgress:i.followingInProgress,followed:e.followed,unfollow:i.unfollow,follow:i.follow},e.id)}))})]})},ee=n(42),te=n(10),ne=n(139),re=Object(ne.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ae=function(e){return e.usersPage.pageSize},ce=function(e){return e.usersPage.totalUsersCount},ie=function(e){return e.usersPage.currentPage},se=function(e){return e.usersPage.isFetching},oe=function(e){return e.usersPage.followingInProgress},ue=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[this.props.isFetching?Object(p.jsx)(ee.a,{}):null,Object(p.jsx)($,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),le=Object(te.d)(Object(f.b)((function(e){return{users:re(e),pageSize:ae(e),totalUsersCount:ce(e),currentPage:ie(e),isFetching:se(e),followingInProgress:oe(e)}}),{follow:function(e){return function(){var t=Object(S.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Y(n,e,P.e.follow.bind(P.e),z);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(S.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Y(n,e,P.e.unfollow.bind(P.e),F);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUsers:R,setCurrentPage:L,toggleFollowingProgress:T,requestUsers:function(e,t){return function(){var n=Object(S.a)(E.a.mark((function n(r){var a;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(k(!0)),r(L(e)),n.next=4,P.e.getUsers(e,t);case 4:a=n.sent,r(k(!1)),r(R(a.items)),r({type:"SET-TOTAL-USERS-COUNT",count:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ue),de=n(73),Ae=n.n(de),fe=function(e){return Object(p.jsxs)("header",{className:Ae.a.header,children:[Object(p.jsx)("div",{className:Ae.a.logo,children:"BrightNet"}),Object(p.jsx)("div",{className:Ae.a.loginBlock,children:e.isAuth?Object(p.jsxs)("div",{children:[e.login," - ",Object(p.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(p.jsx)(A.b,{to:"/login",children:Object(p.jsx)("button",{children:"Login"})})})]})},je=n(32),be={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},ge=function(e,t,n,r){return{type:"bright-net/auth/SET-USER-DATA",payload:{id:e,login:t,email:n,isAuth:r}}},he=function(e){return{type:"bright-net/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},pe=function(){return function(){var e=Object(S.a)(E.a.mark((function e(t){var n,r,a,c,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.b.me();case 2:(n=e.sent).data.resultCode===P.a.Success&&(r=n.data.data,a=r.id,c=r.login,i=r.email,t(ge(a,c,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Oe=function(){return function(){var e=Object(S.a)(E.a.mark((function e(t){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.d.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(he(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},me=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)(fe,Object(U.a)({},this.props))}}]),n}(a.a.Component),ve=Object(f.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(S.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.b.logout();case 2:0===e.sent.data.resultCode&&t(ge(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(me),xe=n(130),Ce=n(27),we=n(67),Se=n(51),Ne=n.n(Se),Ue=Object(xe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=Object(f.c)((function(e){return e.auth.captchaUrl}));return Object(p.jsxs)("form",{onSubmit:t,children:[Object(Ce.c)("Email","email",[we.b],Ce.a),Object(Ce.c)("Password","password",[we.b],Ce.a,{type:"password"}),Object(Ce.c)(null,"rememberBe",[],Ce.a,{type:"checkbox"},"remember me"),r&&Object(p.jsx)("img",{src:r,alt:"captchaUrl"}),r&&Object(Ce.c)("Symbols from image","captcha",[we.b],Ce.a,{}),n&&Object(p.jsx)("div",{className:Ne.a.formSummaryError,children:n}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Login"})})]})})),Be=Object(f.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(S.a)(E.a.mark((function a(c){var i,s;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,P.b.login(e,t,n,r);case 2:(i=a.sent).data.resultCode===P.a.Success?c(pe()):(i.data.resultCode===P.a.CaptchaRequired&&c(Oe()),s=i.data.messages.length>0?i.data.messages[0]:"Some error",c(Object(je.a)("login",{_error:s})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(p.jsx)(d.a,{to:"/profile"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsx)(Ue,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)}})]})})),Ee={initialized:!1,globalError:null},Pe=n(98),Ie=n(129),ye=n(26),ze={friends:[{id:1,name:"Liza",avatar:ye.a},{id:2,name:"Masha",avatar:ye.a},{id:3,name:"Diana",avatar:ye.a}]},Fe=n(138),Re=n(131),Le=Object(te.c)({profilePage:Pe.d,dialogsPage:Ie.a,sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(U.a)(Object(U.a)({},e),{},{users:I(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(U.a)(Object(U.a)({},e),{},{users:I(e.users,t.userId,"id",{followed:!1})});case"SET-USERS":return Object(U.a)(Object(U.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(U.a)(Object(U.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(U.a)(Object(U.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE-IS-FETCHING":return Object(U.a)(Object(U.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWING-PROGRESS":return Object(U.a)(Object(U.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(N.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"bright-net/auth/GET_CAPTCHA_URL_SUCCESS":case"bright-net/auth/SET-USER-DATA":return Object(U.a)(Object(U.a)({},e),t.payload);default:return e}},form:Re.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;return"INITIALIZED-SUCCESS"===t.type?Object(U.a)(Object(U.a)({},e),{},{initialized:!0}):e}}),ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.d,Te=Object(te.e)(Le,ke(Object(te.a)(Fe.a)));function Ye(e){return function(t){return Object(p.jsx)(a.a.Suspense,{fallback:Object(p.jsx)(ee.a,{}),children:Object(p.jsx)(e,Object(U.a)({},t))})}}window.__store__=Te;var _e=a.a.lazy((function(){return n.e(4).then(n.bind(null,309)).then((function(e){return{default:e.DialogsContainer}}))})),Me=a.a.lazy((function(){return n.e(3).then(n.bind(null,308))})),De=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e){console.log("App catchAllUnhandledErrors: ","Some error occurred")},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(p.jsx)("div",{className:"back",children:Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(ve,{}),Object(p.jsx)(v,{}),Object(p.jsx)("div",{className:"app-wrapper-content",children:Object(p.jsxs)(d.d,{children:[Object(p.jsx)(d.b,{exact:!0,path:"/",render:function(){return Object(p.jsx)(d.a,{to:"/profile"})}}),Object(p.jsx)(d.b,{path:"/dialogs",render:Ye(_e)}),Object(p.jsx)(d.b,{path:"/profile/:userId?",render:Ye(Me)}),Object(p.jsx)(d.b,{path:"/news",render:function(){return Object(p.jsx)(x,{})}}),Object(p.jsx)(d.b,{path:"/music",render:function(){return Object(p.jsx)(C,{})}}),Object(p.jsx)(d.b,{path:"/settings",render:function(){return Object(p.jsx)(w,{})}}),Object(p.jsx)(d.b,{path:"/users",render:function(){return Object(p.jsx)(le,{})}}),Object(p.jsx)(d.b,{path:"/login",render:function(){return Object(p.jsx)(Be,{})}}),Object(p.jsx)(d.b,{path:"*",render:function(){return Object(p.jsx)("div",{children:"404 NOT FOUND"})}})]})})]})}):Object(p.jsx)(ee.a,{})}}]),n}(a.a.Component),Ge=Object(te.d)(d.g,Object(f.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(pe());Promise.all([t]).then((function(){e({type:"INITIALIZED-SUCCESS"})}))}}}))(De),Ve=function(){return Object(p.jsx)(A.a,{children:Object(p.jsx)(f.a,{store:Te,children:Object(p.jsx)(Ge,{})})})};i.a.render(Object(p.jsx)(Ve,{}),document.getElementById("root"))},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n.p+"static/media/preloader.18b68e50.svg",a=(n(1),n(0)),c=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r,alt:"preloader"})})}},51:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3UvcA",error:"FormsControls_error__pMn5z",formSummaryError:"FormsControls_formSummaryError__2V0IU",rememberMe:"FormsControls_rememberMe__eDfcu"}},67:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},72:function(e,t,n){e.exports={paginator:"Paginator_paginator__3-qcO",circle:"Paginator_circle__3N3cm",selectedPage:"Paginator_selectedPage__1_2AI"}},73:function(e,t,n){e.exports={header:"Header_header__12eqk",logo:"Header_logo__hRpMc",loginBlock:"Header_loginBlock__3Jnje"}},93:function(e,t,n){e.exports={friendContainer:"FriendsItem_friendContainer__26NJm",avatar:"FriendsItem_avatar__3YGhc"}},98:function(e,t,n){"use strict";n.d(t,"d",(function(){return h})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return v})),n.d(t,"g",(function(){return x})),n.d(t,"e",(function(){return C})),n.d(t,"f",(function(){return w}));var r=n(43),a=n(17),c=n(41),i=n(3),s=n(8),o=n.n(s),u=n(13),l=n(32),d="ADD-POST",A="SET-USER-PROFILE",f="SET-STATUS",j="DELETE-POST",b="SAVE_PHOTO_SUCCESS",g={posts:[{id:1,message:"I will be React Developer!",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Bugaga",likesCount:5},{id:4,message:"Dada",likesCount:1}],profile:{},status:"",newPostText:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var n={id:(new Date).getTime(),message:t.newPostBody,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case A:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case f:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case j:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case b:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}},p=function(e){return{type:d,newPostBody:e}},O=function(e){return{type:f,status:e}},m=function(e){return function(){var t=Object(a.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.e.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:A,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(a.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(a.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.c.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(O(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(a.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n((a=r.data.photos,{type:b,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(a.a)(o.a.mark((function t(n,a){var c,i,s,d,A,f;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.id,t.next=3,u.c.saveProfile(e);case 3:if(0!==(i=t.sent).data.resultCode){t.next=8;break}n(m(c)),t.next=14;break;case 8:return s=i.data.messages[0],d=s.indexOf(">"),A=s.indexOf(")"),f=s.slice(d+1,A).toLowerCase(),n(Object(l.a)("edit-profile",{contacts:Object(r.a)({},f,s)})),t.abrupt("return",Promise.reject(i.data.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}},[[300,1,2]]]);
//# sourceMappingURL=main.8a4b81d6.chunk.js.map